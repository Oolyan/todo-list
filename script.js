$(function(){
    var items = [];

    function addItem() {        
        var item = {
            name:  $('.name').val(),
            surname: $('.surname').val(),
            phone: $('.phone').val()
        };
        items.push(item);

        var tableItem = $('<tr>')
            .append($('<td>').append(item.name))
            .append($('<td>').append(item.surname))
            .append($('<td>').append(item.phone));
        $('.todo-list').append(tableItem);

        // Row below is for testing proposes
        $('.test').html(JSON.stringify(items));
    };

    $('.add-item-button').click( addItem );
    
});