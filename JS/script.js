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


    
    const withdraw = [];

    index =0;

    withd.push(new withdraw("4,000,000.00"));
    withd.push(new withdraw("1000.00"))
    withd.push(new withdraw("50,000.00"))


    const depo= [];

    index =0;
    
}

    function fectch() {
        deposits.fetch(value)
    }

    function myFunction() {
        let addButton = document.querySelector("#findID");
        addButton.addEventListener("click",findID);


main();