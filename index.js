

function Calculate(){
 var sub1 = parseInt(document.getElementById("eng").value);
var sub2 = parseInt(document.getElementById("math").value);
var sub3 = parseInt(document.getElementById("phy").value);
var sub4 = parseInt(document.getElementById("urd").value);
var sub5 = parseInt(document.getElementById("sci").value);

    if(sub1 > 100  && sub1 <0 ||sub2 > 100  && sub2 <0 || sub3 > 100  && sub3 <0 || sub4 > 100  && sub4 <0 || sub5 > 100  && sub5 <0 ){
        alert("Please Enter mark in range of 100")
    }
    else if(sub1<=35 ||sub2<=35  || sub3<=35  || sub4<=35  || sub5<=35 ){
         const total = sub1 + sub2 + sub3 + sub4 + sub5;
         document.getElementById("Total").innerHTML = "Total Marks :" + total;
         var average = total/5;
         document.getElementById("avg").innerHTML = "Your Average Marks Are : " + average;
         document.getElementById('grade').innerHTML= "Your Grade is F";


    }
    else{
         const total = sub1 + sub2 + sub3 + sub4 + sub5;
         document.getElementById("Total").innerHTML = "Total Marks :" + total;
         var average = total/5;
         document.getElementById("avg").innerHTML = "Your Average Marks Are : " + average;

         if(average >=90){
            document.getElementById('grade').innerHTML= "Your Grade is A";
         }

         else if(average<=89 && average>=80){
            document.getElementById('grade').innerHTML= "Your Grade is B";

         }
         else if(average<=79 && average>=70){
            document.getElementById('grade').innerHTML= "Your Grade is C";

         }
         else if(average<=69 && average>=60){
            document.getElementById('grade').innerHTML= "Your Grade is D";

         }
         else if(average<60) {
            document.getElementById('grade').innerHTML= "Your Grade is F";

         }
    }
}

 