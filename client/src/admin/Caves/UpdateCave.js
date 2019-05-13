import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import Editor from "../Editor/Editor";
import AddCaveForm from "./AddCaveForm";
import { updateCave } from "../../redux/actions/allCave.actions";
import { Alert, Row, Col, Button } from "reactstrap";

class UpdateCave extends React.Component {
  constructor(props) {
    super(props);

    this.state = { editorHtml: "" };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleExit = this.handleExit.bind(this);
  }
  componentDidMount() {
    if (this.props.cave.description) {
      this.setState({ editorHtml: this.props.cave.description });
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
    return this.props.history.push("/admin/cave");
  }
  render() {
    return (
      <>
        <Alert color="primary" className="row">
          <div className="text-left col-md-8">
            <h5>Редагування даних про печеру</h5>
          </div>
          <div className="text-right col-md-4">
            <Button color="primary" onClick={this.handleExit}>
              Вихід
            </Button>
          </div>
        </Alert>
        <Row>
          <Col md={{ size: 10, offset: 1 }}>
            <Alert>Опис :</Alert>
            <Editor
              handleChange={this.handleChange}
              editorHtml={this.state.editorHtml}
            />
          </Col>
        </Row>
        <AddCaveForm
          handleSubmit={this.handleSubmit}
          initialValues={this.props.cave}
        />

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
