import React, { useState } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import Editor from "../Editor/Editor";
import AddCaveForm from "./AddCaveForm";
import { setCave } from "../../Redux/actions/allCave.actions";
import { Alert, Row, Col, Button } from "reactstrap";

const AddCave = props => {
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
    history.push("/admin/cave");
  };
  const handleExit = () => {
    return history.push("/admin/cave");
  };

  return (
    <>
      <Alert color="primary" className="row">
        <div className="text-left col-md-8">
          <h5>Внесення даних про печеру</h5>
        </div>
        <div className="text-right col-md-4">
          <Button color="primary" onClick={handleExit}>
            Вихід
          </Button>
        </div>
      </Alert>
      <Row>
        <Col md={{ size: 10, offset: 1 }}>
          <Alert>Опис :</Alert>
          <Editor handleChange={handleChange} editorHtml={editorHtml} />
        </Col>
      </Row>
      <AddCaveForm handleSubmit={handleSubmit} />

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
    error: state.caves.error
  };
};
const mapDispatchToProps = dispatch => {
  return {
    create: cave => dispatch(setCave(cave))
  };
};
export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(AddCave)
);
