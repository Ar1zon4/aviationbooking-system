const router=require('express').Router()
const flightcontroller=require('../controller/travel')

router.get('/book-flight',flightcontroller.bookFlight)
router.post('/book-flight',flightcontroller.addFlight)

router.get('/flight-booked', flightcontroller.postFlight)

router.get('/update-flight/:id',flightcontroller.updateFlight)
router.post('/update-flight',flightcontroller.getUpdate)

router.post('/delete-flight',flightcontroller.delete)

router.get('/home-page',flightcontroller.homePage)




module.exports=router
