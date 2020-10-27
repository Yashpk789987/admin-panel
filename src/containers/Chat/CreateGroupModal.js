import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  ValidatorForm,
  TextValidator,
  TextFieldValidator,
} from "react-material-ui-form-validator";
import { TextareaAutosize } from "@material-ui/core";
import { Button, Modal, ModalBody, ModalFooter } from "reactstrap";
import CustomIcon from "../../components/common/CustomIcon";

const CreateGroupModal = ({ isModalOpen, toggle }) => {
  const [name, setName] = React.useState("");
  const [description, setDescription] = React.useState("");
  const formRef = React.useRef();

  return (
    <Modal isOpen={isModalOpen} toggle={toggle}>
      <ModalBody>
        <div className="modalContent">
          <div className="modalHeader">
            <h3 className="heading">Create a group</h3>
          </div>
          <div style={{ height: 24 }} />
          <ValidatorForm
            ref={formRef}
            onSubmit={() => {}}
            style={{ width: "100%" }}
          >
            <TextValidator
              label="Name"
              onChange={(e) => setName(e.target.value)}
              name="name"
              value={name}
              validators={["required"]}
              errorMessages={["This field is required"]}
              fullWidth
              variant="outlined"
              className="formElement"
            />
            <div style={{ height: 20 }} />
            <TextareaAutosize
              label="Description"
              onChange={(e) => setDescription(e.target.value)}
              name="description"
              value={description}
              fullWidth
              variant="outlined"
              className="formElement"
              rows={5}
              placeholder="Description"
              style={{ width: "100%", fontSize: 12, padding: 16 }}
            />
            <div style={{ height: 12 }} />
            <TextValidator
              label="+ Add Members"
              onChange={() => {}}
              name="members"
              value=""
              fullWidth
              variant="outlined"
              className="formElement"
            />
          </ValidatorForm>
        </div>
      </ModalBody>
      <ModalFooter className="modalFooter">
        <Button color="secondary" onClick={toggle}>
          Close
        </Button>
      </ModalFooter>
    </Modal>
  );
};

export default CreateGroupModal;
