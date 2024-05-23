import React from 'react'
import UserContext from '../context/UserContext'
import { useContext } from 'react'


function Profile() {
const {user} = useContext(UserContext)
    if(!user) return <div className='bg-gray-400 p-3 mt-3'>Please login</div>
    return <div className='bg-gray-400 p-3 mt-3'>Welcome {user.username}</div>
}

export default Profile