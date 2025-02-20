# **📝 MERN To-Do List App 📝**

This project is a full-stack web application that allows users to create, edit, delete, and mark tasks as completed. Built using the **MERN stack (MongoDB, Express.js, React, Node.js)**, this app provides a dynamic and interactive to-do list experience with backend data persistence.

## **Table of Contents**
- [**Features**](#features)
- [**Tech Stack**](#tech-stack)
- [**Installation**](#installation)
- [**Usage**](#usage)
- [**Project Structure**](#project-structure)
- [**Contributing**](#contributing)

## **Features**

### **Task Management**
- Add new tasks and store them in a MongoDB database.
- Edit existing tasks with real-time updates.
- Delete tasks permanently from the database.

### **Task Completion**
- Mark tasks as completed using checkboxes.
- Completed tasks are visually distinguished with a line-through effect.
- Toggle the "Show Finished" option to view or hide completed tasks.

### **Persistent Storage**
- All tasks are stored in MongoDB, ensuring data is not lost on page refresh.
- Real-time updates using API endpoints.

### **Responsive Design**
- Fully responsive UI, making it accessible on both desktop and mobile devices.
- The interface adapts dynamically based on screen size.

### **Interactive UI**
- Clean and intuitive task management with clear icons for editing and deleting tasks.
- Tasks are dynamically updated based on user actions.

## **Tech Stack**

### **Frontend**
- **React:** JavaScript framework for building the user interface and managing state.
- **HTML & CSS:** Markup and styling for a responsive layout.
- **React Icons:** For visually enhancing the app with icons.

### **Backend**
- **Node.js & Express.js:** Backend server for handling API requests.
- **MongoDB:** Database for storing tasks persistently.
- **Mongoose:** ODM (Object Data Modeling) for MongoDB.
- **Cors & dotenv:** Middleware for handling CORS and environment variables.

## **Installation**

To run the MERN To-Do List App locally, follow these steps:

### **Clone the repository**
```bash
   git clone https://github.com/Khwajazeeshan/Todo-List-App-MERN-STACK.git
   cd Todo-List-App-MERN-STACK
```

### **Backend Setup**
```bash
   cd backend
   npm install
   npm start
```

### **Frontend Setup**
```bash
   cd frontend
   npm install
   npm run dev
```

## **Usage**

### **Task Management**
- Add a task using the input field and click the "Add" button.
- Edit a task by clicking the edit icon and updating the text.
- Delete a task by clicking the trash icon.

### **Task Completion**
- Check the checkbox next to a task to mark it as completed.
- Toggle the "Show Finished" option to view or hide completed tasks.

## **Project Structure**

### **Frontend (React - `frontend/`)**
- `src/components/Data.jsx`: Displays tasks and handles user actions.
- `src/components/Create.jsx`: Input form for adding tasks.
- `src/App.jsx`: Root component managing state and API calls.
- `src/Style/styles.css`: Styling for layout and responsiveness.

### **Backend (Node.js & Express - `backend/`)**
- `server.js`: Main Express server handling API routes.
- `Model/schema.js`: Mongoose schema and model for tasks.


## **Contributing**

Feel free to submit issues or pull requests for new features or bug fixes. Contributions to improve functionality or UI are always welcome. 🚀

