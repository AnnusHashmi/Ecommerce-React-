import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyCUlVbvXQaAS0Z8voEOS3rYrMYOaGRp5AE",
    authDomain: "crwn-ecommerce-11470.firebaseapp.com",
    databaseURL: "https://crwn-ecommerce-11470.firebaseio.com",
    projectId: "crwn-ecommerce-11470",
    storageBucket: "crwn-ecommerce-11470.appspot.com",
    messagingSenderId: "938710876351",
    appId: "1:938710876351:web:da5f7c9a3f26e7a947c60a",
    measurementId: "G-LPQRBP9MZR"
  };

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

export const createUserProfile = async (userAuth, additionalData) => {
if(!userAuth) return;

const userRef = firestore.doc(`users/${userAuth.uid}`);

const snapShot = await userRef.get()

if(!snapShot.exists){
  const {displayName , email} = userAuth;
  const createdAt = new Date();

  try {
    await userRef.set({
      displayName, 
      email,
      createdAt,
      ...additionalData
    })
  } catch (error) {
    console.log("the error is: ", error.message);
  }
}

return userRef;
}

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt : 'select_account'});
export const signInWithGoogle = () => {auth.signInWithPopup(provider)};

export default firebase;