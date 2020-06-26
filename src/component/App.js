import React from 'react';

import ListChanson from './ListChanson';
import DetailChanson from './DetailChanson'

const App = () => {
  return (
      <>
      <br/>
     
    <div className="ui container grid">
       <h1>Liste des Chansons</h1>
      <div className="ui row">
        <div className="column eight wide">
          <ListChanson />
        </div>
        <div className='column eigh wide'>
            <DetailChanson/>

        </div>
      </div>
    </div>
    </>
  );
};

export default App;
