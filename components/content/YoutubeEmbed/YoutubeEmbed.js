import YouTube from "react-youtube";

const YoutubeEmbed = ({videoId, height, width, isAutoplay, frameborder, controls, mute, showinfo}) => {
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
      disablekb: 1,
    },
  };

  const determineAutoplay = (event) => {
    if (!isAutoplay) {
      event.target.pauseVideo();
    }
  }
  return (
    <YouTube videoId={videoId} opts={opts} onReady={determineAutoplay} />
  )
}

export default YoutubeEmbed;
