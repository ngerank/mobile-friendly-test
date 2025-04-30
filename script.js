function analyzeMobile() {
    const url = document.getElementById('urlInput').value.trim();
    const frame = document.getElementById('mobileFrame');
    const statusMessage = document.getElementById('statusMessage');

    if (!url) {
        alert('Please enter a URL.');
        return;
    }

    frame.src = url;
    document.getElementById('outputSection').style.display = 'block';

    frame.onload = function() {
        statusMessage.innerText = 'Page loaded successfully.';
        statusMessage.style.color = '#00FF00';
    };

    frame.onerror = function() {
        statusMessage.innerText = 'Failed to load page. Please check the URL.';
        statusMessage.style.color = '#FF0000';
    };
}