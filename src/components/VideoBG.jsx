import backgroundVideo from "../assets/bg.webm";

export default function VideoBG() {
  return (
    <div className="videoBG">
      <video autoPlay loop muted playsInline>
        <source src={backgroundVideo} type="video/webm" />
      </video>
    </div>
  );
}
