# User Management Application

A React application for user authentication and management, built with modern web technologies and best practices.

## Features

- **Authentication**: Secure login functionality using JWT tokens
- **User Management**: View, edit, and delete user profiles
- **Responsive Design**: Fully responsive interface that works on desktop and mobile devices
- **Search Functionality**: Filter users by name or email
- **Pagination**: Navigate through multiple pages of user data

## Technologies Used

- React.js
- React Router for navigation
- Axios for API requests
- Tailwind CSS for styling
- Heroicons for UI icons

## Prerequisites

Before you begin, ensure you have the following installed:
- Node.js (v14.0.0 or later)
- npm (v6.0.0 or later) or yarn (v1.22.0 or later)

## Installation

1. Clone the repository:
```
git clone https://github.com/yourusername/user-management-app.git
cd user-management-app
```

2. Install dependencies:
```
npm install
# or
yarn install
```

3. Start the development server:
```
npm start
# or
yarn start
```

4. The application should now be running at [http://localhost:3000](http://localhost:3000)

## Project Structure

```
src/
├── components/
│   ├── Login.jsx         # Authentication component
│   ├── Message.jsx       # Toast notification component
│   ├── Users.jsx         # User management component
├── App.js                # Main application component with routes
├── index.js              # Entry point
└── index.css             # Global styles
```

## API Integration

This application uses the [ReqRes](https://reqres.in/) API for authentication and user data:

- **Authentication**: POST https://reqres.in/api/login
- **User List**: GET https://reqres.in/api/users?page={page_number}
- **Update User**: PUT https://reqres.in/api/users/{user_id}
- **Delete User**: DELETE https://reqres.in/api/users/{user_id}

## Test Credentials

For testing the login functionality, you can use the following credentials:
- Email: `eve.holt@reqres.in`
- Password: `cityslicka`

  ## Screenshot
  ![image](https://github.com/user-attachments/assets/055fefaf-cc81-48e2-ae79-b935954be491)
  ![image](https://github.com/user-attachments/assets/2a3982e4-f3c3-4855-ab22-f5e9859a29aa)
  ![image](https://github.com/user-attachments/assets/3482fa30-e0f8-4717-b0b6-b3d9b0afd1ac)
  ![image](https://github.com/user-attachments/assets/fd147766-75b5-4224-8f14-e979ef92361f)
  ![image](https://github.com/user-attachments/assets/03e3320e-2a15-425c-a349-ac43f68e8a9f)
  ![image](https://github.com/user-attachments/assets/a43bafcd-46df-4155-bd5d-1eab06fa2ec8)
  ![image](https://github.com/user-attachments/assets/9170705a-a4f4-4708-8736-0f4b0688c773)

## Implementation Notes

- The application stores authentication tokens in localStorage for persistence
- User edits and deletions are simulated on the client-side as the ReqRes API doesn't actually update or delete users
- Success and error messages are displayed using a reusable Message component
- Confirmation dialogs prevent accidental user deletion

## Future Enhancements

- Add user registration functionality
- Implement more robust form validation
- Add unit and integration tests
- Create a dark mode theme
- Add user profile image upload functionality

## Assumptions and Considerations

1. **API Limitations**: The ReqRes API is a testing API, so it doesn't actually persist changes when editing or deleting users. The application simulates these operations on the client side.

2. **Authentication**: For simplicity, we're storing the JWT token in localStorage. In a production environment, more secure methods like HTTP-only cookies would be preferable.

3. **Error Handling**: Basic error handling is implemented, but a production application would benefit from more comprehensive error boundaries and fallback UIs.

4. **Performance**: For a small application, we've kept state management simple. Larger applications might benefit from Context API or Redux.

5. **Accessibility**: Basic accessibility features have been implemented, but a complete accessibility audit would be recommended for production.

## License

This project is licensed under the MIT License - see the LICENSE file for details.
