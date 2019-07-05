import React, { useEffect } from "react";
import { connect } from "react-redux";
import { FetchIfNeeded } from "../Redux/actions/oneExped.actions";
import OneExpedition from "./OneExpedition";
import { Alert } from "reactstrap";

const OneExpeditionContainer = props => {
  const { id } = props.match.params;
  const { error, isFetching, item } = props.expedition;
  useEffect(() => {
    props.getOne(id);
  }, [id]);

  return (
    <>
      {error !== null && <Alert color="danger">Помилка завантаження!</Alert>}
      {isFetching === true && <Alert>Завантаження!</Alert>}
      <OneExpedition item={item} />
    </>
  );
};
const mapStateToProps = store => {
  return {
    expedition: store.expedition
  };
};
const mapDispatchToProps = dispatch => {
  return {
    getOne: _id => dispatch(FetchIfNeeded(_id))
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(OneExpeditionContainer);
