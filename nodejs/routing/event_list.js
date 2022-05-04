const express = require('express')
const router = express.Router();
const sqlModule = require('../modules/event_list')
const webModules = require('../modules/website')

router.get('/', async(req, res) => {
    const dataObject = await sqlModule.getEvents()
    const data = await webModules.getContent(dataObject)
    let website = webModules.getHead() + webModules.getContentHead() + data + webModules.getContentBody() + webModules.getFooter()
    res.status(200).send(website)
});

module.exports = router;