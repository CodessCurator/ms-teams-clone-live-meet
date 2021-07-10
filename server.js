require("dotenv").config();
const fs = require("fs")
const express = require("express");
const http = require("http");
const https = require("https");
const bodyParser = require("body-parser");
const cors = require("cors");
const port = process.env.PORT;
const app = express();
const Routes = require("./app/routes");
const path = require('path');

const privateKey = fs.readFileSync('/etc/ssl/private/nginx-selfsigned.key', 'utf8');
const certificate = fs.readFileSync('/etc/ssl/certs/nginx-selfsigned.crt', 'utf8');

const credentials = {key: privateKey, cert: certificate};


app.use([
  cors(),
  bodyParser.json(),
  bodyParser.urlencoded({ extended: false }),
  Routes,
]);

/*var options = {
	dotfiles: 'ignore',
	setHeaders: (res, path, stat) => {
		console.log(path);
		if(!path.includes("index"))
			res.set('Content-Type', 'video/mp4')
	}
}*/

app.use(express.static("public"));
app.get('*', (req, res) => {res.sendFile(path.join(__dirname, "public/index.html"))});
const server = http.createServer(app);
const httpsServer = https.createServer(credentials, app);

// const io = (module.exports.io = require("socket.io")(server));
// This is missing in the video.
const io = (module.exports.io = require('socket.io')(server, {
    cors: {
        origin: '*',
    }
}));

const sio = (module.exports.sio = require('socket.io')(httpsServer, {
	cors: {
		origin: '*',
	}
}));

const socketManager = require("./app/socketManager");
io.on("connection", socketManager);
sio.on("connection", socketManager);

server.listen(4443, () => {
  console.log(`Server is running on port ${4443}`);
});

httpsServer.listen(port, () => {
	console.log(`SecureServer Started at Port ${port}`);
});



