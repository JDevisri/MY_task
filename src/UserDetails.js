//REDUX

import React from 'react';
import { useSelector } from 'react-redux';

const UserDetails = () => {
    const userDetails = useSelector((state) => state.user.userName)
    return <div className='user'>{userDetails}</div>
}
export default UserDetails;













// import React from "react";
// function UserDetails({username}){
//     return(
//         <h1>{username}</h1>
//     )
// }
// export default UserDetails;