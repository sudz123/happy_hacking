# What is PHP?

PHP (also known as "PHP: Hypertext Preprocessor") is a web programming language that has been used since 1994 and has been adopted in many websites.
For example, WordPress is a common and popular blogging platform that is written in PHP.

It assists to create dynamic web pages such as CRUD systems (create, read, update, delete), photo galleries and more! Nowadays, frameworks like Laravel or Symfony exist to simplify PHP development by adding functionality such as web templating and caching. 

Documentation for the language can be found at https://secure.php.net/, and tutorials are present for just about anything you want to know about the langauge.

## Hello, world!

Interested, eh? As with any other language, you begin your journey by learning the basics. The following code displays "Hello, world!":

    <?php
    	echo "Hello, world!";
    ?>

Looks simple enough? Notice the construction of the `echo` statement. It begins with a [reserved language keyword](http://php.net/manual/en/reserved.keywords.php), and follows with a string encapsulated by double quotes. Other keywords include, "if," "else," and "switch." Additionally, PHP has a few global constants that assist us in obtaining server information or a user's input, which we'll discuss later on.

PHP is, in fact, a loosely typed language. This means that PHP does not explicitly ask for a type when you declare a variable, and rather determines it at runtime (type casting).
Have a look at the next example:

    <?php
    	$stringVariable = "Hello";
    	$integerVariable = 0;
    	$doubleOrFloatVariable = 0.0;
    	$booleanVariable = true;
    	$arrayVariable = array("Hello", "world!");
    ?>

It's always good practice to initialize your variables to prevent confusion with types as well as keeping with the scope of your variables. For example, you will be unable to access a variable within a function from outside unless the variable is declared in the correct scope.

See the following:

    <?php
    	function displayMessage() {
    		$message = "Hello, world!";
    		echo $message; // Output: Hello, world!
    	}
    	displayMessage();
    	echo $message; // The output shoud look like, "Undefinied variable: message on line number 6"
    ?>

This is in general universal to any programming language, or at least ones that respect variable scope.

In the example above, you'll notice another reserved language keyword, "function." A function permits us to consolidate a commonly used piece of code or important functionality into a recipe of sorts.
Within the brackets that follow, you may place arguments to allow "changes" to your recipe. Have a look at the following code:

    <?php
    	function displayMessage($message) {
    		echo $message;
    	} 
    	displayMessage("Hello, world!");
    ?>

This function looks very close to the previous one, but has one notable difference: it displays a message that is passed to the function. When we take a look at line 5, we call "displayMessage" and pass on the message that will be displayed to the user. 

As with any programming language, there is an inherent need to be able to sort through and have exit conditions, etc:

    <?php
    	function displayMessage($message, $bolded = false) {
    		$formattedMessage = "";
    		if ($bolded) {
    			$formattedMessage .= "<b>" . $message . "</b>";
    		} else {
    			$formattedMessage = $message;
    		}
    		echo $formattedMessage;
    	}
    	displayMessage("Hello, world!");
    	displayMessage("Hello, world!", true);
    ?>

In this snippet of code, we have two arguments in our function. The `$message` variable contains the message to display, but the `$bolded` variable is new.

That variable is of the type boolean, and determines whether or not our outputted text will be bolded or not. When we provide a "default" value to a function, it signifies that should the user not specify a value, the default value will be used in its place. This is what happens on the line `displayMessage("Hello, world!");`. While there are two arguments, we only make use of one, which outputs "Hello, world!" unbolded.

The next line **does** tell the function to use the value it is given instead of the default, so our text becomes bolded since `$bolded = true`.

Now, look at the line `if ($bolded)`. This is short for, `if ($bolded == true)`, which checks if the function should bold the text. There are quite a few operators that you can use within an if statement, however this tutorial will not cover them completely. Check [W3Schools](https://w3schools.com) for more examples. 

Here are some basic comparison operators:

`a > b`  - a greater than b

`a < b` - a smaller than b

`a => b` - a greater or equal to b

`a <= b` - a smaller or equal to b

`a == b` - a is equal to b; type casting allowed, so values such as the integer 1 are equal to the boolean operator true.

`a === b` - a is equal to b; must be the same types, so values such as the integer 1 are not equal to true and 0 is not equal to false

`a !== b` - a is _not_ equal to b

Lastly, let's have a look at the style of loops PHP uses.
It supports a plethora of them: `while`, `do while`, `for` and `foreach` loops.
Here's what they look like:

	<?php 
		$i = 0;
		while ($i < 10) {
			echo $i;
			$i++;
		}

		do {
			echo $i;
			$i--;
		} while ($i => 0);

		for ($j = 0; $j < 10; $j++) {
			echo $j;
		}
	?>

The while loop that is shown will do exactly the same thing as the for loop in this case. The first and third loop should output, "0 1 2 3 4 5 6 7 8 9," while second loop subtracts until $i is smaller or equal to 0. The format of most loops in PHP are similar or even the same as their C counterparts. You may notice the "$i--" and "$i++" lines, which employ the use of incremental operators. The "++" will add one to the variable, while the "--" will subtract one from the variable. It is possible to use this and basic arithmatic operators in short form:

	<?php
		$number = 0;
		$number *= 0; // 0 * 0 = 0
		$number /= 1; // 0 / 1 = 0
		$number += 1; // 0 + 1 = 1
		$number -= 1; // 1 - 1 = 0;
	?>

## Using databases in PHP

As PHP is a web programming language, it is essential that we know how to connect and make changes to a database. PHP employs a handful of optional database connectors: PDO (uses the first available connection method), MySQLi, PostgresSQL, MongoDB, etc. Let's have a look at how we can connect and retrieve some data from our database.

	<?php
		$DSN = "mysql:host=localhost;dbname=testDatabase;port=3306;charset=utf8mb4";
		try {
			$PDO = new PDO($DSN, "root", "password");
			$query = $PDO->prepare("SELECT username from userTable");
			$query->execute();
			echo $query->rowCount();
		} catch (PDOException $ex) {
			echo "Connection failed, exception: " . $e->getMessage();
		}
	?>

This example will connect to database `testDatabase` and display the number of users that are present in `userTable`. In general, this is the database connector of choice usually less prone to security flaws and is accepted as good practice.

## That's all for now...

Thank you for reading! There will be more to come, so please stay tuned.  



