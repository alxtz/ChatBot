//GET/?name=howard，一種GET的方式
const express = require('express')
var bodyParser = require('body-parser')
const request = require('request');

const app = express()

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.get('/', function (req, res) {
    res.send(req.query['hub.challenge'])
})

app.post('/',function (req, res) {
    console.log(req.body);

    var url = 'https://graph.facebook.com/v2.6/me/messages?access_token=EAABsOclAOeUBAEcMEOjqCeCJwM6T1RE3dbN05oZCgIqSAO9bFzTahwC7q9MqZAlWbydOMpuSjSliahhkVhuBfXt2ULMDlIiC9zCJVRneJ1hgZCkFJ32v0ZCZCHRS01VGvsFj2XLkCBKXOofzCz3GsCIbLajutJeuHvb9Yw0szuNvZARBZCgZBwWY'

    var data = {
        "recipient": {
            "id": "1196457493810549"
        },
        "message": {
            "text": "hello, world!"
        }
    }

    request({
        url: url,
        method: 'POST',
        json: data
    },function() {
        res.send('')
    })
})

app.listen(3000, function () {
    console.log('Example app listening on port 3000!')
})
