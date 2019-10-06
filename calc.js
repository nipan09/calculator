function calculate(){
    var billamnt= document.getElementById("billamt").value;
    var serviceQual= document.getElementById("serviceQual").value;
    var pplamnt= document.getElementById("peopleamt").value;

    if(billamnt===""||serviceQual===0){
    	alert("Input the values");
    }	

    
    if(pplamnt===""||pplamt<=1){
    	pplamnt=1;
    	document.getElementById("each").style.display="none";
    }
    else{
        document.getElementById("each").style.display="block";	
    }

    var total= (billamnt*serviceQual)/pplamnt;
    total= Math.round(total*100)/100;
    total= total.toFixed(2);      //two digits after decimal points

    document.getElementById("totalTip").style.display="block";
    document.getElementById("tip").innerHTML=total;
}

document.getElementById("totalTip").style.display="none";
document.getElementById("each").style.display="none";

calcbtn= document.getElementById("calculate");
calcbtn.addEventListener("click",calculate);