# Project: Chart Visualization Dashboard

## Overview

The **Chart Visualization Dashboard** is a React-based project designed to assess influencer data through visualized charts. This project utilizes `react-chartjs-2` for creating dynamic and responsive charts, with features such as user authentication, API integration, and reusable components for modular development.

## Features

- **Dynamic Chart Visualization:** Powered by `react-chartjs-2`, offering responsive and customizable charts.
- **API Integration:** Custom API handler with interceptor middleware ensures robust API communication.
- **Authentication System:**
  - User registration and login functionality.
  - Authentication implemented using local storage.
  - Auth-based dashboard accessible only to registered users.
- **State Management:** Managed globally using Redux.
- **Routing:** Implemented with the latest version of React Router.
- **Code Reusability:** Developed reusable components and custom hooks for efficient code management.
- **Protected Routes:** Implemented using the HOC (Higher-Order Component) pattern.

## Tech Stack

- **Frontend Framework:** React
- **Chart Library:** `react-chartjs-2`
- **State Management:** Redux
- **Routing:** React Router (latest version)
- **Authentication:** Local storage-based implementation
- **Middleware:** API interceptor
- **Code Patterns:** Custom hooks, reusable components, HOC

## Installation

1. Clone the repository:

   ```bash
   git clone <repository_url>
   ```

2. Navigate to the project directory:

   ```bash
   cd chart-visualization-dashboard
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Start the development server:
   ```bash
   npm start
   ```

## Project Structure

```
chart-visualization-dashboard/
|-- src/
    |-- components/        # Reusable components
    |-- hooks/             # Custom hooks
    |-- store/             # Redux store and slices
    |-- api/               # Custom API handler and interceptors
    |-- pages/             # Page components (e.g., Dashboard, Login, Register)
    |-- routes/            # Route configuration and HOCs for protected routes
    |-- styles/            # CSS/SCSS styles
    |-- App.js             # Main application file
    |-- index.js           # Entry point
```

## Features Breakdown

### Chart Visualization

- Uses `react-chartjs-2` for creating charts such as bar, line, and pie charts.
- Responsive and interactive.
- Fetches data from APIs using the custom API handler.

### Authentication

- User registration and login with form validation.
- Stores authentication tokens in local storage.
- Protects dashboard routes using HOC.

### API Handling

- Custom API handler ensures centralized API logic.
- Interceptor middleware for adding headers and handling errors.

### State Management

- Managed with Redux for consistent state across components.
- Integrated with custom hooks for better readability and reusability.

### Routing

- Configured with the latest React Router.
- Protected routes ensure only authenticated users can access certain pages.

### Reusability

- Components like buttons, forms, and modals are created for reuse.
- Custom hooks handle specific logic to avoid duplication.

## Usage

1. **Register** as a new user to gain access to the dashboard.
2. **Login** with your registered credentials.
3. View the **charts** and interact with the visualized data.
4. Navigate through the **dashboard** using the provided routes.

## Scripts

- `npm start`: Starts the development server.
- `npm run build`: Builds the app for production.
- `npm test`: Runs tests (if applicable).

## Dependencies

- `react`
- `react-chartjs-2`
- `redux`
- `react-redux`
- `react-router-dom`
- `axios`

## Future Enhancements

- Add more chart types and customization options.
- Implement server-side authentication with token refresh.
- Add unit and integration tests for better reliability.

## Contributing

1. Fork the repository.
2. Create a feature branch:
   ```bash
   git checkout -b feature/YourFeature
   ```
3. Commit your changes:
   ```bash
   git commit -m "Add YourFeature"
   ```
4. Push to the branch:
   ```bash
   git push origin feature/YourFeature
   ```
5. Open a Pull Request.

## License

This project is licensed under the [MIT License](LICENSE).

## Contact

For any queries or feedback, feel free to contact:

- **Name:** Subroto Chakraborty
- **Email:** [your-email@example.com]
- **GitHub:** [your-github-profile]

---

**Happy Coding!**
