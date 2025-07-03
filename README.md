# ChairSyncAI 🧠📅

ChairSyncAI is an AI-powered meeting coordination and scheduling tool designed to automate the process of booking meetings, assigning chairpersons, and managing participant availability. It improves productivity and eliminates the hassle of back-and-forth communication when organizing meetings.

---

## 🚀 Features

- 🤖 AI-powered chairperson assignment
- 📅 Smart conflict-free appointment booking
- 🔄 Automatic syncing with participant availability
- 🔔 SMS/email reminders for upcoming meetings
- 🔐 Secure handling of sensitive data (via `.env`)
- 📊 Scalable architecture using Node.js, Express, and MongoDB

---

## 🛠️ Tech Stack

- **Frontend:** React.js
- **Backend:** Node.js, Express
- **Database:** MongoDB
- **APIs:** Twilio (SMS), SendGrid (Email), Stripe (optional)
- **Environment Management:** dotenv
- **Version Control:** Git & GitHub

---

## 🧪 Local Setup Instructions

1. **Clone the Repository**
   ```bash
   git clone https://github.com/your-username/ChairSyncAI.git
   cd ChairSyncAI
Install Dependencies

bash
Copy
Edit
npm install
Configure Environment Variables

Create a .env file in the root directory

Add your API keys:

ini
Copy
Edit
SENDGRID_API_KEY=your_key
TWILIO_ACCOUNT_SID=your_sid
TWILIO_AUTH_TOKEN=your_token
STRIPE_SECRET_KEY=your_key
Run the Project

bash
Copy
Edit
npm start
Access the App
Open your browser at http://localhost:3000

📁 Project Structure
bash
Copy
Edit
ChairSyncAI/
├── client/              # React frontend
├── server/              # Node.js + Express backend
│   ├── models/          # MongoDB schemas
│   ├── routes/          # API endpoints
│   └── utils/           # Helper functions
├── .env                 # Environment variables (not committed)
├── .gitignore
└── README.md

⚠️ Security
All secrets must be stored in a .env file.

Do not hardcode API keys or credentials.

.env is already added to .gitignore. 

📌 License
This project is licensed under the MIT License.

📬 Contact
For queries or collaboration, contact:
📧 shivansh.chairsync@gmail.com
🔗 GitHub Profile
