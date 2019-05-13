import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { updateExpedition } from "../../redux/actions/allExped.actions";
import Editor from "../Editor/Editor";
import AddExpeditionForm from "./AddExpeditionForm";
import { Alert, Row, Col, Button } from "reactstrap";

class UpdateExpedition extends React.Component {
  constructor(props) {
    super(props);
    this.state = { editorHtml: "" };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleExit = this.handleExit.bind(this);
  }
  componentDidMount() {
    if (this.props.expedition.description) {
      this.setState({ editorHtml: this.props.expedition.description });
    }
  }
  handleChange(html) {
    this.setState({ editorHtml: html });
  }
  handleSubmit(event, form) {
    event.description = this.state.editorHtml;
    this.props.update(this.props.match.params.id, event);
    this.setState({ editorHtml: "" });
    form.reset();
  }
  handleExit() {
    return this.props.history.push("/admin/expedition");
  }

  render() {
    const { expedition } = this.props;
    return (
      <>
        <Alert color="primary" className="row">
          <div className="text-left col-md-8">
            <h5>Редагування експедиції</h5>
          </div>
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
            <AddExpeditionForm
              handleSubmit={this.handleSubmit}
              initialValues={expedition}
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
      </>
    );
  }
}
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
