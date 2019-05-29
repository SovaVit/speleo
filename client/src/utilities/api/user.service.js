import authHeader from "../helpers/auth-header";
import handleResponse from "../helpers/handleResponse";

export const userService = {
  login
};

async function login(username, password) {
  const requestOptions = {
    method: "POST",
    headers: authHeader(),
    body: JSON.stringify({ username, password })
  };

  const response = await fetch(`/speleo/user/sign-in`, requestOptions);
  const user = await handleResponse(response);

  return user;
}

// async function logout(token) {
//   const requestOptions = {
//     method: "POST",
//     headers: authHeader(token)
//   };
//   const response = await fetch(`/speleo/user/sign-out`, requestOptions);
//   const user = await handleResponse(response);
//   return user;
// }

// async function update(user) {
//   const requestOptions = {
//     method: "PUT",
//     headers: { ...authHeader(), "Content-Type": "application/json" },
//     body: JSON.stringify(user)
//   };

//   const response = await fetch(
//     `${config.apiUrl}/users/${user.id}`,
//     requestOptions
//   );
//   return handleResponse(response);
// }
