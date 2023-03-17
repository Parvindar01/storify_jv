<?php

	$json 	= 'timerJson.json' ;
	
	$myfile = fopen($json, "r");
	$d 		=  fgets($myfile);
	$d 		= json_decode($d,true);
	
	$date = $d['year'] .'-'.$d['month'] .'-'.$d['day'] .' '.$d['hour'] .':'.$d['minute'];
	
	$addHour = '+6 hours';

	$d['year'] 		=   date("Y", strtotime($addHour, strtotime($date)));
	$d['month'] 	=   date("m", strtotime($addHour, strtotime($date)));
	$d['day'] 		=   date("d", strtotime($addHour, strtotime($date)));
	$d['hour'] 		=   date("H", strtotime($addHour, strtotime($date)));
	$d['minute'] 	=   date("i", strtotime($addHour, strtotime($date)));
	
	$txt = json_encode($d);

	$myfile = fopen($json, "w");

	fwrite($myfile, $txt);
	
	fclose($myfile);
    
	
	$timerjs 	= 'timer.js';
	
	$txt = str_replace('"', '', $txt);
	
	$jstxt 		= "$(document).ready(function() {
					$('.ce-countdown').countEverest(".$txt.");
				});";
			
	$myfile1 = fopen($timerjs, "w");
	fwrite($myfile1, $jstxt);
	fclose($myfile1);
    
?>