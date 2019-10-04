window.addEventListener('DOMContentLoaded', function() {
	// Form
	let message = new Object();
	message.loading = "Loading...";
	message.success = "Thanks! We will contact you soon.";
	message.failure = "Something went wrong...";

	let screenForm = document.getElementsByClassName('form')[0],
	    offerForm = document.getElementsByClassName('form')[1],
	    popupForm = document.getElementsByClassName('form')[2],
	    statusMessage = document.createElement('div');
	    statusMessage.classList.add('status');
	    statusMessage.style.color = '#00b6ff';
	    statusMessage.style.textAlign = 'center';
//AJAX 
     function sendAjaxForm(form) {
          input = form.getElementsByTagName('input'),  
          event.preventDefault();
          form.appendChild(statusMessage);

          let request = new XMLHttpRequest();
          request.open("POST", 'telegram.php');

          let formData = new FormData(form);
          request.send(formData);

          request.onreadystatechange = function() {
               if (request.readyState < 4)  {
                    statusMessage.innerHTML = message.loading;
               } else if (request.readyState === 4) {
                    if (request.status == 200 && request.status < 300) {
                         statusMessage.innerHTML = message.success;
                    } else {
                         statusMessage.innerHTML = message.failure;
                    }
               }
          }

          for (let i = 0; i < input.length; i++) {
               input[i].value = '';
          }

     }

     screenForm.addEventListener('submit', function(event) {
          sendAjaxForm(screenForm);
     });

     offerForm.addEventListener('submit', function(event) {
          sendAjaxForm(offerForm);
     });

     popupForm.addEventListener('submit', function(event) {
          sendAjaxForm(popupForm);
     });





	});