import { React, useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { addNote } from "../redux/actions/NoteAction";

export const Add = ({ show, close }) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const dispatch = useDispatch();

  const handleCloseDilog = () => {
    close(false);
  };

  const handleAddNote = () => {
    const data = { title, content };
    dispatch(addNote(data));
    close(false);
  };

  return (
    <>
      <Modal show={show} onHide={close} centered>
        <Modal.Header closeButton>
          <Modal.Title>Add Note</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="Title">
              <Form.Label>Title</Form.Label>
              <Form.Control
                onChange={(event) => setTitle(event.target.value)}
                type="text"
                placeholder="Title"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="Content">
              <Form.Label>Content</Form.Label>
              <Form.Control
                onChange={(event) => setContent(event.target.value)}
                type="text"
                placeholder="Content"
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseDilog}>
            Close
          </Button>
          <Button variant="primary" onClick={handleAddNote}>
            Add
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};
