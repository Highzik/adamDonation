import React, { useEffect, useState } from 'react'
import '/src/styles/coinbaseBtn.css'
const CoinbasedonateButton = () => {
    const [redirectUrl, setRedirectUrl] = useState(null);

    useEffect(() => {
        if (redirectUrl) {
          window.location.href = redirectUrl;
        }
      }, [redirectUrl]);
      

  return (
    <div>
      <button
        className="mb-3"
        onClick={() => setRedirectUrl("https://commerce.coinbase.com/checkout/bb399473-5f23-45a2-bfa2-42fd819a0072")}
      >
        Donate Now
      </button>
    </div>
  )
}

export default CoinbasedonateButton



// // This is the vanilla code of the coinbase code before i convert it to react code 


// {/* <div>
// <a class="donate-with-crypto"
//   href="https://commerce.coinbase.com/checkout/bb399473-5f23-45a2-bfa2-42fd819a0072">
//   Donate with Crypto
// </a>
// <script src="https://commerce.coinbase.com/v1/checkout.js?version=201807">
// </script>
// </div> */}