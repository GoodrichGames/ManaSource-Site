import YouTube from "react-youtube";
import { useConsent } from '../../Structural/Consent/ConsentProvider';
import consentStyles from '../../Structural/Consent/ConsentProvider.module.scss';

const YoutubeEmbed = ({videoId, height, width, isAutoplay, frameborder, controls, mute, showinfo}) => {
  const { isResolved, optionalContentAllowed, openPrivacyChoices } = useConsent();
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
    if (!isAutoplay) {
      event.target.pauseVideo();
    }
  }

  if (!optionalContentAllowed) {
    return (
      <div className={consentStyles.videoPlaceholder} style={{ width: width ? `${width}px` : '100%' }}>
        <p>{isResolved ? 'This YouTube video is blocked by your privacy choice.' : 'Checking your privacy choices…'}</p>
        {isResolved && (
          <button onClick={openPrivacyChoices} type="button">Change privacy choices</button>
        )}
      </div>
    );
  }

  return (
    <YouTube videoId={videoId} opts={opts} onReady={determineAutoplay} />
  )
}

export default YoutubeEmbed;
