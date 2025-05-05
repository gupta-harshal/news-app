# News Generating App

### The Backend response time might be slow as it is deployed on a free service called rendered wheras the frontend is deployed on vercel.

In this appliacation my approach is to send the content from the json file to the backend and that will send it to the gemini-model to generate a summary of 50 words as i have sent it in the respone.
The color palette of the website is picked from the colorhunt website and the UI is made by me. I have structured the code in such a way that further adaptions to the application can me made easily according to the demands of the user or the company.

## Features

- **View News Articles:** Displays a list of news articles fetched from a backend API.
- **Generate Summary:** Each article has a "Summary" button that triggers an AI-based summarization process.
- **AI-Powered Summarization:** Using Google's Generative AI, the app generates a summary of the article content in less than 50 words.
- **Frontend (React):** The frontend is built with React and Recoil for state management, providing a dynamic and interactive user experience.
- **Backend (Express):** The backend is built with Express.js and connects to Google's Generative AI API for article summarization.

## Tech Stack

### Frontend:
- **React**: For building the UI components.
- **Recoil**: For state management across components.
- **Axios**: For handling API requests to the backend.
- **Tailwind CSS**: For styling the UI.


### Backend:
- **Node.js**: JavaScript runtime for the backend server.
- **Express**: Web framework for building the backend API.
- **Google Generative AI API**: For summarizing the article content using AI.
- **Dotenv**: For managing environment variables securely.

## Installation

### Prerequisites:
- Node.js installed on your machine.
- Git installed on your machine.

### Steps to Run Locally:

#### Backend Setup:

1. **Clone the repository:**
   ```bash
   git clone https://github.com/gupta-harshal/News-App.git
   cd News-App

2. **Navigate to the Backend directory and install dependencies:**
   ```bash
   cd Backend
   npm install

3. **Create the .env file.**
   ```bash
   GEMINI_KEY=YOUR_KEY_HERE
   
4. **Run Backend**
   ```bash
   node index.js
5. **Run Frontend**
   - Do cd/Frontend in another terminal
   Type
   ```bash
   npm run dev
