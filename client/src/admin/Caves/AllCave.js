import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { fetchPostsIfNeeded } from "../../redux/actions/allCave.actions";
import TableCave from "./TableCave";
import { Row, Button } from "reactstrap";

class GetAllCaves extends React.Component {
  componentDidMount() {
    this.props.get();
  }

  render() {
    return (
      <>
        <Row className="p-1 ml-1">
          <Button
            color="success"
            size="sm"
            onClick={() => this.props.history.push("/admin/add-cave")}
          >
            Create New
          </Button>
        </Row>
        <Row>
          <TableCave caves={this.props.caves} />
        </Row>
      </>
    );
  }
}
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
