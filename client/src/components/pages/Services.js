import React from 'react';
import { Link } from 'react-router-dom'

function Services() {
  return (
    <div>
      <nav className="features">
        <ul className="feature-list">
          <li className="feature-item">
            <Link to="/" className="feature-link">Diverse Vehicle Selection</Link>
            <p className="feature-description">Explore our extensive fleet of modern vehicles tailored to every need. <br/>From economical cars to spacious SUVs and luxury models, we offer a diverse selection to cater to all occasions.</p>
          </li>
          <li className="feature-item">
            <Link to="/" className="feature-link">Easy and Fast Booking</Link>
            <p className="feature-description">With our user-friendly platform, renting a car has never been easier.  <br/>In just a few clicks, plan your rental based on your needs and schedule, all hassle-free.</p>
          </li>
          <li className="feature-item">
            <Link to="/" className="feature-link">Rental Flexibility</Link>
            <p className="feature-description">We understand that plans can change. Enjoy the flexibility of our rental options, <br/> whether it's for a short city getaway, a business trip, or an extended road adventure.</p>
          </li>
          <li className="feature-item">
            <Link to="/" className="feature-link">Competitive Rates and Promotions</Link>
            <p className="feature-description">We believe in transparent and competitive rates. Explore our special <br/> offers and regular promotions to get the best savings on your car rental.</p>
          </li>
          <li className="feature-item">
            <Link to="/" className="feature-link">Advantageous Loyalty Program</Link>
            <p className="feature-description">Reward your loyalty with our loyalty program. Enjoy exclusive benefits, <br/> special discounts, and other perks to make each rental even more rewarding.</p>
          </li>
          <li className="feature-item">
            <Link to="/" className="feature-link">Rigorous Safety and Maintenance</Link>
            <p className="feature-description">Your safety is our priority. All our cars undergo regular maintenance  <br/>and rigorous quality checks to ensure reliable and worry-free driving.</p>
          </li>
          <li className="feature-item">
            <Link to="/" className="feature-link">Exceptional Customer Service</Link>
            <p className="feature-description">Our dedicated team is here to assist you at every step. Enjoy exceptional customer service,  <br/>whether it's for advice on booking or answering your questions during your journey.</p>
          </li>
          <li className="feature-item">
            <Link to="/" className="feature-link">Personalized Adventures</Link>
            <p className="feature-description">We believe every journey is unique. Customize your adventure by choosing the <br/> vehicle that suits your style and specific needs, experiencing the freedom to travel your way.</p>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default Services
