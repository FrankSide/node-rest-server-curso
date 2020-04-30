//=================
// Puerto
//=================
process.env.PORT = process.env.PORT || 3000;
//=================
// Vencimiento token
// 60 segundos
// 60 minutos
// 24 horas
// 30 días
//=================
process.env.CADUCIDAD_TOKEN = 60 * 60 * 24 * 30;
//=================
// SEED de autenticación
//=================
process.env.SEED = process.env.SEED || 'secret-es-el-seed-desarrollo';
//=================
// Entorno
//=================
process.env.NODE_ENV = process.env.NODE_ENV || 'dev';
//=================
// Base de datos
//=================
let urlDB = '';

if (process.env.NODE_ENV === 'dev') {
    urlDB = 'mongodb://localhost:27017/cafe';
} else {
    urlDB = process.env.MONGO_URI;
}

process.env.URLDB = urlDB;

//=================
// Google client ID
//=================
process.env.CLIENT_ID = process.env.CLIENT_ID || '580521516559-qmkus3u6ssm2m0nh2obof1o82dfv37ek.apps.googleusercontent.com';