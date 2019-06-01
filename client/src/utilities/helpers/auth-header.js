const authHeader = token => {
  // return authorization header with jwt token
  let myHeader = {};
  token
    ? (myHeader = new Headers({
        "Content-type": "application/json; charset=UTF-8",
        Accept: "application/json",
        Authorization: `Bearer ${token}`
      }))
    : (myHeader = new Headers({
        "Content-type": "application/json; charset=UTF-8",
        Accept: "application/json"
      }));

  return myHeader;
};

export default authHeader;
