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
            console.log(dataMileage);
            console.log(dataPrice);

        // Creating New Body Element
            var cardDestination = document.getElementById("Vehicle Card");
            var cardElement = document.createElement("tr");
            
            // Template to Format Inventory Card
                cardElement.innerHTML = 
                    `
                        <td class="stockID">
                            <input type="text" id="id" name="id" form="`+dataID+`" value="`+dataID+`"> 
                        </td>
                        <td class="year">
                            <input type="text" id="year" name="year" form="`+dataID+`" value="`+dataYear+`"> 
                        </td>
                        <td class="make">
                            <input type="text" id="make" name="make" form="`+dataID+`" value="`+dataMake+`"> 
                        </td>
                        <td class="model">
                            <input type="text" id="model" name="model" form="`+dataID+`" value="`+dataModel+`"> 
                        </td>
                        <td class="trim">
                            <input type="text" id="trim" name="trim" form="`+dataID+`" value="`+dataTrim+`"> 
                        </td>
                        <td class="mileage">
                            <input type="text" id="mileage" name="mileage" form="`+dataID+`" value="`+dataMileage+`"> 
                        </td>
                        <td class="price">
                            <input type="text" id="price" name="price" form="`+dataID+`" value="`+dataPrice+`"> 
                        </td>
                        <td class="description">
                            <input type="text" id="description" name="description" form="`+dataID+`" value="`+dataDescription+`"> 
                        </td>
                        <td class="btnContainer">
                            <form id="`+dataID+`" action="../php/updateVehicle.php" method="post">
                                <button type="submit" value="submit" id="editBtn" onclick="editBtnTest(`+dataID+`)" class="toolBtn editBtn" name="`+dataID+`">
                                    <img src="../img/editBtnIco.png" alt="editButton"></img>
                                </button>
                            </form>
                            <button id="`+dataID+`" onclick="deleteVehicle(`+dataID+`)" class="toolBtn deleteBtn">
                                <img src="../img/deleteBtnIco.png" alt="deleteButton"></img>
                            </button>
                        </td>
                    `;
        
        // Add new Element to the Document
            cardDestination.appendChild(cardElement); 
    };