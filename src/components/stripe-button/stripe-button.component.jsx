// import React from "react";
// import StripeCheckout from "react-stripe-checkout";
// import "./stripe-button.styles.scss";

// const StripeCheckoutButton = ({ price }) => {
//   const priceForStripe = price * 100;
//   const publishableKey =
//     "pk_test_51JxriNBdhhUxyfMyDvxVI2pZVaJyk8YptpWUjsiB3NEuYOCvzqSMGGTmMAIg9WLkW4Nv3fIcGZHjmk2hCrLYdlCU00m3e2fPMI";

//   const onToken = (token) => {
//     console.log(token);
//     alert("Payment successful");
//   };

//   return (
//     <StripeCheckout
//       label="Pay now..."
//       name="CRWN Clothing Ltd."
//       billingAddress
//       shippingAddress
//       image="https://svgshare.com/i/CUz.svg"
//       description={`Your total is $${price}`}
//       amount={priceForStripe}
//       panelLabel="Pay Now"
//       token={onToken}
//       stripeKey={publishableKey}
//     />
//   );
// };

// export default StripeCheckoutButton;
