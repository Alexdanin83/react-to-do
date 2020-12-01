// selectors
//import shortid from 'shortid';
//getSearchString
export const getSearchString = ({searchString}) =>searchString;


//countAllCards
export const countAllCards = ({cards}) => cards.length;

//countVisibleCards
export const countVisibleCards  = ({cards,searchString}) => cards.filter(card => new RegExp(searchString, 'i').test(card.title)).length;

// action name creator
const reducerName = 'searchString';
const createActionName = name => `app/${reducerName}/${name}`;
// actions types
export const CHANGE = createActionName('CHANGE');
// action creators
export const createAction_changeSearchString = payload => ({ payload: payload, type: CHANGE });

// reducer
export default function reducer(statePart = '', action = {}) {
  switch (action.type) {
    case CHANGE:
    //  return [...statePart, action.payload];
      return action.payload;
    default:
      return statePart;
  }
}
