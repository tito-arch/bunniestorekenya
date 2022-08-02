  import React from 'react'
   
      /////////////===components imported===///////////////////
  
  
  import {BrowserRouter as Router, Routes, Route,} from 'react-router-dom'
  import Home from './Home'
  import Nav from './Components/nav/Nav'
  import Store from './Components/store/Store'
  import Terms from './Components/terms/Terms'
  import Error from './Components/Error'

     ///////////////`/// ==END===//////////////////////////////////

const App = () => {
  return (
          
  <Router> 
    <div>
       <Routes>
            <Route path="/" element={<Home />} />  
            <Route path="/store" element={<Store name="Store" />} />
            {/*<Route path="/blog" element={<Store name="Sorry! Blog" />} />*/} {/*blog was changed into anchor tag*/}
            <Route path="/terms" element={<Terms />} />
            <Route path="/community" element={<Store  name="Community"/>} />
            <Route path="/forests" element={<Store  name="Our Forests"/>} />
            <Route path="*" element={<Error />} />
        </Routes>
    
        <Nav />
    
    </div>
  </Router> 
  
  )      
}

export default App
