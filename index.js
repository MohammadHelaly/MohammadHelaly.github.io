const successModal = new bootstrap.Modal("#contact-success-modal");
const failureModal = new bootstrap.Modal("#contact-failure-modal");
const validationModal = new bootstrap.Modal("#contact-validation-modal");
const contactFormButton = document.querySelector("#contact-form-button");
const contactForm = document.querySelector("#contact-form");

//In case of using mailto contact form
contactForm.addEventListener("submit", function (event) {
	event.preventDefault();
	var senderName = document.getElementById("name").value;
	var senderEmail = document.getElementById("email").value;
	var message = document.getElementById("message").value;

	if (senderName === "" || senderEmail === "" || message === "") {
		validationModal.show();
		return;
	}

	try {
		var subject = "Email from " + senderName + ".";
		var body = "Sender Email: " + senderEmail + "\n\n";
		body += "Message: \n" + message;

		var mailtoLink =
			"mailto:mohammad.helaly@gmail.com" +
			"?subject=" +
			encodeURIComponent(subject) +
			"&body=" +
			encodeURIComponent(body);

		window.location.href = mailtoLink;
		setTimeout(function () {
			contactForm.reset();
		}, 5000);
	} catch (error) {
		failureModal.show();
	}
});

//In case of using formsubmit.co contact form

//   contactForm.addEventListener("submit", function (event) {
//     event.preventDefault();
//     fetch(this.action, {
//       method: this.method,
//       body: new FormData(this),
//     })
//       .then(function (response) {
//         if (response.ok) {
//           successModal.show();
//           contactForm.reset();
//         } else {
//           failureModal.show();
//         }
//       })
//       .catch(function (error) {
//         failureModal.show();
//       });
//   });
