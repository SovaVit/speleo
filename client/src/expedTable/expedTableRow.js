import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { deleteExpedition } from "../Redux/actions/allExped.actions";
import { Button } from "reactstrap";

const ExpedTableRow = props => {
  const { _id, numberExpedition, dateExpedition, caveName } = props.item;

  const deleteItem = _id => {
    return props.delete(_id);
  };
  const updateItem = _id => {
    return props.history.push(`/admin/update-expedition/${_id}`);
  };
  return (
    <tr>
      <td>
        <Link to={{ pathname: `/admin/expedition/${_id}` }}>
          {numberExpedition}
        </Link>
      </td>
      <td>{dateExpedition}</td>
      <td>{caveName}</td>

      <td>
        <Button
          onClick={() => {
            updateItem(_id);
          }}
          outline
          size="sm"
          color="primary"
        >
          Update
        </Button>{" "}
      </td>
      <td>
        <Button
          onClick={() => {
            if (window.confirm("Are you sure ?")) deleteItem(_id);
          }}
          outline
          size="sm"
          color="primary"
        >
          Delete
        </Button>{" "}
      </td>
    </tr>
  );
};
const mapDispatchToProps = dispatch => {
  return {
    delete: id => dispatch(deleteExpedition(id))
  };
};
export default withRouter(
  connect(
    null,
    mapDispatchToProps
  )(ExpedTableRow)
);
