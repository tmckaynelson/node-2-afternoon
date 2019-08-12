let messages = []
let nextId = 0

createMessage = (req,res) => {

    console.log('text', req.body.text)
    console.log('time', req.body.time)

    let newMessage = {
        id: nextId,
        text: req.body.text || '',
        time: req.body.time || ''
    }

    nextId++

    messages.push(newMessage)

    res.status(200).send(messages)
}

readMessage = (req,res) => {
    
    res.status(200).send(messages)
}

updateMessage = (req,res) => {
    let {id} = req.params

    messages.forEach((element, index, array) => {
        if (element.id === +id) {
            array[index].text = req.body.text
        }
    })

    res.status(200).send(messages)
}

deleteMessage = (req,res) => {
    let {id} = req.params

    messages.forEach((element, index, array) => {
        if (element.id === +id) {
            array.splice(index,1)
        }
    })

    res.status(200).send(messages)
}

module.exports = {
    createMessage,
    readMessage,
    updateMessage,
    deleteMessage
}