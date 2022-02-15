import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { AuthAPI } from "./../API";

const Auth = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const getNaverToken = () => {
    if (!location.hash) return;
    const token = location.hash.split("=")[1].split("&")[0];

    AuthAPI.Login(token).then((res) => {
      console.log(res.data);
      navigate("/joinpage1", { state: res.data });
    });
  };

  useEffect(() => {
    getNaverToken();
  }, []);

  return (<div>로그인 중</div>)
};

export default Auth;
