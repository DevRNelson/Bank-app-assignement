class DB
{


    firstname;
    lastname;
    balance;



    constructor(f,l,b)
    {
        this.firstname=f;
        this.lastname=l;
        this.balance=b;
    }
    
}



function main()
{

    
    const searchid = document.querySelector("#IDS");
    let customerid = searchid.value;


    const fakeDB = [];
    index =0;

    fakeDB.push(new DB("Bruce","Thanos","Wonder"))
    fakeDB.push(new DB("Wayne","Badman","Woman"))
    fakeDB.push(new DB("theboss", "infinitystones", "diana"));
    fakeDB.push(new DB("4,000,000.00","1000.00","50,000.00"))
    

    

    find(function(){
        var IDsearch= document.getElementById("Search ID").customername.length;
        document.getElementById("IDS").innerHTML = IDsearch + "was found, please enter your deposit and withdrawal amount" 
    
     
    );


}


main();

