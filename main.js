Webcam.set({
    width:300,
    height:300,
    image_format:"jpeg",
    image_quality:90,
    constraints:{
        facingMode:"environment"
    }

})

Webcam.attach("#camera")

function capture(){
    
    Webcam.snap(function(selfie){
        document.getElementById("Snapshot").innerHTML=`<img id="capture_image" src=${selfie}>`
    })
    
}
console.log(ml5.version)
classifier=ml5.imageClassifier("MobileNet",ModelLoaded)

function ModelLoaded(){
    console.log("model has been loaded")
}

function identify(){

     var image=document.getElementById("capture_image")
     classifier.classify(image,getresults)


}

function getresults(error,results){

    if(error){
        console.log(error)
    }

    else{
        console.log(results)
        document.getElementById("output").innerHTML=results[0].label
    }
    
    

}