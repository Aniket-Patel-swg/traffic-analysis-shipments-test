# Quiz API

This project is a Quiz API designed for generating, evaluating, and managing quizzes. It is built using **Express.js**, **Node.js**, **TypeScript**, **MongoDB**, and deployed on **AWS EC2**. The API supports user authentication, quiz management, and AI integration to generate hints and explanations.

## Technologies Used

- **Node.js**
- **Express.js**
- **TypeScript**
- **MongoDB**
- **AWS EC2** (for deployment)
- **AI Integration** (for generating questions, hints, and explanations)

## Features

- **User Authentication**: Sign up and login with JWT-based token authentication.
- **Quiz Generation**: AI-driven quiz creation based on specified subjects.
- **Quiz Evaluation**: Submit and evaluate answers, with retesting options.
- **AI-Powered Hints & Explanations**: Get AI-generated hints and explanations for quiz questions.
- **Quiz History**: Fetch quiz history and filter results by subject and date.

## API Overview

### Authentication Endpoints

#### `/signup`

- **Method**: `POST`
- **Description**: Endpoint for new users to register.
- **Request Body**:
  ```json
  {
      "username": "string",
      "email": "string",
      "password": "string"
  }
