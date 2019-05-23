import React from "react";
import ExpedTableRow from "../../expedTable/expedTableRow";
import { Table, Alert } from "reactstrap";

const TableExpedition = props => {
 const RenderTable = () => {
    const { items } = props.expeditions;
    const expeditionTemplate = items.map(item => (
      <ExpedTableRow key={item._id} item={item} />
    ));
    return expeditionTemplate;
  };

  const { error, isFetching } = props.expeditions;
  return (
    <Table>
      <thead>
        <tr>
          <th>Number</th>
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
      <tbody>{RenderTable()}</tbody>
    </Table>
  );
};
export default TableExpedition;
