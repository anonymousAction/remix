# Islamic AI Guidance Website

A full-stack web application using Remix.js with Tailwind CSS, TypeScript, and an Islamic-themed interface for providing AI-based Islamic guidance.

## 🕌 Project Overview

The Islamic AI Guidance website is designed to provide Islamic AI-based guidance to people from around the world. It features a clean, beautiful, Islamic-themed interface that enables users to:

1. Read about the project
2. Ask religious or existential questions
3. Receive responses based on Islamic knowledge

## 🛠️ Technologies Used

- **Frontend**: Remix.js, React, TypeScript, Tailwind CSS
- **Styling**: Islamic-themed design with Arabic-friendly typography
- **Data Handling**: JSON-based mock data (ready for API integration)

## 🎨 Design Features

- Clean UI inspired by ShadCN UI and Islamic aesthetics
- Arabic-friendly typography (Amiri and Lateef fonts)
- Islamic color palette: White, emerald green, gold accents
- Subtle Islamic motifs (geometric patterns)

## 📄 Pages

1. **Home ("/")**: Welcome message, explanation, and call to action
2. **Ask ("/ask")**: Form for user questions with AI-generated answers
3. **About ("/about")**: Project purpose, sources, and vision
4. **Admin ("/admin")**: Protected page for managing questions and knowledge base

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/islamic-ai-guidance.git
   cd islamic-ai-guidance
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open your browser and navigate to `http://localhost:3000`

## 🧱 Project Structure

```
islamic-ai-guidance/
├── app/
│   ├── data/               # Mock data files
│   ├── routes/             # Application routes
│   ├── utils/              # Utility functions
│   ├── root.tsx            # Root component
│   └── tailwind.css        # Global styles
├── public/                 # Static assets
│   └── images/             # Image assets
└── README.md               # Project documentation
```

## 🔒 Admin Access

For demonstration purposes, the admin page can be accessed with:
- Username: `admin`
- Password: `islamic_ai_2025`

## 🧾 Future Integration

The website is designed to be easily extendable with an API route `/api/ask` to integrate a custom-trained AI model using Islamic knowledge and verified sources.

## 📝 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 📢 Disclaimer

This AI is in development. For critical religious issues, always refer to trusted human scholars.

