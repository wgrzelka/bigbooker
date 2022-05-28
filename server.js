let express = require('express');
let app = express();
app.use(express.static(__dirname+'/dist/bigbooker'));
app.get('*', (req, resp) => {
    resp.sendFile(__dirname+'/dist/bigbooker/index.html');
});

app.listen(process.env.PORT  || 8080);