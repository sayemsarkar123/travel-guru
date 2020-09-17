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
    .catch(error => console.log(error))
}

export const facebookAuth = () => {
  const provider = new firebase.auth.FacebookAuthProvider();
    return firebase.auth().signInWithPopup(provider)
      .then(result => {
        const { displayName, email } = result.user;
        return { isSignIn: true, name: displayName, email };
      })
      .catch(error => console.log(error))
}

const updateProfile = (name) => {
  const user = firebase.auth().currentUser;
  user.updateProfile({ displayName: name })
    .then(result => console.log(result))
    .catch(error => console.log(error))
}

export const userSignUp = (name, email, password) => {
  firebase.auth().createUserWithEmailAndPassword(email, password)
  .then(result => {
    updateProfile(name);
    console.log(result);
  })
  .catch(error => console.log(error))
}

export const userSignIn = (email, password) => {
  return firebase.auth().signInWithEmailAndPassword(email, password)
  .then(result => {
    const { displayName, email } = result.user;
    return { isSignIn: true, name: displayName, email };
  })
  .catch(error => console.log(error))
}