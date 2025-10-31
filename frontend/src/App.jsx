import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Home from './screens/Home'
import AnatomyModels from './screens/AnatomyModels'
import UploadModel from './screens/UploadModel'
import ModelDetails from './screens/ModelDetails'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path="/models" element={<AnatomyModels/>} />
        <Route path='/upload' element={<UploadModel />} />
        <Route path="/model/:id" element={<ModelDetails />} />
      </Routes>
   </BrowserRouter>
  )
}

export default App