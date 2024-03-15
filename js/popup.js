var popupClosed = false;

window.onscroll = function() {
    if (!popupClosed) {
        scrollFunction();
    }
};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("popup").style.display = "block";
    } else {
        document.getElementById("popup").style.display = "none";
    }
}

function closePopup() {
    document.getElementById("popup").style.display = "none";
    popupClosed = true;
}

function register() {
    // Replace this with your registration logic
    alert("Redirecting to registration page...");
    // Example: window.location.href = "registration.html";
}
