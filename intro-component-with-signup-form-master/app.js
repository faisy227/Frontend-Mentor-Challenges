const messages = document.querySelectorAll('span');
    const errors = document.querySelectorAll('.image');
    const button = document.querySelector('button');
    const textboxes = document.querySelectorAll('input');
button.addEventListener('click', function (event) {
    for (let i = 0; i < messages.length; i++) {
      const value = textboxes[i].value.trim();
      console.log(`Textbox ${i + 1} value: "${value}"`);
  
      if (!value.includes('@') || value === "" || value.includes('/')) {
        console.log(`Error in Textbox ${i + 1}`);
        messages[i].style.visibility = "visible";
        errors[i].style.visibility = "visible";
        event.preventDefault(); // Prevent the default form submission
      }
    }
  });
  