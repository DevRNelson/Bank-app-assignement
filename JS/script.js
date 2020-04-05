class DB
{

    //properties
    firstname;
    lastname;
    balance;


    //Constructor
    constructor(f,l,b)
    {
        this.firstname=f;
        this.lastname=l;
        this.balance=b;
    }
    
}


//entry point of applicaiton 
function main()
{

    //fectch elements from the DOM
    const searchid = document.querySelector("#IDS");
    let customerid = searchid.value;


    const fakeDB = [];
    index =0;

    fakeDB.push(new DB(""));
    fakeDB.push(new DB("Iron Man","2.jpg","A picture of Iron Man"))
    fakeDB.push(new DB("Thor","3.jpg","A picture of Thor"))

    

    setInterval(function(){

            ///
    },5000);


}


main();


function main()
 {

    var customername= ["Bruce Wayne", "Thanos Badman", "Wonder Woman"];

    var balances= ["4,000,000", "1000.00", "50,000.00"];
    
    var customerID= ["theboss", "infinitystones", "diana"];
    

    let IDsearch = document.querySelector("#IDS");

    let withdrawal1 = document.querySelector("#WithdrawA");

    var IDsearch= document.getElementById("Search ID").customername.length;
    document.getElementById("IDS").innerHTML = IDsearch + "was found, please enter your deposit and withdrawal amount" 

    var withdrawal1 = document.getElementById("withdrawal").balances.length;
    document.getElementById("IDS").innerHTML = withdrawal1 + "was found, please enter your deposit and withdrawal amount" 

    

    }
main();