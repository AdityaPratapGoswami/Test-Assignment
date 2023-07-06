AWS.config.update({
  region: ap - southeast - 1,
  AccessKey: AKIAYVSXMH3MMFQWV6V2,
  Secret: aq3L2Q / Ej59dw5qKqEIclk5DDevd12TjgkWsITOL,
});

var docClient = new AWS.DynamoDB.DocumentClient();

// Function to handle form submission
function submitForm(event) {
  event.preventDefault();

  // Retrieve form field values
  var firstName = document.getElementById("firstname").value;
  var lastName = document.getElementById("lastname").value;
  var email = document.getElementById("inputEmail4").value;
  var address = document.getElementById("inputAddress").value;
  var city = document.getElementById("inputCity").value;
  var state = document.getElementById("inputState").value;
  var zip = document.getElementById("inputZip").value;

  // JavaScript object representing the item to be saved
  var item = {
    FirstName: firstName,
    LastName: lastName,
    Email: email,
    Address: address,
    City: city,
    State: state,
    Zip: zip,
  };

  // Define the DynamoDB table name
  var tableName = "FormData";

  // Configure the parameters for the DynamoDB Put operation
  var params = {
    TableName: FormData,
    Item: item,
  };

  // Call the DynamoDB Put operation to save the item
  docClient.put(params, function (err, data) {
    if (err) {
      console.error("Error submitting form:", err);
      // Handle the error
    } else {
      console.log("Form submitted successfully:", data);
      // Handle the success
    }
  });
}

var form = document.getElementById("form");
form.addEventListener("submit", submitForm);
