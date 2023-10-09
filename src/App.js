
import { Routes, Route } from 'react-router-dom';
import Login from './Pages/Login';
import Welcome from './Pages/Welcome';

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Login />}></Route>
      <Route path='/welcome' element={<Welcome />}></Route>
      </Routes>
  );
}

export default App;
