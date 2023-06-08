const Travel=require('../model/travel')
const crypto=require('crypto')
const router = require('../routes/travels')

exports.bookFlight=(req,res)=>{
   res.render('travel/flight')
}

exports.addFlight=(req,res)=>{
    const {name,depart,arrival,flightpackage,date,token}=req.body
crypto.randomBytes(12, (err, buffer) => {
        if (err) {
          req.flash('userError','Unable to perform')
          return res.render('travel/flight');
        }
        const token = buffer.toString('hex');
        console.log(token);
        Travel.create({
            name:name,
            depart:depart,
            arrival:arrival,
            flightpackage:flightpackage,
            token:token,
            date:date
        }).then(travel=>{
                res.render('travel/flight')
           
        }).catch(err=>{
            console.log(err)
        })

      });


}

exports.postFlight=(req,res)=>{
    Travel.findAll()
    .then(user=>{
        res.render('travel/post-flight',{flights:user})
    }).catch(err=>{
        console.log(err)
    })
}

exports.updateFlight=(req,res)=>{
    const id = req.params.id
    Travel.findByPk(id)
    .then(user=>{
        res.render('travel/update-flight', {flight:user} )
    }).catch(err=>{
        console.log(err)
    })
}

exports.getUpdate=(req,res)=>{
    const {id,name,depart,arrival,flightpackage,date}=req.body
    Travel.findByPk(id)
    .then(flight=>{
        flight.name=name,
        flight.depart=depart,
        flight.arrival=arrival,
        flight.flightpackage=flightpackage,
        flight.date=date

        flight.save()
    }).then(flight=>{
        res.redirect('/flight-booked')
    }).catch(err=>{
        console.log(err)
    })
    
}

exports.delete=(req,res)=>{
    const {id}=req.body
    Travel.findByPk(id)
    .then(flight=>{
        flight.destroy()
    }).then(flight=>{
        res.redirect('/flight-booked')
    }).catch(err=>{
        console.log(err)
    })
}

exports.homePage=(req,res)=>{
    res.render('travel/home-page')
}




 


