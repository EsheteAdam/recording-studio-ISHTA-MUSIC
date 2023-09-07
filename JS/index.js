// מספר הטלפון שלך
const myPhoneNumber = "9720522497957"; // החליפו במספר הטלפון שלכם

// פונקציה לפתיחת חלון שיחת WhatsApp עם המספר שלך
function openWhatsAppChat() {
    const url = `https://api.whatsapp.com/send?phone=${myPhoneNumber}`;
    window.open(url, "_blank");
}

// הוספת אירוע לכפתור כאשר מתבצעת טעינת הדף
document.addEventListener("DOMContentLoaded", function () {
    const whatsappButton = document.getElementById("whatsappButton");
    whatsappButton.addEventListener("click", openWhatsAppChat);
});
function openWhatsAppChat() {
    const message = encodeURIComponent("היי, אשמח לקבל פרטים על השירותים שלכם"); // הודעה קבועה שתוצג בחלון צ'אט
    const url = `https://api.whatsapp.com/send?phone=${myPhoneNumber}&text=${message}`;
    window.open(url, "_blank");
}

let menuIcon = document.querySelector("#menuIcon");
let navList = document.querySelector(".nav-list");

menuIcon.onclick = () => {
    menuIcon.classList.toggle("bx-x");
    navList.classList.toggle("open");
};

// function submitForm() {
//     // Add your form submission logic here
//     alert('Form submitted successfully!');
// }

function submitForm() {
    // אסוף את הנתונים מהשדות בטופס
    const firstName = document.getElementById("contactBlockFirstName").value;
    const lastName = document.getElementById("contactBlockLastName").value;
    const email = document.getElementById("contactBlockEmail").value;
    const subject = document.getElementById("contactBlockSubject").value;
    const message = document.getElementById("contactBlockMessage").value;

    // בניית אובייקט שמכיל את הנתונים
    const data = {
        firstName: firstName,
        lastName: lastName,
        email: email,
        subject: subject,
        message: message,
    };

    // שליחת הנתונים לכתובת אימייל (שימותה השרת שאתה יכול לשלוח אליו את הנתונים)
    fetch("YOUR_EMAIL_API_URL", {
        method: "POST", // אם אתה רוצה לשלוח POST request
        body: JSON.stringify(data), // המרת הנתונים ל JSON
        headers: {
            "Content-Type": "application/json",
        },
    })
        .then((response) => response.json())
        .then((data) => {
            // מטפל בתשובה מהשרת (אפשר להוסיף פה הודעה למשתמש כי הטופס נשלח בהצלחה)
            console.log(data);
        })
        .catch((error) => {
            // מטפל בשגיאות אם ישנן
            console.error("Error:", error);
        });
}
