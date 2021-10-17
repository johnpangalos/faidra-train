import train from "./train.jpg";
function play() {
  var audio = new Audio(
    "https://www.free-sounds.net/sound-files/train-sounds/TRAIN07.WAV"
  );
  audio.play();
}
export function App() {
  return (
    <main>
      <button onClick={play}>Train</button>
      <img src={train} />
    </main>
  );
}
