function loadImages () {

    console.log(document.getElementById("id").nodeValue);
    
    fetchImageList();

    function fetchImageList() {
        
        // Define New Inventory Data Request
            const inventoryRequest = new XMLHttpRequest();

        //Request Onload 
            inventoryRequest.onload = function() {

                // Response Data Collection and Filter
                    const response = this.response;
                    const jsonResp = JSON.parse(this.response);

                // Console Log Parsed Response Data
                    console.log(Response);
                    console.log(response);
            };
            inventoryRequest.setRequestHeader("Content-Type");

        // Request Open
            inventoryRequest.open("GET", "../php/getImages.php");

        // Request Send
            inventoryRequest.send();
    };
}