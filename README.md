This project consists of two main components:
1. **Client Side (Frontend)**: The client-side code resides in the `vishnureactassessment` directory. The primary component for form submission is `Formpage.js`. Tailwind CSS is utilized for styling.
2. **Server Side (Backend)**: The server-side code is located in the `server` directory. The backend functionality is implemented in `server.js`, leveraging Node.js and Express. 
   Data submitted through the form is processed and stored on the server, and a JSON response is provided to the client upon submission.

3.**FEATURES**:
    i.Users can fill in the form fields (name, email, phone) and submit the details.
    ii.Submitted data is dynamically displayed below the form, providing real-time feedback to the user.
    iii.The backend receives the submitted data and stores it, making it accessible via a JSON endpoint (`/post`) on port 3000.

4.**NOTE**:
Please run frontend and Backend servers in 2 different ports:
  i. Backend server will be running in 3000. (Port is defined in code `const PORT = process.env.PORT || 3000;` ) .
  ii. Please run Frontend server in other ports other than 3000.
  iii. I have added the images for your reference.

