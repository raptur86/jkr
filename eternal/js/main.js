$("#cashCheck").on("click",function(){  
    $("#write_modal").show(); 
    $("#useFm").attr("action","");
    $(".credit_write").addClass("noneAttr");
    $(".credit_dvdWrite").addClass("noneAttr");
    $(".loans_write").addClass("noneAttr");
    $(".cash_write").removeClass("noneAttr");
})

$("#credit").on("click",function(){
    $("#write_modal").show(); 
    $("#useFm").attr("action","");
    $(".cash_write").addClass("noneAttr");
    $(".credit_dvdWrite").addClass("noneAttr");
    $(".loans_write").addClass("noneAttr");
    $(".credit_write").removeClass("noneAttr");
});
$("#creditDivAdd").on("click",function(){ 
    $("#write_modal").show(); 
    $("#useFm").attr("action","");
    $(".cash_write").addClass("noneAttr");
    $(".credit_write").addClass("noneAttr");
    $(".loans_write").addClass("noneAttr");
    $(".credit_dvdWrite").removeClass("noneAttr");
});
$("#loansAdd").on("click",function(){ 
    $("#write_modal").show(); 
    $("#useFm").attr("action","");
    $(".cash_write").addClass("noneAttr");
    $(".credit_write").addClass("noneAttr");
    $(".credit_dvdWrite").addClass("noneAttr");
    $(".loans_write").removeClass("noneAttr");
});

$("#write_bg").on("click",function(){
    $("#write_modal").hide();
});

$(".shell label").each(function(i,v){
    var len = $(this).text().length;
    if(len>2)
        $(this).css("font-size",50/len+"px");
});