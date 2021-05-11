import {combineReducers} from 'redux-immutable';
import headerReducer from '../common/header/store/reducer';
import detailReducer from '../pages/detail/redux/reducer';
import homeReducer from '../pages/home/redux/reducer';
import loginReducer from '../pages/login/redux/reducer';

export default combineReducers({header:headerReducer,home:homeReducer,detail:detailReducer,login:loginReducer})