// from data.js
var tableData = data;



// YOUR CODE HERE!
var submit = d3.select("#filter-btn");

submit.on("click", function() {

  // Prevent the page from refreshing
  d3.event.preventDefault();

  // Select the input element and get the raw HTML node
  var inputElement1 = d3.select("#datetime");
  var inputElement2 = d3.select("#city");
    var inputElement3 = d3.select("#state");
    var inputElement4 = d3.select("#country");
    var inputElement5 = d3.select("#shape");

  // Get the value property of the input element
  var inputDate = inputElement1.property("value");
    var inputCity = inputElement2.property("value");
    var inputState = inputElement3.property("value");
    var inputCountry = inputElement4.property("value");
    var inputShape = inputElement5.property("value");

  console.log(inputDate);
  console.log(inputCity);
    
    console.log(inputState);
    console.log(inputCountry);
    console.log(inputShape);
  console.log(tableData);
    
  var filteredData = [];
  var inputs = [inputDate,inputCity,inputState,inputCountry,inputShape];
  var filters = ["datetime","city","state","country","shape"];
  var nonBlankInputs = [];
  var ourFilters = [];
  for(var i =0; i<5; i++){
      if (inputs[i] !== ""){
          console.log(inputs[i])
          nonBlankInputs.push(inputs[i]);
          ourFilters.push(filters[i]);
      }
  };
    
  for(var i =0; i< nonBlankInputs.length; i++) {
    filteredData = tableData.filter(row => row[ourFilters[i]] === nonBlankInputs[i]);
  }
      
    
    
  console.log(filteredData);
  d3.selectAll("#ufo-table>tbody>tr").remove();
  d3.selectAll("#ufo-table>tbody>td").remove();
    
  var summaryDisplay = d3.select("#ufo-table>tbody");
  filteredData.forEach(function(row){
    
    var newrow = summaryDisplay.append("tr")
    newrow.append("td").text(`${row.datetime}`)
    newrow.append("td").text(`${row.city}`)
    newrow.append("td").text(`${row.state}`)
    newrow.append("td").text(`${row.country}`)
    newrow.append("td").text(`${row.shape}`)
    newrow.append("td").text(`${row.durationMinutes}`)
    newrow.append("td").text(`${row.comments}`)
      
    //summaryDisplay.append("td").text(`${row.datetime}`)
    //summaryDisplay.append("td").text(`${row.city}`)
    //summaryDisplay.append("td").text(`${row.state}`)
    //summaryDisplay.append("td").text(`${row.country}`)
    //summaryDisplay.append("td").text(`${row.shape}`)
    //summaryDisplay.append("td").text(`${row.durationMinutes}`)
    //summaryDisplay.append("td").text(`${row.comments}`)
    
  });
});