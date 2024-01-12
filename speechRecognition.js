window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

if (window.SpeechRecognition) {
    // Initialize the SpeechRecognition object
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
} else if (annyang) {
    // Setup for annyang
    var commands = {
        '*text': function(text) {
            document.getElementById('searchInput').value = text;
        }
    };
    annyang.addCommands(commands);
    annyang.start({ autoRestart: true, continuous: false });

    document.getElementById('voiceSearchButton').addEventListener('click', function() {
        annyang.isListening() ? annyang.pause() : annyang.resume();
    });
} else {
    console.error("Speech recognition is not supported");
    // Optionally, disable the voice search button if not supported
    document.getElementById('voiceSearchButton').disabled = true;
}
