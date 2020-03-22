export let audio = null;
export function startPlay() {
  audio = new Audio("../src/hw10-Events/audio/wonder-woman.mp3");
  audio.play();
}
