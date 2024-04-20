import express from 'express'

const app = express()


const createApp = {
    
    setup: function () {

        app.listen(3005,() => {
            console.log('App started at port 3005')
        })

    }

}

export default createApp;