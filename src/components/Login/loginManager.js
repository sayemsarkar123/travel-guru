import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from "./firebaseConfig";

export const initializeFirebaseApp = () => {
  if (firebase.apps.length === 0) {
    firebase.initializeApp(firebaseConfig);
  }
}

export const googleAuth = () => {
  const provider = new firebase.auth.GoogleAuthProvider();
  return firebase.auth().signInWithPopup(provider)
    .then(result => {
      const { displayName, email } = result.user;
      return { isSignIn: true, name: displayName, email };
    })
    .catch(() => {})
}

export const facebookAuth = () => {
  const provider = new firebase.auth.FacebookAuthProvider();
    return firebase.auth().signInWithPopup(provider)
      .then(result => {
        const { displayName, email } = result.user;
        return { isSignIn: true, name: displayName, email };
      })
      .catch(() => {})
}

const updateProfile = (name) => {
  const user = firebase.auth().currentUser;
  user.updateProfile({ displayName: name })
    .then(() => {})
    .catch(() => {})
}

export const userSignUp = (name, email, password) => {
  return firebase.auth().createUserWithEmailAndPassword(email, password)
    .then(() => {
      updateProfile(name);
      return 'Account created successfully';
    })
    .catch(() => 'Account creation failed')
}

export const userSignIn = (email, password) => {
  return firebase.auth().signInWithEmailAndPassword(email, password)
    .then(result => {
      const { displayName, email } = result.user;
      return { isSignIn: true, name: displayName, email };
    })
    .catch(() => {
      return { error: 'Incorrect username or password.' };
    });
}

export const resetPassword = (email) => {
  const auth = firebase.auth();
  auth.sendPasswordResetEmail(email)
    .then(() => {})
    .catch(() => {})
}