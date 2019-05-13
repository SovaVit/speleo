const { APIError, InternalServerError } = require("rest-api-errors");
const { STATUS_CODES } = require("http");

// eslint-disable-next-line
const errorHandler = (err, req, res, next) => {
  const error =
    err.status === 401 || err instanceof APIError
      ? err
      : new InternalServerError();

  if (process.env.NODE_ENV !== "production") {
    //eslint-disable-next-line
    console.error(err);
    //todo: comment here for production
    //eslint-disable-next-line

    if (err.name === "ValidationError") {
      return res.status(405).json(err);
    }
    if (err.status === 400) {
      return res.status(400).json(err);
    }
    if(err.status === 404){
      return res.status(404).json(err);
    }
  }
  if (err.name === "CastError") {
    return res.status(400).json(err);
  }
  if (err.status === 400) {
    return res.status(400).json(err);
  }
  if (err.status === 401) {
    return res.status(401).json(err);
  }
  if (err.name === "ValidationError") {
    return res.status(405).json(err);
  }

  //logger.info('API error', { error: err });

  return res.status(error.status || 500).json({
    code: error.code || 500,
    message: error.message || STATUS_CODES[error.status]
  });
};

module.exports = { errorHandler };
