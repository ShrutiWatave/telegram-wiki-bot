# Telegram Wiki Bot

This is a script to run a Telegram bot that fetches a random Wikipedia article and posts its title and summary to a Telegram group when triggered by a command.

## Features

- Fetches a random Wikipedia article using the Wikipedia REST API.
- Posts the article's title and summary to a Telegram group.
- Responds to the `/wikiarticle` command.

## Prerequisites

- Node.js installed on the system.
- A Telegram bot token from BotFather(Telegram).
- The bot added to your Telegram group.

## Libraries

- axios - For making HTTP requests and handling responses
- node-telegram-bot-api - For creating Telegram bot with Nodejs

## Usage

- Run the script using the 'node index.js' command.
- Go to the telegram group and type `/wikiarticle` in the chat.
- A random wikipedia article will be fetched and sent as a chat message.

