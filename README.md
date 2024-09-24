# Quiz API
### Submitted by Aniket Patel (patelaniket1207@gmail.com)
This project is a Quiz API designed for generating, evaluating, and managing quizzes. It is built using **Express.js**, **Node.js**, **TypeScript**, **MongoDB**, and deployed on **AWS EC2**. The API supports user authentication, quiz management, and AI integration to generate hints and explanations.

## Postman API Collection
You can test the API using Postman. Here's the [Postman Collection Link](https://www.postman.com/science-physicist-66853210/workspace/quizzer-ai/collection/25703225-8912f530-404a-4691-a160-a833e50a3a45?action=share&creator=25703225).

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

#### `/auth/signup`

- **Method**: `POST`
- **Description**: Endpoint for new users to register.
- **Request Body**:
  ```json
  {
      "username": "string",
      "password": "string"
  }
  ```

- **Success Response Body**:
  ```json
  {
    "message": "Sign up successful, please login using /auth/login",
    "status": 200
  }
  ```

#### `/auth/login`

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
      "grade": "Collage Student",
      "Subject": "Javascript Engine",
      "TotalQuestions": 5,
      "MaxScore": 35,
      "Difficulty": "EASY"
    }
    ```

#### `/quiz/evaluate`

- **Method**: `POST`
- **Description**: Submit answers for evaluation. Token validation and quiz validation are performed before evaluating.
- **Request Body**:

    ```json
   {
    "quizId": "Quiz ID",
    "responses": [
        {
            "questionId": "QuestionID",
            "userResponse": "User Reponse"
        },
    ]
  }
    ```

#### `/quiz/retest`

- **Method**: `POST`
- **Description**: Retest the user with previously generated quiz questions.
- **Request Body**:

```json
  {
    "quizId": "Quiz ID",
    "responses": [
        {
            "questionId": "QuestionID",
            "userResponse": "User Reponse"
        },
    ]
  }
```

#### `/quiz/hint`

- **Method**: `GET`
- **Description**: Get a hint for a particular quiz question. Requires token validation.
- **Query Parameters**:

    ```json
    {
        "questionId": "string"
    }
    ```

#### `/quiz/getHintAI`

- **Method**: `GET`
- **Description**: Fetch a hint for a question by interacting with the AI. Requires token validation.
- **Query Parameters**:

    ```json
    {
        "questionId": "string"
    }
    ```

#### `/quiz/getExplanation`

- **Method**: `GET`
- **Description**: Get a non-AI-generated explanation for a quiz question.
- **Query Parameters**:

    ```json
    {
        "questionId": "string"
    }
    ```

#### `/quiz/getExplanationFromAI`

- **Method**: `GET`
- **Description**: Fetch a detailed explanation for a question from the AI model.
- **Query Parameters**:

    ```json
    {
        "questionId": "string"
    }
    ```

#### `/quiz/history`

- **Method**: `GET`
- **Description**: Fetch quiz history for a user. You can filter by subject and date range.
- **Query Parameters (optional)**:

    ```
    {
       ?subject=Artificial Intelligence,
        ?score=3,
        ?difficulty=EASY,
    startDate=2024-09-22T12:04:18.845Z&endDate=2024-09-22T12:04:18.845Z,
    grade=Collage Student,
    }
    ```

## Authentication and Authorization

- **Signup & Login**: Users must register via `auth/signup` and log in using `auth/login` to obtain a JWT token.
- **Token Validation**: A valid token is required for all quiz-related APIs except `/quiz/generate`.

## AI-Powered Features

- **Quiz Subject Validation**: `/quiz/generate` uses AI to validate the subject.
- **AI Hints and Explanations**: `/quiz/getHintAI` and `/quiz/getExplanationFromAI` use AI to generate hints and explanations for quiz questions.

## Architecture Used

- **Model**: Defines the data structure and schema for quiz and user data in MongoDB.
- **Service**: Handles the business logic and orchestration, such as AI validation and quiz generation.
- **Routes**: Directs API requests to the appropriate controller based on the route.
- **Controllers**: Manages request processing, validation, and invoking service methods.
- **Utils**: Provides helper functions such as LLM integration, request validation, and custom error handling.


- **Basic Flow diagram**:
  ![diagram-export-9-22-2024-8_42_40-PM](https://github.com/user-attachments/assets/32b65a63-b158-48f2-babe-f6f17c47520d)


## Mongoose Schema
![diagram-export-9-22-2024-8_42_45-PM](https://github.com/user-attachments/assets/47339c49-671b-4768-b4e5-48e9956357ee)


## Basic API working flow:
![diagram-export-9-22-2024-8_42_52-PM](https://github.com/user-attachments/assets/13e953a8-d78c-4c0c-b849-25e594de0d19)

## Deployment

The API is deployed on **AWS EC2** for scalability and availability. **MongoDB** is used as the database to store quiz and user-related data.

