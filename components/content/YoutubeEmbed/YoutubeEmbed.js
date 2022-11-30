import YouTube from "react-youtube";

const YoutubeEmbed = ({videoId, height, width, isAutoplay}) => {
  const opts = {
    height: height,
    width: width,
    playerVars: {
      autoplay: isAutoplay ? 1 : 0,
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
