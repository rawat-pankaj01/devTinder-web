import React, { useState } from 'react'
import UserCard from './UserCard'
import axios from 'axios';
import { BASE_URL } from '../utils/constant';
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/userSlice';

const EditProfile = ({user}) => {
    const [firstName, setFirstName] = useState(user.firstName);
    const [lastName, setLastName] = useState(user.lastName);
    const [age, setAge] = useState(user.age || '');
    const [gender, setGender] = useState(user.gender || '');
    const [about, setAbout] = useState(user.about || '');
    const [photoUrl, setPhotoUrl] = useState(user.photoUrl);
    const [errors, setErrors] = useState('');
    const [showToast, setShowToast] = useState('');
    const dispatch = useDispatch();

    const saveProfile = async () => {
        setErrors('');
        try {
            const res = await axios.patch(BASE_URL + "/profile/edit",
             {firstName, lastName, photoUrl, age, gender, about},
                {  headers: { "Content-Type": "application/json" },
                    withCredentials: true
                }
              );
            dispatch(addUser(res?.data?.data));
        } catch (err) { 
            console.error(err);
        }
    }
    return (
        <div className='flex justify-center my-10' >
        <div className='flex justify-center mx-10'>
            <div className="card bg-base-300 w-96 shadow-xl">
                <div className="card-body">
                    <h2 className="card-title justify-center">Edit Profile</h2>
                    <div>
                        <label className="form-control w-full max-w-xs my-2">
                            <div className="label">
                                <span className="label-text">First Name</span>
                            </div>
                            <input type="text"
                                value={firstName}
                                onChange={(e) => setFirstName(e.target.value)}
                                className="input input-bordered w-full max-w-xs" />

                        </label>
                        <label className="form-control w-full max-w-xs my-2">
                            <div className="label">
                                <span className="label-text">Last Name</span>
                            </div>
                            <input type="text"
                                value={lastName}
                                onChange={(e) => setLastName(e.target.value)}
                                className="input input-bordered w-full max-w-xs" />

                        </label>
                        <label className="form-control w-full max-w-xs my-2">
                            <div className="label">
                                <span className="label-text">Age</span>
                            </div>
                            <input type="text"
                                value={age}
                                onChange={(e) => setAge(e.target.value)}
                                className="input input-bordered w-full max-w-xs" />

                        </label>
                        <label className="form-control w-full max-w-xs my-2">
                            <div className="label">
                                <span className="label-text">Gender</span>
                            </div>
                            <input type="text"
                                value={gender}
                                onChange={(e) => setGender(e.target.value)}
                                className="input input-bordered w-full max-w-xs" />

                        </label>
                        <label className="form-control w-full max-w-xs my-2">
                            <div className="label">
                                <span className="label-text">About</span>
                            </div>
                            <input type="text"
                                value={about}
                                onChange={(e) => setAbout(e.target.value)}
                                className="input input-bordered w-full max-w-xs" />

                        </label>
                        <label className="form-control w-full max-w-xs my-2">
                            <div className="label">
                                <span className="label-text">Photo URL</span>
                            </div>
                            <input type="text"
                                value={photoUrl}
                                onChange={(e) => setPhotoUrl(e.target.value)}
                                className="input input-bordered w-full max-w-xs" />

                        </label>
                    </div>
                    <div className="card-actions justify-center">
                        <button className="btn" onClick={saveProfile
                        }>Save Profile</button>
                    </div>
                </div>
            </div>

        </div>
        <UserCard  user={{firstName, lastName, photoUrl, age, gender, about}}/>
        </div>
    )
}

export default EditProfile