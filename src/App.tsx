import React from 'react';
import { Route, Routes } from 'react-router';
import { BrowserRouter as Router } from 'react-router-dom';
import { List } from './pages/List';


function App() {




  return (

<Router>
  <div >
    <Routes>
        <Route path='/' element={<List/>}/>
        

    </Routes>
  </div>
</Router>


  );
}

export default App;
