import React from "react";
import { connect } from "react-redux";
import { FetchIfNeeded } from "../../redux/actions/oneExped.actions";
import { Alert } from "reactstrap";

class OneExpedition extends React.Component {
 
  componentDidMount() {
    const { id } = this.props.match.params;
   this.props.getOne(id);
  }
  render() {
  const {error, isFetching, item} = this.props.expedition;
    return (
      
      <div>
        {error!==null && <Alert color="danger">Помилка завантаження!</Alert>}
        {isFetching===true && <Alert>Завантаження!</Alert> }
        <div>
          <div>{item.caveName}</div>
<div>{item.dateExpedition}</div>
<div dangerouslySetInnerHTML={{ __html: item.description }} />

<div>{item.numberExpedition}</div>

</div>
      </div>
    );
  }
}
const mapStateToProps = store => {
  return {
    expedition: store.expedition
  };
};
const mapDispatchToProps = dispatch => {
  return {
    getOne: (_id) => dispatch(FetchIfNeeded(_id))
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(OneExpedition);

