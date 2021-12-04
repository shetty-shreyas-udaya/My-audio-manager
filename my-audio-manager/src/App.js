import React from 'react'
import {BrowserRouter as Router,Route, Routes} from 'react-router-dom'
import Home from './compo/Home'
import { HomePage } from './compo/HomePage'
 const App = () => {
  return (
    <div>
      <Router>
        <Routes>
      <Route path='/' element={<HomePage></HomePage>}></Route>
<Route path ='/upload' element={ <Home></Home>}></Route>

        </Routes>
      </Router>
    </div>
  )

}

export default App;