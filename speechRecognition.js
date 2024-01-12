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
    if (annyang) {
    // Define the function to be called when speech is detected
    var commands = {
        '*text': function(text) {
            document.getElementById('searchInput').value = text;
        }
    };
    annyang.addCommands(commands);

    // Start listening
    annyang.start({ autoRestart: true, continuous: false });

    // Optionally, add a UI element to start/stop listening
    document.getElementById('voiceSearchButton').addEventListener('click', function() {
        annyang.isListening() ? annyang.pause() : annyang.resume();
    });
} else {
    console.error("Speech recognition is not supported");
    // Handle the unsupported case
}

}
