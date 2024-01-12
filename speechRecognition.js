// Check if the browser supports the Web Speech API
window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

if (window.SpeechRecognition) {
    console.log("Your browser supports the Web Speech API");

    // Initialize the SpeechRecognition object
    const recognition = new SpeechRecognition();
    recognition.lang = 'en-US'; // Set the language of the recognition
    recognition.interimResults = false; // Whether interim results should be returned

    recognition.onstart = function() {
        console.log('Voice recognition started. Speak into the microphone.');
    };

    recognition.onspeechend = function() {
        recognition.stop();
    };

    recognition.onresult = function(event) {
        var transcript = event.results[0][0].transcript;
        console.log('Transcript: ', transcript);
        // You can process the transcript as needed
    };

    // Start the speech recognition
    recognition.start();
} else {
    console.error("Your browser does not support the Web Speech API");
    // Inform the user or handle the lack of support gracefully
}
