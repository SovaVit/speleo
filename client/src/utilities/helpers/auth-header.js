const authHeader = token => {
  // return authorization header with jwt token
  let myHeader = {};
  if (token) {
    myHeader = new Headers({
      "Content-type": "application/json; charset=UTF-8",
      Accept: "application/json",
      Authorization: `Bearer ${token}`
    });
  } else {
    myHeader = new Headers({
      "Content-type": "application/json; charset=UTF-8",
      Accept: "application/json"
    });
  }
  return myHeader;
};

export default authHeader;
