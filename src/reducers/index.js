import {combineReducers} from 'redux';

const chansonReducer = () => {
  return [
    {author: 'BlackBoy' ,titre: 'No Scrubs', duree: '4:05'},
    { author: 'Juvet' ,titre: 'Macarena', duree: '3:10'},
    {author: 'Taj' ,titre: 'All Start', duree: '5:10'},
    {author: 'Corinne' ,titre: 'I Want it That Way', duree: '1:45'},
  ];
};

const selectedChansonReducer = (selectChanson = null, action) => {
  if (action.type === 'CHANSON_SELECTED') {
    return action.payload;
  }
  return selectChanson;
};

export default combineReducers({
  chansons: chansonReducer,
  selectChanson: selectedChansonReducer,
});
