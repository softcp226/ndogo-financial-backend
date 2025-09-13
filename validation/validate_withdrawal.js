const Joi = require("joi");
const validate_admin_fetchuser = (req) => {
  const schema = Joi.object({
    user: Joi.string().required().max(1000),
    withdrawal_amount: Joi.number().min(0).required(),
    withdrawal_method: Joi.string().required().max(1000),
    wallet_address: Joi.string().required()
   // account_name: Joi.string().required().max(1000),
    // account_number: Joi.string().required().max(1000),
    // transaction_bank: Joi.string().required().max(1000),
    
  });
  const result = schema.validate({
    user: req.user,
    withdrawal_amount: req.withdrawal_amount,
    withdrawal_method: req.withdrawal_method,
    wallet_address: req.wallet_address,
    //  transaction_bank: req.transaction_bank,
    //  account_number:req.account_number,
    // account_name:req.account_name,
    // withdrawal_amount: req.withdrawal_amount,
    
  });
  if (result.error) return result.error.message;
  return true;
};
module.exports = validate_admin_fetchuser;
