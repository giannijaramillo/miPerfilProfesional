import './App.css'
import Navbar from './components/Navbar'
import { Outlet } from 'react-router-dom';
import FloatingPaths from './components/FloatingPaths';
import ShaderBackground from './components/ShaderBackground';

function App() {
  return (
    <>
      <ShaderBackground />
      <FloatingPaths />
      <Navbar>
        <Outlet />
      </Navbar>
    </>
  )
}

export default App;