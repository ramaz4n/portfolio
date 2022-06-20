import React from 'react';
import { Routes, Route } from "react-router-dom";
import './App.module.scss';
import Container from './components/Container/Container';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Home from './pages/Home/Home'
import Works from './pages/Works/Works'
import Contact from './pages/Contact/Contact'
import Skills from './pages/Skills/Skills';


function App() {
  return (
		<div className="App">
			<Container>
				<Header/>
				<Routes>
					<Route path="/" element={<Home/>} />
					<Route path="skills" element={<Skills/>} />	
					<Route path="works" element={<Works />} />
					<Route path="contact" element={<Contact />} />
    			</Routes>
			</Container>
			<Footer/>
		</div>
  );
}

export default App;
