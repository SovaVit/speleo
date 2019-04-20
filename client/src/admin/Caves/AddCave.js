import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import Editor from "../Editor/Editor";
import AddCaveForm from "./AddCaveForm";
import { setCave } from "../../redux/actions/allCave.actions";
import { Alert, Row, Col, Button } from "reactstrap";

class AddCave extends React.Component {
  constructor(props) {
    super(props);
    this.state = { editorHtml: "" };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleExit = this.handleExit.bind(this);
  }

  handleChange(html) {
    this.setState({ editorHtml: html });
  }
  handleSubmit(event, form) {
    event.description = this.state.editorHtml;
    this.props.create(event);
    this.setState({ editorHtml: "" });
    form.reset();
  }
  handleExit() {
    return this.props.history.push("/admin/cave");
  }
  render() {
    return (
      <div>
        <Alert color="primary" className="row">
          <div className="text-left col-md-8">
            <h5>Внесення даних про печеру</h5>
          </div>
          <div className="text-right col-md-4">
            <Button color="primary" onClick={this.handleExit}>
              Вихід
            </Button>
          </div>
        </Alert>

        <Row>
          <Col md="3">
            <AddCaveForm handleSubmit={this.handleSubmit} />
          </Col>
          <Col md="8">
            <Alert>Опис :</Alert>
            <Editor
              handleChange={this.handleChange}
              editorHtml={this.state.editorHtml}
            />
          </Col>
        </Row>
        <Row>
          <Col>
            {this.props.error !== null && (
              <Alert color="danger">Помилка під час запису!</Alert>
            )}
          </Col>
        </Row>
      </div>
    );
  }
}
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
