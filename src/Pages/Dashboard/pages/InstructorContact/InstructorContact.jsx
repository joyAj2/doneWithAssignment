import React, { useState } from "react";
import "./InstructorContact.css";
import { instructorData, instructorImages } from "../../../../Data/Data";
import { Button } from "react-bootstrap";

const InstructorContact = () => {
  const [selectedInstructor, setSelectedInstructor] = useState(null);
  const [emailContent, setEmailContent] = useState("");
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [message, setMessage] = useState("");

  const handleInstructorSelect = (instructor) => {
    setSelectedInstructor(instructor);
    setIsDialogOpen(true);
  };

  const handleSendEmail = () => {
    if (emailContent.length > 0) {
      setMessage(`Your email has been sent successfully to ${selectedInstructor.name}`);
    }
  };

  const handleCloseDialog = () => {
    setIsDialogOpen(false);
    setEmailContent("");
  };

  return (
    <div>
      {selectedInstructor && (
        <div>
          <dialog open={isDialogOpen}>
            <div>
              {message.length > 0 ? (
                <div>
                  <span>{message}</span>
                </div>
              ) : (
                <div>
                  <img
                    src={instructorImages[selectedInstructor.id % instructorImages.length]}
                    alt={`Instructor ${selectedInstructor.id}`}
                    className="profile-image"
                  />
                  <h3>{selectedInstructor.name}</h3>
                  <p>Email: {selectedInstructor.email}</p>
                  <textarea
                    placeholder="Type your email content here..."
                    value={emailContent}
                    onChange={(e) => setEmailContent(e.target.value)}
                    rows="4"
                  ></textarea>
                </div>
              )}
            </div>
            <br />
            <div style={{ display: "flex" }}>
              <Button variant="primary" onClick={handleSendEmail}>
                Send Email
              </Button>
              <Button variant="danger" onClick={handleCloseDialog}>
                Close
              </Button>
            </div>
          </dialog>
        </div>
      )}
     <div className="instructor-contact">
        <h2>Instructor Contact</h2>

        <div className="instructor-list">
          <ul>
            {instructorData.map((instructor, index) => (
              <li
                key={instructor.id}
                onClick={() => handleInstructorSelect(instructor)}
              >
                <img
                  src={instructorImages[index % instructorImages.length]}
                  alt={`Instructor ${instructor.id}`}
                  className="profile-image"
                />
                <span>{instructor.name}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default InstructorContact;

