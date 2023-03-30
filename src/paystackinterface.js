export const handlePayment = (email, amount) => {
    
    const handler = PaystackPop.setup({
        key: 'pk_live_b90606fc26351bc9685a4616f42eb43c737f7ee7',
        email,
        amount: amount * 100,
    
        onClose: () => {
          alert('Window closed.');
        },
        callback: (response)=> {
          const message = 'Payment complete! Reference: ' + response.reference;
          alert(message);
        }
      });

      handler.openIframe();

      
  // const handler = PaystackPop.setup({
  //   key: 'pk_test_xxxxxxxxxx', // Replace with your public key
  //   email: document.getElementById("email-address").value,
  //   amount: amount * 100,
    
  //   onClose: function(){
  //     alert('Window closed.');
  //   },
  //   callback: function(response){
  //     let message = 'Payment complete! Reference: ' + response.reference;
  //     alert(message);
  //   }
  // });

  handler.openIframe();
    
}