const sounds = ["ah", "ee", "mm", "oo", "sh", "ss"];

function generateSound() { 
let generatedSound = sounds[Math.floor(Math.random() * sounds.length)];
generatedSound.play();
}
