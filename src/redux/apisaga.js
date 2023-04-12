import { call, put, takeEvery } from "redux-saga/effects";
import axios from "axios";
import Register from "../redux/actions/auth";
import { baseUrl, register_ent } from "../../component/apis.js";
function* register1(action) {
  try {
    yield call(Register());
    axios.post(baseUrl.baseUrl + register_ent.register_ent);
    const load = yield put(Register, action.payload);
    console.log(load);
  } catch (e) {
    console.log(register1);
  }
}
function* mySaga() {
  yield takeEvery(Register, register1);
}
export default mySaga;
