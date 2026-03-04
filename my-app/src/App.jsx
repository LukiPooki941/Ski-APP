import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route} from 'react-router-dom'
import Root from "./Root";
import HomePage from './Components/HomePage'
import PictureChutes from './Components/PictureChutes'
import EastRim from './Components/EastRim'
import HaskillSlide from './Components/HaskillSlide'
import Bighorn from './Components/Bighorn'
import NorthBowlChute from './Components/NorthBowlChute'

const router = createBrowserRouter(createRoutesFromElements(
  <Route path="/" element={<Root />} >
    <Route index element={<HomePage/>}/>
    <Route path="PictureChutes" element={<PictureChutes/>}/>
    <Route path="EastRim" element={<EastRim/>}/>
    <Route path="HaskillSlide" element={<HaskillSlide/>}/>
    <Route path="Bighorn" element={<Bighorn/>} />
    <Route path="NBC" element={<NorthBowlChute/>}/>
  </Route>
));

function App() {

  return (
    <>
    <RouterProvider router={router}/>
    </>
  )
}

export default App
