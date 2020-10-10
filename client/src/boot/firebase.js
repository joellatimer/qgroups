import * as firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'

const firebaseConfig = {
    apiKey: 'AIzaSyBpV0b5uPs8-L6DVREQnDAiIDFG_0oHF7Q',
    authDomain: 'communities-1b5c5.firebaseapp.com',
    databaseURL: 'https://communities-1b5c5.firebaseio.com',
    projectId: 'communities-1b5c5',
    storageBucket: 'communities-1b5c5.appspot.com',
    messagingSenderId: '244320189713',
    appId: '1:244320189713:web:42838acf77987c7ec5e0b0',
    measurementId: 'G-D26R4C6H48'
}
const firebaseApp = firebase.initializeApp(firebaseConfig)
const firebaseAuth = firebaseApp.auth()
const firebaseDb = firebaseApp.database()

export { firebaseAuth, firebaseDb }
