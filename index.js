const express = require('express');
const app = express();

const cardsRoute = require('./routes/card.route');

require('dotenv').config();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/cards'. cardsRoute);

app.listen(port, () => {
    if(process.env.ENV == 'DEV') {
        console.log('This is development server');
    } else if(process.env.ENV == 'PROD') {
        console.log('This is production server');
    } else {
        console.log(`ENV tidak terbaca`);
    }
    console.log(`app is running on port ${port}`);
})