document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("registrationForm");
    const nameField = document.getElementById("name");
    const phoneField = document.getElementById("phone");
    const nameError = document.getElementById("nameError");
    const phoneError = document.getElementById("phoneError");

    // Helper function to display a message in the status bar
    function updateStatusBar(message) {
        window.status = message;
    }

    // Validation when the form is submitted
    form.addEventListener("submit", function (event) {
        let isValid = true;

        // Validate name field
        if (!nameField.value) {
            nameError.textContent = "Name cannot be empty.";
            isValid = false;
        } else if (/\d/.test(nameField.value)) {
            nameError.textContent = "Name cannot contain digits.";
            isValid = false;
        } else {
            nameError.textContent = "";
        }

        // Validate telephone field
        if (!phoneField.value) {
            phoneError.textContent = "Telephone number cannot be empty.";
            isValid = false;
        } else if (!/^\d+$/.test(phoneField.value)) {
            phoneError.textContent = "Telephone number must contain only digits.";
            isValid = false;
        } else {
            phoneError.textContent = "";
        }

        // Prevent form submission if validation fails
        if (!isValid) {
            event.preventDefault();
        }
    });

    // Add focus event listeners to display messages in the status bar
    nameField.addEventListener("focus", () => {
        updateStatusBar("Enter your name (letters only).");
    });

    phoneField.addEventListener("focus", () => {
        updateStatusBar("Enter your telephone number (digits only).");
    });

    // Clear the status bar when a field loses focus
    nameField.addEventListener("blur", () => {
        updateStatusBar("");
    });

    phoneField.addEventListener("blur", () => {
        updateStatusBar("");
    });
});
