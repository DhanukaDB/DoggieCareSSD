const rescuedDogsDetails = require("../models/RescuedDogs.js");

//add new Stray dog for system
exports.addNewRescuedDog= async (req, res) => {
 
    //constant variables for the attributes
    const {rescuerName,rescuerContactNo,registerdDate,description,dogName,dogColour,weight,age,gender,perspectivePetParents,contactNo,buildingNo,street,city,adoptDate,status} = req.body;
   
    if (!rescuerContactNo || !registerdDate || !dogName ) {
      return res.status(422).json({ error: "please add all required feilds" })
  
  }
  
   rescuedDogsDetails.findOne({dogName: dogName})
     .then((savedDog) => {
         if(savedDog) {
             return res.status(422).json({error:"This Puppy Name already exists with that System"})
        }
  
          const newRescuedDog = new rescuedDogsDetails({
            rescuerName,
            rescuerContactNo,
            registerdDate,
            description,
            dogName,
            dogColour,
            weight,
            age,
            gender,
            perspectivePetParents,
            contactNo,
            buildingNo,
            street,
            city,
            adoptDate,
            status  
        })
    
        newRescuedDog.save().then(() => {
             res.json("Stray Puppy Added")
    
        }).catch((err) => {
            console.log(err);
        })
      
    }).catch((err) =>{
        console.log(err);
   })
    }



    //update 
    exports.updateAdoptDog= async (req, res) => { 
    //fetch id from url
    let dogid = req.params.id;
    const {rescuerName,rescuerContactNo,registerdDate,description,dogName,dogColour,weight,age,gender,perspectivePetParents,contactNo,buildingNo,street,city,adoptDate,status} = req.body;
  
    const updateAdoptDog = {
      rescuerName,rescuerContactNo,registerdDate,description,dogName,dogColour,weight,age,gender,perspectivePetParents,contactNo,buildingNo,street,city,adoptDate,status
    }
  
  
    const update = await rescuedDogsDetails.findByIdAndUpdate(dogid, updateAdoptDog).then(() => {
      res.status(200).send({status: "Adoption details successfully updated"})
    }).catch((err) => {
        console.log(err);
        res.status(500).send({status: "Error with updating data", error: err.message});
    })   
  }





/*
//add Adoption details for system
exports.addNewAdoption= async (req, res) => {
 
//constant variables for the attributes
  const {dogName,perspectivePetParents,contactNo,buildingNo,street,city,adoptDate} = req.body;


 rescuedDogsDetails.findOne({dogName: dogName})
   .then((savedDog) => {
       if(savedDog) {
           return res.status(422).json({error:"This Puppy already Adopt"})
      }

        const newAdoption = new rescuedDogsDetails({
          dogName,
          perspectivePetParents,
          contactNo,
          buildingNo,
          street,
          city,
          adoptDate
      })
  
      newAdoption.save().then(() => {
           res.json("Successful")
  
      }).catch((err) => {
          console.log(err);
      })
    
  }).catch((err) =>{
      console.log(err);
 })
  }

*/

  //view 
exports.viewRescuedDogs= async (req, res) => { 
 
  //calling  model
  rescuedDogsDetails.find().then((dogs) => {
    res.json(dogs)

}).catch((err) => {
    console.log(err)
})

}




// //delete existing one
 exports.deleteRescuedDogsDetails = async (req, res) => {
    let  dogid = req.params.id;
   
     await rescuedDogsDetails.findByIdAndDelete(dogid).then(() => {
       res.status(200).json({ status: "Rescued Dog Records Deleted" });
    }).catch((error) => {
       res.status(500).json({ status: "Error with Deleting", error: error.message });
     })
   }
   


/*
  //update 
  exports.updateDog= async (req, res) => { 
    //fetch id from url
    let dogid = req.params.id;
    const {dogName, ownerName,address,dob,breed,sex,image,weight,bloodGroup,disease,lastDate,nextDate,medicine,labTests,doctor} = req.body;
  
    const updateDog = {
        dogName,ownerName,address,dob,breed,sex,image,weight,bloodGroup,disease,lastDate,nextDate,medicine,labTests,doctor
    }
  
  
    const update = await rescuedDogsDetails.findByIdAndUpdate(dogid, updateDog).then(() => {
      res.status(200).send({status: "Result updated"})
    }).catch((err) => {
        console.log(err);
        res.status(500).send({status: "Error with updating data", error: err.message});
    })   
  }

*/

  //view one
  exports.viewOneRescuedDog = async (req, res) => {
    
    let dogid = req.params.id;
    const dog = await rescuedDogsDetails.findById(dogid).then((dog) => {
        res.status(200).send({status: "  fetched", dog})
    }).catch(() => {
         console.log(err.message);
         res.status(500).send({status:"Error with get " , error: err.message})
    })


  } 