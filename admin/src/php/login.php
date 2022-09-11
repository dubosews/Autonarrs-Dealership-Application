<?php
header("Content-Type: application/json");

// Server Connection Data
  $servername = "localhost";
  $username = "dubosews";
  $password = "dubosewsSQL!";
  $dbname = "autonarrsDB";

// Create connection
  $conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
  if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
  }

// SQL Statement
  $sql = "SELECT * FROM users";

// SQL Validation
  if ($conn->query($sql) === TRUE) {
    echo "New record created successfully";
  } else {
    
  }

  $result = $conn->query($sql);


  
  
  if ($result->num_rows > 0) {
    $respArray = [];
    // output data of each row
    while($data = $result->fetch_assoc()) {
      $respData = [ 'user' => $data["user"], 'password' => $data["password"]];
      array_push($respArray, $respData);
    }
    echo json_encode($respArray);
  } else {
    echo "0 results";
  }

  

$conn->close();
?>