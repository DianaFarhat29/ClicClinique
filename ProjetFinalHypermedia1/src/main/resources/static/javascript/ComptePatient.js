$(document).ready(function () {

    // Validate user first name
    function validateUserFirstName() {
        let value = $("#prenom").val().trim();
        if (value.length === 0) {
            $("#userFnamecheck").text("Veuillez entrer votre prénom.");
            $("#userFnamecheck").show();
            return false;
        } else if (!value.match(/^[a-zA-Z\u00C0-\u00FF\s]+$/)) {
            $("#userFnamecheck").text("Le prénom doit contenir uniquement des lettres.");
            $("#userFnamecheck").show();
            return false;
        }
        return true;
    }

    // Validate user last name
    function validateUserLastName() {
        let value = $("#nom").val().trim();
        if (value.length === 0) {
            $("#userLnameCheck").text("Veuillez entrer votre nom.");
            $("#userLnameCheck").show();
            return false;
        } else if (!value.match(/^[a-zA-Z\u00C0-\u00FF\s]+$/)) {
            $("#userLnameCheck").text("Le nom doit contenir uniquement des lettres.");
            $("#userLnameCheck").show();
            return false;
        }
        return true;
    }

    // Validate health insurance number (must be in the format AAAA99999999)
    function validateHealthInsuranceNumber() {
        let value = $("#noMaladie").val().trim().replace(/\s+/g, '');
        if (value.length === 0) {
            $("#NAMCheck").text("Veuillez entrer votre numéro d'assurance maladie.");
            $("#NAMCheck").show();
            return false;
        } else if (!value.match(/^[A-Za-z]{4}\d{8}$/)) {
            $("#NAMCheck").text("Le format du numéro d'assurance maladie est invalide.");
            $("#NAMCheck").show();
            return false;
        }
        return true;
    }

    // Number formatting for health insurance number
    $("#noMaladie").on('input', function () {
        var number = $(this).val().toUpperCase().replace(/[^\dA-Z]/g, '');
        if (number.length > 8) {
            number = number.slice(0, 4) + ' ' + number.slice(4, 8) + ' ' + number.slice(8);
        }
        $(this).val(number);
    });

    // Validate sequential number (must be 2 digits)
    function validateHealthSequentialNumber() {
        let value = $("#noSequentiel").val().trim();
        if (value.length === 0) {
            $("#NoSeqCheck").text("Veuillez entrer votre numéro séquentiel.");
            $("#NoSeqCheck").show();
            return false;
        } else if (!value.match(/^\d{2}$/)) {
            $("#NoSeqCheck").text("Le numéro séquentiel doit être composé de 2 chiffres.");
            $("#NoSeqCheck").show();
            return false;
        }
        return true;
    }

    // Validate date of birth (must be before today)
    function validateDateOfBirth() {
        let value = $("#dateNaissance").val();
        let today = new Date();
        let birthDate = new Date(value);
        if (value.length === 0) {
            $("#dateNaissanceCheck").text("Veuillez entrer votre date de naissance.");
            $("#dateNaissanceCheck").show();
            return false;
        } else if (birthDate >= today) {
            $("#dateNaissanceCheck").text("La date de naissance doit être antérieure à la date d'aujourd'hui.");
            $("#dateNaissanceCheck").show();
            return false;
        }
        return true;
    }

    // Validate phone number
    function validatePhoneNumber() {
        let value = $("#phoneNumber").val().trim();
        if (value.length === 0) {
            $("#phoneNumberCheck").text("Veuillez entrer votre numéro de téléphone.");
            $("#phoneNumberCheck").show();
            return false;
        } else if (value.length < 12) {
            $("#phoneNumberCheck").text("Veuillez entrer un numéro de téléphone qui respecte le format XXX-XXX-XXXX.");
            $("#phoneNumberCheck").show();
            return false;
        }
        return true;
    }

    // Validate email
    function validateEmail() {
        let value = $("#email").val().trim();
        if (value.length === 0) {
            $("#courrielCheck").text("Veuillez entrer votre adresse courriel.");
            $("#courrielCheck").show();
            return false;
        }
        return true;
    }

    // Number formatting for phone number
    $("#phoneNumber").on('input', function () {
        var number = $(this).val().replace(/[^\d]/g, '');
        if (number.length > 6) {
            number = number.slice(0, 3) + '-' + number.slice(3, 6) + '-' + number.slice(6);
        } else if (number.length > 3) {
            number = number.slice(0, 3) + '-' + number.slice(3);
        }
        $(this).val(number);
    });

    // Format postal code to have a space in the middle (e.g., XXX XXX)
    $("#codePostal").on('input', function() {
        var postalCode = $(this).val().toUpperCase().replace(/[^A-Z0-9]/g, '');
        if (postalCode.length > 3) {
            postalCode = postalCode.slice(0, 3) + ' ' + postalCode.slice(3);
        }
        $(this).val(postalCode);
    });

    // Validate postal code (must be in the format XXX XXX)
    function validatePostalCode() {
        let value = $("#codePostal").val().trim();
        if (value.length === 0) {
            $("#codePostalCheck").text("Veuillez entrer le code postal de la clinique.");
            $("#codePostalCheck").show();
            return false;
        } else if (!value.match(/^[A-Za-z]\d[A-Za-z] \d[A-Za-z]\d$/)) {
            $("#codePostalCheck").text("Le format du code postal doit être A#A #A#.");
            $("#codePostalCheck").show();
            return false;
        }
        return true;
    }

    // Validate office number
    function validateAppartmentNumber() {
        let value = $("#noLocal").val().trim();
        if (value.length === 0) {
            $("#noLocalCheck").text("Veuillez entrer le numéro d'appartement (Entrez '0' si non applicable).");
            $("#noLocalCheck").show();
            return false;
        }
        return true;
    }

    // Validate city (must contain only letters)
    function validateCity() {
        let value = $("#ville").val().trim();
        if (value.length === 0) {
            $("#villeCheck").text("Veuillez entrer la ville où se trouve votre adresse.");
            $("#villeCheck").show();
            return false;
        } else if (!value.match(/^[a-zA-Z\u00C0-\u00FF\s]+$/)) {
            $("#villeCheck").text("Le nom de la ville doit contenir uniquement des lettres.");
            $("#villeCheck").show();
            return false;
        }
        return true;
    }

    // Validate street name (must contain only letters)
    function validateStreetName() {
        let value = $("#rue").val().trim();
        if (value.length === 0) {
            $("#rueCheck").text("Veuillez entrer le nom de la rue où se trouve votre adresse.");
            $("#rueCheck").show();
            return false;
        } else if (!value.match(/^[a-zA-Z\u00C0-\u00FF\s]+$/)) {
            $("#rueCheck").text("Le nom de la rue doit contenir uniquement des lettres.");
            $("#rueCheck").show();
            return false;
        }
        return true;
    }

    // Validate civic number (must contain only digits)
    function validateCivicNumber() {
        let value = $("#noCivique").val().trim();
        if (value.length === 0) {
            $("#noCiviqueCheck").text("Veuillez entrer le numéro civique de votre adresse.");
            $("#noCiviqueCheck").show();
            return false;
        } else if (!value.match(/^\d+$/)) {
            $("#noCiviqueCheck").text("Le numéro civique doit être composé de chiffres.");
            $("#noCiviqueCheck").show();
            return false;
        }
        return true;
    }

    // Validate password (must be at least 6 characters long, contain at least 1 digit and 1 special character)
    function validatePassword() {
        let value = $("#password").val();
        if (value.length === 0) {
            $("#passcheck").text("Veuillez entrer un mot de passe.");
            $("#passcheck").show();
            return false;
        } else if (!value.match(/^(?=.*\d)(?=.*[^\w\s]).{6,}$/)) {
            $("#passcheck").text("Le mot de passe doit être composé d'un minimum de 6 caractères, de 1 chiffre et de 1 caractère spécial.");
            $("#passcheck").show();
            return false;
        }
        return true;
    }

    // Validate password match
    function validatePasswordMatch() {
        let password = $("#password").val();
        let confirmPassword = $("#passwordConfirm").val();
        if (password !== confirmPassword) {
            $("#passwordConfirmCheck").text("Les mots de passe ne concordent pas.");
            $("#passwordConfirmCheck").show();
            return false;
        }
        return true;
    }

    // Validate all fields
    function validateAllFields() {
        let isValidFirstName = validateUserFirstName();
        let isValidLastName = validateUserLastName();
        let isValidHealthInsuranceNumber = validateHealthInsuranceNumber();
        let isValidHealthSequentialNumber = validateHealthSequentialNumber();
        let isValidDateOfBirth = validateDateOfBirth();
        let isValidPhoneNumber = validatePhoneNumber();
        let isValidPostalCode = validatePostalCode();
        let isValidCity = validateCity();
        let isValidStreetName = validateStreetName();
        let isValidCivicNumber = validateCivicNumber();
        let isValidPassword = validatePassword();
        let isValidPasswordMatch = validatePasswordMatch();
        let isValidEmail = validateEmail();
        let isValidAppartmentNumber = validateAppartmentNumber();

        return isValidFirstName && isValidLastName && isValidHealthInsuranceNumber && isValidHealthSequentialNumber && isValidDateOfBirth && isValidPhoneNumber && isValidPostalCode && isValidCity && isValidStreetName && isValidCivicNumber && isValidPassword && isValidPasswordMatch && isValidEmail && isValidAppartmentNumber;
    }

    // Submit form if all fields are valid
    $("#submitbtn").click(function (event) {
        $(".errorForm").hide();

        if (validateAllFields()) {
            console.log("Form submitted");
        } else {
            console.log("Form has errors");
            event.preventDefault();
        }
    });

});
