const _ = require('lodash');

const list = ({ Photo }, { config }) => async (req, res, next) => {
  let { caveId} = req.query;
  try {
    const query = {};
    if (caveId) {
      
      _.extend(query, { caveId: `${caveId}` })
 
    }
    const photo = await Photo.find(query)
      .sort({ _id: -1 });

    res.status(200).send({ photo }).end();
  } catch (error) {
    next(error);
  }
};

module.exports= { list };