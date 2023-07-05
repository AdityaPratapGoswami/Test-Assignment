AWS.config.update({
  accessKeyId: "AKIAYVSXMH3MMFQWV6V2",
  secretAccessKey: "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",
  region: "ap-southeast-1",
});
AWS.config.update({
  accessKeyId: "AKIAYVSXMH3MMFQWV6V2",
  secretAccessKey: "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",
  region: "ap-southeast-1",
});
document.getElementById("form").addEventListener("submit", submitForm);

function submitForm(event) {
  event.preventDefault();

  // Get form field values
  const firstName = document.getElementById("firstname").value;
  const lastName = document.getElementById("lastname").value;
  const email = document.getElementById("inputEmail4").value;
  const address = document.getElementById("inputAddress").value;
  const city = document.getElementById("inputCity").value;
  const state = document.getElementById("inputState").value;
  const country = document.getElementById("inputCountry").value;
  const zip = document.getElementById("inputZip").value;

  // object with the form data
  const formData = {
    firstName: firstName,
    lastName: lastName,
    email: email,
    address: address,
    city: city,
    state: state,
    country: country,
    zip: zip,
  };

  // Send the form data to the server (or DynamoDB)
  saveFormData(formData);
}

function saveFormData(formData) {
  const dynamodb = new AWS.DynamoDB.DocumentClient({
    region: "ap-southeast-1",
  });

  const params = {
    TableName: "FormData",
    Item: formData,
  };

  dynamodb.put(params, (err, data) => {
    if (err) {
      console.error("Error storing form data:", err);
    } else {
      console.log("Form data stored successfully:", data);
      // Optionally, redirect to a success page or perform other actions
    }
  });
}
