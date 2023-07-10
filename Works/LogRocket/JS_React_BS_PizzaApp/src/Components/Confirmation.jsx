import React from "react";
import { Toast } from "react-bootstrap";

function Confirmation({ toggle }) {
  return (
    <Toast onClose={() => toggle(false)}>
      <Toast.Header>
        <strong className="mr-auto">Your Order is in the Oven</strong>
        <small>Just now</small>
      </Toast.Header>
      <Toast.Body>Your Pizza will be with you in 30mn</Toast.Body>
    </Toast>
  );
}

export default Confirmation;
