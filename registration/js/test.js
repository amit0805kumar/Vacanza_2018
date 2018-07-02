

$(function(){
    $("#next").hide();
    $("#next2,#submit2").hide();
    
   
	var team_name = false;
  
	var mem1_name = false;
	var mem1_email = false;
	var mem1_mobile = false;
	var mem1_college = false;
	var mem1_stdno = false;
	var mem1_branch = false;
	var mem1_year = false;
    var mem2_name = false;
	var mem2_email = false;
	var mem2_mobile = false;
	var mem2_college = false;
	var mem2_stdno = false;
	var mem2_branch = false;
	var mem2_year = false;
   
  
	$("#team_name").focusout(function(){
		check_team_name();
        confirm_mem1();
        
	});
 
    
	$("#mem1_name").focusout(function(){
		check_mem1_name();
        confirm_mem1();
        
	});
    
	$("#mem1_email").focusout(function(){
		check_mem1_email();
        confirm_mem1();
	});
    
   	$("#mem1_mobile").focusout(function(){
		check_mem1_mobile();
        confirm_mem1();
	});
    
  	$("#mem1_college").focusout(function(){
		check_mem1_college();
        confirm_mem1();
        
    });
    
   
    $("#mem1_branch").focusout(function(){
		check_mem1_branch();
        confirm_mem1();
	});
    
   
	$("#mem1_year").focusout(function(){
		check_mem1_year();
        confirm_mem1();
        //confirm();
	});
    
 
	$("#mem1_stdno").focusout(function(){
		check_mem1_stdno();
         confirm_mem1();
	});
    
    $("#mem2_name").focusout(function(){
		check_mem2_name();
        confirm_mem2();
        
	});
    
	$("#mem2_email").focusout(function(){
		check_mem2_email();
        confirm_mem2();
	});
    
   	$("#mem2_mobile").focusout(function(){
		check_mem2_mobile();
        confirm_mem2();
	});
    
  	$("#mem2_college").focusout(function(){
		check_mem2_college();
        confirm_mem2();
        
    });
    
   
    $("#mem2_branch").focusout(function(){
		check_mem2_branch();
        confirm_mem2();
	});
    
   
	$("#mem2_year").focusout(function(){
		check_mem2_year();
        confirm_mem2();
        //confirm();
	});
    
 
	$("#mem2_stdno").focusout(function(){
		check_mem2_stdno();
         confirm_mem2();
	});
    
    
   //member 1 validations 
    function check_team_name(){
		var regex_team_name = /^[a-zA-Z ]{3,30}$/;

		if (regex_team_name.test($('#team_name').val()))
		{
			$("#team_name").css("border", "2px solid #5cb85c");
            team_name = true;
            
		}
		else
		{
			$("#team_name").css("border","2px solid #d9534f");
			team_name = false;
           
		}
	};
   

    function check_mem1_name(){
		var regex_mem1_name = /^[a-zA-Z ]{3,30}$/;

		if (regex_mem1_name.test($('#mem1_name').val()))
		{
			$("#mem1_name").css("border", "2px solid #5cb85c");
            mem1_name = true;
           
		}
		else
		{
			$("#mem1_name").css("border","2px solid #d9534f");
			mem1_name = false;
           
		}
	};

	function check_mem1_email(){
		var regex_mem1_email = new RegExp(/^[+a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i);

		if (regex_mem1_email.test($('#mem1_email').val()))
		{
			$("#mem1_email").css("border", "2px solid #5cb85c");
            mem1_email = true;
		}
		else
		{
			$("#mem1_email").css("border","2px solid #d9534f");
			mem1_email = false;
            
		}
	};

	function check_mem1_mobile(){
		var regex_mem1_mobile = /^[0-9]{10}$/;		
		var num_mem1_length = ($("#mem1_mobile").val()).length;
		if (num_mem1_length!=10) 
		{
			$("#mem1_mobile").css("border","2px solid #d9534f");
			mem1_mobile = false;
		}
		else if (!regex_mem1_mobile.test($("#mem1_mobile").val())) 
		{
			$("#mem1_mobile").css("border","2px solid #d9534f");
			mem1_mobile = false;
		}
		else
		{
			$("#mem1_mobile").css("border", "2px solid #5cb85c");
            mem1_mobile = true;
		}
	};
	
	

	function check_mem1_college(){
		var regex_mem1_college = /^[a-zA-Z ]{3,}$/;

		if (regex_mem1_college.test($('#mem1_college').val()))
		{
			$("#mem1_college").css("border", "2px solid #5cb85c");
            mem1_college =true;
           
		}
		else
		{
			$("#mem1_college").css("border","2px solid #d9534f");
			mem1_college = false;
            
		}
	};
    
	function check_mem1_branch(){
		if ($("#mem1_branch").val()=="Default") 
		{
			$("#mem1_branch").css("border","2px solid #d9534f");
			mem1_branch = false;
		}
		else
		{
			$("#mem1_branch").css("border", "2px solid #5cb85c");
            mem1_branch=true;
		}

	};
  
    function check_mem1_year(){
		if ($("#mem1_year").val()=="Default") 
		{
			$("#mem1_year").css("border","2px solid #d9534f");
			mem1_year = false;
		}
		else
		{
			$("#mem1_year").css("border", "2px solid #5cb85c");
            mem1_year=true;
		}
	};
  
    


	function check_mem1_stdno(){
		var regex_mem1_stdno = /^[a-z0-9]+$/i;
        var regex_mem1_lstdno = /^[a-z0-9]{D}+$/i;
		var reg_mem1_stdno_length = $("#mem1_stdno").val().length;		
		
		if (reg_mem1_stdno_length == 7) 
		{
			if (regex_mem1_stdno.test($("#mem1_stdno").val())) {
				$("#mem1_stdno").css("border", "2px solid #5cb85c");
                mem1_stdno = true;
			}
		}
		else if (reg_mem1_stdno_length == 8) 
		{
			if (regex_mem1_stdno.test($("#mem1_lstdno").val())) {
				$("#mem1_stdno").css("border", "2px solid #5cb85c");
                mem1_stdno = true;
			}
		}
		else
		{	
			$("#mem1_stdno").css("border","2px solid #d9534f");
			mem1_stdno = false;
		}
	};
    
    //member 2 validations
    
     function check_mem2_name(){
		var regex_mem2_name = /^[a-zA-Z ]{3,30}$/;

		if (regex_mem2_name.test($('#mem2_name').val()))
		{
			$("#mem2_name").css("border", "2px solid #5cb85c");
            mem2_name = true;
           
		}
		else
		{
			$("#mem2_name").css("border","2px solid #d9534f");
			mem2_name = false;
           
		}
	};

	function check_mem2_email(){
		var regex_mem2_email = new RegExp(/^[+a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i);

		if (regex_mem2_email.test($('#mem2_email').val()))
		{
			$("#mem2_email").css("border", "2px solid #5cb85c");
            mem2_email = true;
		}
		else
		{
			$("#mem2_email").css("border","2px solid #d9534f");
			mem2_email = false;
            
		}
	};

	function check_mem2_mobile(){
		var regex_mem2_mobile = /^[0-9]{10}$/;		
		var num_mem2_length = ($("#mem2_mobile").val()).length;
		if (num_mem2_length!=10) 
		{
			$("#mem2_mobile").css("border","2px solid #d9534f");
			mem2_mobile = false;
		}
		else if (!regex_mem2_mobile.test($("#mem2_mobile").val())) 
		{
			$("#mem2_mobile").css("border","2px solid #d9534f");
			mem2_mobile = false;
		}
		else
		{
			$("#mem2_mobile").css("border", "2px solid #5cb85c");
            mem2_mobile = true;
		}
	};
	
	

	function check_mem2_college(){
		var regex_mem2_college = /^[a-zA-Z ]{3,}$/;

		if (regex_mem2_college.test($('#mem2_college').val()))
		{
			$("#mem2_college").css("border", "2px solid #5cb85c");
            mem2_college =true;
           
		}
		else
		{
			$("#mem2_college").css("border","2px solid #d9534f");
			mem2_college = false;
            
		}
	};
    
	function check_mem2_branch(){
		if ($("#mem2_branch").val()=="Default") 
		{
			$("#mem2_branch").css("border","2px solid #d9534f");
			mem2_branch = false;
		}
		else
		{
			$("#mem2_branch").css("border", "2px solid #5cb85c");
            mem2_branch=true;
		}
    };
  
    function check_mem2_year(){
		if ($("#mem2_year").val()=="Default") 
		{
			$("#mem2_year").css("border","2px solid #d9534f");
			mem2_year = false;
		}
		else
		{
			$("#mem2_year").css("border", "2px solid #5cb85c");
            mem2_year=true;
		}
	};
  
    


	function check_mem2_stdno(){
		var regex_mem2_stdno = /^[a-z0-9]+$/i;
         var regex_mem2_lstdno = /^[a-z0-9]{D}+$/i;
		var reg_mem2_stdno_length = $("#mem2_stdno").val().length;		
		
		if (reg_mem2_stdno_length == 7) 
		{
			if (regex_mem2_stdno.test($("#mem2_stdno").val())) {
				$("#mem2_stdno").css("border", "2px solid #5cb85c");
                mem2_stdno = true;
			}
		}
		else if (reg_mem2_stdno_length == 8) 
		{
			if (regex_mem2_lstdno.test($("#mem2_stdno").val())) {
				$("#mem2_stdno").css("border", "2px solid #5cb85c");
                mem2_stdno = true;
			}
		}
		else
		{	
			$("#mem2_stdno").css("border","2px solid #d9534f");
			mem2_stdno = false;
		}
	};


      function confirm_mem1() {
          console.log("name");
          console.log(mem1_name);
          if(team_name===true && mem1_name===true && mem1_email===true && mem1_mobile===true && mem1_college===true && mem1_branch===true && mem1_year===true && mem1_stdno===true ){
            $("#next").show();    
          }

          else { 
              $("#next").hide();
          }
          
}
    
    function confirm_mem2() {
         
         
          if( mem2_name===true && mem2_email===true && mem2_mobile===true && mem2_college===true && mem2_branch===true && mem2_year===true && mem2_stdno===true ){
            $("#next2,#submit2").show(); 
            
          }

          else {
              $("#next2,#submit2").hide();
             
          }
          
}
    
    
   
	$(document).on("submit","form",function(e){
		name = false;
		email = false;
		mobile = false;
		gender = false;
		college = false;
		course = false;
		year = false;
		hostel = false;

		check_name();
		check_email();
		check_mobile();
		check_gender();
		check_college();
		check_course();
		check_year();
		check_hostel();
    

		

		
		if (mem1_name == false && mem2_name == false && mem1_email == false && mem2_email == false && mem1_mobile == false &&  mem2_mobile == false && mem1_college == false && mem2_college == false &&  mem1_year == false && mem2_year == false && mem1_branch == false && mem2_branch == false && mem1_stdno == false && mem2_stdno == false ) 
		{
			return true;
		}
		else
		{
			e.preventDefault();
			return false;
		}
	});
	
});

function mem3_valdation(){
     var mem3_name = false;
	var mem3_email = false;
	var mem3_mobile = false;
	var mem3_college = false;
	var mem3_stdno = false;
	var mem3_branch = false;
	var mem3_year = false;
    
     $("#mem3_name").focusout(function(){
		check_mem3_name();
        confirm_mem3();
        
	});
    
	$("#mem3_email").focusout(function(){
		check_mem3_email();
        confirm_mem3();
3});
    
   	$("#mem3_mobile").focusout(function(){
		check_mem3_mobile();
        confirm_mem3();
	});
    
  	$("#mem3_college").focusout(function(){
		check_mem3_college();
        confirm_mem3();
        
    });
    
   
    $("#mem3_branch").focusout(function(){
		check_mem3_branch();
        confirm_mem3();
	});
    
   
	$("#mem3_year").focusout(function(){
		check_mem3_year();
        confirm_mem3();
        //confirm();
	});
    
 
	$("#mem3_stdno").focusout(function(){
		check_mem3_stdno();
         confirm_mem3();
	});
    
         function check_mem3_name(){
		var regex_mem3_name = /^[a-zA-Z ]{3,30}$/;

		if (regex_mem3_name.test($('#mem3_name').val()))
		{
			$("#mem3_name").css("border", "2px solid #5cb85c");
            mem3_name = true;
           
		}
		else
		{
			$("#mem3_name").css("border","2px solid #d9534f");
			mem3_name = false;
           
		}
	};

	function check_mem3_email(){
		var regex_mem3_email = new RegExp(/^[+a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i);

		if (regex_mem3_email.test($('#mem3_email').val()))
		{
			$("#mem3_email").css("border", "2px solid #5cb85c");
            mem3_email = true;
		}
		else
		{
			$("#mem3_email").css("border","2px solid #d9534f");
			mem3_email = false;
            
		}
	};

	function check_mem3_mobile(){
		var regex_mem3_mobile = /^[0-9]{10}$/;		
		var num_mem3_length = ($("#mem3_mobile").val()).length;
		if (num_mem3_length!=10) 
		{
			$("#mem3_mobile").css("border","2px solid #d9534f");
			mem3_mobile = false;
		}
		else if (!regex_mem3_mobile.test($("#mem3_mobile").val())) 
		{
			$("#mem3_mobile").css("border","2px solid #d9534f");
			mem3_mobile = false;
		}
		else
		{
			$("#mem3_mobile").css("border", "2px solid #5cb85c");
            mem3_mobile = true;
		}
	};
	
	

	function check_mem3_college(){
		var regex_mem3_college = /^[a-zA-Z ]{3,}$/;

		if (regex_mem3_college.test($('#mem3_college').val()))
		{
			$("#mem3_college").css("border", "2px solid #5cb85c");
            mem3_college =true;
           
		}
		else
		{
			$("#mem3_college").css("border","2px solid #d9534f");
			mem3_college = false;
            
		}
	};
    
	function check_mem3_branch(){
		if ($("#mem3_branch").val()=="Default") 
		{
			$("#mem3_branch").css("border","2px solid #d9534f");
			mem3_branch = false;
		}
		else
		{
			$("#mem3_branch").css("border", "2px solid #5cb85c");
            mem3_branch=true;
		}
	};
  
    function check_mem3_year(){
		if ($("#mem2_year").val()=="Default") 
		{
			$("#mem2_year").css("border","2px solid #d9534f");
			mem2_year = false;
		}
		else
		{
			$("#mem2_year").css("border", "2px solid #5cb85c");
            mem2_year=true;
		}
	};
  
    


	function check_mem3_stdno(){
		var regex_mem3_stdno = /^[a-z0-9]+$/i;
        var regex_mem3_lstdno = /^[a-z0-9]{D}+$/i;
        
		var reg_mem3_stdno_length = $("#mem3_stdno").val().length;		
		
		if (reg_mem3_stdno_length == 7) 
		{
			if (regex_mem3_stdno.test($("#mem3_stdno").val())) {
				$("#mem3_stdno").css("border", "2px solid #5cb85c");
                mem3_stdno = true;
			}
		}
		else if (reg_mem3_stdno_length == 8) 
		{
			if (regex_mem3_lstdno.test($("#mem3_stdno").val())) {
				$("#mem3_stdno").css("border", "2px solid #5cb85c");
                mem3_stdno = true;
			}
		}
		else
		{	
			$("#mem3_stdno").css("border","2px solid #d9534f");
			mem3_stdno = false;
		}
	};
    
};