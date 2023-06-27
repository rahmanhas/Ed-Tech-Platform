import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './Layout/Main.jsx';
import Home from './Pages/Home/Home.jsx';
import LogIn from './Pages/LogIn/LogIn.jsx';
import Register from './Pages/Register/Register.jsx';
import SignUp from './Pages/Register/SignUp.jsx';
import { Provider } from 'react-redux';

//import rootReducer from './reducers';
import rootReducer from './utils/userReducer.js';
import { createStore } from 'redux';
import Dashboard from './Layout/Dashboard.jsx';
import AccountIDetails from './Pages/Dashboard/AccountIDetails.jsx';
import AddNewCourse from './Pages/Dashboard/AddNewCourse.jsx';
import Courses from './Pages/Dashboard/Courses.jsx';
import CourseDetails from './Pages/Dashboard/CourseDetails.jsx';
import DashboardDetails from './Pages/Dashboard/DashboardDetails.jsx';


const store = createStore(rootReducer);

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <LogIn></LogIn>
      },
      {
        path: '/login',
        element: <LogIn></LogIn>
      },
      {
        path: '/register',
        element: <Register></Register>
      },
      {
        path: '/signup',
        element: <SignUp></SignUp>
      },
    ]
  },
  {
    path: '/dashboard',
      element: <Dashboard></Dashboard>,
    children: [
      {
        path: '/dashboard/dashboard',
        element: <DashboardDetails></DashboardDetails>
      },
      {
        path: '/dashboard/account',
        element: <AccountIDetails></AccountIDetails>
      },
      {
        path: '/dashboard/addnewcourse',
        element: <AddNewCourse></AddNewCourse>
      },
      {
        path: '/dashboard/courses',
        element: <Courses></Courses>
      },
      {
        path: '/dashboard/courses/:id',
        element: <CourseDetails></CourseDetails>
      },
      

    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
    <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>,
)
