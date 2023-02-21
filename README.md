# Build a Timeline Generator using amCharts and Kintone

![Banner](./docs/img/banner.png)

Learn how to make an **amCharts Timeline chart** within a **React Project** with a Kintone Database!

Thank you for attending our **Kintone x Timeline** workshop!

Our free, live workshop will walk you through creating a Web Database App, setting up a React project, and using amCharts to generate a dynamic Timeline chart!

## Outline <!-- omit in toc -->
- [Build a Timeline Generator using amCharts and Kintone](#build-a-timeline-generator-using-amcharts-and-kintone)
  - [Completed Project](#completed-project)
  - [Get Started](#get-started)
  - [Get Your Free Kintone Database](#get-your-free-kintone-database)
  - [Workshop Slides](#workshop-slides)
  - [Create a Kintone Web Database App](#create-a-kintone-web-database-app)
  - [Create a `.env` File](#create-a-env-file)
  - [Workshop Steps](#workshop-steps)
    - [Files to Edit](#files-to-edit)
    - [Solutions to Task 3](#solutions-to-task-3)
  - [Debugging](#debugging)
    - [Not seeing all the presidents?](#not-seeing-all-the-presidents)
  - [amCharts + Kintone References](#amcharts--kintone-references)
    - [Kintone Events](#kintone-events)
    - [amCharts Getting Started Tutorials](#amcharts-getting-started-tutorials)
    - [amCharts Animation](#amcharts-animation)
    - [Timeline](#timeline)
    - [Plugin: Bullets](#plugin-bullets)
    - [To have the PinBullets linkable to their Wiki\_URL, take a look at the following docs](#to-have-the-pinbullets-linkable-to-their-wiki_url-take-a-look-at-the-following-docs)
    - [Other Parts](#other-parts)

## Completed Project

<!-- TODO: Add a screenshot of the completed project -->

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
* Check the versions inside the `React_Workshop_by_Kintone` folder:
  * `node -v`
  * `npm -v`
* Not the correct versions or Confused? 🤔 → Check out the [Guide on Installing Node.js & npm](docs/Install_NodeJS_npm.md) Doc

⚡ Note: Please ignore the package deprecation warnings ⚡

🔎 The `npm install` command installs the required dependencies defined in the package.json files and generates a node_modules folder with the installed modules.

---

Open the `timeline-generator-amcharts` folder in [VS Code](https://code.visualstudio.com/docs/getstarted/tips-and-tricks#_command-line) as well:

```shell
code .
```

Once you are inside the folder, let's install the dependencies and open our project:

```shell
npm install

npm run dev
```

## Get Your Free Kintone Database

[bit.ly/KDP_NEW](http://bit.ly/KDP_NEW)
* ⚡ Only use lowercase, numbers, & hyphens in your subdomain
* ⚠ Do not use uppercase or special characters

|                                                                                            |                                                                                                                      |
| ------------------------------------------------------------------------------------------ | -------------------------------------------------------------------------------------------------------------------- |
| ![Step 1: Fill out the Kintone Developer license sign-up form](./docs/img/SignUp-1.png) | ![Step 2: Email address will be the login name & the subdomain will be your unique link](./docs/img/SignUp-2.png) |

---

## Workshop Slides

Check out the [slides.pdf](./slides.pdf) file for the workshop slides!

---

## Create a Kintone Web Database App

| Steps                                                                                  | Screenshot                                                                                                                            |
| -------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- |
| From the Kintone portal, click the [+] button to create an App                         | ![Click on the + button on the right of the Apps section from the Kintone Portal](./docs/img/build-database-01.png)                |
| Select **Create App from Scratch** option                                              | ![Kintone Marketplace page > Create New App section > select the Create App from Scratch button](./docs/img/build-database-02.png) |
| Name the App (Ex: _Kintone Cards_)                                                     | ![Set the App's name to Kintone Cards](./docs/img/build-database-03.png)                                                           |
| Add **Text** and **Radio Button** fields                                               | ![Drag the text and radio button fields to the center](./docs/img/build-database-04.png)                                           |
| Open the **Text** field settings                                                       | ![Hover over the text field gear > select the Settings option](./docs/img/build-database-05.png)                                   |
| Set the **Name** (`Title`) and **Field Code** (`title`)                                | ![Set the Name to Title and Field Code to title](./docs/img/build-database-06.png)                                                 |
| Open the **Radio Button** field settings                                               | ![Hover over the Radio Button field gear > select the Settings option](./docs/img/build-database-07.png)                           |
| Set the **Name** (`Color`), **Options** (`Red` & `Blue`), and **Field Code** (`color`) | ![Set the Name to COlor, options to Red and Blue, and Field Code to color](./docs/img/build-database-08.png)                       |
| Last, remember to save your changes!                                                   | ![Click on the blue Activate App button](./docs/img/build-database-09.png)                                                         |

⚠️ Warning ⚠️
* Field Code is case sensitive
* Field Code and options must be as specified in the steps, or the code will not work

---

## Create a `.env` File

1. Using the [.env.example](.env.example) file as a template, create a `.env` file.
1. Then input your Kintone credentials like the following:

```txt
KINTONE_BASE_URL="https://example.kintone.com"
KINTONE_USERNAME="your_username"
KINTONE_PASSWORD="your_password"
VIEW_ID="1234"
```

### ⚠️ DO NOT DELETE THE [.env.example](.env.example) FILE!  <!-- omit in toc -->
[.env.example](.env.example) is used by env-cmd to verify that `.env` file is correctly configured.

## Workshop Steps

### Files to Edit
1. Credentials - Create `.env` file by duplicating the [.env.example](.env.example) file
2. Edit line two in the [customize-manifest.json](customize-manifest.json) file with your App ID.
3. Edit [/src/index.js](./src/index.js) to map the data from Kintone to the chart.

### Solutions to Task 3

<details>
  <summary>Input Kintone data into the chart</summary>

  File: [/src/index.js](./src/index.js)

  ```javascript
  // TODO: Input Kintone data into the chart
  chart.data = event.records.map((rec, index) => {
    return {
      // TODO: Text above the PinBullet; President's name
      'text': null,
      // TODO: PinBullet's & time period's color; Party color
      'color': null,
      // TODO: Time period's start; Term's start
      'start': null,
      // TODO: Time period's end; Term's end
      'end': null,
      // TODO: Icon inside the PinBullet; President's icon
      'icon': null,
      // TODO: Timeline category; only 1 is needed
      'category': ''
    }
  });
  ```
  Via the `event.records` object from Kintone, we have access to our database records, which we will map into a object for amCharts to parse. Above, we have a basic mapping function, with Kintone's records designated as the `rec` object.
  Kintone's records follow a structure of `objectName`.`fieldCode`.`value`, so in this case, to access the `First Name` value of a Kintone record, we should write it as:

  `rec.first.value` => George (Washington).

</details>

## Debugging

### Not seeing all the presidents?
Verify that the `# per page` setting is set to 100 in order for the amCharts Timeline to display all the presidents.
* ![Kintone-View-Setting-Record-Count.png](docs/img/Kintone-View-Setting-Record-Count.png)  

---

## amCharts + Kintone References

Here are some references that we used to create the Timeline Chart x Kintone customization.

### Kintone Events
* [Kintone Events - `app.record.index.show`](https://developer.kintone.io/hc/en-us/articles/212494758-Record-List-Event#events)
* [Get Record List Header Element - `kintone.app.getHeaderSpaceElement`](https://developer.kintone.io/hc/en-us/articles/213148937-Get-Record-List#getHeaderSpaceElement)

### amCharts Getting Started Tutorials
* [amCharts `core.js` & `charts.js` CDN](https://www.amcharts.com/docs/v4/getting-started/basics/#CDN)
* [Working with JavaScript x amCharts](https://www.amcharts.com/docs/v4/getting-started/basics/#Working_with_JavaScript)

### amCharts Animation
* [Animation & `animated.js`](https://www.amcharts.com/docs/v4/concepts/animations/)

### Timeline
* [Timeline](https://www.amcharts.com/demos/timeline/)
* [Anatomy of a TimeLine Chart](https://www.amcharts.com/docs/v4/chart-types/timeline/)
* [Creating Timeline Charts](https://www.amcharts.com/docs/v4/tutorials/creating-timeline-charts/)
* [Customizing chart scrollbar](https://www.amcharts.com/docs/v4/tutorials/customizing-chart-scrollbar/)
* [Setting position of the chart scrollbars](https://www.amcharts.com/docs/v4/tutorials/setting-position-of-the-chart-scrollbars/)
* [Date Axis](https://www.amcharts.com/docs/v4/concepts/axes/date-axis/)

### Plugin: Bullets
* [Plugin: Bullets](https://www.amcharts.com/docs/v4/tutorials/plugin-bullets/)

### To have the PinBullets linkable to their Wiki_URL, take a look at the following docs
* [PinBullet - amCharts 4 Documentation](https://www.amcharts.com/docs/v4/reference/pinbullet/#label_property)
* [Label - amCharts 4 Documentation](https://www.amcharts.com/docs/v4/reference/label/#url_property)

### Other Parts
* [Array.prototype.map() - JavaScript | MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map)
* [Imgur API](https://apidocs.imgur.com/)
