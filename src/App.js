import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar.jsx';
import LandingPage from './components/LandingPage/LandingPage.jsx';
import OverView from './components/OverView/OverView.jsx';
import CourseInclude from './components/CourseInclude/CourseInclude.jsx';
import Review from './components/Reviews/Review.jsx';
import Footer from './components/Footer/Footer.jsx';
import Author from './components/Author/Author.jsx';


const App = () => {
  return (
    <Router>
      <Navbar />
      <LandingPage/>
      <OverView />
      <CourseInclude />
      <Author />
      <Review />
      <Footer />
    </Router>
  );
};

export default App;
