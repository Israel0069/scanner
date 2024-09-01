function domReady(fn) {
    if (
        document.readyState === "complete" ||
        document.readyState === "interactive"
    ) {
        setTimeout(fn, 1000);
    } else {
        document.addEventListener("DOMContentLoaded", fn);
    }
}

domReady(function () {

    // If QR code is successfully scanned
    function onScanSuccess(decodedText, decodedResult) {
        // Display QR code data using alert
        alert("QR Code Data: " + decodedText + "\nResult: " + decodedResult);
    }

    let htmlScanner = new Html5QrcodeScanner(
        "my-qr-reader",
        { fps: 10, qrbox: 250 } // Corrected "qrbos" to "qrbox"
    );
    htmlScanner.render(onScanSuccess);
});
