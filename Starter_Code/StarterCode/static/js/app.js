//Data schema -- 
//"names" list contains, the ids that associate to the demographc information and the study results

//"metadata" list contains the demographic info with the follow keys: "id"("names list"),"ethnicity", "gender", "age","location", "bbtype", "wfreq"
// META DATA GOES IN THE DEMO GRAPHIC TABLE

//"samples" list contains the study results FOR THE GRAPHS  with the following keys: "id", "otu_ids", "sample_values", "otu_labels"


//get the url endpoint and create a const to go with it
const url = "https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json";

//fetch the JSON data and console log it to confirm
d3.json(url).then(function (data) {
    console.log(data);
});

//once data is loaded it needs to be split into their own lil things to be used for building

//DROP DOWN MENU BUILD
//using "Test subject ID" for all the graphs and table to follow along

//FIRST GRAPH BUILD
//bar chart showing the top 10 OTUs found in the 'id' subject selected in the drop down using:
//-use "sample_values" as the values for the bar chart
//-use "otu_ids" as the labels for the bar chart
//-use "otu_lables" as the hovertext for the chart

//SECOND GRAPH BUILD
//bubble chart that displays each sample found in the 'id' subject selected in the drop down using::
//-use "otu_ids" for the x values
//-use "sample_values" for the y values
//-use "sample_values" for the marker size
//-use "otu_ids" for the marker colours
//-use "otu_lables" for the text values

//DEMOGRAPHIC TABLE BUILD
//include all the "metadata" for the subject selected in the drop down menu


