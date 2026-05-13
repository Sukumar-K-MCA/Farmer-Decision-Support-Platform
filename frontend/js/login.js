/* =========================
   ELEMENTS
========================= */

const loginForm =
document.getElementById("loginForm");

const registerForm =
document.getElementById("registerForm");

const forgotForm =
document.getElementById("forgotForm");

const registerModal =
document.getElementById("registerModal");

const forgotModal =
document.getElementById("forgotModal");

/* =========================
   OPEN/CLOSE MODALS
========================= */

function openRegister(){

    registerModal.classList.add("active");

    document.body.style.overflow = "hidden";
}

function closeRegister(){

    registerModal.classList.remove("active");

    document.body.style.overflowY = "auto";
}

function openForgot(){

    forgotModal.classList.add("active");

    document.body.style.overflow = "hidden";
}

function closeForgot(){

    forgotModal.classList.remove("active");

    document.body.style.overflowY = "auto";
}

/* =========================
   CLOSE MODAL OUTSIDE CLICK
========================= */

window.addEventListener("click", function(e){

    if(e.target === registerModal){

        closeRegister();
    }

    if(e.target === forgotModal){

        closeForgot();
    }
});

/* =========================
   LOGIN
========================= */

loginForm.addEventListener(
"submit",
function(e){

    e.preventDefault();

    const email =
    document.getElementById("email").value.trim();

    const password =
    document.getElementById("password").value.trim();

    const remember =
    document.querySelector(".remember input").checked;

    const storedEmail =
    localStorage.getItem("registeredEmail");

    const storedPassword =
    localStorage.getItem("registeredPassword");

    const storedName =
    localStorage.getItem("registeredName");

    if(email === "" || password === ""){

        alert("Please fill all fields");
        return;
    }

    if(
        email === storedEmail &&
        password === storedPassword
    ){

        localStorage.setItem(
            "isLoggedIn",
            "true"
        );

        localStorage.setItem(
            "userName",
            storedName
        );

        if(remember){

            localStorage.setItem(
                "rememberUser",
                "true"
            );
        }

        alert("Login Successful!");

        window.location.href =
        "home.html";

    }else{

        alert("Invalid Email or Password");
    }
});

/* =========================
   REGISTER
========================= */

registerForm.addEventListener(
"submit",
function(e){

    e.preventDefault();

    const name =
    document.getElementById("registerName").value.trim();

    const email =
    document.getElementById("registerEmail").value.trim();

    const password =
    document.getElementById("registerPassword").value.trim();

    const confirm =
    document.getElementById("confirmPassword").value.trim();

    const existingEmail =
    localStorage.getItem("registeredEmail");

    if(
        name === "" ||
        email === "" ||
        password === "" ||
        confirm === ""
    ){

        alert("Please fill all fields");
        return;
    }

    if(password.length < 6){

        alert("Password must contain minimum 6 characters");
        return;
    }

    if(password !== confirm){

        alert("Passwords do not match");
        return;
    }

    if(email === existingEmail){

        alert("Account already exists");
        return;
    }

    localStorage.setItem(
        "registeredName",
        name
    );

    localStorage.setItem(
        "registeredEmail",
        email
    );

    localStorage.setItem(
        "registeredPassword",
        password
    );

    alert("Registration Successful!");

    registerForm.reset();

    closeRegister();
});

/* =========================
   FORGOT PASSWORD
========================= */

forgotForm.addEventListener(
"submit",
function(e){

    e.preventDefault();

    const email =
    document.getElementById("forgotEmail").value.trim();

    const storedEmail =
    localStorage.getItem("registeredEmail");

    const storedPassword =
    localStorage.getItem("registeredPassword");

    if(email === ""){

        alert("Enter registered email");
        return;
    }

    if(email === storedEmail){

        alert(
            "Your Password is: " +
            storedPassword
        );

    }else{

        alert("Email not found!");
    }

    forgotForm.reset();

    closeForgot();
});

/* =========================
   AUTO LOGIN CHECK
========================= */

window.addEventListener("load", function(){

    const isLoggedIn =
    localStorage.getItem("isLoggedIn");

    if(
        isLoggedIn === "true" &&
        window.location.pathname.includes("login.html")
    ){

        console.log("User already logged in");
    }
});