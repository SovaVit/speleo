import React from "react";
import { connect } from "react-redux";
import { FetchIfNeeded } from "../../redux/actions/oneCave.actions";
import { Alert } from "reactstrap";
//import NotFound from '../../NotFound/NotFound'

class OneCave extends React.Component {
  componentDidMount() {
    const { id } = this.props.match.params;
    this.props.getOne(id);
  }
  render() {
    const { error, isFetching, item } = this.props.cave;
    return (
      <>
        {error !== null && <Alert color="danger">Помилка завантаження!</Alert>}
        {isFetching === true && <Alert>Завантаження!</Alert>}
        {/* {item === null && <NotFound/>} */}
        <div>
          <div>{item.cadastralNumber}</div>
          <div> {item.name}</div>
          <div>{item.typeCave}</div>
          <div>{item.lengthCave}</div>
          <div>{item.address}</div>
          <div>{item.numberRegion}</div>
          <div>{item.square}</div>
          <div>{item.volume}</div>
          <div>{item.amplitude}</div>
          <div>{item.coordinateX}</div>
          <div>{item.coordinateY}</div>
          <div>{item.typeRock}</div>
          <div>{item.depthCave}</div>
          <div>{item.createdAt}</div>

          <div dangerouslySetInnerHTML={{ __html: item.description }} />
        </div>
      </>
    );
  }
}
const mapStateToProps = store => {
  return {
    cave: store.cave
  };
};
const mapDispatchToProps = dispatch => {
  return {
    getOne: _id => dispatch(FetchIfNeeded(_id))
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(OneCave);
