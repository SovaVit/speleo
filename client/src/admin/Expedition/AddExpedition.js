import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import Editor from "../Editor/Editor";
import AddExpeditionForm from "./AddExpeditionForm";
import { setExpedition } from "../../redux/actions/allExped.actions";
import { Alert, Row, Col, Button } from "reactstrap";

class AddExpedition extends React.Component {
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
  handleSubmit(e, form) {
    const date = {
      numberExpedition: e.number,
      dateExpedition: e.date,
      caveName: e.cave,
      description: this.state.editorHtml
    };
    this.props.create(date);
    this.setState({ editorHtml: "" });
    form.reset();
  }
  handleExit() {
    return this.props.history.push("/admin/expedition");
  }
  render() {

    return (
      <div>
        <Alert color="primary" className="row">
          <div className="text-left col-md-8"><h5>Добавити експедицію</h5></div>
          <div className="text-right col-md-4">
            <Button color="primary" onClick={this.handleExit}>
              Вихід
            </Button>
          </div>
        </Alert>

        <Row>
          <Col md="8">
            <Alert>Опис :</Alert>
            <Editor
              handleChange={this.handleChange}
              editorHtml={this.state.editorHtml}
            />
          </Col>
          <Col md="3">
            <AddExpeditionForm handleSubmit={this.handleSubmit} />
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
