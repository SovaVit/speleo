import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import Editor from "../Editor/Editor";
import AddCaveForm from "./AddCaveForm";
import { updateCave } from "../../Redux/actions/allCave.actions";
import { Alert, Row, Col, Button } from "reactstrap";

const UpdateCave = props => {
  const { error, history, cave } = props;
  const { id } = props.match.params;
  let [editorHtml, setEditorHtml] = useState("");
  useEffect(() => {
    cave.description ? setEditorHtml(cave.description) : setEditorHtml("");
  }, []);

  const handleChange = html => {
    setEditorHtml(html);
  };
  const handleSubmit = (event, form) => {
    event.description = editorHtml;
    props.update(id, event);
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
          <h5>Редагування даних про печеру</h5>
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
      <AddCaveForm handleSubmit={handleSubmit} initialValues={cave} />

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
  const item = store.caves.items.find(item => {
    return item._id === ownProps.match.params.id;
  });

  return {
    cave: item,
    error: store.caves.error
  };
};
const mapDispatchToProps = dispatch => {
  return {
    update: (id, cave) => dispatch(updateCave(id, cave))
  };
};
export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(UpdateCave)
);
