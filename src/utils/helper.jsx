import { navigatePath } from "../redux/slice/authSlice";
import store from "../redux/store";
const LOGIN = "/";

// Session helper functions
export const sessionDestroy = (path = LOGIN) => {
  window.sessionStorage.clear();
  navigate(path);
};

export const navigate = (path) => {
  dispatcher(navigatePath(path));
};

export const dispatcher = (a) => {
  store.dispatch(a);
};

export const numberWithCommas = (x) => {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};
