import express from 'express'



const app = express()


const createApp = {
    
    setup: function () {


        // View
        app.set('view engine', 'pug');
        app.set('views', 'views');


        app.get("/",(req,res,next) => {
            res.render('index')
        })

        app.listen(3005,() => {
            console.log('App started at port 3005')
        })



    }

}

export default createApp;