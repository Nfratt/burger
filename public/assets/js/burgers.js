$(function () {
    $('.change-devour').on('click', function (event) {
        const id = $(this).data('id');
        const newDevour = $(this).data('newdevour');

        const newdevourState = {
            devoured: newDevour,
        };
        // Send the PUT request.
        $.ajax('/api/burgers/' + id, {
            type: 'PUT',
            data: newDevourState,
        }).then(
            function () {
                console.log('changed devoured to', newDevour);

                location.reload();
            },
        );
    });
    $('.delete-burger').on('click', function (event) {
        const id = $(this).data('id');

        // Send the DELETE request.
        $.ajax('/api/burger/' + id, {
            type: 'DELETE',
        }).then(
            function () {
                console.log('DELETED burger#' + id + 'The' + burger_name);
                // Reload the page to get the updated list
                location.reload();
            },
        );
    });
    $('.create-form').on('submit', function (event) {
        // Make sure to preventDefault on a submit event.
        event.preventDefault();

        const newBurger = {
            name: $('#ca').val().trim(),
            devoured: $('[name=devoured]:checked').val().trim(),
        };

        // Send the POST request.
        $.ajax('/api/burgers', {
            type: 'POST',
            data: newBurger,
        }).then(
            function () {
                console.log('created new burger');
                // Reload the page to get the updated list
                location.reload();
            },
        );
    });
});
