import { useState } from 'react'


import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import {
	BrowserRouter as Router,
	Routes,
	Route,
	Link
} from 'react-router-dom';
import List from './components/List'
import CreateUser from './components/CreateUser'
import Edit from './components/Edit';
import Create from './components/Create';


function App() {
  const [count, setCount] = useState(0)

  return (
   < Router>

    <Navbar bg="dark" expand="lg">
       <Container>
         <Navbar.Brand href="/" className="h3 text-danger">My APP</Navbar.Brand>
         <Navbar.Toggle aria-controls="basic-navbar-nav" className='bg-danger' />
         <Navbar.Collapse id="basic-navbar-nav">
           <Nav className="me-auto">
              <Link to="/List" className="text-decoration-none text-danger mx-4">List</Link> 
             <Link to="/edit" className="text-decoration-none text-danger mx-4">Edit</Link>
             <Link to="/create" className="text-decoration-none text-danger mx-4">Create Exercise log</Link>
             <Link to="/createusr" className="text-decoration-none text-danger mx-4">Create user</Link>
            
           </Nav>
         </Navbar.Collapse>
       </Container>
     </Navbar>
 
 
          
            <Routes>
                  <Route exact path='/List' element={<List/>}></Route>
                  <Route exact path='/:edit' element={<Edit/>}></Route>
                  <Route exact path='/create' element={<CreateUser/>}></Route>
                  <Route exact path='/createusr' element={<Create/>}></Route>
           </Routes>
           
        </Router>
   

  )
}

export default App
