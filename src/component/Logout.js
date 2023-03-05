import React, {useEffect} from "react";
import { Route, Routes, useNavigate } from 'react-router-dom';

const Logout = () => {
    const navigate = useNavigate();
    
    useEffect(() => {
        localStorage.clear();
        navigate('/', { replace: true });
    }, []);
}

export default Logout;