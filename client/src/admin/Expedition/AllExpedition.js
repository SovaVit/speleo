import React, { useEffect } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { getAllExpeditions } from "../../redux/actions/allExped.actions";
import TableExpedition from "./TableExped";
import { Row, Button } from "reactstrap";

const GetAllExpeditions = props => {
  
  useEffect(() => {
    props.get();
  }, []);

  return (
    <>
      <Row className="p-1 ml-1">
        <Button
          color="success"
          size="sm"
          onClick={() => props.history.push("/admin/add-expedition")}
        >
          Create New
        </Button>
      </Row>
      <Row>
        <TableExpedition expeditions={props.expeditions} />
      </Row>
    </>
  );
};
const mapStateToProps = store => {
  return {
    expeditions: store.expeditions
  };
};
const mapDispatchToProps = dispatch => {
  return {
    get: () => dispatch(getAllExpeditions())
  };
};
export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(GetAllExpeditions)
);
