import React from "react";
import { connect } from "react-redux";
import { updateExpedition } from "../../redux/actions/allExped.actions";

const UpdateExpedition = props => {
  console.log(props.expedition);
  return <div>Update Expeditions</div>;
};
const mapStateToProps = (store, ownProps) => {
  const item = store.expeditions.items.find(item => {
    return item._id === ownProps.match.params.id;
  });
  return {
    expedition: item
  };
};
const mapDispatchToProps = dispatch => {
  return {
    update: (_id, expedition) => dispatch(updateExpedition(_id, expedition))
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UpdateExpedition);
