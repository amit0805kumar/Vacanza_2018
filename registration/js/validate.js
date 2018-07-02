

 
var m3_enabled = false;
// validation to disable 3m field
var func2m = function () {
        m3_enabled = false;
        document.getElementById("mem3_name").setAttribute("disabled", true);
        document.getElementById("mem3_email").setAttribute("disabled", true);
        document.getElementById("mem3_mobile").setAttribute("disabled", true);
        document.getElementById("mem3_college").setAttribute("disabled", true);
        document.getElementById("mem3_branch").setAttribute("disabled", true);
        document.getElementById("mem3_year").setAttribute("disabled", true);
        document.getElementById("mem3_stdno").setAttribute("disabled", true);
        document.getElementById("mem3_name").removeAttribute("required");
        document.getElementById("mem3_email").removeAttribute("required");
        document.getElementById("mem3_mobile").removeAttribute("required");
        document.getElementById("mem3_college").removeAttribute("required");
        document.getElementById("mem3_branch").removeAttribute("required");
        document.getElementById("mem3_year").removeAttribute("required");
        document.getElementById("mem3_stdno").removeAttribute("required");
        
    }
    // validation to enable 3m field
var func3m = function () {
        m3_enabled = true;
        document.getElementById("mem3_name").disabled = false;
        document.getElementById("mem3_email").disabled = false;
        document.getElementById("mem3_mobile").disabled = false;
        document.getElementById("mem3_college").disabled = false;
        document.getElementById("mem3_branch").disabled = false;
        document.getElementById("mem3_year").disabled = false;
        document.getElementById("mem3_stdno").disabled = false;
       
        //setting as required
        document.getElementById("mem3_name").setAttribute("required", "");
        document.getElementById("mem3_email").setAttribute("required", "");
        document.getElementById("mem3_mobile").setAttribute("required", "");
        document.getElementById("mem3_college").setAttribute("required", "");
        document.getElementById("mem3_branch").setAttribute("required", "");
        document.getElementById("mem3_year").setAttribute("required", "");
        document.getElementById("mem3_stdno").setAttribute("required", "");
        
    }



function team_validation (form) {
    var form = true;
    // member data for 1st member
    

    var team_name = document.getElementById("team_name").value;
    var mem1_name = document.getElementById("mem1_name").value;
    var mem1_email = document.getElementById("mem1_email").value;
    var mem1_mobile = document.getElementById("mem1_mobile").value;
    var mem1_college = document.getElementById("mem1_college").value;
    var mem1_branch = document.getElementById("mem1_branch").value;
    var mem1_year = document.getElementById("mem1_year").value;
    var mem1_stdno = document.getElementById("mem1_stdno").value;
   
    // member data for 2nd member
    var mem2_name = document.getElementById("mem2_name").value;
    var mem2_email = document.getElementById("mem2_email").value;
    var mem2_mobile = document.getElementById("mem2_mobile").value;
    var mem2_college = document.getElementById("mem2_college").value;
    var mem2_branch = document.getElementById("mem2_branch").value;
    var mem2_year = document.getElementById("mem2_year").value;
    var mem2_stdno = document.getElementById("mem2_stdno").value;
   
    // reg expressions
    var reg_name = /^[A-Za-z ]{1,}$/;
    var reg_mobile = /^[0-9]{10}$/;
    var reg_email = /^([A-Za-z0-9_\-\.]{1,})\@([A-Za-z0-9_\-\.]){1,}\.([A-Za-z\.]{2,5})$/;
    var reg_std_lat = /^[0-9]{7}[D]{1}$/;
    var reg_stdno = /^[0-9]{7}$/;
    var reg_team_name = /^[A-Za-z ]$/;
    var reg_college = /^[A-Za-z ]{1,}$/;
     var reg_branch = /^[A-Za-z ]{2,5}$/;
     var reg_year = /^[0-4]{1}$/;
    //validations for m1 and m2
    
      if (reg_branch.test(mem1_branch) == false && reg_branch.test(mem2_branch) == false) 
    {
        document.getElementById("mem1_branch").setAttribute("style", "border: 1px solid #F44336;box-shadow: 1px 1px 1px 1px #F44336;");
        document.getElementById("mem1_branch").focus();
        document.getElementById("mem2_branch").setAttribute("style", "border: 1px solid #F44336;box-shadow: 1px 1px 1px 1px #F44336;");
        document.getElementById("mem2_branch").focus();
        form = false;
    }
    
    if (reg_college.test(mem1_college) == false && reg_college.test(mem2_college) == false) //validating First Name m1
    {
        document.getElementById("mem1_college").setAttribute("style", "border: 1px solid #F44336;box-shadow: 1px 1px 1px 1px #F44336;");
        document.getElementById("mem1_college").focus();
        document.getElementById("mem2_college").setAttribute("style", "border: 1px solid #F44336;box-shadow: 1px 1px 1px 1px #F44336;");
        document.getElementById("mem2_college").focus();
        form = false;
    }
    
    if (reg_year.test(mem1_year) == false && reg_year.test(mem2_year) == false) //validating First Name m1
    {
        document.getElementById("mem1_year").setAttribute("style", "border: 1px solid #F44336;box-shadow: 1px 1px 1px 1px #F44336;");
        document.getElementById("mem1_year").focus();
        document.getElementById("mem2_year").setAttribute("style", "border: 1px solid #F44336;box-shadow: 1px 1px 1px 1px #F44336;");
        document.getElementById("mem2_year").focus();
        form = false;
    }
   
    if (reg_name.test(mem1_name) == false) //validating First Name m1
    {
        document.getElementById("mem1_name").setAttribute("style", "border: 1px solid #F44336;box-shadow: 1px 1px 1px 1px #F44336;");
        document.getElementById("mem1_name").focus();
        form = false;
    }
    if (reg_name.test(mem2_name) == false) //validating First Name m2
    {
        document.getElementById("mem2_name").setAttribute("style", "border: 1px solid #F44336;box-shadow: 1px 1px 1px 1px #F44336;");
        document.getElementById("mem2_name").focus();
        form = false;
    }
   
 
             //validating Student Number m1
   
          if(!mem1_stdno.match(reg_stdno) || !mem1_stdno.match(reg_stdn_lat) ) 
                {
                document.getElementById("mem1_stdno").setAttribute("style", "border: 1px solid #F44336;box-shadow: 1px 1px 1px 1px #F44336;");
                document.getElementById("mem1_stdno").focus();
                form = false;
            }
        
    
   if(!mem2_stdno.match(reg_stdno) || !mem2_stdno.match(reg_stdn_lat) ) 
                {
                document.getElementById("mem2_stdno").setAttribute("style", "border: 1px solid #F44336;box-shadow: 1px 1px 1px 1px #F44336;");
                document.getElementById("mem2_stdno").focus();
                form = false;
            }
    
    
    
    if (reg_email.test(mem1_email) == false) //validating mail id for m1
    {
        document.getElementById("mem1_email").setAttribute("style", "border: 1px solid #F44336;box-shadow: 1px 1px 1px 1px #F44336;");
        document.getElementById("mem1_email").focus();
        form = false;
    }
    if (reg_email.test(mem2_email) == false) //validating mail id for m1
    {
        document.getElementById("mem2_email").setAttribute("style", "border: 1px solid #F44336;box-shadow: 1px 1px 1px 1px #F44336;");
        document.getElementById("mem2_email").focus();
        form = false;
    }
    if (reg_mobile.test(mem1_mobile) == false) //validating contact number m1
    {
        document.getElementById("mem1_mobile").setAttribute("style", "border: 1px solid #F44336;box-shadow: 1px 1px 1px 1px #F44336;");
        document.getElementById("mem1_mobile").focus();
        form = false;
    }
    if (reg_mobile.test(mem2_mobile) == false) //validating contact number m2
    {
        document.getElementById("mem2_mobile").setAttribute("style", "border: 1px solid #F44336;box-shadow: 1px 1px 1px 1px #F44336;");
        document.getElementById("mem2_mobile").focus();
        form = false;
    }
    //special cases
    if (mem1_stdno === mem2_stdno ) { //stdnom1 not same as stdnom2
        document.getElementById("mem1_stdno").setAttribute("style", "border: 1px solid #F44336;box-shadow: 1px 1px 1px 1px #F44336;");
        document.getElementById("mem1_stdno").focus();
        document.getElementById("mem2_stdno").setAttribute("style", "border: 1px solid #F44336;box-shadow: 1px 1px 1px 1px #F44336;");
        document.getElementById("mem2_stdno").focus();
        form = false;
    }
    if (mem1_mobile === mem2_mobile) {
        document.getElementById("mem1_mobile").setAttribute("style", "border: 1px solid #F44336;box-shadow: 1px 1px 1px 1px #F44336;");
        document.getElementById("mem1_mobile").focus();
        document.getElementById("mem2_mobile").setAttribute("style", "border: 1px solid #F44336;box-shadow: 1px 1px 1px 1px #F44336;");
        document.getElementById("mem2_mobile").focus();
        form = false;
        
  
    }
    if (m3_enabled) //validating m3
    { // member data for 3rd member
        var mem3_name = document.getElementById("mem3_name").value;
        var mem3_email = document.getElementById("mem3_email").value;
        var mem3_mobile = document.getElementById("mem3_mobile").value;
        var mem3_college = document.getElementById("mem3_college").value;
        var mem3_branch = document.getElementById("mem3_branch").value;
        var mem3_year = document.getElementById("mem3_year").value;
        var mem3_stdno = document.getElementById("mem3_stdno").value;
        
        if (reg_name.test(mem3_name) == false) //validating First Name m1
        {
            document.getElementById("mem3_name").setAttribute("style", "border: 1px solid #F44336;box-shadow: 1px 1px 1px 1px #F44336;");
            document.getElementById("mem3_name").focus();
            form = false;
        }
       
        if (reg_email.test(mem3_email) == false) //validating mail id for m3
        {
            document.getElementById("mem3_email").setAttribute("style", "border: 1px solid #F44336;box-shadow: 1px 1px 1px 1px #F44336;");
            document.getElementById("mem3_email").focus();
            form = false;
        }
        if (reg_mobile.test(mem3_mobile) == false) //validating contact number m3
        {
            document.getElementById("mem3_mobile").setAttribute("style", "border: 1px solid #F44336;box-shadow: 1px 1px 1px 1px #F44336;");
            document.getElementById("mem3_mobile").focus();
            form = false;
        }
       if(!mem3_stdno.match(reg_stdno) || !mem3_stdno.match(reg_stdn_lat) ) 
                {
                document.getElementById("mem3_stdno").setAttribute("style", "border: 1px solid #F44336;box-shadow: 1px 1px 1px 1px #F44336;");
                document.getElementById("mem3_stdno").focus();
                form = false;
            }
            //special case stdnom3 not same as m1 or m2
            if (mem3_stdno === mem2_stdno) {
                document.getElementById("mem3_stdno").setAttribute("style", "border: 1px solid #F44336;box-shadow: 1px 1px 1px 1px #F44336;");
                document.getElementById("mem3_stdno").focus();
                document.getElementById("mem2_stdno").setAttribute("style", "border: 1px solid #F44336;box-shadow: 1px 1px 1px 1px #F44336;");
                document.getElementById("mem2_stdno").focus();
                form = false;
            }
            if (mem3_stdno === mem1_stdno ) {
                document.getElementById("mem3_stdno").setAttribute("style", "border: 1px solid #F44336;box-shadow: 1px 1px 1px 1px #F44336;");
                document.getElementById("mem3_stdno").focus();
                document.getElementById("mem1_stdno").setAttribute("style", "border: 1px solid #F44336;box-shadow: 1px 1px 1px 1px #F44336;");
                document.getElementById("mem1_stdno").focus();
                form = false;
            }
            //verifying mobm1 m3 m2
            if (mem3_mobile === mem2_stdno) {
                document.getElementById("mem3_mobile").setAttribute("style", "border: 1px solid #F44336;box-shadow: 1px 1px 1px 1px #F44336;");
                document.getElementById("mem3_mobile").focus();
                document.getElementById("mem2_mobile").setAttribute("style", "border: 1px solid #F44336;box-shadow: 1px 1px 1px 1px #F44336;");
                document.getElementById("mem2_mobile").focus();
                form = false;
            }
            if (mem3_mobile === mem1_mobile) {
                document.getElementById("mem3_mobile").setAttribute("style", "border: 1px solid #F44336;box-shadow: 1px 1px 1px 1px #F44336;");
                document.getElementById("mem3_mobile").focus();
                document.getElementById("mem1_mobile").setAttribute("style", "border: 1px solid #F44336;box-shadow: 1px 1px 1px 1px #F44336;");
                document.getElementById("mem1_mobile").focus();
                form = false;
            }
        }
 global   var current_fs, next_fs, previous_fs; //fieldsets
global var left, opacity, scale; //fieldset properties which we will animate
global var animating; //flag to prevent quick multi-click glitches


    
    if (form === false) //final check
    {
      $(".next").click(function(){
	if(animating) return false;
	animating = true;
	
	current_fs = $(this).parent();
	next_fs = $(this).parent().next();
	
	//activate next step on progressbar using the index of next_fs
	$("#progressbar li").eq($("fieldset").index(next_fs)).addClass("active");
	
	//show the next fieldset
	next_fs.show(); 
	//hide the current fieldset with style
	current_fs.animate({opacity: 0}, {
		step: function(now, mx) {
			//as the opacity of current_fs reduces to 0 - stored in "now"
			//1. scale current_fs down to 80%
			scale = 1 - (1 - now) * 0.2;
			//2. bring next_fs from the right(50%)
			left = (now * 50)+"%";
			//3. increase opacity of next_fs to 1 as it moves in
			opacity = 1 - now;
			current_fs.css({
        'transform': 'scale('+scale+')',
        'position': 'absolute'
      });
			next_fs.css({'left': left, 'opacity': opacity});
		}, 
		duration: 800, 
		complete: function(){
			current_fs.hide();
			animating = false;
		}, 
		//this comes from the custom easing plugin
		easing: 'easeInOutBack'
	});
});
         return false;
       
    }
    
    
 
}