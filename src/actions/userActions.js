const URL = `http://localhost:3000/`;

export const userLogin = (email, password) => {
  return dispatch => {
    return fetch(URL + "login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        user: { email: email, password: password }
      })
    })
      .then(res => res.json())
      .then(json => {
        dispatch(loginSuccess(json.user));
        localStorage.setItem("token", json.jwt);
      });
  };
};

// --------------------------------------------------------- //

// export const userLogout = () => {
//   return dispatch => {
//     return fetch(URL + "login", {
//       method: "DELETE",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify({
//         user: { email: email, password: password }
//       })
//     })
//       .then(res => res.json())
//       .then(json => {
//         dispatch(loginSuccess(json.user));
//         localStorage.setItem("token", json.jwt);
//       });
//   };
// };

// --------------------------------------------------------- //

export function loginSuccess(userData) {
  return { type: "USER_LOGIN_SUCCESS", userData }
};

// export function logoutSuccess(currentUser) {
//   return { type: "USER_LOGOUT_SUCCESS", currentUser }
// };
