import React, { useEffect, useState } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

function EditTask({ modal, toggle, upadteTask, taskObj}) {
  const [taskName, setTaskName] = useState('');
  const [description, setDescription] = useState('');
  const handleChange = (e) => {

    const {name, value} = e.target
    if(name === "taskName"){
      setTaskName(value)
    }else{
      setDescription(value)
    }
    
  };
  useEffect(()=>{
    setTaskName(taskObj.Name)
    setDescription(taskObj.Description)
  },[])
 const handleUpdate=(e) =>{
    e.preventDefault();
    let tempObj ={}
    tempObj['Name']= taskName
    tempObj['Description']= description
    upadteTask(tempObj)
 }
  return (
    <div>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Update Task</ModalHeader>
        <ModalBody>
          <from>
            <div className="form-group">
              <label>Task Name</label>
              <input
                type="text"
                className="form-control mt-2"
                name="taskName"
                value={taskName}
                onChange={handleChange}
              />
            </div>
            <div className="form-group mt-2">
              <label>Description</label>
              <textarea
                rows="5"
                className="form-control mt-2"
                name="description"
                value={description}
                onChange={handleChange}
              ></textarea>
            </div>
          </from>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={handleUpdate}>
            Update
          </Button>{" "}
          <Button color="secondary" onClick={toggle}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default EditTask;
