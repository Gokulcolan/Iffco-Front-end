import { Navigate } from "react-router-dom";
import axios from "axios";
import { AUTH_BASE_URL } from "../api/configApiUrl";

export const APIService = async (method, url, body) => {
  const accessToken =
    typeof window !== "undefined" ? sessionStorage.getItem("accessToken") : "";

  if (window.navigator.onLine) {
    return await axios({
      method: method,
      baseURL: AUTH_BASE_URL,
      url: url,
      headers: {
        Authorization: accessToken,
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      data: body,
    })
      .then((e) => {
        const { data } = e;
        // if (data.status === 200 || data?.status === "success") {
        if (e?.status === 200 || e?.status === "success" || e?.status === 201) {
          return {
            status: "success",
            data: data,
          };
        } else {
          return {
            status: "error",
            message: data.message,
          };
        }
      })
      .catch((e) => {
        if (e.message === "Network Error") {
          Navigate("/network-issue");
        }

        const refresh =
          typeof window !== "undefined"
            ? sessionStorage.getItem("refreshToken")
            : "";
        if (e.response.status === 401) {
          axios
            .post(`${AUTH_BASE_URL}/auth_app/v1/token/refresh/`)
            .then((e) => {
              const { data } = e?.data;

              sessionStorage.setItem("accessToken", "Bearer " + data.access);
              sessionStorage.setItem("refreshToken", data.refresh);
              window.location.reload(window.location.pathname);
            });
        }
      });
  } else {
    Navigate("/internet-issue");
  }
};
