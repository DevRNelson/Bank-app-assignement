class user
{

    //properties
    fname;
    lname;
    balance;
    customerid;

    //Constructor
    constructor(f,l,b,i)
    {
        this.fname=f;
        this.lname=l;
        this.balance=b;
        this.customerid = i;
    }
    
}


//entry point of applicaiton 
function main()
 {

    //fectch elements from the DOM
    const custID = document.querySelector("#customerID");
    const withdraw= document.querySelector("#withdrawal");
    const depo = document.querySelector("#deposits");

    const IDS = [];

    index =0;

    IDS.push(new custID("theboss"));
    IDS.push(new custID("infinitystones"))
    IDS.push(new custID( "Diana"))
    
    var value = document.getElementById('SearchID').value;
    var results = [];
    if (value) {
        users.forEach(users => {
            users.forEach(itemString => {
                if (itemString.toLowerCase().includes(value.toLowerCase())) {
                    results.push(`${value} found in ${itemString} in block ${users}`);
                };
            });
        });
        console.log(results);
    }
}





main();