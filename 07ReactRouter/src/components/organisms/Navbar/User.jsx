import React from 'react'
import { useParams } from 'react-router-dom'


function User() {
    const {userid} = useParams()
  return (
    <div className=' bg-gray-700 text-white text-center py-4 font-semibold'>User:{userid}</div>
  )
}

export default User