import React from 'react';
import { useSelector } from 'react-redux';
import './Dashboard.css'; 

function Dashboard() {
  const user = useSelector((state) => state.user);
  
  

  return (
    
    <div>
      <h2 style={{ textAlign: 'center' }}>User Profile</h2>

      <div className="card">
        <div className="profile-info">
          <div className="profile-picture">
            {user && user.profilePicture ? (
              <img
                src={user.profilePicture}
                alt={user.name}
                style={{
                  width: '100%',
                  height: '100%',
                  borderRadius: '50%',
                  objectFit: 'cover',
                }}
              />
            ) : (
              <div
                className="default-profile"
                style={{
                  width: '100%',
                  height: '100%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  backgroundColor: '#ccc',
                  color: '#fff',
                  borderRadius: '50%',
                  fontSize: '16px',
                }}
              >
                No Picture
              </div>
            )}
          </div>
          <h1>{user && `${user.name} ${user.lastName}`}</h1>
          <p className="title">{user && user.role}</p>
          <p>{user && user.education}</p>
          <div>
            <a href="#"><i className="fa fa-twitter"></i></a>
            <a href="#"><i className="fa fa-linkedin"></i></a>
            <a href="#"><i className="fa fa-facebook"></i></a>
          </div>
          <p>
          <button type="button">Open Profile</button>
          <div class="alert alert-success">
  <strong>Success!</strong> Explorer at heart, navigating life's journey with a passion for the open road.<br/> In the driver's seat of both career aspirations and wanderlust, fueled by the thrill of discovering new destinations behind the wheel. 🚗✨
</div>
          </p>
        </div>
      </div>
     
    </div>
  );
}

export default Dashboard;

