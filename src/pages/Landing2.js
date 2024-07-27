import React from 'react';
import { Link } from 'react-router-dom';
import {Auth} from '../components/auth';

function Landing2() {
  return (
    <div className="landing">
      <h1>Welcome to Our EdTech Platform</h1>
      <p>Learn amazing skills with our courses!</p>
      <Link to="/checkout">
        <button>Enroll Now</button>
      </Link>
      <Auth />
    </div>
  );
}

export default Landing2;