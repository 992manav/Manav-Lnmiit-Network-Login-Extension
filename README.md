Manav-NetworkLogin Browser Extension

NetworkLogin is a simple browser extension that automatically fills in the username and password fields on an LNMIIT network login page and triggers the login button after a short delay.

Features
Auto-fills the username and password fields.
Automatically clicks the login button.
Designed for a college network login page.

Installation
Step 1: Prepare the Extension Files
Save the following files in the networklogin folder:

Step 2: Edit the Script with Your Credentials
Open the contentScript.js file in a text editor.
Locate the following lines in the script:

Enter your username and password inside the empty quotation marks:
usernameInputElement.value = "your_username_here";
passwordInputElement.value = "your_password_here";
Save the contentScript.js file.

Step 3: Load the Extension in Chrome
Open Chrome:

Launch the Chrome browser on your computer.
Go to Extensions Page:

In the address bar, type chrome://extensions/ and press Enter.
Enable Developer Mode:

In the top-right corner of the Extensions page, toggle on Developer mode.
Load Unpacked Extension:

Click the Load unpacked button.
In the file dialog that opens, navigate to the networklogin folder you created earlier, select it, and click Select Folder.
Test the Extension:

The extension should now be listed on the Extensions page.
Open the target login page (e.g., https://172.22.2.6/connect/PortalMain) in a new tab, and the extension will work
