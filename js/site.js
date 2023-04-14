function getValues()
{
  let userInput = document.getElementById('message').value;

  let reversedInput = reverseString(userInput);

  displayString(reversedInput);
}


function reverseString(message)
{
  let reversedMessage = '';

  for (i = message.length - 1; i >= 0; i--)
  {
    reversedMessage += message[i];
  }

  return reversedMessage;
}


function displayString(reversedMessage){
  document.getElementById('msg').textContent = reversedMessage;
  document.getElementById('alert').classList.remove('d-none');
}




// Swal.fire({
//   backdrop: false,
//   title: "App Name",
//   text: msg,
// });
