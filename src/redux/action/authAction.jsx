import axios from "axios";
import { loginUserReducer } from "../slice/authSlice";
import { errorToast, successToast } from "../../components/common/Toast";

export function LoginApi(data, navigate) {
  return async (dispatch) => {
    dispatch(loginUserReducer({ isLoading: true }));
    axios
      .post(`https://api-iffco-test.colan.in/auth_app/v1/token/`, data)
      .then((e) => {
        const { status, response, message } = data;
        if (e?.status === 200 || e?.status === 201 || e?.status === "success") {
          successToast("Welcome User");
          dispatch(loginUserReducer({ isLoading: false, response: e?.data }));
          navigate("/dashboard/superadmin");
          sessionStorage.setItem("accessToken", "Bearer " + e?.data?.access);
          sessionStorage.setItem("refreshToken", e?.data?.refresh);
        } else {
          errorToast("Bad Credentials");
          dispatch(loginUserReducer({ isLoading: false }));
        }
      })
      .catch((e) => {
        errorToast("Bad Credentials");
        dispatch(loginUserReducer({ isLoading: false }));
      });
  };
}
