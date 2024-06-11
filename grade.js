alert("welcome, lets know your Grade");

function grade(){
    var box1 = document.getElementById('box1').value;
    var box2 = document.getElementById('box2').value;
    var box3 = document.getElementById('box3').value;
    var box4 = document.getElementById('box4').value;
    var box5 = document.getElementById('box5').value;
    var grandtotal= parseFloat(box1) + parseFloat(box2) + parseFloat(box3) + parseFloat(box4) + parseFloat(box5); 
   
//    alert(grandtotal);

    var percentage = Math.round((grandtotal/500) * 100);
    // alert(percentage);

    // function significance1(value,digits)
    // {
    //     return value.toFixed(digits);
    // }
    
    // document.write(significance1(percentage,2),"<br>");
   
    
    var grades = " ";
    if(percentage<= 100 && percentage>=80){
          grades = 'A';
    }else if(percentage<=79 && percentage>=60){
        grades='B';
    }else if(percentage<=59 && percentage>=40){
        grades= 'C';
    }else{
        grades= 'F';
    }
    var passfail =" ";
    if(percentage>=40){
        passfail = 'Pass';
    }else{
        passfail='Fail';
    }
    
    document.getElementById('yourdata').innerHTML = ` Out of 500 your total is : ${grandtotal} <br> your Percentage is         : ${percentage}% <br> Your Grade is                : ${grades} <br> Your Status                    : ${passfail} ` ;

}