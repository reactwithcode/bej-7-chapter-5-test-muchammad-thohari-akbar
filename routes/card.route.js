const router = require("express").Router();
const card = require('../controller/card.controller');

const cardClass = new card();

router.get("/", (req, res, next) => {

    cardClass.getAllCards()
        .then(data => {
            return res.status(200).json({
                data
            })
        })
        .catch(err => {
            return res.status(400).json({
                data: err
            }) 

        })
});

module.exports = router;