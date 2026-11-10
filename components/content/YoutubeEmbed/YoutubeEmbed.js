import { useEffect, useRef, useState } from 'react';
import YouTube from "react-youtube";
import ExportedImage from "next-image-export-optimizer";
import { useConsent } from '../../Structural/Consent/ConsentProvider';
import consentStyles from '../../Structural/Consent/ConsentProvider.module.scss';
import styles from './YoutubeEmbed.module.scss';

const YoutubeEmbed = ({videoId, height, width, isAutoplay, frameborder, controls, mute, showinfo, coverImage, coverLabel = "Play video"}) => {
  const { isResolved, optionalContentAllowed, openPrivacyChoices, optionalContentInView } = useConsent();
  const wantsPlay = useRef(false);
  const viewRef = useRef(null);
  const [isCovered, setIsCovered] = useState(Boolean(coverImage));

  useEffect(() => {
    if (optionalContentAllowed || !viewRef.current) return;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) optionalContentInView();
    });
    observer.observe(viewRef.current);
    return () => observer.disconnect();
  }, [optionalContentAllowed, optionalContentInView, isCovered]);

  const opts = {
    height: height,
    width: width,
    playerVars: {
      autoplay: isAutoplay ? 1 : 0,
      frameborder: frameborder ? 1 : 0,
      controls: controls ? 1 : 0,
      mute: mute ? 1 : 0,
      showinfo: showinfo ? 1 : 0,
      allowFullScreen: 1,
      // rel: 0,
      // enablejsapi: 1,
      // loop: 1,
      wmode: 'transparent',
      widgetid: 1,
      iv_load_policy: 3,
      disablekb: 0,
    },
  };

  const determineAutoplay = (event) => {
    if (wantsPlay.current) {
      event.target.playVideo();
    } else if (!isAutoplay) {
      event.target.pauseVideo();
    }
  }

  const placeholder = (
    <div ref={viewRef} className={consentStyles.videoPlaceholder} style={{ width: width ? `${width}px` : '100%' }}>
      <p>{isResolved ? 'This YouTube video is blocked by your privacy choice.' : 'Checking your privacy choices…'}</p>
      {isResolved && (
        <button onClick={openPrivacyChoices} type="button">Change privacy choices</button>
      )}
    </div>
  );

  if (!coverImage) {
    if (!optionalContentAllowed) return placeholder;
    return (
      <YouTube videoId={videoId} opts={opts} onReady={determineAutoplay} />
    )
  }

  const play = () => {
    wantsPlay.current = true;
    setIsCovered(false);
  };

  if (!isCovered && !optionalContentAllowed) return placeholder;

  return (
    <div ref={viewRef} className={styles.frame} style={{ maxWidth: width ? `${width}px` : undefined }}>
      {!isCovered && (
        <YouTube videoId={videoId} opts={opts} onReady={determineAutoplay} className={styles.player} iframeClassName={styles.player} />
      )}
      {isCovered && (
        <div className={styles.cover} onClick={play}>
          <ExportedImage src={coverImage} alt="" fill sizes="(max-width: 900px) 100vw, 900px" className={styles.coverArt} />
          <button type="button" className={styles.play} onClick={play}>
            <span className={styles.playIcon} aria-hidden="true" />
            {coverLabel}
          </button>
        </div>
      )}
    </div>
  );
}

export default YoutubeEmbed;
