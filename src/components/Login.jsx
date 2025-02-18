import axios from 'axios';
import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/userSlice';
import { useNavigate } from 'react-router-dom';
import { BASE_URL } from '../utils/constant';
const Login = () => {
  const dispatch = useDispatch();  
  const navigate = useNavigate();
  const [emailId, setEmailId] = useState('rishab@pant.com');
  const [password, setPassword] = useState('TestPant@123');
  const handleLogin = async () => {
    try {

      const res = await axios.post(BASE_URL + "/login", {
        emailId,
        password
      },{withCredentials: true});
      dispatch(addUser(res.data));
      navigate("/");

    } catch (err) {
      console.error(err);
    }
  };
  return (
    <div className='flex justify-center my-10'>
      <div className="card bg-base-300 w-96 shadow-xl">
        <div className="card-body">
          <h2 className="card-title justify-center">Login</h2>
          <div>
            <label className="form-control w-full max-w-xs my-2">
              <div className="label">
                <span className="label-text">Email ID</span>
              </div>
              <input type="text"
                value={emailId}
                onChange={(e) => setEmailId(e.target.value)}
                className="input input-bordered w-full max-w-xs" />

            </label>
            <label className="form-control w-full max-w-xs my-2">
              <div className="label">
                <span className="label-text">Password</span>
              </div>
              <input type="text"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="input input-bordered w-full max-w-xs" />

            </label>
          </div>
          <div className="card-actions justify-center">
            <button className="btn" onClick={handleLogin}>Login</button>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Login
