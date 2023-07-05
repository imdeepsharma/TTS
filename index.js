const fs = require('fs');
const util = require('util');
const textToSpeech = require('@google-cloud/text-to-speech');

// Configure your Google Cloud project ID and JSON key file path
const projectId = 'your-project-id';
const keyFilename = 'path/to/your/keyfile.json';

// Create a new client
const client = new textToSpeech.TextToSpeechClient({ projectId, keyFilename });

// Function to synthesize text to speech
async function synthesizeText(text, outputFile) {
  const request = {
    input: { text },
    voice: { languageCode: 'en-US', ssmlGender: 'NEUTRAL' },
    audioConfig: { audioEncoding: 'MP3' },
  };

  try {
    const [response] = await client.synthesizeSpeech(request);
    const writeFile = util.promisify(fs.writeFile);
    await writeFile(outputFile, response.audioContent, 'binary');
    console.log(`Audio content written to file: ${outputFile}`);
  } catch (error) {
    console.error('Error:', error);
  }
}

// Usage example
const text = 'Hello, how are you today?';
const outputFile = 'output.mp3';
synthesizeText(text, outputFile);
