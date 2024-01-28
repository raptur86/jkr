



$("#cashCheck").on("click",function(){  write_show("cash_write","","cashCheckOp");  })

$("#credit").on("click",function(){    write_show("credit_write","","creditOp");  });
$("#creditDivAdd").on("click",function(){     write_show("credit_dvdWrite","","creditOp");  });
$("#loansAdd").on("click",function(){     write_show("loans_write","",null);  });

$("#write_bg").on("click",function(){    $("#write_modal").hide();  });

$(".shell label").each(function(i,v){
    var len = $(this).text().length;
    if(len>2)
        $(this).css("font-size",50/len+"px");
});


function write_show(target , action, payment_sel){
    $("#write_modal").show(); 
    $("#useFm").attr("action",action);
    $(".write").addClass("noneAttr");
    $("."+target).removeClass("noneAttr");

    if(payment_sel != null){
        $("#bankway option").hide();
        $("."+payment_sel).show();
    }
}


function detail(){
    location.href="detail.html";
}