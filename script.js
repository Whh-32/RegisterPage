let btnPhone = document.querySelector(".phone");
let btnEmail = document.querySelector(".email");
let btnSubmit = document.querySelector(".submit");
let btnCode = document.querySelector(".sendCode");
let phoneInput = document.querySelector(".phone-input");
let emailInput = document.querySelector(".email-input");
let loading = document.querySelector(".loading");

//loading remoe after loading
setTimeout(() => {
    loading.style.display = "none";
}, 1500);

//close or open referral input
let referral = document.querySelector(".referral");
let icon = document.querySelector(".referral > .icon")
referral.addEventListener("click", () => {
    $(".refInput").slideToggle();
    icon.classList.toggle("iconActive")
});

//effect of send code button
let effect = document.querySelector(".effect")
btnCode.addEventListener("click", () => {
    btnCode.style.pointerEvents = "none";
    effect.style.opacity = "1";
    effect.classList.add("effectActive");
    setTimeout(() => {
        effect.style.opacity = "0";
        setTimeout(() => {
            effect.classList.remove("effectActive");
            btnCode.style.pointerEvents = "all";
        }, 300);
    }, 300);
});

//when click on eye show password
let showPass = document.querySelector(".showPass");
let pass = document.querySelector("#pass")
showPass.addEventListener("click", () => {
    showPass.classList.toggle("showPassActive");
    if (pass.type == "password") {
        pass.type = "text";
    } else {
        pass.type = "password";
    }
});

//open and close select of country code and get code
let countryCode = document.querySelector(".country");
let codesBox = document.querySelector(".jss692");
let codesIcon = document.querySelector(".country > .icon");
let items = document.querySelectorAll(".overlayItem");
let header = document.querySelector(".overlayHeader")
let NewCountryCode = document.querySelector(".countryCode");
countryCode.addEventListener("click", countryBox);
function countryBox() {
    codesIcon.classList.toggle("activeIcon");
    codesBox.classList.toggle("show");
};
items.forEach(element => {
    element.addEventListener("click", () => {
        countryBox();
        let code = element.children[1].textContent;
        NewCountryCode.textContent = code;
    });
});

document.body.addEventListener("click", event => {
    if (event.target != countryCode && !event.target.matches(".jss692 *")) {
        //my pashm star mean all element in class
        codesIcon.classList.remove("activeIcon");
        codesBox.classList.remove("show");
    }
});

//check type of phone and feedback to clinet
let phoneType = /^\d{10}$/;
let phone = document.querySelector("#phone");
let phLabel = document.querySelector(".phLabel");
let phoneError = document.querySelector(".phoneError");
phone.addEventListener("blur", checkPhone);
function checkPhone() {
    if (phoneType.test(phone.value)) {
        phLabel.classList.remove("falseLable");
        $(".phoneError").slideUp();
        phone.classList.remove("inputFalse");
        return true;
    } else {
        phLabel.classList.add("falseLable");
        $(".phoneError").slideDown();
        phone.classList.add("inputFalse");
        return false;
    }
};

//check type of email and feedback to clinet
let emailType = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;   //regex
let email = document.querySelector("#email");
let eLabel = document.querySelector(".eLabel");
let emailError = document.querySelector(".emailError");
email.addEventListener("blur", checkEmail);
function checkEmail() {
    if (emailType.test(email.value)) {
        eLabel.classList.remove("falseLable");
        $(".emailError").slideUp();
        email.classList.remove("inputFalse");
        return true;
    } else {
        eLabel.classList.add("falseLable");
        $(".emailError").slideDown();
        email.classList.add("inputFalse");
        return false;
    }
};

//check type of verifi and feedback to clinet
let verifi = document.querySelector("#verifi");
let vLabel = document.querySelector(".vLabel");
let verifiError = document.querySelector(".verifiError");
verifi.addEventListener("blur", checkVerifi);
function checkVerifi() {
    if (verifi.value == "") {
        vLabel.classList.add("falseLable");
        $(".verifiError").slideDown();
        verifi.classList.add("inputFalse");
        return false;
    } else {
        vLabel.classList.remove("falseLable");
        $(".verifiError").slideUp();
        verifi.classList.remove("inputFalse");
        return true;
    }
};

//check type of password and feedback to clinet
let passType = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$@!%&*?])[A-Za-z\d#$@!%&*?]{10,32}$/;
let pLabel = document.querySelector(".pLabel");
let passError = document.querySelector(".passError");
pass.addEventListener("blur", checkPass);
function checkPass() {
    if (passType.test(pass.value)) {
        pLabel.classList.remove("falseLable");
        $(".passError").slideUp();
        pass.classList.remove("inputFalse");
        return true;
    } else {
        pLabel.classList.add("falseLable");
        $(".passError").slideDown();
        pass.classList.add("inputFalse");
        return false;
    }
};

//check the check box 
let checkBox = document.querySelector("#checkBox");
checkBox.addEventListener("click", checkCeckBox);
function checkCeckBox() {
    if (checkBox.checked) {
        $(".checkError").slideUp();
        return true;
    } else {
        $(".checkError").slideDown();
        return false;
    }
};

//when click on phone or emaile chenge css option
btnEmail.addEventListener("click", () => {
    btnPhone.classList.remove("activeOption");
    btnEmail.classList.add("activeOption");
    phoneInput.style.display = "none";
    emailInput.style.display = "flex";
    vLabel.textContent = "Email verification code";
});

btnPhone.addEventListener("click", () => {
    btnEmail.classList.remove("activeOption");
    btnPhone.classList.add("activeOption");
    emailInput.style.display = "none";
    phoneInput.style.display = "flex";
    vLabel.textContent = "Phone verification code";
});

//when user click on submit check inputs and send data
btnSubmit.addEventListener("click", () => {
    checkEmail();
    checkVerifi();
    checkPass();
    checkPhone();
    checkCeckBox();
    if (checkPhone() && checkVerifi() && checkPass() && checkCeckBox() ||
        checkEmail() && checkVerifi() && checkPass() && checkCeckBox()
    ) {
        console.log("ok");
    } else {
        console.log("not ok");
    }
});

//search input in country code
let searchInput = document.querySelector(".MuiInputBase-input");
searchInput.addEventListener("keyup", () => {
    let inputValue = searchInput.value.toUpperCase();
    for (let i = 0; i < items.length; i++) {
        let countryName = items[i].children[0].childNodes[1].textContent.toUpperCase();
        if (countryName.indexOf(inputValue) > -1) {
            items[i].style.display = "flex";
        } else {
            items[i].style.display = "none";
        }
    }
});

/*************************************** login js ****************************************/
let loginText = document.querySelector(".btnLogin");
let signUp = document.querySelector(".signUP");
let login = document.querySelector(".login");
let btnLogin = loginText.children[0];
signUp.style.display = "flex";
btnLogin.addEventListener("click", () => {
    if (signUp.style.display == "flex") {
        signUp.style.display = "none";
        login.style.display = "flex";
        btnLogin.textContent = "Sign up now";
        loginText.childNodes[0].textContent = "Haven’t registered? ";
    } else {
        signUp.style.display = "flex";
        login.style.display = "none";
        btnLogin.textContent = "Log in";
        loginText.childNodes[0].textContent = "Already have an account? ";
    }
});