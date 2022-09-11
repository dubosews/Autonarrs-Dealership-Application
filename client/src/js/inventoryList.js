// Define Array for Inventory Data Retrieved
const inventoryArray = [];

// Function to Request and Locally Store Inventory Data
    function fetchInventory() {
        
        // Define New Inventory Data Request
            const inventoryRequest = new XMLHttpRequest();

        //Request Onload 
            inventoryRequest.onload = function() {

                // Response Data Collection and Filter
                    const response = this.response;
                    const jsonResp = JSON.parse(this.response);

                // Console Log Parsed Response Data
                    console.log("Server Response: "+jsonResp);
                
                // Add Inventory data to the inventoryArray w/ extra log
                    for (let i=0; i < jsonResp.length; i++) {
                        inventoryArray.push(jsonResp[i]);
                    }
                    console.log("inventoryArray after dataPush: "+inventoryArray);

                // Mapping the Array with the Data Retrieved from Server to Template for Display Formatting
                    inventoryArray.map(buildInventoryCard);
            };

        // Request Open
            inventoryRequest.open("GET", "../php/fetchInventory.php");

        // Request Send
            inventoryRequest.send();
    };

// Funtion for the Data Array to be Mapped Through w/ Template
    function buildInventoryCard(data) {

        // Define Local Variables for organization
            var dataID = data.id;
            var dataYear = data.year;
            var dataMake = data.make;
            var dataModel = data.model;
            var dataTrim = data.trim;
            var dataMileage = data.mileage;
            var dataPrice = data.price;
            var dataDescription = data.description;

        // Console Logs for Troubleshooting
            console.log(dataID);
            console.log(dataYear);
            console.log(dataMake);
            console.log(dataModel);
            console.log(dataTrim);
            console.log(dataMileage);
            console.log(dataPrice);
            console.log(dataDescription);

        // Creating New Body Element
            var cardDestination = document.getElementById("Vehicle Card");
            var cardElement = document.createElement("tr");
            
            // Template to Format Inventory Card
                cardElement.innerHTML = 
                    `
                        <div class="vehicleCard">
                            <div class="vehicleThumb">
                                <img src="./testImage.jpg" alt="vehicleThumb" />
                            </div>
                            <div class="vehicleDetails">
                                <div class="detailsH1">
                                    <div class="Year">`+dataYear+`</div>
                                    <div class="h1Make">`+dataMake+`</div>
                                    <div class="h1Model">`+dataModel+`</div>
                                    <div class="h1Trim">`+dataTrim+`</div>
                                </div>
                                <div class="detailsP1"> 
                                    <div class="infoBtn">`+dataMileage+`</div> 
                                    <div class="infoBtn">`+dataPrice+`</div>
                                </div>
                            </div>
                        </div> 
                    `;
        
        // Add new Element to the Document
            cardDestination.appendChild(cardElement); 
    };