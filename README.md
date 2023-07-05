# Text-to-Speech App with Google Cloud API and Docker

This is a simple Node.js application that utilizes the Google Cloud Text-to-Speech API to convert text into speech. 
The application prompts the user for input text, synthesizes it into speech using the API, and saves the resulting audio file.

## Prerequisites

Before running this application, make sure you have the following prerequisites:

- Node.js (version 14 or higher) installed on your machine.
- A Google Cloud project with the Text-to-Speech API enabled.
- A JSON key file for authenticating the API requests.

## Getting Started

Follow the steps below to set up and run the application:

1. Clone this repository to your local machine or download the source code.

2. Install the project dependencies by running the following command in the project directory:

   ```shell
   npm install

Then

1) Configure the Google Cloud project ID and the path to your JSON key file in index.js:
// Configure your Google Cloud project ID and JSON key file path
const projectId = 'your-project-id';
const keyFilename = 'path/to/your/keyfile.json';


2) Build the Docker image by running the following command in the project directory
docker build -t text-to-speech-app .

3) Run the Docker container with the following command
docker run -it text-to-speech-app

4) Follow the prompts to enter the text to be synthesized and the desired output file path
5) Once you provide the input, the application will use the Google Cloud Text-to-Speech
   API to synthesize the text into speech and save the audio file at the specified location
