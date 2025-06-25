import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Components/header';
import Footer from './Components/footer';
import About from './Components/about';
import Home from './Components/home';
import Login from './Components/login';
import Register from './Components/register';
import Terms from './Components/terms';
import Contact from './Components/contact';
import Faq from './Components/faq';


/*const Home = () => <div className="p-8">Welcome to the Home Page!</div>;
const AboutUs = () => <div className="p-8">About Us Page</div>;
const ContactUs = () => <div className="p-8">Contact Us Page</div>;
const ListCandidate = () => <div className="p-8">List Candidate Page</div>;
const FAQs = () => <div className="p-8">FAQs Page</div>;
const Login = () => <div className="p-8">Login Page</div>;
const Register = () => <div className="p-8">Register Page</div>;
const Terms = () => <div className="p-8">Terms & Conditions Page</div>; */

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow bg-white">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about-us" element={<About />} />
            <Route path="/contact-us" element={<Contact />} />
            <Route path="/faqs" element={<Faq />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/terms" element={<Terms />} />
          </Routes>
        </main>
       <Footer />
      </div>
    </Router>
  );
}

export default App;
