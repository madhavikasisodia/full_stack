import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import Hello from './Hello.jsx';
import Navbar from './Navbar.jsx';
import Body from './Body.jsx';
import Footer from './Footer.jsx';
import Student_card from './Student_card.jsx';
import Prop from './Props.jsx';
import Counter from './components/counter.jsx';
import UserData from './components/UserData.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    
    <App />
    <Hello />
    <Navbar />
    <Body />
    <Footer />
    <Student_card />
    <Prop name="DK" sec="EB" id="214" />
    <Counter />
    <UserData />
  </StrictMode>
);