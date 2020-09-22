import cos from "./objectCustomer.js";

function arrive() {
  let text = "";
    text +="******************************************************** \n CREATE NEW CUSTOMER \n******************************************************** \n"; 
    text += `🤖 - first name: \n>   ${cos.customer.firstname} \n`;
    text += `🤖 - last name: \n>   ${cos.customer.lastname} \n`;
   console.log(text);

}

export default { arrive };
