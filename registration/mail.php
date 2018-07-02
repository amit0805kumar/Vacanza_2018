<?php
$team_id='5';
$mem1_email='ferzihai@gmail.com';
                   $to='csi@outlook.in';
                   $msg='Congratulations! You\'ve successfully registered for The INITIATIVE 2017! Your TeamID is '.$team_id.' For any queries, please write to us at csi@outlook.in ';
                   $subject = 'The INITIATIVE 2018 Registration Confirmation';
                   $headersm1 = 'From:'.$to."\r\n".'Reply-To: csi@outlook.in'."\r\n".'X-Mailer: PHP/'.phpversion();
                   //$headersm2 = 'From:'.$to."\r\n".'Reply-To: csi@outlook.in'."\r\n".'X-Mailer: PHP/'.phpversion();
                  // $headersm3 = 'From:'.$to."\r\n".'Reply-To: csi@outlook.in'."\r\n".'X-Mailer: PHP/'.phpversion();
               //if($mem_count=3) {mail($mem3_email, $subject, $msg, $headersm3);}
                  if(  mail($mem1_email, $subject, $msg, $headersm1)){
                   // mail($mem2_email, $subject, $msg, $headersm1);
                  // header("Location: thankyou.html");
                    echo "send mail successfull";}
 else{
     echo "not send";
 }
?>