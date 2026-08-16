# 🚀 KC16 Slack Bot

A fully-featured, persistent Slack bot built with Node.js and the Slack Bolt framework. Deployed 24/7 on a Hack Club Nest Linux container.

This project was built as part of the **Hack Club Stardance** challenge. It utilizes external APIs via Axios to fetch real-time data and handles custom logic for 10 unique slash commands.

---

## 🛠️ Tech Stack
* **Language:** JavaScript (Node.js)
* **Framework:** `@slack/bolt` (Socket Mode)
* **HTTP Client:** `axios` (for API fetching)
* **Infrastructure:** Hosted on [Hack Club Nest](https://nest.hackclub.com/) (Debian Linux)
* **Process Management:** `systemd` (runs as a 24/7 background service)

---

## ⚡ Features & Commands

KC16 is equipped with 10 slash commands that range from utility and API integrations to custom project references.

| Command | Action / Description |
| :--- | :--- |
| `/kc16-ping` | Checks bot latency and server status. |
| `/kc16-help` | Displays a list of all available commands for the bot. |
| `/kc16-catfact` | Retrieves and displays a random interesting cat fact. |
| `/kc16-joke` | Fetches and delivers a random two-part joke. |
| `/kc16-cybernetics` | Loads quick reference notes for the AI & Robotics presentation. |
| `/kc16-soccer` | Delivers a random soccer or football trivia fact. |
| `/kc16-8ball` | Ask the Magic 8-Ball a yes/no question. |
| `/kc16-dog` | Fetches a random dog photo from the Dog API. |
| `/kc16-roll` | Rolls a standard 6-sided die using Math logic. |

---

## 💻 Local Development Setup

Want to run this bot locally? Follow these steps:

### 1. Clone the repository
```bash
git clone [https://github.com/Kxrtik13-A19/KC16.git](https://github.com/Kxrtik13-A19/KC16.git)
cd KC16
