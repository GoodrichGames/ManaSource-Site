import { useEffect, useRef, useState } from 'react';
import Phaser from "phaser";
import MainMenu, { CAVE_READY_EVENT } from "./MainMenu";
import { default as EC } from "./EngineConstants";

export default function LandingAnimation() {
  const gameRef = useRef();
  const containerRef = useRef();
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    if (!containerRef.current) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

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
      }
    };

    const game = new Phaser.Game(config);
    gameRef.current = game;

    const handleReady = () => {
      setIsReady(true);
    };

    game.events.once(CAVE_READY_EVENT, handleReady);

    const visibilityObserver = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        game.loop.wake();
      } else {
        game.loop.sleep();
      }
    });
    visibilityObserver.observe(containerRef.current);

    const handleResize = () => {
      if (gameRef.current && containerRef.current) {
        const w = containerRef.current.clientWidth;
        const h = containerRef.current.clientHeight;
        gameRef.current.scale.resize(w, h);
      }
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    // Cleanup: destroy Phaser game when component unmounts
    return () => {
      window.removeEventListener('resize', handleResize);
      visibilityObserver.disconnect();
      game.events.off(CAVE_READY_EVENT, handleReady);
      if (gameRef.current) {
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
