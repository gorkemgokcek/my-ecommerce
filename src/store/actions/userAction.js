import { AxiosInstance } from "../../axios/axiosInstance";
import { ToastContainer, toast } from "react-toastify";

export const SET_USER = "SET_USER";
export const LOGIN_FAILURE = "LOGIN_FAILURE";
export const LOG_OUT = "LOG_OUT";

export const setUserActionCreator = (userData) => {
  return { type: SET_USER, payload: userData };
};

export const loginFailActionCreator = (errorData) => {
  return { type: LOGIN_FAILURE, payload: errorData };
};

export const logOutActionCreator = () => {
  return { type: LOG_OUT };
};
export const loginUserAction = (formData, navigate) => (dispatch, getState) => {
  AxiosInstance.post("/login", formData)
    .then((res) => {
      localStorage.setItem("token", res.data.token);
      toast.success(
        "Başarılı bir şekilde giriş yaptınız, Ana sayfaya yönlendiriliyorsunuz.",
        { position: "top-right" }
      );
      dispatch(setUserActionCreator(res.data));
      setTimeout(() => navigate("/"), 5000);
    })
    .catch((err) => {
      toast.error("Kullanıcı adı veya şifre hatalı.", {
        position: "top-right",
      });
      dispatch(loginFailActionCreator(err.response.data));
    });
};


export const autoLoginAction = () => (dispatch, getState) => {
  const token = localStorage.getItem("token");
  console.log("ilk token", token);
  if (token) {
    AxiosInstance.get("/verify", {
      headers: {
        Authorization: token,
      },
    })
      .then((response) => {
        dispatch(setUserActionCreator(response.data));
        localStorage.setItem("token", token);
      })
      .catch((err) => {
        console.log("Login Hata", err);
        localStorage.removeItem("token");
      });
  }
};
