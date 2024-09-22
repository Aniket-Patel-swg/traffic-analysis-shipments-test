# Quiz API
### Submitted by Aniket Patel (patelaniket1207@gmail.com)
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


#### `/login`

- **Method**: `POST`
- **Description**: Endpoint for users to log in and receive a JWT token.
- **Request Body**:

    ```json
    {
        "email": "string",
        "password": "string"
    }
    ```

- **Response**:

    ```json
    {
        "token": "JWT_TOKEN"
    }
    ```

### Quiz Endpoints

#### `/quiz/generate`

- **Method**: `POST`
- **Description**: Generate a quiz by specifying the subject. AI-driven subject validation is performed before creating the quiz.
- **Request Body**:

    ```json
    {
        "subject": "string",
        "numberOfQuestions": "integer"
    }
    ```

#### `/quiz/evaluate`

- **Method**: `POST`
- **Description**: Submit answers for evaluation. Token validation and quiz validation are performed before evaluating.
- **Request Body**:

    ```json
    {
        "quizId": "string",
        "answers": [
            { "questionId": "string", "answer": "string" }
        ]
    }
    ```

#### `/quiz/retest`

- **Method**: `POST`
- **Description**: Retest the user with previously generated quiz questions.
- **Request Body**:

    ```json
    {
        "quizId": "string"
    }
    ```

#### `/quiz/hint`

- **Method**: `GET`
- **Description**: Get a hint for a particular quiz question. Requires token validation.
- **Query Parameters**:

    ```json
    {
        "quizId": "string",
        "questionId": "string"
    }
    ```

#### `/quiz/getHintAI`

- **Method**: `GET`
- **Description**: Fetch a hint for a question by interacting with the AI. Requires token validation.
- **Query Parameters**:

    ```json
    {
        "quizId": "string",
        "questionId": "string"
    }
    ```

#### `/quiz/getExplanation`

- **Method**: `GET`
- **Description**: Get a non-AI-generated explanation for a quiz question.
- **Query Parameters**:

    ```json
    {
        "quizId": "string",
        "questionId": "string"
    }
    ```

#### `/quiz/getExplanationFromAI`

- **Method**: `GET`
- **Description**: Fetch a detailed explanation for a question from the AI model.
- **Query Parameters**:

    ```json
    {
        "quizId": "string",
        "questionId": "string"
    }
    ```

#### `/quiz/history`

- **Method**: `GET`
- **Description**: Fetch quiz history for a user. You can filter by subject and date range.
- **Query Parameters (optional)**:

    ```json
    {
        "subject": "string",
        "dateRange": "string"
    }
    ```

## Authentication and Authorization

- **Signup & Login**: Users must register via `/signup` and log in using `/login` to obtain a JWT token.
- **Token Validation**: A valid token is required for all quiz-related APIs except `/quiz/generate`.

## AI-Powered Features

- **Quiz Subject Validation**: `/quiz/generate` uses AI to validate the subject.
- **AI Hints and Explanations**: `/quiz/getHintAI` and `/quiz/getExplanationFromAI` use AI to generate hints and explanations for quiz questions.

## Deployment

The API is deployed on **AWS EC2** for scalability and availability. **MongoDB** is used as the database to store quiz and user-related data.
