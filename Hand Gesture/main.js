Webcam.set({
    width: 350,
    height: 300,
    image_format: "png",
    png_quality: 180
})

const cameraEl = document.querySelector("#live-camera");
const capturedImage = document.querySelector("#captured-image");
Webcam.attach(cameraEl)
const takeScreenShot = () =>{
    Webcam.snap(dataURL =>{
        document.querySelector("#result").innerHTML = `<img src=${dataURL} id=""captured-image />`    
    })
}
classifier = ml5.imageClassify("https://teachablemachine.withgoogle.com/models/T4a6W7oUF", () =>{
    console.log("Loaded")
})

const check = () =>{
    classifier.classify(capturedImage, gotResult)
}

let toSpeak = ""

const gotResult = (error, result) =>{
    if(error){
        console.log(error)
    }else{
        gesture = result[0].label;
        toSpeak = gesture;
        speak();
    }
} 

const speak = () =>{
    const synth = window.speechSynthesis;

    speakData = toSpeak;

    let utterThis = new SpeechSynthesisUtterance(speakData);

    synth.speak(utterThis);
}