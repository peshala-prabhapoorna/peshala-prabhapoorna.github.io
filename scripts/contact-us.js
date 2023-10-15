const btn = document.getElementById("btn");

btn.addEventListener('click', () => {
    if (!localStorage.getItem("user-contact-number")) {
        setUserContactNo();
    } else {
        const storedContactNo = localStorage.getItem("user-contact-number");
        const link = document.getElementById("link");
        link.href = `mailto:peshalaprabhapoorna@gmail.com?subject=Want%20to%20\
                    find%20a%20boarding%20place&body=Contact%20Number%20-%20${storedContactNo}`;
    }
});

function setUserContactNo() {
    let userContactNo = prompt("Please enter your useless phone number.");
    if (!userContactNo) {
        setUserContactNo();
    } else {
        localStorage.setItem("user-contact-number", userContactNo);
        const link = document.getElementById("link");
        link.href = `mailto:peshalaprabhapoorna@gmail.com?subject=Want%20to%20find\
                    %20a%20boarding%20place&body=Contact%20Number%20-%20${userContactNo}`;
    }
}


    