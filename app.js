var thunder=document.getElementById("thunder");
var interactive=document.getElementById("interactive")
const chorus = new Tone.Chorus(4,2.5,0.5).toDestination().start();
const synth = new Tone.Synth().toDestination();
const duoSynth = new Tone.DuoSynth().toDestination();
const polysynth = new Tone.PolySynth().toDestination();



document.body.addEventListener('keydown', (event)=>{
  if(event.key == 'f'){
    synth.triggerAttackRelease("D5", "8n");
    document.body.style.backgroundColor = "orange";
  }
  else if(event.key == 'g')
  {
    synth.triggerAttackRelease("B4", "4n");
    document.body.style.backgroundColor = "aqua"
  }
  else if(event.key == 'h')
  {
    synth.triggerAttackRelease("G4", "8n");
    document.body.style.backgroundColor = "black"
  }
  else if(event.key == 'a')
  {
    synth.triggerAttackRelease("D2","4n");
    document.body.style.backgroundColor = "magenta"
  }
});

document.body.addEventListener('keydown', (event)=> {
  if(event.key == 'b'){
    duoSynth.triggerAttackRelease("A3","2n");
    document.body.style.backgroundColor="purple"
  }
  else if(event.key == 'c')
  {
    duoSynth.triggerAttackRelease("C4","2n");
    document.body.style.backgroundColor="blue"
  }
  else if(event.key == 'v')
  {
    duoSynth.triggerAttackRelease("D2","4n");
    document.body.style.backgroundColor="white"
  }
});

var color = "green"
intro.addEventListener('click',() => {
  intro.style.display = "none";
})



interactive.addEventListener('mouseenter', () => {
  thunder.play();
  document.body.style.backgroundColor = "red";
});


interactive.addEventListener('mouseleave', () => {
  thunder.pause();
  document.body.style.backgroundColor = "grey";
});

thunder.addEventListener('timeupdate', ()=> {
  console.log("updated:",event.target.currentTime);
  if(event.target.currentTime > 3.0)
  {
    color="green"
  }
  else{
    color="salmon";
  }
})
