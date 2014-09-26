<?php

/*This is procedural programming
All of our code will be housed in this file and we will collect the data from the form below
Let's walk through that now*/

//get the name field from the post array
//get the email field from the post array
//get the message field from the post array


//create some local variables:

$name;
$email;
$message;
$connection;

//gather the required information from the servers post array

$name = $_POST['name'];
$email = $_POST['email'];
$message = $_POST['message'];

//print the captured information to the screen
echo "<h1>The information entered is...</h1>";
echo "Hello: " .$name;
echo "<br />";
echo "Your email is: " .$email;
echo "<br />";
echo "Your message is: " .$message;

//connects to database and checks to see if the table test exists otherwise it writes the table to the database

$connection = mysqli_connect('localhost', 'root', '', 'database');
$query = $connection->query("CREATE TABLE IF NOT EXISTS test (id INT(3) NOT NULL AUTO_INCREMENT, PRIMARY KEY(id), name VARCHAR(45), email VARCHAR(45), message VARCHAR(128)) ");


//connects to the database and inserts the data above in the database

$query2 = $connection->query("INSERT INTO test (id, name, email, message)VALUES ('NULL', 
'".$name."',
'".$email."',
'".$message."'
);");

echo "<h1>For each time you refresh this page your form resubmits and the table below gets larger</h1>";

//return all the results in the form of a table and see whats there

$result = mysqli_query($connection, "SELECT * FROM test ");

echo "<table border='1'><tr><td>ID</td><td>Name</td><td>Email</td><td>Message</td></tr>";

while($row = mysqli_fetch_array($result)){
	echo "<tr>";
	echo "<td>".$row['id']."</td>";
	echo "<td>".$row['name']."</td>";
	echo "<td>".$row['email']."</td>";
	echo "<td>".$row['message']."</td>";
	echo "</tr>";
}

echo "</table>";

?>