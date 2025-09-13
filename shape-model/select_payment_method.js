const select_payment_method = (payment_method) => {
  switch (payment_method) {
    case "Bitcoin":
      return {
        payment_method: "Bitcoin",
        payment_method_icon:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Bitcoin.svg/96px-Bitcoin.svg.png",
        //  payment_wallet: "bc1qwwzapsj924yxxv2n6rcw4wunpeh0f008tff7zm",
        payment_wallet: "bc1qx9wwfegx9mcszzhasssj4ps2elucjh3nt8mmmu",
      };
      break;

    case "Ethereum":
      return {
        payment_method: "Ethereum",
        payment_method_icon:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Ethereum-icon-purple.svg/480px-Ethereum-icon-purple.svg.png",
        payment_wallet: "0x855B1840EE407d5cfeE13087a26caF0A1BEc5d4f",
        //  payment_wallet: "0xf88227a29E7b1bca43cb248CC7d6322cA84fa75c",
      };
      break;

    case "USDT(TRC20)":
      return {
        payment_method: "USDT(TRC20)",
        payment_method_icon:
          "https://zengo.com/wp-content/uploads/USDT-TRC20.png",
        payment_wallet: "TAqxPF5UE2eCoM5RDNcGFuLU3jbSzmdPAN",
        //payment_wallet: "TYGMwRSBiiKf4NWjBGSrm57Cp7itq51xEN",
      };
      break;

    case "LTC":
      return {
        payment_method: "LTC",
        payment_method_icon:
          "https://s2.coinmarketcap.com/static/img/coins/64x64/2.png",
        payment_wallet: "ltc1q4damdzpqsj964pva4w4y3vky7uq8ett20s9682",
      };
      break;

    case "TRX":
      return {
        payment_method: "TRX",
        payment_method_icon:
          "https://s2.coinmarketcap.com/static/img/coins/64x64/1958.png",
        payment_wallet: "TAqxPF5UE2eCoM5RDNcGFuLU3jbSzmdPAN",
      };
      break;

    // case "Paypal":
    //   return {
    //     payment_method: "Paypal",
    //     // payment_method_icon:
    //     //   "css/images/bc1q8f3c2lmav0uxkgkm90c4l2eqwy6k2agz0nqfmy.png",
    //     payment_wallet: "bc1q8f3c2lmav0uxkgkm90c4l2eqwy6k2agz0nqfmyPAYPAL",
    //   };
    //   break;

    // case "Perfect Money":
    //   return {
    //     payment_method: "Perfect Money",
    //     // payment_method_icon:
    //     //   "css/images/bc1q8f3c2lmav0uxkgkm90c4l2eqwy6k2agz0nqfmy.png",
    //     payment_wallet: "bc1q8f3c2lmav0uxkgkm90c4l2eqwy6k2agz0nqfmyPAYPAL",
    //   };
    //   break;

    default:
      return {
        payment_method: "Bitcoin",
        payment_method_icon: "css/images/btc.jpeg",
        payment_wallet: "bc1qx9wwfegx9mcszzhasssj4ps2elucjh3nt8mmmu",
      };
      break;
  }
};

module.exports = select_payment_method;


// KSH