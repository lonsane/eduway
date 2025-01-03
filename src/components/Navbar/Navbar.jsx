import React, { useState } from "react";
import styles from "./Navbar.module.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showLoginModal, setShowLoginModal] = useState(false);

  // Basic login functionality
  const handleLogin = (e) => {
    e.preventDefault();
    if (username === "admin" && password === "password") {
      setIsLoggedIn(true);
      setShowLoginModal(false);
    } else {
      alert("Invalid credentials!");
    }
  };

  const handleLoginWithGoogle = () => {
    alert("Logging in with Google...");
    setIsLoggedIn(true);
    setShowLoginModal(false);
  };

  const handleLoginWithGitHub = () => {
    alert("Logging in with GitHub...");
    setIsLoggedIn(true);
    setShowLoginModal(false);
  };

  return (
    <nav className={styles.navbar}>
      <a className={styles.title} href="/">
        eduway
      </a>

      <div className={styles.menu}>
        <img
          className={styles.menuBtn}
          src={menuOpen ? "/assets/nav/close.png" : "/assets/nav/menu.png"}
          alt="menu-button"
          onClick={() => setMenuOpen(!menuOpen)}
        />

        <ul
          className={`${styles.menuItems} ${menuOpen && styles.menuOpen}`}
          onClick={() => setMenuOpen(false)}
        >
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#project">Job</a>
          </li>
          <li>
            <a href="#Degrees">Degrees</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </div>

      <div className={styles.loginContainer}>
      <button
    className={styles.surveyBtn}
    onClick={() => window.open("https://lonsane.github.io/survey-form/", "_blank")}
  >
    Survey
  </button>

        {!isLoggedIn ? (
          <button
            className={styles.loginBtn}
            onClick={() => setShowLoginModal(true)}
          >
            Login
          </button>
        ) : (
          <span>Welcome, User</span>
        )}
      </div>

      {/* Login Modal */}
      {showLoginModal && (
        <div className={styles.modal}>
          <div className={styles.modalContent}>
            <span
              className={styles.closeBtn}
              onClick={() => setShowLoginModal(false)}
            >
              &#10005;
            </span>
            <h2>Login</h2>
            <form onSubmit={handleLogin} className={styles.loginForm}>
              <input
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
                className={styles.inputField}
              />
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className={styles.inputField}
              />
              <button type="submit" className={styles.loginBtnSubmit}>
                Login
              </button>
            </form>
            <div className={styles.socialLogin}>
              <button
                onClick={handleLoginWithGoogle}
                className={styles.socialBtn}
              >
                Login with Google
              </button>
              <button
                onClick={handleLoginWithGitHub}
                className={styles.socialBtn}
              >
                Login with GitHub
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
