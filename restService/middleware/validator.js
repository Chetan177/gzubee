const joi = require("joi")

validateAPI = async function (req, res, apiModel) {
    try {
        const i = await apiModel.validateAsync(req.body);
        
    }
    catch (error) {
      res.status(400);
      return error;
     }
}

module.exports = {ValidateAPI: validateAPI}
