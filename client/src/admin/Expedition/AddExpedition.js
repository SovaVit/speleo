import React, { useState } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import Editor from "../Editor/Editor";
import AddExpeditionForm from "./AddExpeditionForm";
import { setExpedition } from "../../Redux/actions/allExped.actions";
import { Alert, Row, Col, Button } from "reactstrap";

const AddExpedition = props => {
  const { history, error } = props;
  let [editorHtml, setEditorHtml] = useState("");

  const handleChange = html => {
    setEditorHtml(html);
  };
  const handleSubmit = async (event, form) => {
    event.description = editorHtml;
    await props.create(event);
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
          <h5>Добавити експедицію</h5>
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
          <AddExpeditionForm handleSubmit={handleSubmit} />
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

const mapStateToProps = state => {
  return {
    error: state.expeditions.error
  };
};
const mapDispatchToProps = dispatch => {
  return {
    create: expedition => dispatch(setExpedition(expedition))
  };
};
export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(AddExpedition)
);
