import './App.css'
import HomePage from './HomePage'
import { Routes, Route } from "react-router";
import ModalComponent from './React Problems/Modal/ModalComponent';


function App() {

  return (
    <>
    <Routes>
      <Route index element={<HomePage/>}/>
      <Route element={<ModalComponent/>}/>
    </Routes>
    </>
  )
}

export default App
