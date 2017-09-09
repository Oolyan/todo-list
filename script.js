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
            .append($('<td>').append(item.phone))
            .append($('<td>').append($('<button class = "edit-item-button">').append('EDIT')))
            .append($('<td>').append($('<button class = "delete-item-button">').append('DELETE')));
        $('.todo-list tbody').append(tableItem);

        // Row below is for testing proposes
        //$('.test').html(JSON.stringify(items));
    };

    $('.add-item-button').click( addItem );

    function deleteItem() {
        $(this).closest('tr').remove();
    };

    function editItem() {
        $(this).closest('td').siblings().css( "background-color", "red" );
    };


    $(document).on('click','.delete-item-button', deleteItem );
    $(document).on('click','.edit-item-button', editItem );
    
});