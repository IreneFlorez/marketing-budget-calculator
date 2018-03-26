//http://eagarcia.com/live/calculator/index.html
//https://www.w3resource.com/javascript-exercises/javascript-basic-exercise-10.php

$( document ).ready( function () {
  var answerVisitorValue = "";
  var answerLTV = "";
  var answerTotalValueNewCustomers = "";
  var leadConversionRate = "";
  var answerLeadCustomerConversionRate = "";

    $("#submit").click( function (){
      // Calculate the value of a website visitor.
      // New revenue generated / Number of website visitors = Value of each visitor
      var newRevenueGenerated = $("#newRevenueGenerated").val();
      var numWebVisitors = $("#numWebVisitors").val();
      answerVisitorValue = newRevenueGenerated / numWebVisitors;
      $("#answerVisitorValue").append(answerVisitorValue);

      // Calculate the lifetime value of a customer (LTV).
      // FORMULA: Average sale price per period * Average lifetime of customer  = LTV (Lifetime value of a customer)
      var avgSalePrice = $("#avgSalePrice").val();
      var avgLifetimeOfCustomer = $("#avgLifetimeOfCustomer").val();
      answerLTV = avgSalePrice * avgLifetimeOfCustomer;
      $("#answerLTV").append(answerLTV);

      // Calculate the total value of new customers.
      // Number of new customers * LTV  = Total value of new customers
      var numberNewCustomers = $("#numberNewCustomers").val();
      answerTotalValueNewCustomers = numberNewCustomers * answerLTV; //check this
      $("#answerTotalValueNewCustomers").append(answerTotalValueNewCustomers);

      // Calculate the visit to lead conversion rate.
      // What percentage of your visitors become leads over a year?
      // FORMULA: Number of leads / Number of visitors (over the same period)
      var numberLeads = $("#numberLeads").val();
      $("#numWebVisitors").val();
      var leadConversionRate = numberLeads / numWebVisitors;
      $("#leadConversionRate").append(leadConversionRate);

      // Calculate the lead to customer conversion rate.
      // What percentage of your leads turn into customers over a year?
      // FORMULA: Number of customers / Number of leads (over the same period)
      var numberCustomers = $("#numCustomers").val();
      answerLeadCustomerConversionRate = $("#numberCustomers").val() / $("#numberLeads").val(); //make a grid
      $("#answerLeadCustomerConversionRate").append(answerLeadCustomerConversionRate);


});

function calculate() {
        var myBox1 = document.getElementById('box1').value;
        var myBox2 = document.getElementById('box2').value;
        var result = document.getElementById('result');
        var myResult = myBox1 * myBox2;
          document.getElementById('result').value = myResult;
    }
});
