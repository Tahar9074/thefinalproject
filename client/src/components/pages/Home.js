import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css'; 


function Home() {
  return (
    <div className="container">
        <img className='logo1' src="1.png" alt=""></img>
      <section className="welcome-section">
        <h2 className="welcome-heading">
          Welcome to <strong>IceQuest Drive</strong>, your trusted partner for exceptional car rentals.
        </h2>
      </section>
      <h4>Discover a hassle-free car rental experience with IceQuest. Whether you need a car for a business trip, a family vacation, or just to explore the city, we have the perfect solution for you.</h4>
      <h6></h6>
    
    </div>
  );
}

export default Home;
