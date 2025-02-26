import wixLocation from 'wix-location';
import wixWindow from 'wix-window';

$w.onReady(function () {
    // Define the specific location slugs where the lightbox should appear
    const targetLocations = ["kolkata", "hyderabad", "bengaluru"]; // Add more locations as needed

    // Get the last part of the URL path
    const lastSegment = wixLocation.path[wixLocation.path.length - 1];

    // Check if the last part of the URL is in the targetLocations list
    if (targetLocations.includes(lastSegment)) {
        // Open the lightbox
        wixWindow.openLightbox("Coming Soon").then(() => {
            console.log("light box opened")

        });
    }
});





// import wixData from "wix-data";

// $w.onReady(function () {
//     const locationId = $w("#dynamicDataset").getCurrentItem()._id; // Get current location ID

//     wixData.query("properties")
//         .hasSome("location", locationId) // Fetch properties linked to the location
//         .find()
//         .then(results => {
//             if (results.items.length > 0) {
//                 const properties = results.items.map(item => ({
//                     title: item.title,
//                     lat: item.latitude,
//                     lng: item.longitude
//                 }));

//                 // Send data to HTML iframe
//                 $w("#html1").postMessage({ type: "updateMarkers", locations: properties });
//             }
//         })
//         .catch(err => console.error("Error fetching properties:", err));
// });
