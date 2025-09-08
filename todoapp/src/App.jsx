import { Navigate, NavLink, Route, Routes } from 'react-router-dom';
import './App.css'
import TaskInput from './Components/TaskInput'
import TaskManager from './Components/TaskManager'
import TaskOutput from './Components/TaskOutput'
import Login from './Components/Login';
import Message from './Components/Message';

function App() {
  

   return (
    <div className="h-screen flex-col items-top justify-center">
      {/* <h1 className="text-4xl font-extrabold text-center">
        Simple task manager
      </h1> */}

      {/* <TaskManager /> */}


       <nav>
        <NavLink to="/register">Register Page</NavLink> <br></br>
        <NavLink to="/login">Login Page</NavLink>
        <NavLink to="/message">Message</NavLink>
      </nav>

      <Routes>
        {/* <Route path="/register" element={<Register />}></Route> */}
        <Route path="/login" element={<Login />}></Route>
        <Route path="/tasks" element={<TaskManager/>}/>
        <Route path="" element={<Navigate to="/" />}/>
        <Route path='/message' element={<Message/>}></Route>
      </Routes>


    </div>
  );
}

export default App
