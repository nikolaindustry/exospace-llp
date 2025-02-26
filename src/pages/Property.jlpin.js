// import { triggeredEmails } from "wix-crm-frontend";
// import wixFormsV2 from 'wix-forms.v2';

// $w("#form1").onSubmit((submission) => {
//     const formData = submission;
//     const emaildataa={
//                 prcn: formData["company_name_625f"],
//                 prpem: formData["email"],
//                 prpn: formData["contact"],
// 				prlc: formData["choose_city"],
// 				prtp: formData["type_of_space"],
// 				prnod: formData["no_of_desks"]
				
//             }
//   // triggeredEmails.emailMember("nikolaindustrythree", 'ddc99945-611e-4ef4-aac8-dd0c75d32913', {
// 		triggeredEmails.emailMember("nikolaindustrythree", '9e512f5a-fdf6-4b52-9efb-a93922d5953e', {
//             variables:emaildataa

//         })
//         .then(() => {
//             console.log("Email is send",emaildataa)
            
//         })
//         .catch((err) => {
//             console.log("Email is not send", err)
//         })
// })