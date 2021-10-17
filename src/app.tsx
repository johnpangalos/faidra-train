function play() {
  var audio = new Audio(
    "https://www.free-sounds.net/sound-files/train-sounds/TRAIN07.WAV"
  );
  audio.play();
}
export function App() {
  return (
    <>
      <button onClick={play}>Train</button>
    </>
  );
}
