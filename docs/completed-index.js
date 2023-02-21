import React from "react";
import { createRoot } from "react-dom/client";
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import * as am4plugins_timeline from "@amcharts/amcharts4/plugins/timeline";
import * as am4plugins_bullets from "@amcharts/amcharts4/plugins/bullets";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";


(function () {
  'use strict';
  // Set Custom View's ID in .env
  const customViewID = Number(process.env.VIEW_ID);
  // Increment to confirm script version on Kintone
  const scriptVer = 'Completed';
  console.log(`\nScript version: ${scriptVer}\n\n`);

  kintone.events.on('app.record.index.show', function (event) {
    if (event.viewId !== customViewID) {
      console.log('View ID from APP: ' + event.viewId)
      console.log('VIEW_ID from env: ' + customViewID)
      console.log('Not on the Custom View');
      return event
    }

    function App() {

      // Color HEX code for the political parties
      const partyColor = {
        'Democratic': '#2502fe',
        'Democratic-Republican': '#0e7003',
        'Federalist': '#e28665',
        'Republican': '#e0001b',
        'Unaffiliated': '#d5d5d5',
        'Whig': '#ebbd50'
      };

      // Peak inside Kintone's data
      console.log('event.records');
      console.log(event.records);

      // Retrieve & configure the space element below the record list's header
      const spaceDiv = kintone.app.getHeaderSpaceElement();
      spaceDiv.style.height = '650px';
      spaceDiv.style.marginLeft = '25px';
      spaceDiv.style.marginRight = '25px';
      spaceDiv.style.border = 'solid';
      spaceDiv.style.borderColor = '#ED7B84';

      // Automatically enable all amCharts animations
      am4core.useTheme(am4themes_animated);

      // Create chart instance
      const chart = am4core.create(spaceDiv, am4plugins_timeline.SerpentineChart);
      // Space between the chart & border
      chart.paddingTop = 100;
      // Number of straight lines of serpentine shape
      chart.levelCount = 5;
      // Allow bullets to 'bleed' over the edge
      chart.maskBullets = false;
      // Input & Output Date format
      chart.dateFormatter.inputDateFormat = 'yyyy-MM-dd';
      chart.dateFormatter.dateFormat = 'yyyy-MM-dd';
      // Font size
      chart.fontSize = 12;
      chart.tooltipContainer.fontSize = 12;

      // TODO: Input Kintone data into the chart
      chart.data = event.records.map((rec, index) => {
        return {
          // TODO: Text above the PinBullet; President's name
          'text': `${rec.first.value}\n${rec.last.value}`,
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
      console.log('chart.data');
      console.log(chart.data);

      // Create 1 timeline with all the US Presidents
      const categoryAxis = chart.yAxes.push(new am4charts.CategoryAxis());
      categoryAxis.dataFields.category = 'category';

      // Axis using date & time scale
      const dateAxis = chart.xAxes.push(new am4charts.DateAxis());
      // Gray, dashed lines for date axis
      dateAxis.renderer.line.strokeDasharray = '1,4';
      dateAxis.renderer.line.strokeOpacity = 1;
      // Place the label in the middle of the axis
      dateAxis.renderer.labels.template.verticalCenter = 'middle';

      // Series containing the US Presidents and their terms
      const series = chart.series.push(new am4plugins_timeline.CurveColumnSeries());
      series.dataFields.openDateX = 'start';
      series.dataFields.dateX = 'end';
      series.dataFields.categoryY = 'category';
      series.baseAxis = categoryAxis;
      // Coloring of the Presidential terms
      series.columns.template.height = am4core.percent(15);
      series.columns.template.propertyFields.fill = 'color';
      series.columns.template.propertyFields.stroke = 'color';
      series.columns.template.strokeOpacity = 0;
      series.columns.template.fillOpacity = 0.6;

      // Create the PinBullet (Circles)
      const pinBullet = series.bullets.push(new am4plugins_bullets.PinBullet());
      pinBullet.locationX = 1; //Place the PinBullet at their term's start
      pinBullet.propertyFields.stroke = 'color';
      pinBullet.background.propertyFields.fill = 'color';
      pinBullet.image = new am4core.Image();
      pinBullet.image.propertyFields.href = 'icon';

      // President's name over the icon
      const labelBullet = series.bullets.push(new am4charts.LabelBullet());
      labelBullet.label.propertyFields.text = 'text';
      labelBullet.label.textAlign = 'middle';
      labelBullet.locationX = 1; // Place the labelBullet at their term's start
      labelBullet.dy = -80; // Raising text above the icon

      // Scrollbar used to focus the timeline
      chart.scrollbarX = new am4core.Scrollbar();
      chart.scrollbarX.align = 'center'
      chart.scrollbarX.width = am4core.percent(75);
      chart.scrollbarX.parent = chart.bottomAxesContainer;

      // Year appearing when hovering over the chart axis
      const cursor = new am4plugins_timeline.CurveCursor();
      chart.cursor = cursor;
      dateAxis.tooltipDateFormat = 'yyyy-MMM';
      cursor.xAxis = dateAxis;
      cursor.lineY.disabled = true; // Disable Y line highlight

      // Optional - Enable export
      chart.exporting.menu = new am4core.ExportMenu();
      // Remove unneeded Scrollbar & tooltip
      chart.scrollbarX.exportable = false;
      dateAxis.tooltip.exportable = false;
    }

    const rootElement = document.getElementById("root");
    const root = createRoot(rootElement);
    root.render(
      <React.StrictMode>
        <App />
      </React.StrictMode>
    );
    return event;
  });
})();