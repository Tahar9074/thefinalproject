import React, { useState } from 'react';
import { Button, Modal, DropdownItem, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import './Booking.css';

function Booking(args) {
  const [modal, setModal] = useState(false);
  const [pickupDate, setPickupDate] = useState('');
  const [dropOffDate, setDropOffDate] = useState('');
  const [comments, setComments] = useState('');

  const handlePickupDateChange = (e) => {
    setPickupDate(e.target.value);
  };

  const handleDropOffDateChange = (e) => {
    setDropOffDate(e.target.value);
  };

  const handleCommentsChange = (e) => {
    setComments(e.target.value);
  };

  const toggle = () => setModal(!modal);

  return (
    <div>
      {/* Your original dropdown item */}
      <DropdownItem onClick={toggle}>BOOKING</DropdownItem>

      {/* The provided Modal structure */}
      <Modal isOpen={modal} toggle={toggle} className="Modal-Booking" {...args}>
        <ModalHeader toggle={toggle} className="ModalHeader-Booking">
          Book Your Car
        </ModalHeader>
        <ModalBody className="ModalBody-Booking">
          <div>
            <h2>Reservation Form Overview</h2>
            <form>
              <div>
                <label>Pickup Date:</label>
                <input
                  type="date"
                  value={pickupDate}
                  onChange={handlePickupDateChange}
                />
              </div>
              <div>
                <label>Drop-off Date:</label>
                <input
                  type="date"
                  value={dropOffDate}
                  onChange={handleDropOffDateChange}
                />
              </div>
              <div>
                <label>Additional Comments:</label>
                <textarea
                  value={comments}
                  onChange={handleCommentsChange}
                />
              </div>
            </form>

            <div>
              <h3>Form Summary:</h3>
              <p>Pickup Date: {pickupDate}</p>
              <p>Drop-off Date: {dropOffDate}</p>
              <p>Additional Comments: {comments}</p>
            </div>
          </div>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={toggle}>
            Confirm
          </Button>{' '}
          <Button color="secondary" onClick={toggle}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default Booking;
