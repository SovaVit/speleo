import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import Pagination from "rc-pagination";
import localeInfo from "rc-pagination/lib/locale/en_US";
import "rc-pagination/assets/index.css";
import { fetchPostsIfNeeded } from "../../Redux/actions/allCave.actions";
import TableCave from "./TableCave";
import { Row, Button } from "reactstrap";

const GetAllCaves = props => {
  const LIMIT = 40;
  const { history, caves } = props;
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
  )(GetAllCaves)
);
