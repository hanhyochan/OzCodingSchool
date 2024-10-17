import React from 'react';
import { useParams, useLocation } from "react-router-dom";

function User () {
    const { userId } = useParams()
    const location = useLocation() 
    const queryParams = new URLSearchParams(location.search)
    const name = queryParams.get('name')
    return (
        <div>
            유저 Id : {userId}
            유저 name : {name}
        </div>
    )
}

export default User;