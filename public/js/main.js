// main.js
$(document).ready(function() {
    // Formulario para añadir stock
    $('#addStockForm').submit(function(event) {
        event.preventDefault();
        
        const productId = $('#productId').val();
        const quantity = $('#quantity').val();

        $.ajax({
            type: 'PUT',
            url: `/products/addstock`,
            data: JSON.stringify({ productId, quantity }),
            contentType: 'application/json',
            success: function(response) {
                // Actualiza la vista o realiza otras acciones necesarias
                $('#addStockModal').modal('hide');
                // Ejemplo de recargar la página después de añadir stock
                location.reload();
            },
            error: function(error) {
                console.error('Error:', error);
            }
        });
    });

    // Formulario para quitar stock
    $('#removeStockForm').submit(function(event) {
        event.preventDefault();
        
        const productId = $('#productId').val();
        const quantity = $('#quantity').val();

        $.ajax({
            type: 'DELETE',
            url: `/products/removestock`,
            data: JSON.stringify({ productId, quantity }),
            contentType: 'application/json',
            success: function(response) {
                // Actualiza la vista o realiza otras acciones necesarias
                $('#removeStockModal').modal('hide');
                // Ejemplo de recargar la página después de quitar stock
                location.reload();
            },
            error: function(error) {
                console.error('Error:', error);
            }
        });
    });

    // Formulario para crear nuevo producto
    $('#createProductForm').submit(function(event) {
        event.preventDefault();
        
        const name = $('#name').val();
        const description = $('#description').val();

        $.ajax({
            type: 'POST',
            url: `/products/create`,
            data: JSON.stringify({ name, description }),
            contentType: 'application/json',
            success: function(response) {
                // Actualiza la vista o realiza otras acciones necesarias
                $('#createProductModal').modal('hide');
                // Ejemplo de recargar la página después de crear un nuevo producto
                location.reload();
            },
            error: function(error) {
                console.error('Error:', error);
            }
        });
    });
});
