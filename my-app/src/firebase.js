var firebaseConfig = {
    apiKey: "AIzaSyAeONFO4Hz_kCUARARsiYwaTpftADwKzsI",
    authDomain: "border-hacks-57d66.firebaseapp.com",
    projectId: "border-hacks-57d66",
    storageBucket: "border-hacks-57d66.appspot.com",
    messagingSenderId: "117941030720",
    appId: "1:117941030720:web:3acc1c5b155be2765574a5",
    measurementId: "G-2GRQ3BD92R"
};

firebase.initializeApp(firebaseConfig)

db = firebase.firestore()

locList = [{intersectionID: 1}, {intersectionID: 2}, {intersectionID: 3}]

function addToLocList(ind, vtype, tstamp, idlst, qty){
    locList[ind][tstamp] = {
        vehicleType: vtype,
        isDaylightSavingsTime: idlst,
        Quantity: qty
    }
}

db.collection('intersectionID1').get().then(snapshot => {
    snapshot.docs.forEach(docs => {
        addToLocList(0, docs.data().vehicleType, docs.data().timeStamp, docs.data().isDaylightSavingsTime, docs.data().qty)
    })
})

db.collection('intersectionID2').get().then(snapshot => {
    snapshot.docs.forEach(docs => {
        addToLocList(1, docs.data().vehicleType, docs.data().timeStamp, docs.data().isDaylightSavingsTime, docs.data().qty)
    })
})

db.collection('intersectionID3').get().then(snapshot => {
    snapshot.docs.forEach(docs => {
        addToLocList(2, docs.data().vehicleType, docs.data().timeStamp, docs.data().isDaylightSavingsTime, docs.data().qty)
    })
})