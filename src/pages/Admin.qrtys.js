 import wixData from 'wix-data';
 import wixLocation from 'wix-location';


 $w.onReady(function () {
     wixData.query("locations")
         .find()
         .then(result => {
             console.log(result.items);

             // Set the repeater data
             $w("#locationrepeater4").data = result.items;

         });

     $w("#locationrepeater4").onItemReady(($item, itemData, index) => {

         $item("#locationName").text = itemData.title;

         $item("#openButton").link = itemData["link-locations-title"]; // Ensure this field exists in the dataset

     });

     wixData.query("properties")
         .find()
         .then(result => {
             console.log(result.items);

             $w("#propertyrepeater6").data = result.items;

         });

     $w("#propertyrepeater6").onItemReady(($item, itemData, index) => {
         $item("#propertyName").text = itemData.title;
         // $item("#loactionN").text = itemData.locations.title;
         $item("#loactionN").text = itemData.location;

         $item("#openbutton13").link = itemData["link-properties-title"];

     });

 });

 //  $w('#refreshButton').onClick(() => {

 //      wixData.query("locations")
 //          .find()
 //          .then(result => {
 //              console.log(result.items);

 //              // Set the repeater data
 //              $w("#locationrepeater4").data = result.items;

 //          });

 //      $w("#locationrepeater4").onItemReady(($item, itemData, index) => {

 //          $item("#locationName").text = itemData.title;
 //          $item("#openButton").link = itemData["link-locations-title"]; // Ensure this field exists in the dataset
 //          $w('#openButton').onClick(() => {
 //              if (itemData["link-locations-title"]) {
 //                  wixLocation.to(itemData["link-locations-title"]);
 //              }
 //          });

 //      });
 //  });