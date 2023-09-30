const router = require("express").Router();
let Appointment = require("../models/Appointments");

router.route("/").post((req,res)=>{
    const contact = req.body.contact;
    const nic=req.body.nic;
    const dogid = req.body.dogid;
    const fee = req.body.fee;
    const date=req.body.date;
    const time = req.body.time;
    const reason = req.body.reason;
    
    const newAppointment = new Appointment({
        name:req.body.name,
        contact,
        nic,
        dogid,
        fee,
        date,
        time,
        reason
    })
    newAppointment.save().then(()=>{
        res.status(201).send(newAppointment)
    }).catch((err)=>{
        console.log(err);
    })

})

router.route("/").get((req,res)=>{
    Appointment.find().then((appointments)=>{
        res.json(appointments)
    }).catch((err)=>{
        console.log(err)
    })
})

router.route("/:id").put(async (req,res) => {
    let userId = req.params.id;
    const {   name,
        contact,
        nic,
        dogid,
        fee,
        date,
        time,
        reason} = req.body;

    const updateAppointment = {
        name,
        contact,
        nic,
        dogid,
        fee,
        date,
        time,
        reason
    }
    const update = await  Appointment.findByIdAndUpdate(userId, updateAppointment)
    .then(() => {
        res.status(200).send({status: "Appointment updated"})
    }).catch((err) =>{
        console.log(err);
        res.status(500).send({status: "Error with updating data", error: err.messege});
    })
})

router.route("/:id").delete(async (req,res) => {
    let userId = req.params.id;

    await Appointment.findByIdAndDelete(userId)
    .then(() =>{
        res.status(200).send({status: "Appointment deleted"});
    }).catch((errr) => {
        console.log(err.messege);
        res.status(500).send({status: "Error with delete Appointment", error: err.messege});
    })
})

router.route("/:id").get(async (req, res) => {
    let userId = req.params.id;
    const user = await Appointment.findById(userId)
    .then((appointments) => {
        res.status(200).send({status: "appointments fetched", appointments})
    }).catch(() => {
        console.log(err.messege);
        res.status(500).send({status: "Error with get usappointmentser",error: err.messege});
    })
})

module.exports = router;
