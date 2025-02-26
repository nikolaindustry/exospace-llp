import wixData from 'wix-data';
import wixLocation from 'wix-location';
//import {myEmailMemberFunction} from 'backend/emaildata.web'

import { scrollTo } from 'wix-window';

$w('#submit').onClick((event) => {
    triggeringEmailfunc()
    let loc = $w("#location").value
    let dadta = {
        "name": $w("#name").value,
        "emailId": $w("#emailin").value,
        "contact": $w("#contactno").value,
        "location": loc
    }

    wixData.insert("homepageform", dadta)
        .then(result => {

            // console.log(loc)

            wixLocation.to(`https://api.whatsapp.com/send/?phone=%2B919692877079&text&type=phone_number&app_absent=0`)

        })
        .catch(error => {
            //  console.log(loc)
            wixLocation.to(`https://api.whatsapp.com/send/?phone=%2B919692877079&text&type=phone_number&app_absent=0`)
        })
})

$w.onReady(() => {
    $w("#numone").onViewportEnter(() => {
        animateNumber("#numone", 0, 3, 1000)
    })
    $w("#numtwo").onViewportEnter(() => {
        animateNumber("#numtwo", 0, 50, 1000)
    })
    $w("#numthree").onViewportEnter(() => {
        animateNumber("#numthree", 0, 2, 1000)
    })
    $w("#numfour").onViewportEnter(() => {
        animateNumber("#numfour", 0, 40000, 1000)
    })
    $w("#numfive").onViewportEnter(() => {
        animateNumber("#numfive", 0, 3, 1000)
    })

    $w("#faqWidget1").isVisible

})

function animateNumber(elementId, start, end, duration) {
    let current = start;
    let increment = (end - start) / (duration / 100); // Adjust speed
    let element = $w(elementId);

    let timer = setInterval(() => {
        current += increment;
        if (current >= end) {
            current = end;
            clearInterval(timer);
        }
        element.text = Math.round(current).toString(); // Update text
    }, 50);
}

$w.onReady(function () {
    const nameInput = $w("#name")
    const emailinput = $w("#emailin")
    const contactInput = $w("#contactno")
    const dropdown = $w("#location")
    const submitButton = $w("#submit")
    const errorText = $w("#errortext") // Text element for error message

    function checkInputs() {
        const nameFilled = nameInput.value.trim() !== ""
        const emailfilled = emailinput.value.trim() !== ""
        const dropdownFilled = dropdown.value !== ""
        const contactValid = validateContact()

        if (nameFilled && emailfilled && dropdownFilled && contactValid) {
            submitButton.enable();
            submitButton.style.backgroundColor = "#060C89";
        } else {
            submitButton.disable();
            submitButton.style.backgroundColor = "#EEEEEE";
        }
    }

    function validateContact() {
        const contactValue = contactInput.value.trim();
        const isValid = /^\d{10}$/.test(contactValue); // Only 10-digit numbers

        if (!isValid) {
            errorText.text = "Contact number must be exactly 10 digits!";
            errorText.show();
        } else {
            errorText.hide();
        }

        return isValid;
    }

    nameInput.onInput(() => checkInputs())
    contactInput.onInput(() => checkInputs())
    emailinput.onInput(() => checkInputs())
    dropdown.onChange(() => checkInputs())
});

// import { triggeredEmails } from "wix-crm-frontend";

// function triggeringEmailfunc() {
//     const emailData = {
//         firstName: $w("#name").value.trim(),
//         contactNumber: $w("#contactno").value.trim(),
//         selectedOption: $w("#location").value.trim()
//     };

//     console.log("Sending Email Data:", emailData);

//     triggeredEmails.emailMember("nikolaindustry", 'ddc99945-611e-4ef4-aac8-dd0c75d32913', {
//         variables: emailData
//     })
//     .then(() => {
//         console.log("Email sent successfully!");
//     })
//     .catch((err) => {
//         console.error("Email sending failed:", err);
//     });
// }

import { triggeredEmails } from "wix-crm-frontend"

function triggeringEmailfunc() {
    const emailData = {
        firstName: $w("#name").value.trim(),
        hpemail: $w("#emailin").value.trim(),
        contactNumber: $w("#contactno").value.trim(),
        selectedOption: $w("#location").value.trim()
    }

    console.log("Sending Email Data:", emailData)

    // Array of recipient IDs
    const recipients = [
        'ddc99945-611e-4ef4-aac8-dd0c75d32913', //sales
        'fb402688-c729-4bb8-97d6-1b7f29b640e0', // dm santosh
        '9e512f5a-fdf6-4b52-9efb-a93922d5953e' // anushka22
    ]

    const emailPromises = recipients.map((recipientId) => {
        return triggeredEmails.emailMember("nikolaindustry", recipientId, { variables: emailData })
    })

    Promise.all(emailPromises)
        .then(() => {
            console.log("Emails sent successfully to all recipients!")
        })
        .catch((err) => {
            console.error("Email sending failed:", err)
        })
}