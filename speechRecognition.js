// Corrected the typo and check for SpeechRecognition availability
window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

if (window.SpeechRecognition) {
    // Initialize the SpeechRecognition object
    const recognition = new SpeechRecognition();
    recognition.lang = 'en-US';
    recognition.interimResults = false;

    // Event when the SpeechRecognition successfully returns a result
    recognition.onresult = function(event) {
        var transcript = event.results[0][0].transcript;
        document.getElementById('searchInput').value = transcript;
        console.log('Transcript: ', transcript);
    };

    // Handling the start, error, and end of speech recognition
    recognition.onstart = function() {
        console.log('Voice recognition started. Speak into the microphone.');
    };
    recognition.onerror = function(event) {
        console.error('Voice recognition error:', event.error);
    };
    recognition.onend = function() {
        console.log('Voice recognition ended.');
    };

    // Start the speech recognition when the button is clicked
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

    // Toggle annyang listening when the button is clicked
    document.getElementById('voiceSearchButton').addEventListener('click', function() {
        annyang.isListening() ? annyang.pause() : annyang.resume();
    });
} else {
    console.error("Speech recognition is not supported");
    // Optionally, disable the voice search button if not supported
    document.getElementById('voiceSearchButton').disabled = true;

    // Provide user-friendly feedback
    alert('Speech recognition is not supported in this browser.');
}
