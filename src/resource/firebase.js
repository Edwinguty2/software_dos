// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBlTQl1VydAlz2jiIBzLhorC7uKz5lg9Cg",
  authDomain: "ecommerce-logan-29604.firebaseapp.com",
  projectId: "ecommerce-logan-29604",
  storageBucket: "ecommerce-logan-29604.appspot.com",
  messagingSenderId: "1033963926929",
  appId: "1:1033963926929:web:df80bef3ffb405dddc5630",
  measurementId: "G-W2ZE6LY1L6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

//npm install firebase

//npm install -g firebase-tools

//firebase login

//firebase init

//firebase deploy
//npm run build
//firebase deploy --only hosting


/*firebase emulators:start --only functions*/
//firebase deploy --only functions
//firebase functions:log
//firebase functions:log --only generarIdMP

//firebase deploy --only functions:chatbot

//firebase deploy --only functions:crearIdMP,functions:creaPagoMP

//firebase functions:config:set mercadopago.accesstoken="APP_USR-240639848989783-110620-0582174d79f9a4c07acb801d69eba330-1012945351"
//firebase functions:config:unset mercadopago
/*
{
  "mercadopago": {
    "accesstoken":"APP_USR-240639848989783-110620-0582174d79f9a4c07acb801d69eba330-1012945351"
  }
}
*/
//functions.config().mercadopago.accesstoken

/*
const imagen = 'https://firebasestorage.googleapis.com/v0/b/ecommerce-logan-29604.appspot.com/o/productos-imagenes%2Fmochila-logan.glb?alt=media&token=2b74a1c6-27cf-4e73-9b3b-54fe80462cb9';

const extension = imagen.split('.').pop().split(/\#|\?/)[0]; 

if(extension === "glb"){
console.log("Es GLB");
}else{
console.log("Es JPG o PNG");
}


const imagen = 'https://firebasestorage.googleapis.com/v0/b/ecommerce-logan-29604.appspot.com/o/productos-imagenes%2FMaletin%20Logan%20-%20FIT%20-%20Fuxia-1.jpg1636226993693163544351221493434?alt=media&token=f50caa6c-458d-4531-b9f8-d15943a9152c';
const imagen2 = 'https://firebasestorage.googleapis.com/v0/b/ecommerce-logan-29604.appspot.com/o/productos-imagenes%2Fmochila-logan.glb?alt=media&token=2b74a1c6-27cf-4e73-9b3b-54fe80462cb9';

const extension = imagen.split('.').pop().split(/|\?/)[0]; 
console.log(extension)

if(extension === "g"){
console.log("Es GLB");
}else{
console.log("Es JPG o PNG");
}

*/