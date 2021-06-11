import VideoDetails from "./VideoDetails";

function VideoContainer(props) {
  return (
    <div>
      <iframe
        width="919"
        height="525"
        src={props.embedUrl}
        frameborder="0"
        allowfullscreen
        title={props.title}
      />
      <VideoDetails {...props}/>
    </div>
  );
}
export default VideoContainer;