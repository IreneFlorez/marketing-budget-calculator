//http://eagarcia.com/live/calculator/index.html
//https://www.w3resource.com/javascript-exercises/javascript-basic-exercise-10.php

$( document ).ready( function () {
  var answerVisitorValue = "";
  var answerLTV = "";
  var answerTotalValueNewCustomers = "";
  var leadConversionRate = "";
  var answerLeadCustomerConversionRate = "";

    $("#calculate").click( function (e){
      e.preventDefault();
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
      $("#answerLeadConversionRate").append(leadConversionRate);

      // Calculate the lead to customer conversion rate.
      // What percentage of your leads turn into customers over a year?
      // FORMULA: Number of customers / Number of leads (over the same period)
      var numberCustomers = $("#numCustomers").val();
      var answerLeadCustomerConversionRate = $("#numberCustomers").val() / $("#numberLeads").val(); //make a grid
      $("#answerLeadCustomerConversionRate").append(answerLeadCustomerConversionRate);


});
});
