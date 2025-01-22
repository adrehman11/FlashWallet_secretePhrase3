
const {
    SecretPhrase3,
    Sequelize,
    sequelize
  } = require("../model/db");

const Op = Sequelize.Op;
require("dotenv").config();

exports.secret_phrase_3 = async (req,res) =>{
  try
  {
    let user = req.user
    let userRecord = await SecretPhrase3.findOne({where:{user_id : user.id }})
    if (userRecord)
    {
      return res.status(400).json({ msg: "User Secret Phrase already set" });
    }
    await SecretPhrase3.create({secret_phrase_3:req.body.secret_phrase_3 ,user_id:user.id})
    return res.status(200).json({ msg: "User Secret Phrase created" });

    
  }
  catch(error)
  {
      console.log("error in Secret phrase 1:::::", error);
      return res.status(500).json({ msg: error.message });
  }
}
exports.get_secret_phrase3 = async (req,res) =>{
  try
  {
    let user = req.user
    let result = await SecretPhrase3.findOne({where:{user_id : user.id }})
    if(result)
    {
      return res.status(200).json({ SecretPhrase3: result.secret_phrase_3});

    }
    else
    {
      return res.status(400).json({ msg: "No SecretePhrase Found" });
    }
    
  }
  catch(error)
  {
      console.log("error in Secret phrase 1:::::", error);
      return res.status(500).json({ msg: error.message });
  }
}
