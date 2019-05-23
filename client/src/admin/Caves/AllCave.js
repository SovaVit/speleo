import React, { useEffect } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { fetchPostsIfNeeded } from "../../Redux/actions/allCave.actions";
import TableCave from "./TableCave";
import { Row, Button } from "reactstrap";

const GetAllCaves = props => {
  const { history, caves } = props;
  useEffect(() => {
    props.get();
  }, []);

  return (
    <>
      <Row className="p-1 ml-1">
        <Button
          color="success"
          size="sm"
          onClick={() => history.push("/admin/add-cave")}
        >
          Create New
        </Button>
      </Row>
      <Row>
        <TableCave caves={caves} />
      </Row>
    </>
  );
};
const mapStateToProps = store => {
  return {
    caves: store.caves
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
  )(GetAllCaves)
);
