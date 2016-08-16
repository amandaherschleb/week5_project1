$(document).ready(function() {

  var groceries = [
  {name: "Tomatoes", status: "needed", price: "3.99", quantity: 5},
  {name: "Onions", status: "needed", price: "1.85", quantity: 2},
  {name: "Cilantro", status: "needed", price: ".95", quantity: 1},
  {name: "Limes", status: "complete", price: ".33", quantity: 3},
  {name: "Jalapeno", status: "complete", price: ".15", quantity: 2}
  ];

  var message;

// Before we start anything, string up the css file, this javascript file, and
// the jQuery CDN to grocery.html file.

//done!
console.log('test js link');

//1. Display the existing list of grocery items (from the grocery array)
// in an unordered list in the "list" id that already exists in grocery.html.
// Display each item's name, price, and quantity.
// Ex: Tomatoes (5) @ $3.99

function updateList() {
  $('#list').html('');
  for(var i=0;i<groceries.length;i++){
    $('#list').append('<li>'+ groceries[i].name + ' (' + groceries[i].quantity + ') @ $' + groceries[i].price + '</li>');  // add to list
  }
}

updateList(groceries);


//2. Use the inputs and add button to add grocery items to the beginning of the list.
// Default status should be "needed". The item should appear above the existing grocery items.
//3. Make sure that the grocery list displayed updates when you add an item to the list.

var name;
var quantity;
var price;

$('#add-item-btn').click(function(){
  checkInputs();
  if (message === 'success')  {
    name = $('#addItem').val();
    quantity = $('#addQuantity').val();
    price = Number($('#addPrice').val()).toFixed(2);
    groceries.unshift({name: name, status: "needed", price: price, quantity: quantity}); // add new item to top of object
    updateList(groceries);  // add to list
    updateTotalCost();  //update total cost
  } else {
    alert(message);  //do not add, alert to fill in missing info
  }
});



//4. Display the total cost of the groceries. Make sure this updates as you add items to the list.

function updateTotalCost(){
  var totalGroceryCost = 0;
  for(var j=0;j<groceries.length;j++){
      totalGroceryCost += (groceries[j].price)*(groceries[j].quantity);
  }
  $('.totalCost > h4 > span').html('$ ' + totalGroceryCost.toFixed(2));
}

updateTotalCost();

//5. Put a check in to make sure users aren't adding items without a name, price, or quantity.

function checkInputs(){
  if($('#addItem').val() === ''){
    message ='Please enter item name';
  }else if ($('#addPrice').val() === ''){
    message ='Please enter item price';
  }else if ($('#addQuantity').val() === ''){
    message = 'Please enter item quantity';
  }else{
    message = 'success';
  }
  return message;
}

///////////////////// WEEK 5 PART 2 ////////////////////////

// 6. Add a remove button at the bottom below the total. When clicked, it should remove
// the last item and update the total.

$('#remove-item-btn').click(function(){
  groceries.pop(); // remove last item from list
  updateList(groceries);  // updated list
  updateTotalCost();  //update total cost

});


// 7. Make each grocery item (each li element) draggable using .sortable().
// Use the example here https://johnny.github.io/jquery-sortable/ to figure out how to implement this.
// The three steps under 'Getting Started' should get you there. You do not NEED the css provided.

// $("ul.sortable").sortable({
//   update: function(event,ui){
//     $('#list').each(function(i){
//       $(this).data('id',i+1);
//     });
//   }
// });


// 8. In the HTML document, add a list below "#list" called "purchased". All of the items that are status complete
// should go in the purchased list.

// 9. When one of the grocery items in "#list" is double-clicked the status for that item
// should change to "complete" and populate in the complete list.


});
