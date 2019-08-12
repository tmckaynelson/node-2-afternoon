const express = require('express')
const messageCtrl = require('./controllers/messagesController')


const app = express()
app.use(express.static(__dirname + '/../public/build/'))

app.use(express.json())

app.get('/api/messages', messageCtrl.createMessage)

app.put('/api/messages/:id', messageCtrl.updateMessage)

app.post('/api/messages', messageCtrl.createMessage)

app.delete('/api/messages/:id', messageCtrl.deleteMessage)

app.listen(3001, () => {
    console.log('server running on port 3001')
})