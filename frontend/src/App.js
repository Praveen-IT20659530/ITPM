
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import AddCompany from './components/AddCompany';
import UpdateCompany from './components/UpdateCompany';
import Container from 'react-bootstrap/Navbar';
import AllCom from './components/AllCompanies';


function App() {
  return (
    
    <BrowserRouter>
<main>
          <Container className="mt-3">
            <Routes>
              <Route path="/update" element={<UpdateCompany />}></Route>
              <Route path="/add" element={<AddCompany />}></Route>
              <Route path="/allCom" element={<AllCom />}></Route>
              </Routes>
          </Container>
       </main>
        </BrowserRouter>
  );
}

export default App;
