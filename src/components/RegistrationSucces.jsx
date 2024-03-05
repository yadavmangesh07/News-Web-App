import React from 'react';
import image from '/Users/mangeshyadav/Desktop/React/new-app/src/assets/profile.png';

function RegistrationSuccess() {
  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card">
            <div className="card-body p-5">
              <h3 className="card-title text-center">Registration Successful</h3>
              <img src={image} alt="Accept" className="img-fluid mx-auto d-block" style={{ maxWidth: '8rem', maxHeight: '9rem' }}/>
              <h5 className="card-text text-center p-3">Thank You For Registering To NewziFy !</h5>
              <div className="text-center">
                <a href="/" className="btn btn-outline-success mt-3">Go to Home</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RegistrationSuccess;