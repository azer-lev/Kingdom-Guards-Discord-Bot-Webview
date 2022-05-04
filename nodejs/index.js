const Express = require('express')

const app = Express()
require('./routing/routes')(app);

app.listen(3000, () => console.log('Express server started on: ' + 3000))