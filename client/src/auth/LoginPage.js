import React, { useState } from "react";
import { useHistory, Link, Redirect } from "react-router-dom";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

export const LoginPage = ({ isLoading }) => {
  const [emailValue, setEmailValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");
  const [loginError, setLoginError] = useState("");
  const history = useHistory();

  if (localStorage.getItem("id")) {
    return <Redirect to="/" />;
  }

  const onClickLogin = async () => {
    setLoginError("");
    signInWithEmailAndPassword(getAuth(), emailValue, passwordValue)
      .then((data) => {
        localStorage.setItem("id", data.user.uid);
        history.push("/");
      })
      .catch((e) => {
        console.log(e.message);
        if (!emailValue || !passwordValue) {
          setLoginError("Please fill all the values...");
        } else if (e.message.includes("wrong-password")) {
          setLoginError("Incorrect login attempt!!!");
        } else if (e.message.includes("user-not-found")) {
          setLoginError("You are not a member!!!");
        } else if (e.message.includes("too-many-requests")) {
          setLoginError("Too many login attempts. Please try again later!");
        } else if (e.message.includes("invalid-email")) {
          setLoginError("Please type a valid email address...");
        } else {
          setLoginError(e.message);
        }
      });
  };

  return isLoading ? (
    <p style={{ textAlign: "center" }}>Loading...</p>
  ) : (
    <div className="full-height-page">
      <div className="centered-container space-before vertical-center fade-in">
        <div className="card" style={{ borderRadius: "8px" }}>
          <div className="card-header">
            <h5>Login</h5>
          </div>
          <div className="card-body">
            {loginError ? (
              <div>
                <p className="error-message">{loginError}</p>
              </div>
            ) : null}
            <input
              type="email"
              value={emailValue}
              placeholder="Email address"
              className="full-width space-after"
              onChange={(e) => {
                setEmailValue(e.target.value);
                setLoginError("");
              }}
              required
            />
            <input
              type="password"
              value={passwordValue}
              placeholder="Password"
              className="full-width space-after"
              onChange={(e) => {
                setPasswordValue(e.target.value);
                setLoginError("");
              }}
              required
            />
            <button className="full-width space-after" onClick={onClickLogin}>
              Login
            </button>
          </div>
          <div className="card-footer text-muted">
            <p className="space-after" style={{ textAlign: "center" }}>
              Do not have a account? <Link to="/register">Register</Link>
            </p>
            <p style={{ textAlign: "center" }}>
              <Link to="/forgot-password">Forgot Password?</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
