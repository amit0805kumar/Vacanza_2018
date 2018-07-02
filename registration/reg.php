<?php
include 'DB.php';
$team_name=$_POST["team_name"];
$mem1_name=$_POST["mem1_name"];

$mem1_email=$_POST["mem1_email"];
$mem1_mobile=$_POST["mem1_mobile"];
$mem1_college=$_POST["mem1_college"];
$mem1_branch=$_POST["mem1_branch"];
$mem1_year=$_POST["mem1_year"];
$mem1_stdno=$_POST["mem1_stdno"];

$mem2_name=$_POST["mem2_name"];
$mem2_email=$_POST["mem2_email"];
$mem2_mobile=$_POST["mem2_mobile"];
$mem2_college=$_POST["mem2_college"];
$mem2_branch=$_POST["mem2_branch"];
$mem2_year=$_POST["mem2_year"];
$mem2_stdno=$_POST["mem2_stdno"];
$mem3_name=$_POST["mem3_name"];
$mem3_email=$_POST["mem3_email"];
$mem3_mobile=$_POST["mem3_mobile"];
$mem3_college=$_POST["mem3_college"];
$mem3_branch=$_POST["mem3_branch"];
$mem3_year=$_POST["mem3_year"];
$mem3_stdno=$_POST["mem3_stdno"];
$flagsubmit=true;
$mem_count=2;
//$master=true;
if($mem3_name!=""){
    $mem_count=3;
}
//reg exps
            $reg_std_n="/^[0-9]{7}$/";
            $reg_std_l="/^[0-9]{7}[D]{1}$/";
			$reg_mob="/^[0-9]{10}$/";


//validate email
			if (!filter_var($mem1_email, FILTER_VALIDATE_EMAIL) === true) {		//for member 1
            echo("$mem1_email is not a valid email address");
            $flagsubmit=false;			
            } 
        
            if (!filter_var($mem2_email, FILTER_VALIDATE_EMAIL) === true) {		//for member 2
            echo("$mem2_email is not a valid email address");
            $flagsubmit=false;			
            } 
//validate stdno
            if(!preg_match($reg_std_n,$mem1_stdno))
                { 
				  echo "invalid student id";
				  $flagsubmit=false;
			    }

    if(!preg_match($reg_std_n,$mem2_stdno) )
                { 
				  echo "invalid student id";
				  $flagsubmit=false;
			    }

//validate mobile
                if(!preg_match($reg_mob,$mem1_mobile)){
				echo "invalid contact for member1";
				$flagsubmit=false;
			}
			if(!preg_match($reg_mob,$mem2_mobile)){
				echo "invalid contact for member2";
				$flagsubmit=false;
			}
/*
//create teamid====================================================================
			$sqlteam="Select count(team_id) from team;";

            $result=mysqli_query($Connection,$sqlteam);
			$count=mysqli_fetch_assoc($result);
            $c=$count["count(team_id)"];
            $c=$c+1;
            $team_id='INIT-'.$c;

*/

/*if($mem_count=2){ 
            
if($flagsubmit){ 

 $master=true;
$sq = "INSERT INTO team (team_id, team_password, team_name, team_topic, team_mem1_name, team_mem1_mobile, team_mem1_email, team_mem1_clg, team_mem1_stdno, team_mem1_branch, team_mem1_year, team_mem2_name, team_mem2_mobile, team_mem2_email, team_mem2_clg, team_mem2_stdno, team_mem2_branch, team_mem2_year) VALUES ('$team_id','$team_password','$team_name','$team_topic','$mem1_name','$mem1_mobile','$mem1_email','$mem1_college','$mem1_stdno','$mem1_branch','$mem1_year','$mem2_name','$mem2_mobile','$mem2_email','$mem2_college','$mem2_stdno','$mem2_branch','$mem2_year')";

  
if (mysqli_query($Connection, $sq)) {
    echo "New record created successfully";
    
} 
  else{
      echo mysqli_error($Connection);
      $master=false;
  }
}
else {
    
    header("Location:index.php");
    
}
}*/

  if($flagsubmit){ 

 $master=true;
$sq = "INSERT INTO team (team_name, team_mem1_name, team_mem1_mobile, team_mem1_email, team_mem1_clg, team_mem1_stdno, team_mem1_branch, team_mem1_year, team_mem2_name, team_mem2_mobile, team_mem2_email, team_mem2_clg, team_mem2_stdno, team_mem2_branch, team_mem2_year, team_mem3_name, team_mem3_mobile, team_mem3_email, team_mem3_clg, team_mem3_stdno, team_mem3_branch, team_mem3_year) VALUES ('$team_name','$mem1_name','$mem1_mobile','$mem1_email','$mem1_college','$mem1_stdno','$mem1_branch','$mem1_year','$mem2_name','$mem2_mobile','$mem2_email','$mem2_college','$mem2_stdno','$mem2_branch','$mem2_year','$mem3_name','$mem3_mobile','$mem3_email','$mem3_college','$mem3_stdno','$mem3_branch','$mem3_year')";

  
if (mysqli_query($Connection, $sq)) {
     header("Location:success/index.html");
} 
  else{
      echo mysqli_error($Connection);
      $master=false;
  }
}
else {
    
    header("Location:index.php");
    
}  

if($master){
            //mailing info
           /*        $to='csi@outlook.in';
                   $msg='Congratulations! You\'ve successfully registered for The INITIATIVE 2018! Your TeamID is '.$team_id.' and your Password is' .$team_password. 'For any queries, please write to us at csi@outlook.in ';
                  $subject = 'The INITIATIVE 2018 Registration Confirmation';
                   $headersm1 = 'From:'.$to."\r\n".'Reply-To: csi@outlook.in'."\r\n".'X-Mailer: PHP/'.phpversion();
                   $headersm2 = 'From:'.$to."\r\n".'Reply-To: csi@outlook.in'."\r\n".'X-Mailer: PHP/'.phpversion();
                   $headersm3 = 'From:'.$to."\r\n".'Reply-To: csi@outlook.in'."\r\n".'X-Mailer: PHP/'.phpversion();
               if($mem_count=3) {mail($mem3_email, $subject, $msg, $headersm3);}
                    if(mail($mem1_email, $subject, $msg, $headersm2)){
                       header("Location:success/index.php");
                    }
                    mail($mem2_email, $subject, $msg, $headersm1);
                  // header("Location: thankyou.html");
    
                    exit;*/
         }
else{
   header("Location:error_bak.html");
}





?>