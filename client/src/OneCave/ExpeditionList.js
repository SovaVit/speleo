import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchPostsIfNeeded } from "../Redux/actions/allExped.actions";

const ExpeditionList = props => {
  const { name } = props;

  useEffect(() => {
    const getData = () => {
      if (name) {
        props.getExpeditions(name);
      }
    };
    getData();
  }, [name]);

  return <div />;
};
const mapStateToProps = store => {
  return {
    expeditions: store.expeditions
  };
};
const mapDispatchToProps = dispatch => {
  return {
    getExpeditions: name => {
      dispatch(fetchPostsIfNeeded(0, name));
    }
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ExpeditionList);
