import BallotDetailTable from "components/BallotDetailTable/BallotDetailTable";
import React from "react";
import { ModalBody } from "react-bootstrap";
import { Container } from "reactstrap";

const BallotDetailModal = (props) => {
  return (
    <div>
      <ModalBody>
        <p
          style={{
            fontSize: "24px",
            fontWeight: "bold",
            display: "flex",
            justifyContent: "center",
            marginBottom: "2em",
          }}
        >
          Detalle Boleta
        </p>

        <Container>
          <BallotDetailTable productDetails={props.purchaser} />
        </Container>
        <br />
      </ModalBody>
    </div>
  );
};

export default BallotDetailModal;
