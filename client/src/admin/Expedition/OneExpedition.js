import React, { useEffect } from "react";
import { connect } from "react-redux";
import { FetchIfNeeded } from "../../redux/actions/oneExped.actions";
import { Alert } from "reactstrap";

const OneExpedition = props => {
  useEffect(() => {
    const { id } = props.match.params;
    props.getOne(id);
  }, []);

  const { error, isFetching, item } = props.expedition;
  return (
    <>
      {error !== null && <Alert color="danger">Помилка завантаження!</Alert>}
      {isFetching === true && <Alert>Завантаження!</Alert>}
      <>
        <div>{item.caveName}</div>
        <div>{item.dateExpedition}</div>
        <div dangerouslySetInnerHTML={{ __html: item.description }} />

        <div>{item.numberExpedition}</div>
      </>
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
)(OneExpedition);
