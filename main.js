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