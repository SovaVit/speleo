import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import NavBar from "../NavBar/Nav";
import ExpeditionsList from "./ExpeditionsList";
import { fetchPostsIfNeeded } from "../Redux/actions/allExped.actions";
import Pagination from "rc-pagination";
import localeInfo from "rc-pagination/lib/locale/en_US";
import "rc-pagination/assets/index.css";

const ListExpedContainer = props => {
  const LIMIT = 40;
  const { expeditions } = props;
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
      <NavBar />
      <ExpeditionsList expeditions={expeditions} />
      <>
        <Pagination
          onChange={handleChange}
          pageSize={LIMIT}
          current={current}
          total={countRecords}
          locale={localeInfo}
        />
      </>
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
    get: start => dispatch(fetchPostsIfNeeded(start))
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(ListExpedContainer)
);
