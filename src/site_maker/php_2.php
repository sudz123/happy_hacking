
<?php
session_start();
$no=$_SESSION['no_of_fields'];
echo "<html>
<style>

.final1{
	background-color:".$_SESSION['background_color'].";
	font-family:".$_SESSION['font_family'].";
	color:".$_SESSION['font_color'].";
	
}

input[type=text],input[type=number],input[type=textarea],select{
	width:60%;
	border : 1px solid blue;
	border-radius:3px;
	margin : 10px 0;
	padding: 15px 20px;
}

input[type=color]{
	width:100%;
	border-radius:3px;
	margin : 10px 0;
}

input:focus,select:focus{
	outline : 4px solid green ;
	
}

input[type=submit]{
	margin:right:0%;
	margin-top:15px;
	width:85%;
	padding:15px 20px;
	color : ".$_SESSION['background_color'].";
	background-color:".$_SESSION['font_color'].";
}
input[type=submit]:hover{
	background-color : green;
}

.b1{
	width : 20%;
}
.b2{
	width : 80%;
}
</style>
<body class='final1'>
";

echo "<center><h1>".$_SESSION['header_name']."</h1></center>" ;
echo "<center><h2>".$_SESSION['infor']."</h2></center>
<form action='php_4.php' method='POST'>
<table style='width:96%;margin-left:6%;padding-top:5%;'>";
for($j=0;$j<$no;$j++)
	{
		$x=''.$j.'';
		$y=''.($j+$no).'';
		$k=$_POST[$x]; // name
		$l=$_POST[$y]; // type 
		echo "<tr>
				<td class='b1'>".$k."</td>";
		if($l=="radio"|| $l=="checkbox")
		{
			$kk=0;
			if($l=="radio")
			$ss='radio'.$y;
			else
			$ss='check'.$y;
		//	echo $ss;
			$skah=$_POST[$ss];
			//echo $skah;
		//	$_SESSION['no_of_rads']=$_POST[$ss];
		//	echo $_SESSION['no_of_rads'];
			$i=0;
			//echo "hello";
		//	echo $_SESSION['no_of_rads'];
			$kkk=0;
			echo "<td class='b2'>";
			for($i=0;$i<$skah;$i++ )
			{
				$dd="rad_".$y."_".$kkk;
				$valv=$_POST[$dd];
				$kkk++;
				echo "<input type='".$l."' name='".$k."' value='".$valv."'>".$valv."&emsp;";
			}
			echo "</td>
			</tr>";
		}
		else
		{
			echo "
				<td> <input type='".$l."' name='".$k."'> </td>
			</tr>";
		}
	}
	echo "</table>
	<input style='margin-left:6%' type='submit' value='submit' >
	</form>
	</body>
	</html>";
	
	
?>