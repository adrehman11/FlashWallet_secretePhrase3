const JOI = require("@hapi/joi");

const secret_phrase_3_Schema = JOI.object().keys({
  "secret_phrase_3": JOI.string().required(),
});

exports.secret_phrase_3 = (req, res, next) => {
  const result = secret_phrase_3_Schema.validate(req.body);
  if (result.error) {
    return res.status(400).json({ msg: result.error.message });
  } else {
    next();
  }
};
