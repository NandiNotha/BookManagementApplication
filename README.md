# Book Management Frontend

This is the frontend repository for the Book Management application built with React and Apollo Client for GraphQL.

## Features

- Fetch all books
- Edit book details
- GraphQL integration using Apollo Client

## Prerequisites

Before you begin, ensure you have met the following requirements:

- You have installed the latest version of Node.js and npm
- You have a running instance of the Book Management backend (Spring Boot with MongoDB)

## Installation

To install this project, follow these steps:

1. Clone the repository:
    ```bash
    git clone https://github.com/NandiNotha/BookManagementApplication
    ```

2. Navigate to the project directory:
    ```bash
    cd book-management-frontend
    ```

3. Install the dependencies:
    ```bash
    npm install
    ```

## Usage

To start the development server, run:

```bash
npm start

Project Structure
The project structure is as follows:
book-management-frontend/
├── public/
│   ├── index.html
├── src/
│   ├── components/
│   │   ├── BookList.js
│   │   ├── EditBook.js
│   ├── graphql/
│   │   ├── queries.js
│   │   ├── mutations.js
│   ├── App.js
│   ├── index.js
├── .gitignore
├── package.json
├── README.md


Contributing
Contributions are always welcome! Please create a pull request or submit an issue for any improvements or suggestions.
