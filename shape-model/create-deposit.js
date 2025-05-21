// const Deposit_request = require("../model/deposit_request");
// const Transaction = require("../model/transaction");

// const create_deposit = async (req) => {
//   let currentdate = new Date();
//   let datetime = `${currentdate.getFullYear()}-${
//     currentdate.getMonth() + 1
//   }-${currentdate.getDate()} -  ${currentdate.getHours()}: ${currentdate.getMinutes()} : ${currentdate.getSeconds()}`;
//   let ref = Math.floor(Math.random() * 100);

//   const transaction = await new Transaction({
//     user: req.body.user,
//     refrence_number: `Ref#${++ref} `,
//     transaction_date: datetime,
//     credit: `$${req.body.deposit_amount
//       .toString()
//       .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`,
//     status: "pending",
//   });
//   // console.log("transaction", transaction._id);
//   const deposit_request = await new Deposit_request({
//     user: req.body.user,
//     deposit_amount: req.body.deposit_amount,
//     payment_method: req.body.payment_method,
//     currency: req.body.currency,
//     transaction: transaction._id,
//   });

//   await deposit_request.save();
//   await transaction.save();
//   return deposit_request;
// };

// module.exports = create_deposit;


















const Deposit_request = require("../model/deposit_request");
const Transaction = require("../model/transaction");
const select_payment_method = require("./select_payment_method");

const create_deposit = async (req,userdetails) => {
  console.log(req.body.payment_method);
  let currentdate = new Date();
  let datetime = `${currentdate.getFullYear()}-${
    currentdate.getMonth() + 1
  }-${currentdate.getDate()} -  ${currentdate.getHours()}: ${currentdate.getMinutes()} : ${currentdate.getSeconds()}`;
  let ref = Math.floor(Math.random() * 100);

  const transaction = await new Transaction({
    user: req.body.user,
    refrence_number: `#Deposit `,
    transaction_date: datetime,
    credit: `+${userdetails.account_type =='KES'?'KSH':"$"}${req.body.deposit_amount
      .toString()
      .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`,
    status: "pending",
  });
  // console.log("transaction", transaction._id);
  const deposit_request = await new Deposit_request({
    user: req.body.user,
    deposit_amount: req.body.deposit_amount,
    payment_method: select_payment_method(req.body.payment_method)
      .payment_method,
    payment_method_icon: select_payment_method(req.body.payment_method)
      .payment_method_icon,
    payment_wallet: select_payment_method(req.body.payment_method)
      .payment_wallet,
    currency: req.body.currency,
    transaction: transaction._id,
  });

  await deposit_request.save();
  await transaction.save();
  return deposit_request;
};

module.exports = create_deposit;

