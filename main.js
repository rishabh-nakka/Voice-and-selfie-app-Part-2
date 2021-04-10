var speech_recognition=window.webkitSpeechRecognition;
var recognition=new speech_recognition();
function record_voice(){
    document.getElementById("textbox").innerHTML="";
    recognition.start();
}
recognition.onresult=function run (event){
    console.log(event);
    var content=event.results[0][0].transcript;
    console.log(content);
    document.getElementById("textbox").innerHTML=content;
    speak()
      Webcam.attach( '#camera' );
    }
function speak(){
    var sim=window.speechSynthesis;
    var speak_data=document.getElementById("textbox").value;
    var utter_this=new SpeechSynthesisUtterance(speak_data);
    sim.speak(utter_this); 
}
Webcam.set({
    width: 320,
    height: 240,
    image_format: 'png',
    png_quality: 90
  });
