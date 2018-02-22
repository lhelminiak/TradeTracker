import { AppRegistry } from 'react-native';
import App from './App';
import * as firebase from 'firebase';
AppRegistry.registerComponent('TradeTracker', () => App);
// Initialize Firebase
const firebaseConfig = {
        apiKey: "<your-api-                                                                                                          key>",
        authDomain: "<your-auth-domain>",
        databaseURL: "<your-database-url>",
        storageBucket: "<your-storage-bucket>",
    };
const firebaseApp = firebase.initializeApp(firebaseConfig);