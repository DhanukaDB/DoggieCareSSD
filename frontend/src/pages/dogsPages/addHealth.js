import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router";
import { Fragment } from "react";
import { FaLock } from "react-icons/fa";
// import { Fragment } from "react";
 import { Card } from 'react-bootstrap';

function AddHealthDetails() {
  const space2 = <Fragment>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</Fragment>
  // const [dogID, setdogID] = useState("");
  const [weight, setWeight] = useState("");
  const [bloodGroup, setBloodGroup] = useState("");
  const [disease, setDisease] = useState("");
  const [lastDate, setLastDate] = useState("");
  const [nextDate, setNextDate] = useState("");
  const [medicine, setMedicine] = useState("");
  const [labTests, setLabTests] = useState("");
  const [doctor, setDoctor] = useState("");

  //retrieve relevent data form relavent fields

  const { id } = useParams();
  useEffect(() => {
    axios.get(`http://localhost:8000/dog/${id}`)
      .then((res) => {
        // (res.data);
        console.log(res.data.dog);
        // setdogID(res.data.dog.dogID);
        setWeight(res.data.dog.weight);
        setBloodGroup(res.data.dog.bloodGroup);
        setDisease(res.data.dog.disease);
        setLastDate(res.data.dog.lastDate);
        setNextDate(res.data.dog.nextDate);
        setMedicine(res.data.dog.medicine);
        setLabTests(res.data.dog.labTests);
        setDoctor(res.data.dog.doctor);
      })
      .catch((err) => {
        console.log(err.message);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  //update data 
  function sendUpdateDetails(e) {
    e.preventDefault();//prevent submit event default behaviour
    const updateDetails = {
     
      weight,
      bloodGroup,
      disease,
      lastDate,
      nextDate,
      medicine,
      labTests,
      doctor
    }

    axios.put(`http://localhost:8000/dog/update/${id}`, updateDetails).then(() => {
      alert("Updated sucessfully");
      window.location = `/viewDogs`;

    }).catch((err) => {
      alert(err);
    })
  }

  return (

   <div style={{
      backgroundColor: '#010020',
      width: '100% ',
      height: '1000px'
    }}>
      <div style={{ paddingLeft: "10vh", color: 'white', paddingTop: '4vh' }}>
        <p >Doggie Care   {space2}{space2}{space2}{space2}{space2}{space2}{space2}{space2}{space2}{space2}{space2}<FaLock /></p>
      </div>

      <div style={{ paddingLeft: '7vh', paddingRight: '7vh', paddingTop: '3vh', paddingBottom: '3vh' }}>
        <Card style={{
          backgroundColor: '#062464',
        }}>
          <div style={{ paddingLeft: '8vh', paddingRight: '9vh', paddingTop: '4vh', paddingBottom: '4vh' }}>
            <Card style={{
              backgroundColor: '#010020',
            }}>
              <Card.Body>
                <div style={{ paddingLeft: '1vh' }}>
                  <h6 style={{ color: '#A4DE02' }}>Add Health Related Information</h6>

                </div>

      <div className="container col-6" onSubmit={sendUpdateDetails}>
        <form className="addMarks">
          {/* <div className="form-group">
            <label htmlFor="exampleInputCategory">Dog ID</label>
            <input
              type="text"
              className="form-control"
              id="exampleInputexpenseCategory1"

              value={dogID}
              onChange={(e) => {
                setdogID(e.target.value);
              }} disabled
            />
          </div> */}
          <div className="form-group">
            <label htmlFor="exampleInputCategory">Weight (kg)</label>
            <input
              type="number"
              required ={true}
              placeholder="40"
              className="form-control"
              id="exampleInputexpenseCategory1"

              value={weight}
              onChange={(e) => {
                setWeight(e.target.value);
              }} 
            />
          </div>
          <div className="form-group">
            <label for="exampleInputmonth">Blood Group</label>
            <select id="inputState" className="form-control" onChange={(e) => {
              setBloodGroup(e.target.value); 
            }}>
              <option value={doctor}></option>
              <option defaultValue>-- Select Group --</option>

              <option value="A">A</option>
              <option value="B">B</option>
              <option value="O">O</option>
              <option value="AB">AB</option>
        


            </select>
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputCategory">Disease</label>
            <input
              type="text"
              required ={true}
              placeholder="Seperated by ,"
              className="form-control"
              id="exampleInputexpenseCategory1"
              value={disease}
              onChange={(e) => {
                setDisease(e.target.value);
              }} 
            />
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputCategory">Last Visited Date</label>
            <input
              type="date"
              className="form-control"
              id="exampleInputexpenseCategory1"

              value={lastDate}
              onChange={(e) => {
                setLastDate(e.target.value);
              }} 
            />
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputCategory">Next Visit Date</label>
            <input
              type="date"
              className="form-control"
              id="exampleInputexpenseCategory1"

              value={nextDate}
              onChange={(e) => {
                setNextDate(e.target.value);
              }} 
            />
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputCategory">Medicines Used</label>
            <input
              type="text"
              className="form-control"
              id="exampleInputexpenseCategory1"
              placeholder="Seperated from ,"
              value={medicine}
              onChange={(e) => {
                setMedicine(e.target.value);
              }} 
            />
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputCategory">Lab Tests Done</label>
            <input
              type="text"
              className="form-control"
              id="exampleInputexpenseCategory1"
              value={labTests}
              placeholder="Seperated from ,"
              onChange={(e) => {
                setLabTests(e.target.value);
              }} 
            />
          </div>
          
          {/* <div className="form-group">
          <label htmlFor="exampleInputCategory">Request Co supervisor</label>
          <input
            type="text"
            className="form-control"
            id="exampleInputexpenseCategory1"
            placeholder="Enter Expense Category"
            value = {topic}
            onChange = {(e)=>{
                settopic(e.target.value);
            }}disabled
          />
        </div> */}
        
          <div className="form-group">
            <label for="exampleInputmonth">Surgeon</label>
            <select id="inputState" className="form-control" onChange={(e) => {
              setDoctor(e.target.value); 
            }}>
              <option value={doctor}></option>
              <option defaultValue>-- Select Surgeon --</option>
              <option value="Dr. Hansi Perera">Dr. Hansi Perera</option>
                                                <option value="Dr. Ann Perera">Dr. Ann Perera</option>         
                                               <option value="Dr. Dhanuka Dhananjaya">Dr. Dhanuka Dhananjaya</option>           
                                               <option value="Dr. Sahani Rathnayaka">Dr. Sahani Rathnayaka</option>
                                               <option value="Dr. Sasini Perera">Dr. Sasini Perera</option>


            </select>
          </div>
          <br/><center>
          <button type="submit" className="btn btn-success">
            UPDATE
          </button>
          </center>
        

        </form>
        </div>
        </Card.Body>
                       </Card>
           </div>
         </Card>
       </div>
      </div>

  
  );
}
export default AddHealthDetails;

// import React, { useState ,useEffect,useParams} from "react"
// import { FaLock } from "react-icons/fa";
// import { Fragment } from "react";
// import { Card, Button, Row, Col, Form } from 'react-bootstrap';
// import axios from "axios";
// import {Link} from 'react-router-dom'

// export default function AddHealthDetails() {
//   const space2 = <Fragment>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</Fragment>
//   const [dogID, setdogID] = useState("");
//   const [weight, setWeight] = useState("");
//   const [bloodGroup, setBloodGroup] = useState("");
//   const [disease, setDisease] = useState("");
//   const [lastDate, setLastDate] = useState("");
//   const [nextDate, setNextDate] = useState("");
//   const [medicine, setMedicine] = useState("");
//   const [labTests, setLabTests] = useState("");
//   const [doctor, setDoctor] = useState("");
//   const [timeval, onChange] = useState('10:00');

//   const { id } = useParams();
//   useEffect(() => {
//     axios.get(`http://localhost:5000/dog/get/${id}`)
//       .then((res) => {
//         // (res.data);
//         console.log(res.data.dog);
//         setdogID(res.data.dog.dogID);
//         setWeight(res.data.dog.weight);
//         setBloodGroup(res.data.dog.bloodGroup);
//         setDisease(res.data.dog.disease);
//         setLastDate(res.data.dog.lastDate);
//         setNextDate(res.data.dog.nextDate);
//         setMedicine(res.data.dog.medicine);
//         setLabTests(res.data.dog.labTests);
//         setDoctor(res.data.dog.doctor);
//       })
//       .catch((err) => {
//         console.log(err.message);
//       });
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, []);

//   //update data 
//   function sendUpdateDetails(e) {
//     e.preventDefault();//prevent submit event default behaviour
//     const updateDetails = {
//       dogID,
//       weight,
//       bloodGroup,
//       disease,
//       lastDate,
//       nextDate,
//       medicine,
//       labTests,
//       doctor
//     }

//     axios.put(`http://localhost:5000/dog/update/${id}`, updateDetails).then(() => {
//       alert("Added sucessfully");
//       window.location = `/DogsList`;

//     }).catch((err) => {
//       alert(err);
//     })
//   }


//   return (
//     <div style={{
//       backgroundColor: '#010020',
//       width: '100% ',
//       height: '1000px'
//     }}>
//       <div style={{ paddingLeft: "10vh", color: 'white', paddingTop: '4vh' }}>
//         <p >Doggie Care   {space2}{space2}{space2}{space2}{space2}{space2}{space2}{space2}{space2}{space2}{space2}<FaLock /></p>
//       </div>

//       <div style={{ paddingLeft: '7vh', paddingRight: '7vh', paddingTop: '3vh', paddingBottom: '3vh' }}>
//         <Card style={{
//           backgroundColor: '#062464',
//         }}>
//           <div style={{ paddingLeft: '8vh', paddingRight: '9vh', paddingTop: '4vh', paddingBottom: '4vh' }}>
//             <Card style={{
//               backgroundColor: '#010020',
//             }}>
//               <Card.Body>
//                 <div style={{ paddingLeft: '1vh' }}>
//                   <h6 style={{ color: '#A4DE02' }}>Add Health Related Information</h6>

//                 </div>

//                 <Form onSubmit={sendUpdateDetails}>
//                   <Row>
//                     <Col>
//                       <br />
//                       <div style={{ paddingLeft: '10vh' }}>

//                         <Form.Group className="mb-3" controlId="formBasicEmail">
//                           <Form.Label style={{ color: 'white' }}>Dog ID : </Form.Label>
//                           <Form.Control type="text"
//                             onChange={(e) => setdogID(e.target.value)}
//                             required ={true}
//                             value={dogID}
//                             placeholder=" Ex:Dog_01" style={{
//                               backgroundColor: '#010020',
//                               color: '#F62681'
//                             }} disabled/>
//                         </Form.Group>

//                         <Form.Group className="mb-3" controlId="formBasicEmail">
//                           <Form.Label style={{ color: 'white' }}>Weight (kg) </Form.Label>
//                           <Form.Control type="number"
//                             onChange={(e) => setWeight(e.target.value)}
//                             required ={true}
//                             value={weight}
//                             placeholder="30" style={{
//                               backgroundColor: '#010020',
//                               color: '#F62681'
//                             }} />
//                         </Form.Group>

//                         <Form.Group className="mb-3" controlId="formBasicEmail">
//                                             <Form.Label style={{ color: 'white' }}>Blood Group</Form.Label>
//                                             <Form.Select aria-label="Default select example"
//                                                 onChange={(e) => setBloodGroup(e.target.value)}
//                                                 required ={true}
//                                                 value={bloodGroup}
//                                                 style={{

//                                                     backgroundColor: '#010020',
//                                                     color: '#F62681'

//                                                 }}>
//                                                 <option>Select Group</option>
//                                                 <option value="A">A</option>
//                                                 <option value="B">B</option>
//                                                 <option value="O">O</option>
//                                                 <option value="AB">AB</option>
//                                             </Form.Select>

//                                         </Form.Group>

                    
//                         <Form.Group className="mb-3" controlId="formBasicEmail">
//                           <Form.Label style={{ color: 'white' }}>Disease/Reason</Form.Label>
//                           <Form.Control type="text"
//                             onChange={(e) => setDisease(e.target.value)}
//                             required ={true}
//                             value={disease}

//                             placeholder=" Enter Reason" style={{
//                               backgroundColor: '#010020',
//                               color: '#F62681'
//                             }} />
//                         </Form.Group>

//                         <Form.Group className="mb-3" controlId="formBasicEmail">
//                           <Form.Label style={{ color: 'white' }}>Last Visited Date</Form.Label>
//                           <Form.Control type="date"
//                             onChange={(e) => setLastDate(e.target.value)}
//                             required ={true}
//                             value={lastDate}
//                             placeholder="Select Date" style={{
//                               backgroundColor: '#010020',
//                               color: '#F62681'
//                             }} />
//                         </Form.Group>
//                         {/* <Form.Group className="mb-3" controlId="formBasicEmail">
//                           <Form.Label style={{ color: 'white' }}>Next Arrived Date</Form.Label>
//                           <Form.Control type="date"
//                             onChange={(e) => setNextDate(e.target.value)}
//                             required ={true}
//                             value={nextDate}
//                             placeholder="Select Date" style={{
//                               backgroundColor: '#010020',
//                               color: '#F62681'
//                             }} />
//                         </Form.Group> */}
                    

                       
   
//                       </div>

//                       <br />
//                     </Col>
//                     <Col>
//                       <br />
//                       <div>
//                       <Form.Group className="mb-3" controlId="formBasicEmail">
//                           <Form.Label style={{ color: 'white' }}>Next Arrived Date</Form.Label>
//                           <Form.Control type="date"
//                             onChange={(e) => setNextDate(e.target.value)}
//                             required ={true}
//                             value={nextDate}
//                             placeholder="Select Date" style={{
//                               backgroundColor: '#010020',
//                               color: '#F62681'
//                             }} />
//                         </Form.Group>
//                       <Form.Group className="mb-3" controlId="formBasicEmail">
//                           <Form.Label style={{ color: 'white' }}>Medicines Used</Form.Label>
//                           <Form.Control type="text"
//                             onChange={(e) => setMedicine(e.target.value)}
//                             required ={true}
//                             value={medicine}
//                             placeholder="Enter Medicines/vaccines" style={{
//                               backgroundColor: '#010020',
//                               color: '#F62681'
//                             }} />
//                         </Form.Group>
//                         <Form.Group className="mb-3" controlId="formBasicEmail">
//                           <Form.Label style={{ color: 'white' }}>Lab Tests Done</Form.Label>
//                           <Form.Control type="text"
//                             onChange={(e) => setLabTests(e.target.value)}
//                             required ={true}
//                             value={labTests}
//                             placeholder="Enter Lab Tests" style={{
//                               backgroundColor: '#010020',
//                               color: '#F62681'
//                             }} />
//                         </Form.Group>
//                         <Form.Group className="mb-3" controlId="formBasicEmail">
//                                             <Form.Label style={{ color: 'white' }}>Veterinary Surgeon</Form.Label>
//                                             <Form.Select aria-label="Default select example"
//                                                 onChange={(e) => setDoctor(e.target.value)}
//                                                 required ={true}
//                                                 value={doctor}
//                                                 style={{

//                                                     backgroundColor: '#010020',
//                                                     color: '#F62681'

//                                                 }}>
//                                                 <option value="Dr. Hansi Perera">Dr. Hansi</option>
//                                                <option value="Dr. Ann Perera">Dr. Nalaka</option>         
//                                               <option value="Dr. Dhanuka Dhananjaya">Dr. Dilshan</option>           
//                                               <option value="Dr. Sahani Rathnayaka">Dr. Disni</option>
//                                               <option value="Dr. Sasini Perera">Dr. Kushnara</option>
//                                             </Form.Select>

//                                         </Form.Group>

// {/* 
//                         <Form.Group className="mb-3" controlId="formBasicEmail">
//                           <Form.Label style={{ color: 'white' }}>Time: </Form.Label>
//                           <Form.Control
//                            style={{
//                             backgroundColor: '#010020',
//                             color: '#F62681'
//                           }}
//                           type="time"
//                             onChange={(e) => settime(e.target.value)}

//                             placeholder='Select Time'
//                              />
                            
//                         </Form.Group> */}
//                          {/* <Form.Group className="mb-3" controlId="formBasicEmail">
//                                             <Form.Label style={{ color: 'white' }}>Breed</Form.Label>
//                                             <Form.Select aria-label="Default select example"
//                                                 onChange={(e) => setBreed(e.target.value)}
//                                                 required ={true}
//                                                 style={{

//                                                     backgroundColor: '#010020',
//                                                     color: '#F62681'

//                                                 }}>
//                                                 <option>Select Type</option>
//                                                 <option value="Retrievr">Retrievr</option>
//                                                 <option value="German Shepard">German Shepard</option>
//                                                 <option value="Basset Hound">Basset Hound</option>
//                                                 <option value="Rottwlier">Rottwlier</option>
//                                             </Form.Select>

//                                         </Form.Group> */}

                    


//                       </div>

//                       <br />
//                     </Col>
//                   </Row>
//                   <div style={{ paddingLeft: "50%" }}>
//                     <Button type="submit">ADD</Button>
//                   </div>
//                   <Link
//                       to={`/`}
//                       className="btn btn-sm expenseButton"
//                     > CANCEL
//                     </Link> 
//                 </Form>

//               </Card.Body>
//             </Card>
//           </div>
//         </Card>
//       </div>


//     </div>
//   );
// }
 