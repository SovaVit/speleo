import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { getAllExpeditions } from "../../redux/actions/allExped.actions";
import TableExpedition from "./TableExped";
import { Row, Button } from "reactstrap";

class GetAllExpeditions extends React.Component {
  componentDidMount() {
    this.props.get();
  }

  render() {
    return (
      <div>
        <Row className="p-1 ml-1">
          <Button
            color="success"
            size="sm"
            onClick={() => this.props.history.push("/admin/add-expedition")}
          >
            Create New
          </Button>
        </Row>
        <Row>
          <TableExpedition expeditions={this.props.expeditions} />
        </Row>
      </div>
    );
  }
}
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
