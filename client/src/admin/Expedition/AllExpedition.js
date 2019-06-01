import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import {fetchPostsIfNeeded } from "../../Redux/actions/allExped.actions";
import TableExpedition from "./TableExped";
import Pagination from "rc-pagination";
import localeInfo from "rc-pagination/lib/locale/en_US";
import "rc-pagination/assets/index.css";
import { Row, Button } from "reactstrap";

const GetAllExpeditions = props => {
  const LIMIT = 40;
  const { history, expeditions } = props;
  const { countRecords } = expeditions;

  const [current, setCurrent] = useState(1);

  useEffect(() => {
   
    props.get(0);
  }, []);

  const handleChange = async page => {
    await props.get(page * LIMIT - LIMIT);
    setCurrent(page);
  };

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
      <Row className="p-1 ml-1">
        <Pagination
          onChange={handleChange}
          pageSize={LIMIT}
          current={current}
          total={countRecords}
          locale={localeInfo}
        />
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
    get: (start) => dispatch(fetchPostsIfNeeded(start))
  };
};
export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(GetAllExpeditions)
);
