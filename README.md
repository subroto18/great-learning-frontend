# React Chart App

## Overview

This project is a React-based application built using Vite and Tailwind CSS for displaying various types of charts such as bar charts, line charts, and pie charts. It features token-based authentication, requiring users to register and log in to access the dashboard. The app demonstrates best practices in state management, API handling, and UI responsiveness.

## Features

1. **Authentication:**

   - Token-based authentication.
   - Registration and login system.
   - Protected routes to restrict access to the dashboard for unauthenticated users.

2. **Chart Display:**

   - Visualization of data using bar charts, line charts, and pie charts.
   - Dynamic rendering of charts using `react-chartjs-2`.

3. **Form Handling:**

   - User-friendly forms for registration and login.
   - Form validation with `Formik` and `Yup`.

4. **Error and Loading Management:**

   - Proper handling of loading and error states.
   - User feedback with `react-toastify` for alerts and notifications.

5. **Routing:**

   - `createBrowserRouter` for routing.
   - 404 page for invalid URLs.

6. **API Handling:**

   - API calls managed with `axios`.
   - Custom Axios instance for centralized API handling.
   - Middleware for intercepting API requests and responses.

7. **Code Architecture:**

   - High-order components (HOCs) for reusable logic.
   - Custom hooks (e.g., for data fetching and form handling).
   - Organized and scalable folder structure.

8. **Code Architecture:**

Improved visibility in search engine results and social platforms.

## Tech Stack

- **Frontend Framework:** React
- **Build Tool:** Vite
- **UI Styling:** Tailwind CSS
- **State Management:** Redux
- **Charting Library:** react-chartjs-2
- **Form Validation:** Formik and Yup
- **API Handling:** Axios with a custom instance and middleware
- **Routing:** `createBrowserRouter` from React Router
- **Notifications:** react-toastify

## Project Structure

```
project-root
├── src
│   ├── assets/           # Static files
│   ├── components/       # Reusable UI components
│   ├── router/           # All route service
│   ├── slices/           # Redux slices
│   ├── useHook/            # Custom React hooks
│   ├── pages/            # Pages (e.g., Login, Register, Dashboard, 404)
│   ├── services/         # API service files
│   ├── styles/           # Tailwind CSS styles
│   ├── utils/            # Utility functions
│   ├── Layout.jsx        # Parent component
│   ├── ProtectedRoute.jsx  # All protected files
│   ├── App.jsx           # Root component
│   ├── main.jsx          # Entry point
│   └── router.js         # Application routing
|   ── store.js           # Redux store
├── public/               # Public assets

├── .env                  # Environment variables
├── package.json          # Dependencies and scripts
├── tailwind.config.js    # Tailwind CSS configuration
└── vite.config.js        # Vite configuration
```

## Installation and Setup

1. **Clone the repository:**

   ```bash
   git clone <repository-url>
   cd project-root
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Set up environment variables:**
   Create a `.env` file in the root directory and configure the following variables:

   ```env
   VITE_API_BASE_URL=<Your API Base URL>
   ```

4. **Run the application:**

   ```bash
   npm run dev
   ```

5. **Build the application for production:**
   ```bash
   npm run build
   ```

## Usage

1. **Registration and Login:**

   - Users must register and log in to access the dashboard.
   - Upon successful login, a token is stored and used for API requests.

2. **Dashboard:**

   - Displays charts for visualizing data.
   - Handles loading and error states gracefully.

3. **Routing:**

   - Dashboard and other routes are protected.
   - Unauthorized users are redirected to the login page.

4. **404 Page:**
   - Displays a user-friendly error message for invalid URLs.

## Key Patterns and Practices

- **HOC:** Reusable logic for protected routes.
- **Custom Hooks:** Encapsulation of complex logic, such as fetching data.
- **Custom Axios Instance:** Centralized configuration for API calls, including interceptors for error handling.
- **Tailwind CSS:** Modern, utility-first styling.
- **Toast Notifications:** Real-time feedback for user actions.

## Libraries Used

| Library         | Purpose                                |
| --------------- | -------------------------------------- |
| Vite            | Fast build tool for React applications |
| Tailwind CSS    | Styling                                |
| Redux           | State management                       |
| Axios           | API handling                           |
| Formik          | Form management                        |
| Yup             | Form validation schema                 |
| react-toastify  | Notifications                          |
| react-chartjs-2 | Chart rendering                        |

## License

This project is licensed under the MIT License.
