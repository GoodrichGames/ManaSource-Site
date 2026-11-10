import { useEffect, useRef, useState } from 'react';
import Phaser from "./PhaserBuild";
import MainMenu, { CAVE_ART_KEY, CAVE_READY_EVENT } from "./MainMenu";
import { default as EC } from "./EngineConstants";

export default function LandingAnimation() {
  const gameRef = useRef();
  const containerRef = useRef();
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    if (!containerRef.current) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    let isUnmounted = false;
    let visibilityObserver = null;

    const handleReady = () => {
      setIsReady(true);
    };

    const handleResize = () => {
      if (gameRef.current && containerRef.current) {
        const w = containerRef.current.clientWidth;
        const h = containerRef.current.clientHeight;
        gameRef.current.scale.resize(w, h);
      }
    };

    const loadHeroArt = async () => {
      const hero = document.querySelector('img[data-cave-art]');
      if (!hero) return null;
      try {
        await hero.decode();
        const art = new Image();
        art.src = hero.currentSrc;
        await art.decode();
        return art;
      } catch {
        return null;
      }
    };

    const startGame = (heroArt) => {
      if (isUnmounted || !containerRef.current) return;

      const config = {
        type: Phaser.AUTO,
        scale: {
          mode: Phaser.Scale.RESIZE,
          autoCenter: Phaser.Scale.CENTER_BOTH,
          width: EC.canvasW,
          height: EC.canvasH,
        },
        input: {
          mouse: {
            preventDefaultWheel: false
          }
        },
        scene: [MainMenu],
        parent: containerRef.current,
        transparent: true,
        plugins: {
          global: []
        },
        callbacks: {
          preBoot: (game) => game.registry.set(CAVE_ART_KEY, heroArt),
        },
      };

      const game = new Phaser.Game(config);
      gameRef.current = game;

      game.events.once(CAVE_READY_EVENT, handleReady);

      visibilityObserver = new IntersectionObserver(([entry]) => {
        if (entry.isIntersecting) {
          game.loop.wake();
        } else {
          game.loop.sleep();
        }
      });
      visibilityObserver.observe(containerRef.current);

      window.addEventListener('resize', handleResize);
      handleResize();
    };

    loadHeroArt().then(startGame);

    // Cleanup: destroy Phaser game when component unmounts
    return () => {
      isUnmounted = true;
      window.removeEventListener('resize', handleResize);
      visibilityObserver?.disconnect();
      if (gameRef.current) {
        gameRef.current.events.off(CAVE_READY_EVENT, handleReady);
        gameRef.current.destroy(true);
        gameRef.current = null;
      }
    };
  }, []);

  return (
    <div
      ref={containerRef}
      style={{
        position: "absolute",
        left: 0,
        width: "100%",
        height: "100vh",
        overflow: "hidden",
        zIndex: 1,
        visibility: isReady ? 'visible' : 'hidden',
        opacity: isReady ? 1 : 0,
        transition: 'opacity 0.6s ease-in',
      }}
    />
  );
}
