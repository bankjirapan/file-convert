import express from 'express'
import path from 'path'



const app = express()



const createApp = {
    
    setup: function () {


        // View
        app.set('view engine', 'pug');
        app.set('views', 'views');
        app.use(express.static(path.join(__dirname, '../public')));


        app.get("/",(req,res,next) => {
            res.render('index')
        })

        app.listen(3005,() => {
            console.log('App started at port 3005')
        })



    }

}

export default createApp;