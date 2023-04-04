# Build a Timeline Generator using amCharts and Kintone

![Banner](./docs/img/banner.png)

Learn how to make an **amCharts Timeline chart** within a **React Project** with a Kintone Database!

Thank you for attending our **Kintone x Timeline** workshop!

Our free, live workshop will walk you through creating a Web Database App, setting up a React project, and using amCharts to generate a dynamic Timeline chart!

## Outline <!-- omit in toc -->
* [Completed Project](#completed-project)
* [Get Started](#get-started)
* [Get Your Free Kintone Database](#get-your-free-kintone-database)
* [Workshop Slides](#workshop-slides)
* [Workshop Steps](#workshop-steps)
* [Create a Kintone Web Database App](#create-a-kintone-web-database-app)
* [Connecting the Project to Kintone](#connecting-the-project-to-kintone)
* [Coding Time](#coding-time)
* [Finish the Project](#finish-the-project)
* [Debugging](#debugging)
* [Completed Code](#completed-code)
* [amCharts + Kintone References](#amcharts--kintone-references)


## Completed Project

![Result.gif](docs/img/Result.gif)

## Get Started

First, clone the [kintone-workshops/timeline-generator-amcharts](https://github.com/kintone-workshops/timeline-generator-amcharts) repo!  🚀  
Then go inside the folder.

```shell
cd Downloads

git clone https://github.com/kintone-workshops/timeline-generator-amcharts

cd timeline-generator-amcharts

npm install

npm install -g @kintone/customize-uploader
```

⚡ **Notes** ⚡  
* React requires **Node >= 14.0.0** & **npm >= 5.6**  
* Check the versions inside the `timeline-generator-amcharts` folder:
  * `node -v`
  * `npm -v`
* Not the correct versions or confused? 🤔 → Check out the [Guide on Installing Node.js & npm](docs/Install_NodeJS_npm.md) Doc

⚡ Note: Please ignore the package deprecation warnings ⚡

🔎 The `npm install` command installs the required dependencies defined in the package.json files and generates a node_modules folder with the installed modules.

---

Open the `timeline-generator-amcharts` folder in [VS Code](https://code.visualstudio.com/docs/getstarted/tips-and-tricks#_command-line) as well:

```shell
code .
```

## Get Your Free Kintone Database

[bit.ly/KDP_NEW](http://bit.ly/KDP_NEW)
* ⚡ Only use lowercase, numbers, & hyphens in your subdomain
* ⚠ Do not use uppercase or special characters

|                                                                                         |                                                                                                                   |
| --------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- |
| ![Step 1: Fill out the Kintone Developer license sign-up form](./docs/img/SignUp-1.png) | ![Step 2: Email address will be the login name & the subdomain will be your unique link](./docs/img/SignUp-2.png) |

---

## Workshop Slides

Check out the [slides.pdf](./slides.pdf) file for the workshop slides!

---

## Workshop Steps

1. [Create a Kintone App using the `presidents.csv` file](#step-1---create-a-kintone-app-using-the-presidentscsv-file-)
2. [Setup a Custom View](#step-2---setup-a-custom-view-)
3. [Grab the Login Credentials, View ID, and App ID](#step-3---grab-the-login-credentials-view-id-and-app-id-)
4. [Create a `.env` File](#step-4---create-a-env-file-)
5. [Update customize-manifest.json with the App ID](#step-5---update-customize-manifestjson-with-the-app-id-)
6. [Edit index.js - Input Kintone data into the chart](#step-6---edit-indexjs---input-kintone-data-into-the-chart-)
7. [Compile and upload the code to Kintone with `npm run build && npm run upload`](#step-7---compile-and-upload-the-code-to-kintone-)
8. [Play with the Timeline chart on your Kintone App 🎉](#step-8---play-with-the-timeline-chart-on-your-kintone-app--)

---

## Create a Kintone Web Database App

### Step 1 - Create a Kintone App using the `presidents.csv` file <!-- omit in toc -->

| Step 01 ![Create_CSV_App_01](docs/img/Create_CSV_App_01.png) | Step 02 ![Create_CSV_App_02](docs/img/Create_CSV_App_02.png) |
| ------------------------------------------------------------ | ------------------------------------------------------------ |
| Step 03 ![Create_CSV_App_03](docs/img/Create_CSV_App_03.png) | Step 04 ![Create_CSV_App_04](docs/img/Create_CSV_App_04.png) |
| Step 05 ![Create_CSV_App_05](docs/img/Create_CSV_App_05.png) | Step 06 ![Create_CSV_App_06](docs/img/Create_CSV_App_06.png) |
| Step 07 ![Create_CSV_App_07](docs/img/Create_CSV_App_07.png) | Step 08 ![Create_CSV_App_08](docs/img/Create_CSV_App_08.png) |
| Step 09 ![Create_CSV_App_09](docs/img/Create_CSV_App_09.png) | Step 10 ![Create_CSV_App_10](docs/img/Create_CSV_App_10.png) |
| Step 11 ![Create_CSV_App_11](docs/img/Create_CSV_App_11.png) | Step 12 ![Create_CSV_App_12](docs/img/Create_CSV_App_12.png) |
| Step 13 ![Create_CSV_App_13](docs/img/Create_CSV_App_13.png) | Step 14 ![Create_CSV_App_14](docs/img/Create_CSV_App_14.png) |
| Step 15 ![Create_CSV_App_15](docs/img/Create_CSV_App_15.png) | Step 16 ![Create_CSV_App_16](docs/img/Create_CSV_App_16.png) |
| Step 17 ![Create_CSV_App_17](docs/img/Create_CSV_App_17.png) |

#### Set Field Codes <!-- omit in toc -->
How to set the Field Codes for the Kintone App?
1. Hover over the field
1. Click the top right gear icon ⚙️
1. Select `Settings` from the drop-down menu
1. Click the edit button ![Edit Button](docs/img/edit_button.png)
1. Enter the new field code
1. Click the `Save` button

⚠️ Field Codes are case-sensitive ⚠️

![Field_Code_Settings](docs/img/Field_Code_Settings.gif)

#### Set the following Field Codes <!-- omit in toc -->

| Field Name | Field Code |
| ---------- | ---------- |
| Start_Date | `start`    |
| End_Date   | `end`      |
| First_name | `first`    |
| Last_Name  | `last`     |
| Party      | `party`    |
| Wiki_URL   | `wiki`     |
| Image_URL  | `image`    |

### Step 2 - Setup a Custom View <!-- omit in toc -->
* From App Settings, Click the **Views** tab
* Click the Plus Button ⊕ to create a View
* Select `Custom view` under **Visible Fields and Column Order** section
* Get the `View ID`! (Required in the `.env` file)
* Under **HTML Code**, input:

   ```HTML
   <div id="root"></div>
   ```

* Save!

Be sure to click the **Save** and **Activate App** buttons! 💪

| Step 23 ![Create_CSV_App_23](docs/img/Create_CSV_App_23.png) | Step 24 ![Create_CSV_App_24](docs/img/Create_CSV_App_24.png) |
| ------------------------------------------------------------ | ------------------------------------------------------------ |
| Step 25 ![Create_CSV_App_25](docs/img/Create_CSV_App_25.png) | Step 26 ![Create_CSV_App_26](docs/img/Create_CSV_App_26.png) |
| Step 27 ![Create_CSV_App_27](docs/img/Create_CSV_App_27.png) | Step 28 ![Create_CSV_App_28](docs/img/Create_CSV_App_28.png) |
| Step 29 ![Create_CSV_App_29](docs/img/Create_CSV_App_29.png) | Step 30 ![Create_CSV_App_30](docs/img/Create_CSV_App_30.png) |

---

## Connecting the Project to Kintone
### Step 3 - Grab the Login Credentials, View ID, and App ID <!-- omit in toc -->

Where to get the Subdomain, View ID, and App ID?
* Go to your Kintone App's custom view & grab the URL
* Kintone App's URL follows this template:
  * `https://<SUBDOMAIN>.kintone.com/k/<App ID>/?view=<View ID>`

Example:
* `https://example.kintone.com/k/1/?view=1234`
* Subdomain = `example`
* KINTONE_BASE_URL = `https://example.kintone.com`
* App ID = `1`
* View ID = `1234`

### Step 4 - Create a `.env` File <!-- omit in toc -->

Using the [.env.example](.env.example) file as a template, create a `.env` file.  
This file will contain your login credentials and the Kintone App's View ID.

Here is what your `.env` might look like:

```txt
KINTONE_BASE_URL="https://example.kintone.com"
KINTONE_USERNAME="your_username"
KINTONE_PASSWORD="your_password"
VIEW_ID="1234"
```

#### ⚠️ DO NOT DELETE THE [.env.example](.env.example) FILE!  <!-- omit in toc --> <!-- omit in toc -->
[.env.example](.env.example) is used by env-cmd to verify that the `.env` file is correctly configured.

### Step 5 - Update customize-manifest.json with the App ID <!-- omit in toc -->
The Kintone Customize Uploader uses [customize-manifest.json](customize-manifest.json) to determine where to upload the JavaScript file (_which Kintone App_).

```json
{
    "app": "1",
    "scope": "ALL",
    ...
```

If this is NOT your first Kintone App, update the `app` value to your App ID.

## Coding Time

---

### Step 6 - Edit index.js - Input Kintone data into the chart <!-- omit in toc -->

File: [/src/index.js](./src/index.js)
* We access the database records from Kintone's `event.records` object.
* We will map the `event.records` object into an object for amCharts to parse.
* Below is a basic mapping function, with Kintone's records designated as the `rec` object.
* Kintone's records follow a structure of `objectName`.`fieldCode`.`value`
* Example: To access the `First Name` value of a Kintone record, we will write it as:
  * `rec.first.value` => George (Washington)

<details>
  <summary>Solution to Step 6 ↯</summary>

  ```javascript
  // TODO: Input Kintone data into the chart
  chart.data = event.records.map((rec, index) => {
    return {
      // TODO: Text above the PinBullet; President's name
      'text': rec.first.value,
      // TODO: PinBullet's & time period's color; Party color
      'color': partyColor[rec.party.value],
      // TODO: Time period's start; Term's start
      'start': rec.start.value,
      // TODO: Time period's end; Term's end
      'end': rec.end.value,
      // TODO: Icon inside the PinBullet; President's icon
      'icon': rec.image.value,
      'category': '' // Timeline category; leave as empty string
    }
  });
  ```

Notice anything interesting about the `color` property? 👋  
We're using a slightly unusual method of object notation here.  
The reason is that the `partyColor` object we defined on [line 29](src/index.js#L29) depends on the variable from our Kintone records. Because the color is a variable, standard JavaScript object notation such as `partyColor.rec.party.value` would not evaluate correctly. We use bracket notation here to have the `partyColor` property depend on our app's `rec.party.color` value. In short, if you want to use a variable to access an object property, use square brackets!

</details>

---

## Finish the Project

### Step 7 - Compile and upload the code to Kintone <!-- omit in toc -->
Run the following command to compile the code and upload it to Kintone.

```bash
npm run build && npm run upload
```

| Before Code Upload                             | After Code Upload                            |
| ---------------------------------------------- | -------------------------------------------- |
| ![Step7_Before.png](docs/img/Step7_Before.png) | ![Step7_After.png](docs/img/Step7_After.png) |

### Step 8 - Play with the Timeline chart on your Kintone App 🎉 <!-- omit in toc -->

---

## Debugging
**Let's Fix Those Problems** 💪

Here is a rundown of common problems that may occur & their solutions!

### Errors related to .env <!-- omit in toc -->

If you get one of the following error messages, please verify that your `.env` file has been correctly configured and that you have not modified the `.env.example`.

* `Failed to find .env file at default paths: [./.env,./.env.js,./.env.json]`
* `[webpack-cli] Error: Missing environment variable: KINTONE_BASE_URL`
* `[webpack-cli] Error: Missing environment variable: KINTONE_USERNAME`
* `[webpack-cli] Error: Missing environment variable: KINTONE_PASSWORD`
* `[webpack-cli] Error: Missing environment variable: VIEW_ID`

### Errors related to kintone-customize-uploader <!-- omit in toc -->

If you get the following error message, please verify that you have installed the `kintone-customize-uploader` package.

Error Message:  

```shell
Options: {"command":"kintone-customize-uploader","commandArgs":["customize-manifest.json"],"options":{"expandEnvs":false,"noOverride":false,"silent":false,"useShell":false,"verbose":true}}
Found .env file at default path: ./.env
spawn kintone-customize-uploader ENOENT
Parent process exited with signal: 1. Terminating child process...
```

Solution:  

```shell
npm install -g kintone-customize-uploader
```

### `npm install` command is not working <!-- omit in toc -->

1. Verify the Node.js & npm versions **inside** the `timeline-generator-amcharts` folder
2. Just installed Node.js? Verify you configured Node.js versions **inside** the `timeline-generator-amcharts` folder

* Mac: `nodenv local 14.5.0`
* Windows: `nvm use 14.5.0`

Not the correct versions or confused? 🤔 → Check out the [Guide on Installing Node.js & npm](docs/Install_NodeJS_npm.md) Doc

### `npm run upload` failed? <!-- omit in toc -->
_@kintone/customize-uploader not working?_ Let's try the following:

(1) Verify that customize uploader was installed globally
* `npm install -g @kintone/customize-uploader`

(2) Verify that the .env login info is correct (including the password)
* ⚠️ Make sure your login info is inside the `.env` file & **NOT** the `.env.example` file!
* ⚠️ Verify that KINTONE_BASE_URL input is correctly formatted:
  * ✅ Correct Format: `https://example.kintone.com`
  * ❌ Incorrect Format: `https://example.kintone.com/` or `example.kintone.com`
* ⚠️ Re-run the npm commands after saving the .env file
* ⚙️ Details: [Step 4 - Create a `.env` File](#step-4---create-a-env-file-)

(3) Verify your [customize-manifest.json](customize-manifest.json) was updated with the correct App ID
* ⚙️ Details: [Step 5 - Update customize-manifest.json with the App ID](#step-5---update-customize-manifestjson-with-the-app-id-)

(4) Verify that the `npm run build` command was run before the `npm run upload`

### Uncaught Error: Target container is not a DOM element <!-- omit in toc -->
Verify that the Custom View (Gallery View) has the following HTML Code:

```HTML
<div id="root"></div>
```

### Not seeing all the presidents? <!-- omit in toc -->
Verify that the `# per page` setting is set to 100 for the amCharts Timeline to display all the presidents.
* [![Kintone-View-Setting-Record-Count.png](docs/img/Kintone-View-Setting-Record-Count.png)](docs/img/Kintone-View-Setting-Record-Count-HD.png)

### Not seeing a highlighted `TODO:`? <!-- omit in toc -->
Click the `Install` button on the VS Code pop-up message to install [TODO Highlight extension](https://marketplace.visualstudio.com/items?itemName=wayou.vscode-todo-highlight).
* [![vscode-setting-extension.png](docs/img/vscode-setting-extension.png)](docs/img/vscode-setting-extension-HD.png)  

---

## Completed Code
If you want the completed code for the index.js file, you can find it here:  
[completed-index.js](/docs/completed-index.js)

---

## amCharts + Kintone References

Here are some references we used to create the Timeline Chart x Kintone customization.

### Kintone Customize Uploader <!-- omit in toc -->
What is `@kintone/customize-uploader`?
* NPM: [npmjs.com/package/@kintone/customize-uploader](https://www.npmjs.com/package/@kintone/customize-uploader)
* README: [js-sdk/packages/customize-uploader](https://github.com/kintone/js-sdk/tree/master/packages/customize-uploader#kintone-customize-uploader)
* Tutorial: [Upload JavaScript and CSS files with Customize-uploader - Kintone Developer Program](https://kintone.dev/en/tutorials/tool-guides/upload-javascript-and-css-files-with-customize-uploader/)

### Kintone Events <!-- omit in toc -->
* [Kintone Events - `app.record.index.show`](https://developer.kintone.io/hc/en-us/articles/212494758-Record-List-Event#events)
* [Get Record List Header Element - `kintone.app.getHeaderSpaceElement`](https://developer.kintone.io/hc/en-us/articles/213148937-Get-Record-List#getHeaderSpaceElement)

### amCharts Getting Started Tutorials <!-- omit in toc -->
* [amCharts `core.js` & `charts.js` CDN](https://www.amcharts.com/docs/v4/getting-started/basics/#CDN)
* [Working with JavaScript x amCharts](https://www.amcharts.com/docs/v4/getting-started/basics/#Working_with_JavaScript)

### amCharts Animation <!-- omit in toc -->
* [Animation & `animated.js`](https://www.amcharts.com/docs/v4/concepts/animations/)

### Timeline <!-- omit in toc -->
* [Timeline](https://www.amcharts.com/demos/timeline/)
* [Anatomy of a TimeLine Chart](https://www.amcharts.com/docs/v4/chart-types/timeline/)
* [Creating Timeline Charts](https://www.amcharts.com/docs/v4/tutorials/creating-timeline-charts/)
* [Customizing chart scrollbar](https://www.amcharts.com/docs/v4/tutorials/customizing-chart-scrollbar/)
* [Setting position of the chart scrollbars](https://www.amcharts.com/docs/v4/tutorials/setting-position-of-the-chart-scrollbars/)
* [Date Axis](https://www.amcharts.com/docs/v4/concepts/axes/date-axis/)

### Plugin: Bullets <!-- omit in toc -->
* [Plugin: Bullets](https://www.amcharts.com/docs/v4/tutorials/plugin-bullets/)

### To have the PinBullets linkable to their Wiki_URL, take a look at the following docs <!-- omit in toc -->
* [PinBullet - amCharts 4 Documentation](https://www.amcharts.com/docs/v4/reference/pinbullet/#label_property)
* [Label - amCharts 4 Documentation](https://www.amcharts.com/docs/v4/reference/label/#url_property)

### Other Parts <!-- omit in toc -->
* [Array.prototype.map() - JavaScript | MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map)
* [Imgur API](https://apidocs.imgur.com/)
