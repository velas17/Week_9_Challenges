
function person(){
    let pii = {
     name: "John Does",
     ssn: "000-00-0000"
};
    return {
        getName(){
            return pii.name;
            // Reason ssn is not displayed is due to it not being called/return by the function getName()
        }
    }

};

let infoPerson = person();
console.log(infoPerson);
console.log(infoPerson.getName());
console.log(infoPerson.ssn);
