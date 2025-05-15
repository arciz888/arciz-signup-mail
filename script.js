
// Your Firebase config (already customized)
const firebaseConfig = {
  apiKey: "AIzaSyA97ODbEQTSSnDy50fwkO06KgCxOWWVd6Q",
  authDomain: "arcizapp.firebaseapp.com",
  databaseURL: "https://arcizapp-default-rtdb.firebaseio.com",
  projectId: "arcizapp",
  storageBucket: "arcizapp.firebasestorage.app",
  messagingSenderId: "110033392242",
  appId: "1:110033392242:web:2354610b9cc6420f6c68eb",
  measurementId: "G-SLT4JL14Z4"
};

// Initialize Firebase using compat SDK
firebase.initializeApp(firebaseConfig);

document.querySelector('button').addEventListener('click', () => {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  firebase.auth().signInWithEmailAndPassword(email, password)
    .then((userCredential) => {
      console.log("Login successful. Redirecting...");
      window.location.href = "wallet.html";
    })
    .catch((error) => {
      alert("Login Error: " + error.message);
    });
});
