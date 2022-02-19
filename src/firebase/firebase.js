import * as firebase from 'firebase';

const config = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.FIREBASE_APP_ID,
    measurementId: process.env.FIREBASE_MEASUREMENT_ID
};

firebase.initializeApp(config);

const database = firebase.database();

export { firebase, database as default};













// database.ref('Expenses').push({
//     description:'Rent',
//     note:'firebaseSucks',
//     amount:666,
//     createdAt:6667
// });

// database.ref('Expenses').on('value',  (snapshot) => {
//     const expenses = [];

//     snapshot.forEach((childSnapshot) => {
//         expenses.push({
//             id: childSnapshot.key,
//             ...childSnapshot.val()
//         });
//     });

//     console.log(expenses);

// });

// database.ref('Expenses').on('child_removed',  (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
// })

// database.ref('Expenses').on('child_changed',  (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
// })

// database.ref('Expenses').on('child_added',  (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
// })

// const onValueChange = database.ref().on('value', (snapshot) => {
//     const val = snapshot.val();
//     console.log(val.name, ' is a ', val.job.title, ' at ', val.job.company); 
// }, (e) => {
//     console.log('failed ', e);
// });

// onValueChange;

// database.ref()
//     .once('value')
//     .then((snapshot) => {
//         const val = snapshot.val();
//         console.log(val);
//     }).catch((e) => {
//         console.log('failed ', e);
//     });

// database.ref().set({
//     name: 'Luchos',
//     age: 34,
//     stressLevel: 6,
//     job: {
//         title: 'sw dev',
//         company: 'google'
//     },
//     location: {
//         city: 'bblanca',
//         country: 'arg'
//     }
// }).then(() => {
//     console.log('data saved');
// }).catch((e) => {
//     console.log('failed ', e);
// });

// database.ref('attributes').set({
//     height: 180,
//     weight: 95
// }).then(() => {
//     console.log('data updated.');
// }).catch((e) => {
//     console.log('failed ', e);
// });

// database.ref().update({
//     stressLevel: 9,
//     'location/city': 'seatle',
//     'job/company': 'amazon'
// });

// database.ref().update({
//     job: 'managger',
//     'location/city': 'ny'    
// });

//database.ref('isSingle').set(null); 

// database.ref('isSingle').remove().then(() => {
//     console.log('data removed.');
// }).catch((e) => {
//     console.log('failed ', e);
// });
