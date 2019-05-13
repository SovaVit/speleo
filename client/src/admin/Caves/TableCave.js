import React from "react";
import CaveTableRow from "../../caveTable/CaveTableRow";
import { Table, Alert } from "reactstrap";

class TableCave extends React.PureComponent {
  RenderTable = () => {
    const { items } = this.props.caves;
    const caveTemplate = items.map(item => (
      <CaveTableRow key={item._id} item={item} />
    ));
    return caveTemplate;
  };

  render() {
    const { error, isFetching } = this.props.caves;
    return (
      <Table>
        <thead>
          <tr>
            <th>№</th>
            <th>Name</th>
            <th>Type</th>
            <th>Length</th>
            <th>Address</th>
            <th>Region</th>
            <th>Amplitude</th>
            <th>Depth</th>
            <th>Update</th>
            <th>Photo</th>
            <th>Delete</th>
          </tr>
        </thead>
        {error !== null && (
          <tbody>
            <tr>
              <th>
                <Alert color="danger">Помилка завантаження!</Alert>
              </th>
            </tr>
          </tbody>
        )}
        {isFetching === true && (
          <tbody>
            <tr>
              <th>
                <Alert>Завантаження!</Alert>
              </th>
            </tr>
          </tbody>
        )}
        <tbody>{this.RenderTable()}</tbody>
      </Table>
    );
  }
}
export default TableCave;
