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

    // If found your QR code
    function onScanSuccess(decodeText, decodeResult) {
        // Display the QR code text in the input field
        document.getElementById('qr-result').value = decodeText;

        // Alert with the QR code text
        alert("Your QR code is: " + decodeText);
    }

    let htmlscanner = new Html5QrcodeScanner(
        "my-qr-reader",
        { fps: 10, qrbox: 250 }
    );
    htmlscanner.render(onScanSuccess);

    // Copy to Clipboard button functionality
    document.getElementById('copy-to-clipboard').addEventListener('click', function() {
        let qrResult = document.getElementById('qr-result');
        qrResult.select();
        qrResult.setSelectionRange(0, 99999); // For mobile devices

        navigator.clipboard.writeText(qrResult.value).then(function() {
            alert('QR code text copied to clipboard!');
        }, function(err) {
            alert('Failed to copy QR code text: ', err);
        });
    });
});
