// Define Array for Inventory Data Retrieved
const imageArray = [];
var containerNumber = 1;
var number = 1;

var url = window.location.href;
    var regEx = /[0-9]{5}/g;
    var urlRegEX = url.match(regEx);


// Function to Request and Locally Store Inventory Data
    function fetchInventory() {
        
        // Define New Inventory Data Request
            const inventoryRequest = new XMLHttpRequest();

        //Request Onload 
            inventoryRequest.onload = function() {

                // Response Data Collection and Filter
                const response = this.response
                const parsedResponse = JSON.parse(response);
                // const jsonResp = JSON.parse(this.response);

            // Console Log Parsed Response Data
                console.log("Server Response: "+response);


                // Console Log Parsed Response Data
                    console.log(parsedResponse);
                    buildInventoryCard(parsedResponse[0]);
                // // Add Inventory data to the inventoryArray w/ extra log
                //     for (let i=0; i < jsonResp.length; i++) {
                //         inventoryArray.push(jsonResp[i]);
                //     }
                //     console.log("inventoryArray after dataPush: "+inventoryArray);

                // // Mapping the Array with the Data Retrieved from Server to Template for Display Formatting
                //     inventoryArray.map(buildInventoryCard);
            };

        // Request Open
            inventoryRequest.open("GET", "/client/src/php/singleVehicle.php?id="+urlRegEX);

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
            var cardDestination = document.getElementById("cardDest");
            var cardElement = document.createElement("div");
            
            // Template to Format Inventory Card
                cardElement.innerHTML = 
                    `
                        <div class="vehicleCard" id="`+dataID+`">
                            <div class="vehicleThumb">
                                <img src="/client/src/img/`+dataID+`_thumb.jpg" alt="vehicleThumb"></img>
                            </div>
                            <div class="vehicleDetails">
                                <div class="detailsH1">
                                    <div class="Year">`+dataYear+`</div>
                                    <div class="h1Make">`+dataMake+`</div>
                                    <div class="h1Model">`+dataModel+`</div>
                                    <div class="h1Trim">`+dataTrim+`</div>
                                </div>
                                <div class="detailsP1"> 
                                    <div class="infoBtn">`+dataMileage+` miles</div> 
                                    <div class="infoBtn">$`+dataPrice+`</div>
                                    <div class="infoBtn" onclick="fetchImages(`+dataID+`)">View Details</div>
                                </div>
                            </div>
                        </div>
                    `;
        
        // Add new Element to the Document
            cardDestination.appendChild(cardElement); 
            fetchImages(dataID)
    };


function fetchImages(data) {
        
    // Define New Inventory Data Request
        const inventoryRequest = new XMLHttpRequest();

    //Request Onload 
        inventoryRequest.onload = function() {

            // Response Data Collection and Filter
            const response = this.response
            const parsedResponse = JSON.parse(response);
            const jsonResp = JSON.parse(this.response);

        // Console Log Parsed Response Data
            console.log("Server Response: "+response);


            // Console Log Parsed Response Data
                console.log(parsedResponse);
                console.log(response);


                var imgPattern = data,
                filtered = parsedResponse.filter(function (str) { return str.includes(imgPattern); });

                console.log(filtered);
                
            // Add Inventory data to the inventoryArray w/ extra log
                for (let i=0; i < filtered.length; i++) {
                    imageArray.push(filtered[i]);
                }
                console.log("inventoryArray after dataPush: "+imageArray);

            // Mapping the Array with the Data Retrieved from Server to Template for Display Formatting
                // imageArray.map(buildImageCard);
                imageArray.map(buildSingleImgContainer);
                imageArray.map(buildImgRow);
                
        };

    // Request Open
        inventoryRequest.open("GET", "/client/src/php/imgScan.php");

    // Request Send
        inventoryRequest.send();
};

function buildSingleImgContainer (data) {

    // Creating New Body Element
        var cardDestination = document.getElementById("singleImgContainer");
        var cardElement = document.createElement("div");
        
        console.log(data)
        console.log(containerNumber);

        // Template to Format Inventory Card
            cardElement.innerHTML = 
                `
                    <img class="largeImg" src="./src/img/`+data+`" style="width: 100%;" id="largeImg"></img>
                `;
            cardElement.id = containerNumber;
            cardElement.className = "mySlides";
    
    // Add new Element to the Document
        containerNumber++;
        cardDestination.appendChild(cardElement); 
};

function buildImgRow (data) {

    // Creating New Body Element
        var cardDestination = document.getElementById("imgRow");
        var cardElement = document.createElement("div");

        
        console.log(number);
        
        console.log(data)
        // Template to Format Inventory Card
            cardElement.innerHTML = 
                `
                    <img class="rowImg" src="./src/img/`+data+`" style="width:100%" onclick="currentSlide(`+number+`)" alt="unavailable" >
                `;
                cardElement.className = "imgLink"
    
    // Add new Element to the Document
        cardDestination.appendChild(cardElement);
        number++;
        console.log(number);
};

function currentSlide(data) {
    var activeSlide = document.getElementsByClassName("mySlides");
    var dataPass = data;
    
    console.log(activeSlide);

    
        for ( i = 0; i < activeSlide.length; i++) {
            var slideDisplay = activeSlide[i].style.display;
            if (slideDisplay === "flex") {
                activeSlide[i].style.display = "none";
            }
            
        }
    showSlide(dataPass);
}

function showSlide (data) {
    var slideNumber = document.getElementById(data);

    
    slideNumber.style.display = "flex";
    console.log(slideNumber);
}

// Initiate Information Fetch from Server
    fetchInventory();

// Show first Image Slide
    currentSlide(1);