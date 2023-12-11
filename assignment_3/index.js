$( document ).ready(()=>{
    $("#ac").click(function(){
        alert("user clicked")
    });
    $("#hover").hover(function(){
        alert("user hover")
    });

    $("#mouseover").mouseover(function(){
        alert("mouse over")
    });
    $("#mouseover").mouseout(function(){
        alert("mouse out")
    });

});