import React from "react";
import ExpedTableRow from "../../expedTable/expedTableRow";
import { Table, Alert } from "reactstrap";

class TableExpedition extends React.PureComponent {

  RenderTable = () => {
    const { items } = this.props.expeditions;
    const expeditionTemplate = items.map(item => (
      <ExpedTableRow key={item._id} item={item} />
    ));
    return expeditionTemplate;
  };

  render() {
    const { error, isFetching } = this.props.expeditions;
    return (
      <Table>
        <thead>
          <tr>
            <th>Expedition Number</th>
            <th>Date</th>
            <th>Cave</th>
            <th>Update</th>
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
export default TableExpedition;
