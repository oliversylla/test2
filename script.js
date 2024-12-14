const button = document.getElementById('myButton');
button.addEventListener('click', () => {
  const message = document.getElementById('message');
  message.textContent = "You clicked the button! Huzzah!";
});
