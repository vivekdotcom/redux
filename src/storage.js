import { createStore } from "redux";
import useReducer from './redux/Reducer/user.reducer';

const storage = createStore(useReducer);

export default storage;