# Discord-openai_chatbot
Discord Chatbot using OpenAI GPT-3
This code is a simple Discord chatbot that uses the OpenAI GPT-3 API to generate responses to user messages. The chatbot is built using the Discord.js library, and it responds to messages that mention the bot's username.

Installation
Clone the repository using git clone <repository-url>
Install the required dependencies using npm install
Usage
Create a .env file in the root directory of the project and add your OpenAI API key and Discord bot token as follows:
makefile
Copy code
OPENAI_API_KEY=<your-api-key>
BOT_TOKEN=<your-bot-token>
Run the code using node index.js
Invite the bot to your Discord server and start chatting with it!
How it works
The chatbot listens for messages in the Discord server, and it responds to messages that mention the bot's username. When the bot is mentioned, the message content is appended to a prompt string, and the prompt string is passed to the OpenAI GPT-3 API using the openai.createCompletion() method. The GPT-3 API generates a response to the prompt, which is then sent back to the Discord server as a message reply.

The chatbot is designed to respond as a character named Bradius Pitius, who has a defined personality and background. The chatbot is programmed to only respond to questions, and it follows certain rules for how it should respond. The rules are defined in the prompt string at the beginning of the code.

Credits
This code was written by [your name or username]. It is based on the Discord.js library and the OpenAI GPT-3 API.
