import React from 'react';
import './Login.css';

const Login = props =>{
    return(
        <div className="container">
        <h3>Sign In</h3>
        <div className="form-group">
          <label className="form-control-label">User Name</label>
          <input type="text" className="form-control" />
        </div>
        <div className="form-group">
          <label className="form-control-label">Password</label>
          <input type="password" className="form-control" />
        </div>
        <div className="form-group">
          <button className="btn btn-primary">Login</button>
        </div>
      </div>
    );
}

export default Login;