const btn = document.getElementById("btn");

btn.addEventListener('click', () => {
    if (!localStorage.getItem("user-email")) {
        setUserEmail();
    } else {
        const storedEmail = localStorage.getItem("user-email");
        const link = document.getElementById("link");
        link.href = `mailto:peshalaprabhapoorna@gmail.com?subject=Want%20to%20find%20a%20boarding%20place&body=Email-${storedEmail}`;
    }
});

function setUserEmail() {
    let userEmail = prompt("Please enter your ugly email.");
    if (!userEmail) {
        setUserEmail();
    } else {
        localStorage.setItem("user-email", userEmail);
        const link = document.getElementById("link");
        link.href = `mailto:peshalaprabhapoorna@gmail.com?subject=Want%20to%20find%20a%20boarding%20place&body=Email-${userEmail}`;
    }
}


    