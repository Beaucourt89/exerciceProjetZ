

import cos from "./objectCustomer.js";

function arrive(reader) {
    let text = "";
    text +="******************************************************** \n CREATE NEW CUSTOMER \n******************************************************** \n"; 
    reader.question(`🤖 - first name: \n> `,(firstname) => {
        cos.customer.firstName = firstname;
        
        reader.question(`🤖 - last name: \n> `,(lastname) => {
            cos.customer.lastName = lastname;
            
            console.log(cos.customer.firstname);
            console.log(cos.customer.firstName);
        });
    });
   
    //console.log(cos.customer);



}
export default { arrive };
