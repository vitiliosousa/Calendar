import ReactDOM from 'react-dom/client'
import SignIn from './pages/SignIn/SignIn.jsx'
import SignUp from './pages/SingnUp/SignUp.jsx'
import SignUp2 from './pages/SingnUp/SignUp2.jsx'
import Course from './pages/Course/Course.jsx'
import Class from './pages/Class/Class.jsx'

import './index.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <Router>
    <Routes>
      <Route path='/' element={<SignIn/>}></Route>
      <Route path='/signup' element={<SignUp/>}></Route>
      <Route path='/signup2' element={<SignUp2/>}></Route>
      <Route path='/course' element={<Course/>}></Route>
      <Route path='/class' element={<Class/>}></Route>
    </Routes>
  </Router>
)
