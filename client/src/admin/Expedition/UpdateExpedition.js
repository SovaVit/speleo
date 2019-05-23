import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { updateExpedition } from "../../Redux/actions/allExped.actions";
import Editor from "../Editor/Editor";
import AddExpeditionForm from "./AddExpeditionForm";
import { Alert, Row, Col, Button } from "reactstrap";

const UpdateExpedition = props => {
  const { expedition } = props;
  const { id } = props.match.params;
  const { history, error } = props;
  let [editorHtml, setEditorHtml] = useState("");

  useEffect(() => {
    expedition.description
      ? setEditorHtml(expedition.description)
      : setEditorHtml("");
  }, []);

  const handleChange = html => {
    setEditorHtml(html);
  };

  const handleSubmit = (event, form) => {
    event.description = editorHtml;
    props.update(id, event);
    setEditorHtml("");
    form.reset();
    history.push("/admin/expedition");
  };
  const handleExit = () => {
    return history.push("/admin/expedition");
  };

  return (
    <>
      <Alert color="primary" className="row">
        <div className="text-left col-md-8">
          <h5>Редагування експедиції</h5>
        </div>
        <div className="text-right col-md-4">
          <Button color="primary" onClick={handleExit}>
            Вихід
          </Button>
        </div>
      </Alert>

      <Row>
        <Col md="8">
          <Alert>Опис :</Alert>
          <Editor handleChange={handleChange} editorHtml={editorHtml} />
        </Col>
        <Col md="3">
          <AddExpeditionForm
            handleSubmit={handleSubmit}
            initialValues={expedition}
          />
        </Col>
      </Row>
      <Row>
        <Col>
          {error !== null && (
            <Alert color="danger">Помилка під час запису!</Alert>
          )}
        </Col>
      </Row>
    </>
  );
};
const mapStateToProps = (store, ownProps) => {
  const item = store.expeditions.items.find(item => {
    return item._id === ownProps.match.params.id;
  });
  return {
    expedition: item,
    error: store.expeditions.error
  };
};
const mapDispatchToProps = dispatch => {
  return {
    update: (_id, expedition) => dispatch(updateExpedition(_id, expedition))
  };
};
export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(UpdateExpedition)
);
