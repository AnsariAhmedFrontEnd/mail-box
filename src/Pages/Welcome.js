import React, { useState } from "react";
import TagsInput from "react-tagsinput";
import "react-tagsinput/react-tagsinput.css";
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { Container, Form, Button } from "react-bootstrap";

const editorStyle = {
  border: "1px solid #ccc",
  minHeight: "300px",
};

const Welcome = () => {
  const [email, setEmail] = useState([]);
  const [subject, setSubject] = useState("");

  const handleEmailChange = (tags) => {
    setEmail(tags);
  };

  const handleSubjectChange = (e) => {
    setSubject(e.target.value);
  };

  const handleSendEmail = (e) => {
    e.preventDefault();
    // Handle sending email with the provided data (email, subject, editorState)
    console.log("Sending email:", { email, subject });
  };

  return (
    <Container className="w-75">
      <Form onSubmit={handleSendEmail}>
        <Form.Group controlId="email" className="mt-5">
          <TagsInput
            value={email}
            onChange={handleEmailChange}
            inputProps={{
              placeholder: "Enter email",
            }}
          />
        </Form.Group>
        <Form.Group controlId="subject" className="mt-2">
          <Form.Control
            type="text"
            placeholder="Enter subject"
            value={subject}
            onChange={handleSubjectChange}
          />
        </Form.Group>

        <Form.Group controlId="editor" className="mt-2 h-50vh">
          <div style={editorStyle}>
            <Editor
              toolbarClassName="toolbarClassName"
              wrapperClassName="wrapperClassName"
              editorClassName="editorClassName"
            />
          </div>
        </Form.Group>
        <Button variant="primary" type="submit" className="mt-2">
          Send Email
        </Button>
      </Form>
    </Container>
  );
};

export default Welcome;
