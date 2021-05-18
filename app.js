let head=document.getElementById('head');
window.onscroll= () =>{
    if(this.scrollY>25){
   head.classList.add("active");
    }
    else{
    head.classList.remove("active");
    }
};
let active=document.getElementById('active');
let recovered=document.getElementById('recovered');
let die=document.getElementById('die');
let totalcases=document.getElementById('totalcases');

async function coviddata(){
    try{
        const data=await fetch('https://api.apify.com/v2/key-value-stores/toDWvRj1JpTXiM8FF/records/LATEST?disableRedirect=true');
        const jsondata=await data.json();
        const wb=jsondata.regionData[35];
        active.innerHTML=wb.activeCases;
        recovered.innerHTML=wb.recovered;
        die.innerHTML=wb.deceased;
        totalcases.innerHTML=wb.totalInfected;
    }
    catch(error){
        console.log(`The error is ${error}`);
    }
}
coviddata();
const fun=()=>{
    window.open("https://excise.wb.gov.in/CHMS/Public/Page/CHMS_Public_Hospital_Bed_Availability.aspx");
}