import React, { useState } from 'react';
import styles from './SignupSigninForm.module.css';
import { LoginSocialGoogle, LoginSocialFacebook, LoginSocialGitHub } from 'reactjs-social-login';
import { GoogleLoginButton, FacebookLoginButton, GitHubLoginButton } from 'react-social-login-buttons';

const SignupSigninForm = () => {
  const [isSignUp, setIsSignUp] = useState(true);

  const handleSignInClick = () => setIsSignUp(false);
  const handleSignUpClick = () => setIsSignUp(true);

  const handleGoogleResponse = (response) => {
    console.log(response);
    localStorage.setItem('user', response.data.name);
    localStorage.setItem('useremail', response.data.email);
  };

  const handleFacebookResponse = (response) => {
    console.log(response);
    localStorage.setItem('user', response.data.name);
    localStorage.setItem('useremail', response.data.email);
  };

  const handleGitHubResponse = (response) => {
    console.log(response);
    localStorage.setItem('user', response.data.name);
    localStorage.setItem('useremail', response.data.email);
  };

  return (
    <div className={styles.container}>
      <div className={styles.form}>
        <h1 className={styles.tit}>{isSignUp ? 'Sign Up' : 'Sign In'}</h1>
        <div className={styles.underline}></div>
        <form>
          <div className={styles.input}>
            {isSignUp && (
              <div className={styles.inputField}>
                <i className="fa fa-user" aria-hidden="true"></i>
                <input type="text" placeholder="Name" />
              </div>
            )}
            <div className={styles.inputField}>
              <i className="fa-regular fa-envelope"></i>
              <input type="email" placeholder="Email" />
            </div>
            <div className={styles.inputField}>
              <i className="fa-solid fa-lock"></i>
              <input type="password" placeholder="Password" />
            </div>
            <p>Password suggestions <a href="#">Click here!</a></p>
          </div>
          <div className={styles.btn}>
            <button type="button" className={styles.signupbtn} onClick={handleSignUpClick}>
              Sign Up
            </button>
            <button type="button" className={`${styles.dis} ${styles.signinbtn}`} onClick={handleSignInClick}>
              Sign In
            </button>
          </div>
        </form>
        <div className={styles.socialLogin}>
          <LoginSocialGoogle onResolve={handleGoogleResponse} onReject={(error) => console.log(error)}>
            <GoogleLoginButton />
          </LoginSocialGoogle>
          <LoginSocialFacebook onResolve={handleFacebookResponse} onReject={(error) => console.log(error)}>
            <FacebookLoginButton />
          </LoginSocialFacebook>
          <LoginSocialGitHub onResolve={handleGitHubResponse} onReject={(error) => console.log(error)}>
            <GitHubLoginButton />
          </LoginSocialGitHub>
        </div>
      </div>
    </div>
  );
};

export default SignupSigninForm;
