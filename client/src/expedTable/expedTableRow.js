import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { deleteExpedition} from "../redux/actions/allExped.actions";
import { Button } from "reactstrap";

const ExpedTableRow = props => {
  const { _id, numberExpedition, dateExpedition, caveName } = props.item;

  const deleteItem = async _id => {
    try {
      return await props.delete(_id);
    } catch (err) {
      return console.log(err);
    }
  };
  return (
    <tr>
      <th>
        <Link to={{ pathname: `/admin/expedition/${_id}` }}>
          {numberExpedition}
        </Link>
      </th>
      <td>{dateExpedition}</td>
      <td>{caveName}</td>
      <td>
        <Button outline size="sm" color="primary">
          Update
        </Button>{" "}
      </td>
      <td>
        <Button
          onClick={() => {
            if (window.confirm("Are you sure you wish to delete this item?"))
              deleteItem(_id);
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
export default connect(
  null,
  mapDispatchToProps
)(ExpedTableRow);
