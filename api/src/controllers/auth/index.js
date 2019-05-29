const { Router: router } = require("express");
const { generateAccessToken, localAuth } = require("../../middleware");
const signIn = require("./sign-in");

/**
 * Provide Api for Auth

 POST /api/users/sign-in - Sign In
 @params
       username {string}
       password {string}
    
 @params
       Authorization: Bearer {token}




 **/

module.exports = (models, { config }) => {
  const api = router();

  api.post(
    "/sign-in",
      localAuth(models),
    generateAccessToken,
    signIn
  );
  return api;
};
