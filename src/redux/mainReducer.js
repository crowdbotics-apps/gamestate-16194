import { combineReducers } from "redux";

/**
 * You can import more reducers here
 */


//@BlueprintReduxImportInsertion
import EmailAuth32473Reducer from '../features/EmailAuth32473/redux/reducers';
import EmailAuth32467Reducer from '../features/EmailAuth32467/redux/reducers';
import CalendarReducer from '../features/Calendar/redux/reducers';
import EmailAuthReducer from '../features/EmailAuth/redux/reducers';

export const combinedReducers = combineReducers({
  blank: (state, action) => {
    if (state == null) state = [];
    return state;
  },


  //@BlueprintReduxCombineInsertion
EmailAuth32473: EmailAuth32473Reducer,
EmailAuth32467: EmailAuth32467Reducer,
Calendar: CalendarReducer,
EmailAuth: EmailAuthReducer,

});