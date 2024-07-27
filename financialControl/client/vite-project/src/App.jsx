import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

/* Components */
import Navbar from './COMPONENTS/layout/Navbar';
import Footer from './COMPONENTS/layout/Footer';
import Container from './COMPONENTS/layout/Container';


/* Pages */
import Login from './COMPONENTS/pages/Auth/Login';
import Register from './COMPONENTS/pages/Auth/Register';
import Home from './COMPONENTS/pages/Auth/Home';


/* Context */
import { UserProvider } from './CONTEXT/UserContext';


function App() {
    return (
        <Router>
            <UserProvider>
                <Navbar />
                <Container>
                    <Routes>
                        <Route path="/login" element={<Login />} />
                        <Route path="/register" element={<Register />} />
                        <Route path="/" element={<Home />} />
                    </Routes>
                </Container>
                <Footer />
            </UserProvider>
        </Router>
    );
}

export default App;
