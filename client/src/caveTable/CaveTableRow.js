import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { deleteCave } from "../redux/actions/allCave.actions";
import { Button } from "reactstrap";

const CaveTableRow = props => {
  const { _id } = props.item;

  const deleteItem = _id => {
    return props.delete(_id);
  };
  const updateItem = _id => {
    return props.history.push(`/admin/update-cave/${_id}`);
  };
  const photoGallery = _id => {
    return props.history.push(`/admin/photo/${_id}`);
  };
  return (
    <tr>
      <td>{props.item.cadastralNumber}</td>
      <td>
        <Link to={{ pathname: `/admin/cave/${_id}` }}>{props.item.name}</Link>
      </td>
      <td>{props.item.typeCave}</td>
      <td>{props.item.lengthCave}</td>
      <td>{props.item.address}</td>
      <td>{props.item.numberRegion}</td>
      <td>{props.item.amplitude}</td>
      <td>{props.item.depthCave}</td>

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
            photoGallery(_id);
          }}
          outline
          size="sm"
          color="primary"
        >
          Photo
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
    delete: id => dispatch(deleteCave(id))
  };
};
export default withRouter(
  connect(
    null,
    mapDispatchToProps
  )(CaveTableRow)
);
