import wixData from 'wix-data';
import wixLocation from 'wix-location';

$w.onReady(function () {
    wixData.query("locations")
        .find()
        .then(result => {
            console.log(result.items);

            // Set the repeater data
            $w("#locationsRepeater").data = result.items;
          

        });

    // Properly set up the onItemReady event
    $w("#locationsRepeater").onItemReady(($item, itemData, index) => {
        $item("#locationButton9").label = itemData.title;
        $item("#locationButton9").link = itemData["link-locations-title"]; // Ensure this field exists in the dataset

    });

  
});