# Blockly4Arduino Chrome Extension
Extension will use AVRGIRL-Arduino to flash hex-files to Arduino boards from the Chrome-browser.

### Requirements
 - Google Chrome installed.

### Development
Install the following tools globally:

1. `npm install -g browserify`;
2. `npm install -g http-server`.

To develop this further or make changes:

1. Edit `background.js` (not `background.bundle.js`);
2. Always run `browserify background.js -o background.bundle.js` each time you change `background.js` or `lib/flash.js`, and then manually reload the chrome app;
3. When you reload the chrome app, you'll also need to refresh `index.html` so the page can reconnect to the reloaded chrome app.

### Run the extension with the Compiler server of Blockly4Arduino
To run the demo with the Compiler server repository:

1. Fork and clone or download this repository (https://github.com/RMeurisse/Arduino-Builder-chrome-extension);
2. Run `npm install` within the newly cloned local repo;
3. Run `browserify background.js -o background.bundle.js`;
4. In your Chrome browser, visit `chrome://extensions`;
5. Click `Load unpacked extension`;
6. Navigate to this cloned repo, and click `Select`;
7. Click `Launch` when you see the extension appear at the top of the extensions list;
8. Copy the `id` value of the extension, and update `var extensionid = '...';` line in `index.html` of the Arduino-Builder repo;
9. See the Arduino-Builder repo to run the nodejs-server;
10. Plug in an Arduino, and write some code in the textbox. Finally hit the 'upload'-button.


