import React from 'react';
import {connect} from 'react-redux';
import {selectChanson} from '../actions';

class ListChanson extends React.Component {
  renderList() {
    return this.props.chansons.map((chanson) => {
      return (
        <div className="item" key={chanson.author}>
          <div className="right floated content">
            <button
             className="ui button primary" onClick={() => this.props.selectChanson(chanson)}>
                 selectionner
             </button>
          </div>

          <div className="content">{chanson.author}</div>
        </div>
      );
    });
  }
  render() {
    // this.props === {chansons:state.chansons}
  //  console.log(this.props);
    return <div className="ui divided list">{this.renderList()}</div>;
  }
}

const mapStateToProps = (state) => {
  //  console.log(state)
  return {
    chansons: state.chansons,
  };
};
export default connect(mapStateToProps, {
  selectChanson: selectChanson,
})(ListChanson);
