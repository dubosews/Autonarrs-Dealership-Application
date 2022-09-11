<?php

// Server Connection Data
  $servername = "localhost";
  $username = "dubosews";
  $password = "dubosewsSQL!!";
  $dbname = "autonarrsDB";

// Form Input Value Variables
  $id = $_POST['id'];
  $year = $_POST['year'];
  $make = $_POST['make'];
  $model = $_POST['model'];
  $trim = $_POST['trim'];
  $mileage = $_POST['mileage'];
  $price = $_POST['price'];
  $description = $_POST['description'];


// Form Validatation
  if (!empty($id) || !empty($year) || !empty($make) || !empty($model) || !empty($trim) || !empty($mileage) || !empty($price) || !empty($description)) {
  } else {
      echo "All Fields Are Required!";
    die();
  }

// Create connection
  $conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
  if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
  }

// SQL Statement
  $sql = "INSERT INTO inventory (id, year, make, model, trim, mileage, price, description)
  VALUES ('$id', '$year', '$make', '$model', '$trim', '$mileage', '$price', '$description')";

// SQL Validation
  if ($conn->query($sql) === TRUE) {
    header('Location: http://www.autonarrs.com/');
  } else {
    echo "Error: " . $sql . "<br>" . $conn->error;
  }

$conn->close();
?>