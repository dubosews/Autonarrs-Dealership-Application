<?php
// Allow Access-Control-Allow-Origin
    header('Access-Control-Allow-Origin: *');

// Server Connection Data
    $servername = "localhost";
    $username = "dubosews";
    $password = "dubosewsSQL!";
    $dbname = "autonarrsDB";

// Retrieving the ID of the Vehicle Being Removed from The Request URL
    $deleteID = $_REQUEST["q"];

// Create connection
    $conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    }

// SQL Statement
  $sql = "DELETE FROM inventory WHERE id=$deleteID;";

// SQL Validation
    if ($conn->query($sql) === TRUE) {
        header('Location: http://www.autonarrs.com/src/pages/viewInventory.html');
    } else {
    echo "Error: " . $sql . "<br>" . $conn->error;
    };

// Close the connection to the Server
    $conn->close();
?>