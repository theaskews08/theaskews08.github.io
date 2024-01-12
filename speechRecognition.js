window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

if (window.SpeechRecognition) {
    const recognition = new SpeechRecognition();
    recognition.lang = 'en-US';
    recognition.interimResults = false;

    recognition.onresult = function(event) {
        var transcript = event.results[0][0].transcript;
        document.getElementById('searchInput').value = transcript;
        console.log('Transcript: ', transcript);
    };

    document.getElementById('voiceSearchButton').addEventListener('click', function() {
        recognition.start();
    });
} else {
    console.error("Your browser does not support the Web Speech API");
    // Optionally, disable the voice search button if not supported
    document.getElementById('voiceSearchButton').disabled = true;
}
