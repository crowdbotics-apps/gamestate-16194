import { all, takeEvery, take } from "redux-saga/effects";


//@BlueprintReduxSagaImportInsertion
import EmailAuth32473Saga from '../features/EmailAuth32473/redux/sagas';
import EmailAuth32467Saga from '../features/EmailAuth32467/redux/sagas';
import CalendarSaga from '../features/Calendar/redux/sagas';
import EmailAuthSaga from '../features/EmailAuth/redux/sagas';

function* helloSaga() {
  console.log("Hello from saga!");
}

export function* mainSaga() {
  yield all([
    takeEvery("TEST/ALO", helloSaga),
    // other sagas go here


    //@BlueprintReduxSagaMainInsertion
EmailAuth32473Saga,
EmailAuth32467Saga,
CalendarSaga,
EmailAuthSaga,
    
  ]);
}