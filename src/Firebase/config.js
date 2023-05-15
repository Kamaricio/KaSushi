import firebase from 'firebase/app'
import'firebase/firestore' 

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCq_nMDFKbz4DVAHt2ltoVMCNZYmjtdc5U",
  authDomain: "kasushi-6fcb5.firebaseapp.com",
  projectId: "kasushi-6fcb5",
  storageBucket: "kasushi-6fcb5.appspot.com",
  messagingSenderId: "534254623292",
  appId: "1:534254623292:web:a97f365806af57cc5ac139"
};

const app = firebase.initializeApp(firebaseConfig)

export const  getFirestore = () =>{
    return firebase.firestore (app)
}