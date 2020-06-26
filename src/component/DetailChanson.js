import React from 'react';
import {connect} from 'react-redux';

const DetailChanson = ({Chanson}) => {
  //console.log(props)
  if (!Chanson) {
    return <div> Selectionner une Chanson </div>;
  }
  return (
    <div>
      <h3>Details de:</h3>
      <p>
        Auteur:{Chanson.author}
        <br/>
        Titre:{Chanson.titre}
        <br/>
        Durée:{Chanson.duree}
      </p>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {Chanson: state.selectChanson};
};

export default connect(mapStateToProps)(DetailChanson);
