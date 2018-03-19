//http://eagarcia.com/live/calculator/index.html

// CALCULATIONS ---------------------------->
// Calculate the total value of new customers.
// Number of new customers * LTV = Total value of new customers
//
// Calculate the value of a website visitor.
// New revenue generated / Number of website visitors = Value of each visitor
//
// Calculate the lifetime value of a customer (LTV).
// FORMULA: Average sale price per period * Average lifetime of customer  = Lifetime value of a customer
//
// Calculate the visit to lead conversion rate.
// What percentage of your visitors become leads over a year?
// FORMULA: Number of leads / Number of visitors (over the same period)
//
// Calculate the lead to customer conversion rate.
// What percentage of your leads turn into customers over a year?
// FORMULA: Number of customers / Number of leads (over the same period)

// $(document).on("click", ".keys span:contains(8)", function () {
//   display += 8;
//   $(".screen").html(display);
// });

// $( document ).ready( function () {
//
//   var textfield = $("#text");
//
//   textfield.keypress(function (event) {
//
//     if (event.which == 13) {
//       window.location.assign("http://www.google.com/search?q=" + textfield.val());
//     }
//   });
//
// });



$( document ).ready( function () {
  var display = "";
  var valueHolder = "";

    $("#submit").click( function (){
      var emailText = $("#numberNewCustomers").val();

Variables:
                 $("#numberNewCustomers").val();
                 $("#lifetimeValueOfCustomer").val();
                 $("#newRevenueGenerated").val();
                 $("#numWebVisitors").val();
                 $("#avgSalePrice").val();
                 $("#avgLifetimeOfCustomer").val();
                 $("#numberLeads").val();
                 $("#numCustomers").val();

Answers:
                 "total-value-new-customers"
                 "value-website-visitor"
                 "lifetime-value-customer"
                 "lead-conversion-rate"
                 "lead-customer-conversion-rate"




});















// $( document ).ready( function () {
//     $("#submit").click( function (){
//       var emailText = $("#numberNewCustomers").val();
//      $("#error").css("visibility", "visible");

//       if (emailText == "hello@gmail.com") {
//
//         if (passwordText == "1234"){
//           var message = "That is the right password";
//
//           $("#error").html(message);
//         } else {
//           var errorMessage = "That is not the right password";
//
//           $("#error").html(errorMessage);
//         }
//       } else {
//           var errorMessage = "No user exists with email " + emailText + " exists.";
//
//           $("#error").html("<p>" + errorMessage+ "</p>");
//       }
//     });
// });
//
// function validateEmail(email) {
//     var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
//     return re.test(String(email).toLowerCase());
// }
//source: Mevius: https://stackoverflow.com/users/3518452/rnevius See the question at: https://stackoverflow.com/questions/46155/how-to-validate-an-email-address-in-javascript
