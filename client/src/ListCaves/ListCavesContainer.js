import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import Pagination from "rc-pagination";
import localeInfo from "rc-pagination/lib/locale/en_US";
import "rc-pagination/assets/index.css";
import { fetchPostsIfNeeded } from "../Redux/actions/allCave.actions";
import CavesList from "./CavesList";

const ListCavesContainer = (props) => {
  const LIMIT = 40;
  const { caves } = props;
  const { countRecords } = caves;

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
      <CavesList caves={caves} />
      <div>
        <Pagination
          onChange={handleChange}
          pageSize={LIMIT}
          current={current}
          total={countRecords}
          locale={localeInfo}
        />
      </div>
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
    get: start => dispatch(fetchPostsIfNeeded(start))
  };
};
export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(ListCavesContainer)
);
