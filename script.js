function qrGenerator() {
    let imgBox = document.getElementById("imgBox");
    let qrImage = document.getElementById("qrImg");
    let qrText = document.getElementById("qrText");

    if(qrText.value.length > 0){

        qrImage.src = "https://quickchart.io/qr?text=" + qrText.value;
        imgBox.classList.add("show-img");
    }
else{
    qrText.classList.add('error');
    setTimeout(()=>{
        qrText.classList.remove('error');
    },1000);
}

}


