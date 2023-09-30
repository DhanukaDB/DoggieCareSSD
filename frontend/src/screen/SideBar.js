import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { FaCreativeCommonsNd } from "react-icons/fa";
import {useNavigate} from 'react-router-dom'

function SideBar() {
  const navigate = useNavigate();

 
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const medicine = ()=>{
    navigate("/medicines")
  }

  const appointments = ()=>{
    navigate("/viewappointment")
  }

  const dogs = ()=>{
    navigate("/viewDogs")
  }

  const strayDogs = ()=>{
    navigate("/viewstrayPuppies")
  }


  return (
    <>
    
      <Button variant="secondary" onClick={handleShow}>
      <FaCreativeCommonsNd/>
      </Button>

      <Offcanvas show={show} onHide={handleClose} backdrop="static">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Doggie Care</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
       
        <div className="d-grid gap-2">
      <Button variant="primary" size="lg" onClick={appointments}>
      APPOINTMENTS
    </Button>
      <Button variant="secondary" size="lg" onClick={dogs}>
        DOGS LIST
      </Button>
    </div>
    <br />
    <div className="d-grid gap-2">
      <Button variant="primary" size="lg" onClick={medicine}>
        MEDICINE STORE
      </Button>
      <Button variant="secondary" size="lg" onClick={strayDogs}>
        STRAY PUPPIES
      </Button>
    </div>
    
    <br/><br/><br/><br/>

   
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default SideBar;