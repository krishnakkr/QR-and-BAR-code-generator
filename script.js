let imgBox = document.getElementById("imgBox");
let imgBox1 = document.getElementById("imgBox1");
let qrImage = document.getElementById("qrImage");
let qrImage1 = document.getElementById("qrImage1");
let qrText = document.getElementById("qrText");
let qrText1 = document.getElementById("qrText1");
function GenerateQR() {
    if (qrText.value.length > 0) {
        qrImage.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + qrText.value;
        imgBox.classList.add("show-img");

    } else {
        qrText.classList.add('error');
        setTimeout(() => {
            qrText.classList.remove('error');
        }, 1000);
    }
}
function GenerateBar() {
    if (qrText1.value.length > 0) {
        qrImage1.src = "https://barcodeapi.org/api/auto/" + qrText1.value;
        imgBox1.classList.add("show-img");

    } else {
        qrText1.classList.add('error');
        setTimeout(() => {
            qrText1.classList.remove('error');
        }, 1000);
    }
}
