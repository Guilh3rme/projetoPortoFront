import React from "react";
import "./Login.scss";
import foto from "../../assets/panorama-itaqui.jpg";
import logo from "../../assets/logo.png";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  /* MAPEAR O CONTEÚDO DAS CAIXAS DE TEXTO */
  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };
  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  /* Request Mapping for Login */
  const myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  const raw = JSON.stringify({
    login: username,
    password: password,
  });

  const requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: raw,
    redirect: "follow",
  };
  const handleClick = () => {
    fetch("http://localhost:8080/auth/login", requestOptions)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Aconteceu um erro de rede!");
        }
        return response.json();
      })
      .then((data) => {
        if (data.token) {
          navigate("/atraqui");
        }
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  return (
    <section id="login-around">
      <section id="login-container">
        <section className="left">
          <div className="logo">ATRAQUI</div>
          <div className="inputs">
            <i className="fa-solid fa-circle-user"></i>
            <input
              type="text"
              name="user"
              id="user"
              placeholder="Usuário"
              value={username}
              onChange={handleUsernameChange}
              autoComplete="off"
            />
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Senha"
              value={password}
              onChange={handlePasswordChange}
              autoComplete="off"
            />
            <button className="login-button" onClick={handleClick}>
              Entrar
            </button>
          </div>
        </section>
        <section className="right">
          <div className="image-overlay">
            <img src={logo}></img>
          </div>
          <div className="darker"></div>
          <img src={foto} alt="" />
        </section>
      </section>
    </section>
  );
};

export default Login;
