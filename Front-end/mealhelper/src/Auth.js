import React, { Component } from "react";
import auth0 from "auth0-js";
import { connect } from "react-redux";
//change the route for this
import { addUser } from "./store/actions/userActions";
import { withRouter } from "react-router-dom";

class Auth0Client extends Component {
  constructor(props) {
    super(props);
    this.auth0 = new auth0.WebAuth({
      domain: "eat-well.auth0.com",
      audience: "https://eat-well.auth0.com/userinfo",
      clientID: "FaLyBFfAnk3NbVlH3Tmfoz0OdGfNaHDz",
      redirectUri: "http://eat-well-app.now.sh/callback",
      responseType: "token id_token",
      scope: "openid email profile"
    });

    this.getProfile = this.getProfile.bind(this);
    this.handleAuthentication = this.handleAuthentication.bind(this);
    this.isAuthenticated = this.isAuthenticated.bind(this);
    this.signIn = this.signIn.bind(this);
    this.signOut = this.signOut.bind(this);
    this.signupRedux = this.signupRedux.bind(this);
  }

  getProfile() {
    return this.profile;
  }

  getIdToken() {
    return this.idToken;
  }
  signupRedux(user) {
    console.log(this.props);
    // this.props.addUser(user);
  }
  isAuthenticated() {
    return new Date().getTime() < this.expiresAt;
  }

  signIn() {
    this.auth0.authorize();
  }

  handleAuthentication() {
    return new Promise((resolve, reject) => {
      this.auth0.parseHash((err, authResult) => {
        if (err) return reject(err);
        if (!authResult || !authResult.idToken) {
          return reject(err);
        }
        this.idToken = authResult.idToken;
        this.profile = authResult.idTokenPayload;
        console.log(authResult);
        localStorage.setItem("email", this.profile.email);
        localStorage.setItem("token", this.idToken);

        this.expiresAt = authResult.expiresIn * 1000 + new Date().getTime();
        resolve();
      });
    });
  }

  signOut() {
    this.idToken = null;
    this.profile = null;
    this.expiresAt = null;
    localStorage.removeItem("email");
  }
}

const auth0Client = new Auth0Client();

const mapStateToProps = state => ({
  user: state.user
});

export default connect(
  mapStateToProps,
  { addUser }
)(withRouter(auth0Client));
