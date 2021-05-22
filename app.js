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
let hidden1=document.getElementById('hidden1');
let hidden2=document.getElementById('hidden2');
let hidden3=document.getElementById('hidden3');
let hidden4=document.getElementById('hidden4');
let hidden5=document.getElementById('hidden5');
let hidden6=document.getElementById('hidden6');
let hidden7=document.getElementById('hidden7');
let hidden8=document.getElementById('hidden8');
let more_info1=document.getElementById('more_info1');
let check1=true;
more_info1.addEventListener('click',()=>{
    if(check1){
        hidden1.style.display="block";
        check1=false;
        more_info1.innerHTML="Less Info";
       
    }
    else{
        hidden1.style.display="none";
   check1=true;
   more_info1.innerHTML="More Info";
    }
});
let more_info2=document.getElementById('more_info2');
let check2=true;
more_info2.addEventListener('click',()=>{
    if(check2){
        hidden2.style.display="block";
        check2=false;
        more_info2.innerHTML="Less Info";
       
    }
    else{
        hidden2.style.display="none";
   check2=true;
   more_info2.innerHTML="More Info";
    }
});
let more_info3=document.getElementById('more_info3');
let check3=true;
more_info3.addEventListener('click',()=>{
    if(check3){
        hidden3.style.display="block";
        check3=false;
        more_info3.innerHTML="Less Info";
       
    }
    else{
        hidden3.style.display="none";
   check3=true;
   more_info3.innerHTML="More Info";
    }
});
let more_info4=document.getElementById('more_info4');
let check4=true;
more_info4.addEventListener('click',()=>{
    if(check4){
        hidden4.style.display="block";
        check4=false;
        more_info4.innerHTML="Less Info";
       
    }
    else{
        hidden4.style.display="none";
   check4=true;
   more_info4.innerHTML="More Info";
    }
});
let more_info5=document.getElementById('more_info5');
let check5=true;
more_info5.addEventListener('click',()=>{
    if(check5){
        hidden5.style.display="block";
        check5=false;
        more_info5.innerHTML="Less Info";
       
    }
    else{
        hidden5.style.display="none";
   check5=true;
   more_info5.innerHTML="More Info";
    }
});
let more_info6=document.getElementById('more_info6');
let check6=true;
more_info6.addEventListener('click',()=>{
    if(check6){
        hidden6.style.display="block";
        check6=false;
        more_info6.innerHTML="Less Info";
       
    }
    else{
        hidden6.style.display="none";
   check6=true;
   more_info6.innerHTML="More Info";
    }
});
let more_info7=document.getElementById('more_info7');
let check7=true;
more_info7.addEventListener('click',()=>{
    if(check7){
        hidden7.style.display="block";
        check7=false;
        more_info7.innerHTML="Less Info";
       
    }
    else{
        hidden7.style.display="none";
   check7=true;
   more_info7.innerHTML="More Info";
    }
});
let more_info8=document.getElementById('more_info8');
let check8=true;
more_info8.addEventListener('click',()=>{
    if(check8){
        hidden8.style.display="block";
        check8=false;
        more_info8.innerHTML="Less Info";
       
    }
    else{
        hidden8.style.display="none";
   check8=true;
   more_info8.innerHTML="More Info";
    }
});
