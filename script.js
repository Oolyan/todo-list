$(function(){
    var items = [];

    function addItem() {
        var $itemName = $('.add-item').val();
        var item = {};
        item.name = $itemName;
        items.push(item);
        $('.todo-list').append('<li>' + $itemName + '</li>');
        $('.test').html(JSON.stringify(items));
    };
    
    $('.add-item-button').click( addItem );
    
});