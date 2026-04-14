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
      <header>
        <h1 className="main-title">Gianni Jaramillo | Portfolio</h1>
      </header>
      <Navbar>
        <Outlet />
      </Navbar>
    </>
  )
}

export default App;