function fn() {

    let rd1 = document.getElementById("rd1");
    let rd2 = document.getElementById("rd2");
    
    
    if(rd1.checked==true) 
    {
        alert("The topic for todays class is "+ rd1.value);
    } 
    else if(rd2.checked==true) 
    {
        alert("The topic for todays class is "+ rd2.value);
    }
    else if(rd3.checked==true) 
    {
        alert("The topic for todays class is "+ rd3.value);
    }
    else if(rd4.checked==true) 
    {
        alert("The topic for todays class is "+ rd4.value);
    }
    else if(rd5.checked==true) 
    {
        alert("The topic for todays class is "+ rd5.value);
    } 
    else 
    {
        alert("No response are selected")
    }
} 