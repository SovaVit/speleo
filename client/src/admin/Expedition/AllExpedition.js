import React, { useEffect } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { fetchPostsIfNeeded } from "../../Redux/actions/allExped.actions";
import TableExpedition from "./TableExped";
import { Row, Button } from "reactstrap";

const GetAllExpeditions = props => {
  const { history, expeditions } = props;
  useEffect(() => {
    props.get();
  }, []);

  return (
    <>
      <Row className="p-1 ml-1">
        <Button
          color="success"
          size="sm"
          onClick={() => history.push("/admin/add-expedition")}
        >
          Create New
        </Button>
      </Row>
      <Row>
        <TableExpedition expeditions={expeditions} />
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
    get: () => dispatch(fetchPostsIfNeeded())
  };
};
export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(GetAllExpeditions)
);
