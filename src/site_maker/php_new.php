<html>

<script>

	function myfn(x){
		var field="field"+String(x);
		var yy = document.getElementById(field);
		//alert (yy.value);
		var rad="radio_1"+x;
		var check="check_1"+x;
		//document.getElementById("radio_1").innerHTML=10;
		if(yy.value=="radio")
			//alert (x);
			document.getElementById(rad).style.display="block";
		else if(yy.value=="checkbox")
			//alert(x.value);
			document.getElementById(check).style.display="block";
	}
	
	function myfn_radi(x){
		//alert("hello");
		var zzz="rad"+x;
		var y = document.getElementById(zzz);
		//alert(y.value);
		var i;
		var rad;
		//var j=0;
		rad2="radio_2"+x;
		//rad=String(y-x);
		for( i = 0 ; i < y.value ; i++ )
		{
			rad="rad_"+String(x)+"_"+String(i);
			//console.log();
			//alert(rad);
			//j++;
			//alert("hh");
			var z=document.createElement("INPUT");
			z.setAttribute("type","text");
			z.setAttribute("name",rad);
			z.setAttribute("placeholder","put value");
			z.setAttribute("style","width:20%")
			var xy=document.createElement("P");
			//var t=document.createElement("BR");
			xy.appendChild(z);
			//xy.appendChild(t);
			document.getElementById(rad2).appendChild(z);
		}
	}
	
	function myfn_check(x){
		//alert("hello");
		var zzz="check"+x;
		var y = document.getElementById(zzz);
		//alert(y.value);
		var i;
		var rad;
		//var j=0;
		check2="check_2"+x;
		
		for( i = 0 ; i < y.value ; i++ )
		{
			rad="rad_"+x+"_"+i;
			//alert(rad);
			//j++;
			//alert("hh");
			var z=document.createElement("INPUT");
			z.setAttribute("type","text");
			z.setAttribute("name",rad);
			z.setAttribute("placeholder","put value");
			z.setAttribute("style","width:20%")
			var xy=document.createElement("P");
			//var t=document.createElement("BR");
			xy.appendChild(z);
			//xy.appendChild(t);
			document.getElementById(check2).appendChild(z);
		}
	}

</script>

<style>
input[type=text]{
	width:96%;
	border : 1px solid blue;
	border-radius:3px;
	margin : 10px 0;
	padding: 15px 20px;
}

input[type=submit]{
	margin-top:15px;
	width:100%;
	padding:15px 20px;
	color : white;
	background-color:blue;
}
input[type="submit"]:hover{
	background-color : green;
}

.b1{
	width : 44%;
	magin-left:4%;
}

</style>

<?php
session_start();
$_SESSION['header_name']="".$_POST['header_name']."";
$_SESSION['infor']="".$_POST['infor']."";
$_SESSION['font_family']="".$_POST['font_family']."";
$_SESSION['font_size']=$_POST['font_size'];
$_SESSION['font_color']="".$_POST['font_color']."";
$_SESSION['background_color']="".$_POST['background_color']."";
//$_SESSION["no_of_fields"];
	$_SESSION['no_of_fields']=$_POST['no_of_fields'];
	$no=$_SESSION['no_of_fields'];
	echo"<form action='php_2.php' method='POST'>
	<table style='width:100%'>
	";
	for($i=0;$i<$no;$i++)
	{
		$j=$i+1;
		$no_i=$no+$i;
	
		$id_name_radio1="radio_1".$j;
		$id_name_radio2="radio_2".$no_i;
		$id_name_check1="check_1".$j;
		$id_name_check2="check_2".$no_i;
		$id_number_radio="rad".$no_i;
		$id_number_check="check".$no_i;
		$id_field_type="field".$j;
		echo"
				<tr>
					<td class='b1' >$j<input type='text' style='margin-left:2%' name='".$i."' placeholder='Enter field name'></td>
					<td class='b1'>
						<select name='".($no+$i)."' id='".$id_field_type."'>
							<option name='text'>text</option>
							<option name='number'>number</option>
							<option name='radio'>radio</option>
							<option name='checkbox'>checkbox</option>
						</select>
						<input type='button' onclick='myfn(".$j.")' value='click'>
					</td>
				</tr>
				<tr>
					<td colspan='2'>
						<div id='".$id_name_radio1."' style='display:none'>
							how many radios do you need?
							<input type='number' name='radio".$no_i."' id='".$id_number_radio."' placeholder='0'>
							<input type='button' onclick='myfn_radi(".$no_i.")' value='click'>
						</div>
						<div id='".$id_name_radio2."'></div>
						<div id='".$id_name_check1."' style='display:none'>
							how many checks do you need?
							<input type='number' name='check".$no_i."' id='".$id_number_check."' placeholder='0'>
							<input type='button' onclick='myfn_check(".$no_i.")' value='click'>
						</div>
						<div id='".$id_name_check2."'></div>
					</td>
				</tr>";
	}
	echo "</table>
	<input type='submit' value='submit'>
	</form>
	"; 
	
	
?>

</html>