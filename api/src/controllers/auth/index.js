const { Router: router } = require("express");
const {
  authenticate,
  generateAccessToken,
  localUser
} = require("../../middleware");
const signIn = require("./sign-in");
const signOut = require("./sign-out");

/**
 * Provide Api for Auth

 POST /api/users/sign-in - Sign In
 @params
       username {string}
       password {string}
    
 @params
       Authorization: Bearer {token}



 POST /api/users/sign-out - Sign Out
 @header
        Authorization: Bearer {token}

 POST /api/[users]/change-password - Change Password ??????
 @header
       Authorization: Bearer {token}
 @params
       newPassword {string}
       password {string}


 **/

module.exports = (models, { config }) => {
  const api = router();

  api.post("/sign-in", localUser, generateAccessToken, signIn);

  api.post("/sign-out", authenticate, signOut);

  return api;
};
