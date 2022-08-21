import React, {useContext} from 'react';
import {Navigate, Route, Routes} from "react-router-dom";
import About from "../pages/About";
import Posts from "../pages/Posts";
import Error from "../pages/Error";
import PostIdPage from "../pages/PostIdPage";
import Login from "../pages/Login";
import {AuthContext} from "../context";

const AppRouter = () => {
    // const isAuth = true;
    const {isAuth} = useContext(AuthContext)
    console.log(isAuth)
    return (
        isAuth
            ?
            <Routes>
                <Route path="/about" element={<About/>}/>
                <Route path="/posts" element={<Posts/>}/>
                <Route path="/posts/:id" element={<PostIdPage/>}/>
                <Route path="*" element={<Posts/>}/>
            </Routes>
            :
            <Routes>
                <Route path="*" element={<Login/>}/>
                {/*<Navigate to="/login" replace={true} />*/}
            </Routes>
    );
};

export default AppRouter;