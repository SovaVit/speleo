import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { deleteCave } from "../Redux/actions/allCave.actions";
import { Button } from "reactstrap";

const CaveTableRow = props => {
  const { _id } = props.item;
  const { history, item } = props;

  const deleteItem = _id => {
    return props.delete(_id);
  };
  const updateItem = _id => {
    return history.push(`/admin/update-cave/${_id}`);
  };
  const photoGallery = _id => {
    return history.push(`/admin/photo/${_id}`);
  };
  return (
    <tr>
      <td>{item.cadastralNumber}</td>
      <td>
        <Link to={{ pathname: `/admin/cave/${_id}` }}>{item.name}</Link>
      </td>
      <td>{item.typeCave}</td>
      <td>{item.lengthCave}</td>
      <td>{item.address}</td>
      <td>{item.numberRegion}</td>
      <td>{item.amplitude}</td>
      <td>{item.depthCave}</td>

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
