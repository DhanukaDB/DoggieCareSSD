import React, { useState, useEffect } from "react";
import { Table, Button,Card, Form , Modal} from "react-bootstrap";
import axios from "axios";
import { FaPencilAlt, FaTrashAlt,FaLock } from "react-icons/fa";
import { Fragment} from "react";
import {Link} from 'react-router-dom'
import jsPDF from 'jspdf'
function ViewRescuedDogs(props) {

    
    const [rescuedDogs, setRescuedDogs] = useState([]);
    const [search, setSearch] = useState("");
    const [state, setState] = useState("adopted");
    const space2 = <Fragment>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</Fragment>
    const[rescuerName, setrescuerName,] = useState("");
    const[rescuerContactNo, setrescuerContactNo] = useState("");
    const[registerdDate, setregisterdDate] = useState("");
    const[description, setdescription] = useState("");
    const[dogName, setdogName] = useState("");
    const[dogColour, setdogColour] = useState("");
    const[weight, setweight] = useState("");
    const[age, setage] = useState("");
    const[gender, setgender] = useState("");
    const[perspectivePetParents, setperspectivePetParents] = useState("");
    const[contactNo, setcontactNo] = useState("");
    const[buildingNo, setbuildingNo] = useState("");
    const[street, setstreet] = useState("");
    const [city, setcity] = useState([]);
    const [adoptDate, setadoptDate] = useState([]);
    const [status, setstatus] = useState([]);
    const[Values, setValues] = useState([]);
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    useEffect(() => {

        //get funtion
        function getRescuedDogs() {
            axios.get("http://localhost:8000/createRescuedDog/").then((res) => {
                setRescuedDogs(res.data);
            }).catch((err) => {
                alert(err.message);
            })
        }
        getRescuedDogs();
    }, [])

    /*//delete funtion
    function onDelete(_id){
        console.log(_id);
        axios.delete("http://localhost:5000/createRescuedDog/"+_id ).then((res) =>{
           alert('Deleted Successfully'); 
           window.location.reload();
       }).catch((err) => {
           alert(err.message);
       })
      }
  */


      const onDelete = (_id) =>{
        const r = window.confirm ("Do you really want to Remove this Recode?"); 
        if(r === true){
            axios.delete(`http://localhost:8000/createRescuedDog/delete/${_id}`); 
            alert('Deleted Successfully'); 
            window.location.reload();
            }else 
           
            window.location.reload();
        
         
         }
       
    

   

    const UpdatePuppiesDeatails = (val) =>{
        console.log('test====',val)
         setValues(val);
        
        handleShow()
    }


    function update(_id){
        console.log(_id)
        window.location = "/adoption/"+_id
      }




    const createPDF = (_id,dogName,dogColour,weight,age,gender,perspectivePetParents,contactNo,adoptDate)=>{
        console.log(_id);
        console.log(dogName);
        console.log(dogColour);
        console.log(weight);
        console.log(age);
        console.log(gender);
        console.log(perspectivePetParents);
        console.log(contactNo);
        console.log(adoptDate);

        const unit = "pt";
        const size = "A4";
        const orientation = "landscape";
        const marginLeft = 40;
        const doc = new jsPDF(orientation, unit, size);
        const title = `**** DOGGIE CARE PUPPY'S REPORT CARD ****    (Dog ID- ${_id})`;
        const doggieName = `Puppy's Name: ${dogName}`;
        const doggieColour = `Colour: ${dogColour}`;
        const dogWeight = `Weight: ${weight}Kg`;
        const dogAge = `Age: ${age}`;
        const doggender = `Gender: ${gender}`;
        const owner = `New Owner: Mr/Ms.${perspectivePetParents}`;
        const ownerContactNo = `Contact Number: ${contactNo}`;
        const dogadoptDate = `Adopt Date: ${adoptDate}`;
   
      
        const image2 = "https://res.cloudinary.com/dorcq99nr/image/upload/v1665646657/DoggieCare/black_sgno4i.jpg"
        const success = `Thank you, ${perspectivePetParents} on taking home a puppy. We are committed to providing you with quality services.` 
      //  const second = `Description about clinic` ;
      //    const third  = `We are committed to providing you with quality services. Thank you`; 
      //  const issuedate =`Report Issue Date: ${adoptDate}`;
        const left = 20;
        const top = 8;
        
        const lefts = 450;
        const tops = 200;
        const imgWidths = 350;
        const imgHeights = 250;
        doc.setFontSize(15);
        doc.text(200,40 ,title);
        doc.text(60,200, doggieName );
        doc.text(60,240, doggieColour);
        doc.text(60, 280,dogWeight);
        doc.text(60, 320, dogAge);
        doc.text(60, 360, doggender);
        doc.text(60, 400,owner);
        doc.text(60, 440,ownerContactNo);
        doc.text(60, 480,dogadoptDate);
        
       
        doc.addImage(image2, 'PNG' , lefts, tops, imgWidths, imgHeights);
        
      //  doc.text(60,500,issuedate);
        doc.text(60, 100, success);
      //  doc.text(80, 120, second);
      //  doc.text(80, 140, third);
        doc.save(`${dogName}'s ReportCard.pdf`);
     
    }


    


    function sendData(e) {
       
        e.preventDefault();
       
       
        var rescuerName1=null;
        var rescuerContactNo1=null;
        var registerdDate1=null;
        var description1=null;
        var dogName1= null;
        var dogColour1= null;
        var weight1 = null;
        var age1 = null;
        var gender1 =null;
        var perspectivePetParents1 = null;
        var contactNo1 = null;
        var buildingNo1 =null;
        var street1 = null;
        var city1 = null;
        var adoptDate1 = null;
        var status1 = null;
  
    //set values
  
        if (rescuerName ===""){
            console.log('test null cond')
            rescuerName1=Values.rescuerName;
          }else{
            rescuerName1=rescuerName
            console.log('test not null cond')
  
        }
        if (rescuerContactNo ===""){
            rescuerContactNo1=Values.rescuerContactNo
          }else{
            rescuerContactNo1=rescuerContactNo
        }
  
        if (registerdDate===""){
            registerdDate1=Values.registerdDate
  
          }else{
           registerdDate1=registerdDate
        }
  
        if (description===""){
            description1=Values.description
          }else{  
            description1=description
        }
  
  
        if (dogName===""){
            dogName1=Values.dogName
           }else{
            dogName1=dogName
        }
  
        
        if (dogColour===""){
          dogColour1=Values.dogColour
         }else{
          dogColour1=dogColour
      }
  
  
        if (weight===""){
          weight1 =Values.weight
         }else{
          weight1 = weight
      }

      if (age===""){
        age1 =Values.age
       }else{
        age1 = age
    }


    if (gender===""){
        gender1 =Values.gender
       }else{
        gender1 = gender
    }



    if (perspectivePetParents===""){
        perspectivePetParents1 =Values.perspectivePetParents
       }else{
        perspectivePetParents1 = perspectivePetParents
    }



    if (contactNo===""){
        contactNo1 =Values.contactNo
       }else{
        contactNo1 = contactNo
    }



    if (buildingNo===""){
        buildingNo1 =Values.buildingNo
       }else{
        buildingNo1 = buildingNo
    }
      

    if (street===""){
        street1 =Values.street
       }else{
        street1 = street
    }
      

   if (city===""){
        city1 =Values.city
       }else{
        city1 = city
    }
      

    if (adoptDate===""){
        adoptDate1 =Values.adoptDate
       }else{
        adoptDate1 = adoptDate
    }
      

    if (status===""){
        status1 =Values.status
       }else{
        status1 = status
    }
      
        const updateRescuedDog={
            id:Values._id,
            rescuerName:rescuerName1,
            rescuerContactNo:rescuerContactNo1,
            registerdDate:registerdDate1,
            description:description1,
            dogName:dogName1,
            dogColour:dogColour1,
            weight:weight1,
            age: age1,
            gender:gender1,
            perspectivePetParents:perspectivePetParents1,
            contactNo:contactNo1,
            buildingNo:buildingNo1,
            street:street1,
            city:city1,
            adoptDate:adoptDate1,
            status:status1


        }
  
        console.log('form submit =====',updateRescuedDog)
  
  
        axios.put(`http://localhost:8000/createRescuedDog/updateAdoptDog/${updateRescuedDog.id}`, updateRescuedDog).then(()=>{
            alert("Dog Details Updated Successfully");
            handleClose();
            window.location = `/viewstrayPuppies`;
            
        }).catch((err)=>{
            console.log(err);
            alert(err);
        })
    }
  














  
    return (
        <div style={{
            backgroundColor: '#010020',
            width: '100% ',
            height: '1000px'
          }}>
            <div style={{ paddingLeft: "10vh", color: 'white',paddingTop:'4vh' }}>
        <p >Doggie Care   {space2}{space2}{space2}{space2}{space2}{space2}{space2}{space2}{space2}{space2}{space2}<FaLock /></p>
      </div>
            <div style={{ paddingLeft: '8vh', paddingRight: '13vh', paddingTop: '4vh', paddingBottom: '4vh' }}>
                <Card style={{
                    backgroundColor: '#062464',
                }}>
<div style={{ paddingBottom: "8vh", paddingTop: "5vh", paddingLeft: "8vh", paddingRight: "5vh" }}>
            <div style={{ paddingBottom: "5vh", paddingTop: "5vh", paddingLeft: "5vh", paddingRight: "5vh" }}>
                <h1 style={{color:'white'}}>View Puppies Details</h1>
                <div style={{ paddingleft: "10vh", paddingBottom: "1vh", paddingTop: "1vh" }} >

                <div style={{ paddingleft: "2vh", paddingBottom: "1vh", paddingTop: "1vh" }}>
                            <div style={{ paddingBottom: "1vh", paddingTop: "1vh" }}>
                                <input type="text" placeholder="Search from 'Name' " className="mr-2"
                                    onChange={(e) => {
                                        setSearch(e.target.value);
                                    }} />
                            </div>
                            {space2}{space2}{space2}{space2}{space2}{space2}{space2}{space2}
                            <Link to='/rescuedDogRegistration'>
                            <Button style={{backgroundColor: "blue" }}>REGISTER</Button>
                          </Link>
                          &nbsp;
                          <Link to='/registerResDog'> 
                          <Button style={{backgroundColor: "blue" }}>REGISTER STRAY DOGS</Button>
                        </Link>
                        </div>

                </div>
                <Table striped bordered hover size="sm" variant="light" >
                    <thead>
                        
                        <tr>

                            
                            <th>Registerd Date</th>
                            <th>Dog Name</th>
                            <th>Dog Colour</th>
                            <th>Age</th>
                            <th>Gender</th>
                            <th>Perspective Pet Parents</th>
                            <th>Contact No</th>
                            <th>Adopt Date</th>
                            <th>Status</th>
                            <th>Download Report Card</th>
                            <th>Edit</th>
                            <th>Adopt Puppy</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>

                        {rescuedDogs.filter(RescuedDogs => {
                            if (search === "") {
                                return RescuedDogs
                            }
                            else if (RescuedDogs.dogName.toLowerCase().includes(search.toLowerCase())) {
                                return RescuedDogs
                            }
                        }).
                            map((val,key) => {

                                return (
                                    <tr key={val._id}>
                                        <td>{val.registerdDate}</td>
                                        <td>{val.dogName}</td>
                                        <td>{val.dogColour}</td>
                                        <td>{val.age}</td>
                                        <td>{val.gender}</td>
                                        <td>{val.perspectivePetParents}</td>
                                        <td>{val.contactNo}</td>
                                        <td>{val.adoptDate}</td>
                                        <td><button style={{ color: state === "adopted" ? "#F00" : "#00F" }}>{val.status}</button></td>
                                        <td> <Button className="generateDogReportCardPdF" onClick={()=> createPDF(val._id,val.dogName,val.dogColour,val.weight,val.age,val.gender,val.perspectivePetParents, val.contactNo, val.adoptDate )}>Report Card</Button></td>
                                        <td>
                                       
                                         <Button variant="outline-success" onClick={() =>UpdatePuppiesDeatails(val)} ><FaPencilAlt/></Button>
                                         
                                        </td>
                                        <td>
                                        <Button variant="outline-success" onClick={() => update(val._id)} >Adopt Puppies</Button>

                                        </td>
                                       
                                        <td>
                                            <Button variant="outline-danger" onClick={() => onDelete(val._id)}><FaTrashAlt/></Button>

                                        </td>
                                    </tr>



                            
                  

                                );
                               
                            })}

                    </tbody>

                </Table >

           <Modal show={show} onHide={handleClose} className="getfunc">
                    <Modal.Header closeButton>
                    <Modal.Title>Update Details</Modal.Title>
                    </Modal.Header>

                    <Modal.Body>

                    <Form onSubmit={sendData}>
                   
         <Form.Group controlId="container">
           <Form.Label for="rescuerName">RescuerName</Form.Label>
           <Form.Control type="text" 
           defaultValue={Values.rescuerName}
           onChange={(e)=>{
            setrescuerName(e.target.value);
          }}readonly="readonly" />

         </Form.Group>
         <Form.Group controlId="container">
         <Form.Label for="rescuerContactNo">rescuerContactNo</Form.Label>
         <Form.Control type="text" 
         defaultValue={Values.rescuerContactNo} 
         onChange={(e)=>{
           setrescuerContactNo(e.target.value);
         }}  />
        </Form.Group>

        <Form.Group controlId="container">
        <Form.Label for="description">description</Form.Label>
        <Form.Control type="text"  
         defaultValue={Values.description}
         onChange={(e)=>{
        setdescription(e.target.value);
        }} />
        </Form.Group>

        <Form.Group controlId="container">
        <Form.Label for="dogName">dogName</Form.Label>
        <Form.Control type="text" 
        defaultValue={Values.dogName}
        onChange={(e)=>{
        setdogName(e.target.value);
        }} />
        </Form.Group>
      
      <Form.Group>
        <Form.Label for="dogColour">dogColour</Form.Label>
        <Form.Control type="text" 
        defaultValue={Values.dogColour}
        onChange={(e)=>{
        setdogColour(e.target.value);
        }} />
       </Form.Group>

       <Form.Group>
        <Form.Label for="weight">weight</Form.Label>
        <Form.Control type="Number" 
        defaultValue={Values.weight}
        onChange={(e)=>{
        setweight(e.target.value);
        }} />
       </Form.Group>

      
         
      <Button  className="final" type="submit"> Edit details</Button>
      </Form>

         </Modal.Body>
        
         </Modal>
               
            </div>
        </div>



                </Card>

            </div>
        </div>


    );

}
export default ViewRescuedDogs;



