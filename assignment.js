$(document).ready(function(){
    $("#flip").click(function(){
        $("#studentDiv").slideToggle("slow");
    });

	 $("#addstudent").hide();
	$("#addStudentbutton").click(function(){
        $("#addstudent").slideToggle("slow");
    });

		$("#closeAddStu").click(function(){
        $("#addstudent").hide("slow");
    });

	 $("#deletestudent").hide();
	$("#deleteStudentbutton").click(function(){
        $("#deletestudent").slideToggle("slow");
    });

	$(".closeDelStu").click(function(){
        $("#deletestudent").hide("slow");
    });

	 

});