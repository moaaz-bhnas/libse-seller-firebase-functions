const functions = require("firebase-functions");
const admin = require("firebase-admin");
admin.initializeApp();

exports.addSellerRole = functions.https.onCall((data, context) => {
  return admin
    .auth()
    .setCustomUserClaims(data.uid, {
      seller: true,
    })
    .then(() => {
      return {
        message: "Adding seller role success!",
      };
    })
    .catch((err) => ({ err }));
});

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });
