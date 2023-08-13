JSON Requester
A simple tool to send JSON requests to various environments and view the corresponding responses.

Features
Dynamic Payload Selection: Choose dummy values and versions to automatically populate the JSON request body.
Environment Selection: Switch between Development, Staging, and Production environments to automatically update the endpoint URL and corresponding headers.
Flexible HTTP Methods: Select between various HTTP methods such as GET, POST, PUT, DELETE, and PATCH.
Headers Customization: Auto-filled headers based on the environment selection, with the flexibility to edit them.
Getting Started
Prerequisites
A web browser.
A text editor to view or modify the code (if necessary).
Setup
Clone this repository or download the files.
Open index.html in your preferred web browser.
Use the dropdowns to select dummy values, versions, environments, and HTTP methods.
Click the "Send Request" button to execute the request and view the response.
Dependencies
Axios: Promise based HTTP client for the browser and node.js. Used to send requests to the API.
Customizing
Adding more environments or updating URLs/headers: Update the JavaScript constants for environment headers (ENV_HEADERS) and modify the updateEndpointURL() function.
Adding more dummy values or versions: Update the PAYLOADS object in payloads.js and ensure the HTML dropdowns have corresponding values.