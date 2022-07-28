const express = require('express');
const app = express();

express.static.mime.define({'application/javascript': ['js']});

app.use(express.static('./'));

// app.get('*', (req, res) => {
//   res.sendFile(path.join(__dirname + '/index.html'));
// });

// express.static('../pkg');

//jack wuz here

app.listen(8080, () => console.log('Listening on port 8080!'));