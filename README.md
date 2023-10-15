# Todo App

Todos application that allow you to login to the system, see your tasks, create a new ones, navigate between todo and completed and delete tasks.

## Table of Contents

- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)

## Project Structure

The project is organized as follows:

- **`/public`**: Contains static files, such as images.
- **`/src`**: The main directory of the app.
  - **`/app`**: Contains all pages and layouts.
  - **`/components`**: Reusable components for the project.
  - **`/helpers`**: General helper functions and utilities.
  - **`/interfaces`**: TypeScript interfaces for the project.
  - **`/lib`**: Configuration for external libraries.
  - **`/services`**: API services and authentication logic.
- **`next.config.js`**: Next.js configuration.
- **`eslintrc.json`**: ESLint configuration.
- **`tailwind.config.ts`**: Tailwind CSS configuration.
- **`tsconfig.json`**: TypeScript configuration.
- **`package.json`**: Project dependencies and scripts.

## Getting Started

### Prerequisites

Before you start, ensure you have the following software installed on your machine:

- Node.js (>= 14 LTS)
- yarn (>= 1.22)

### Installation

1. Clone the repository to your local machine:

   ```bash
   git clone https://github.com/abdullah-yassin/todo-app.git
   ```

2. Navigate to the project:

   ```bash
     cd todo-app
   ```

3. Install node modules:

   ```bash
     yarn install
   ```

4. Start the project:

   ```bash
     yarn dev
   ```
