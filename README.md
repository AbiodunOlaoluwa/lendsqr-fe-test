# Lendsqr Frontend Assessment

## Project Overview

This repository contains the implementation of the frontend assessment for Lendsqr. The project was built using modern web technologies and best practices, ensuring it delivers a seamless and engaging user experience. Below, you will find detailed documentation of the application, the approaches used, challenges faced, and the deployment details.

## Live Deployment

The application is deployed on Vercel and can be accessed via the following URL:

[https://abiodun-olaoluwa-solomon-lendsqr-fe-test.vercel.app](https://abiodun-olaoluwa-solomon-lendsqr-fe-test.vercel.app)

## Login Details

Email: test@lendsqr.com
Password: password123

## Repository Details

This is the public repository containing the source code for the Lendsqr frontend test.

Repository URL: [https://github.com/AbiodunOlaoluwa/lendsqr-fe-test](https://github.com/AbiodunOlaoluwa/lendsqr-fe-test)

## Technologies Used

- **React**: To create reusable and dynamic UI components.
- **Next.js**: Chosen as the React framework for server-side rendering, routing, and overall development efficiency.
- **TypeScript**: Provides type safety, which helps catch errors early and improve code maintainability.
- **SCSS**: Used for styling the components, providing a modular approach to writing CSS and ensuring a clean, maintainable codebase.
- **Jest & React Testing Library**: Used for testing components to ensure stability and correct behavior.
- **Axios**: For making HTTP requests to fetch and manipulate user data.
- **Prisma**: ORM for connecting with and managing the database, ensuring type safety in database interactions.

## Key Features Implemented

### 1. Login Page

- A fully functional login page that validates user inputs.
- Form validation implemented to ensure correct email and password formats.
- Responsive design to provide optimal user experience on both desktop and mobile.



### 2. Dashboard Page

- After login, users are redirected to a dashboard page that showcases user statistics (e.g., active users, users with loans, users with savings).
- The page features informative tabs that display statistics at a glance.
- Users can filter data based on multiple criteria using the dropdown filters.



### 3. Users List Page

- A page that displays a list of all users with relevant details such as organization, email, phone number, and status.
- Users can click on any user's row to navigate to that user's details page.
- Implemented pagination to efficiently handle and display the user list.
- Search filters can be used to quickly locate users.



### 4. User Details Page

- Displays the detailed information of the selected user, including personal information, employment details, and social links.
- "Blacklist User" and "Activate User" buttons have been implemented (currently disabled for demo purposes).
- A "Back to Users" link allows users to return to the user list.



## Architectural and Design Decisions

1. **Next.js for Routing and SSR**: Next.js was used for this project primarily to take advantage of its built-in routing system and server-side rendering capabilities. This allows for quicker page loads and better SEO using react, the company's library of choice.
2. **State Management with useState**: For the MVP version, React's local state management (`useState`) was used, avoiding more complex libraries like Redux to keep the solution simple and lightweight.
3. **SCSS for Styles**: SCSS was chosen to write reusable, clean, and modular CSS code. This approach ensures that the styles are easily maintained and modified when necessary.
4. **Data Fetching**: The data was fetched from a mock API using Next.js fetch method and then stored in local storage to simulate real-world data persistence. The initial fetching from remote takes a while due to the mock api's slow response time though. This approach ensured a more consistent user experience during navigation.
5. **Type Safety**: TypeScript was used throughout the codebase to minimize runtime errors and enhance developer productivity. Strong typing helped in reducing bugs related to data types.
6. **Mobile-First Design**: The application was built with a mobile-first approach to ensure the best experience across devices. Breakpoints were added for different screen sizes to adapt the content accordingly.

## Challenges and Solutions

### 1. Handling Asynchronous Data Fetching

The main challenge was ensuring that the data fetched from the mock API was displayed consistently across different components. This was handled by saving data in local storage after initial fetching, ensuring smooth navigation between pages without repetitive API calls.

### 2. Maintaining Pixel-Perfect UI

Ensuring the design implementation was pixel-perfect based on the provided Figma file required a lot of attention to detail. Design testing was performed against the Figma mockups to ensure consistency. Custom CSS and SCSS modules were written to match the given designs exactly.

### 3. Managing State Efficiently

While the project started simple, managing state for filter criteria and user details required careful consideration. React hooks (`useState` and `useEffect`) were used for this purpose to keep state management straightforward and efficient.

## How to Set Up Locally

Follow these steps to set up the project locally:

1. Clone the repository:

   ```bash
   git clone https://github.com/AbiodunOlaoluwa/lendsqr-fe-test.git
   ```

2. Navigate to the project directory:

   ```bash
   cd lendsqr-fe-test
   ```

3. Install the dependencies:

   ```bash
   npm install
   ```

4. Run the development server:

   ```bash
   npm run dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser to view the application.

## Testing

- The application is tested using **Jest** and **React Testing Library**.
- To run tests, use the following command:
  ```bash
  npm run test
  ```
- The tests cover the main functionalities, including user navigation, input validation, and form submissions.

## Deployment

The application is deployed on Vercel for its ease of use in integrating with a Next.js git repo and free tier options. To deploy on Vercel, follow these steps:

1. Connect your GitHub repository to Vercel.
2. Deploy the application with default settings.

## Video Walkthrough

A Loom video walkthrough has been created to visually and verbally explain the application's features, compare the implemented design to the given mockups, and justify certain design decisions.

Video URL: [https://loom.com/share/](https://loom.com/share/<video-id>)

In the video, I demonstrate the following:

1. The Login, Dashboard, User List, and User Details pages.
2. Highlight any differences from the Figma designs and justify the changes.
3. My face is visible throughout the video to meet submission requirements.

## Submission

The application has been submitted for review with all the required elements:

- **Live Deployment**: [https://abiodun-olaoluwa-solomon-lendsqr-fe-test.vercel.app](https://abiodun-olaoluwa-solomon-lendsqr-fe-test.vercel.app)
- **GitHub Repository**: [https://github.com/AbiodunOlaoluwa/lendsqr-fe-test](https://github.com/AbiodunOlaoluwa/lendsqr-fe-test)
- **Documentation**: Detailed Google Doc with explanations of design and decisions made.
- **Video Review**: Available on Loom, showing detailed comparisons.

After submitting the required information, an email was sent to [careers@lendsqr.com](mailto\:careers@lendsqr.com) notifying them of the submission.

## Conclusion

This project showcases a well-thought-out frontend application for Lendsqr using Next.js and TypeScript. All decisions were made to optimize user experience, maintain code quality, and ensure scalability. We look forward to any feedback from the Lendsqr team and are ready to make adjustments as needed.

