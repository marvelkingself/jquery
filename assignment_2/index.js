$( document ).ready(()=>{
    
   const alldata =[{"email":"","password":"","confirmPassword":"","agree":""}]
    $("form").on("change",submitted);
    function submitted(){
         alldata.email = $("#email").val()
        alldata.password = $("#password").val()
        alldata.confirmPassword  = $("#confirmPassword").val()
        alldata.agree = $("#agree").is(":checked")
        console.log(alldata)
    }

    $("form").submit(function(e){
        e.preventDefault()
        if(alldata.email===""){
        e.preventDefault()
           alert("email id empity") 
        }
        else if(alldata.password===""||alldata.confirmPassword===""){
            e.preventDefault()
                alert("password is empity") 
             }
       else if(alldata.password!=alldata.confirmPassword){
        e.preventDefault()
            alert("Conform PassWord is not Matched") 
         }

       else if(!alldata.agree){
           e.preventDefault()
            alert("Plzz checked terms and conditions ") 
         }
         else {
            e.preventDefault()
            alert("form summited")
            }
         
      });



});