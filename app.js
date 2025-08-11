// Función para mostrar un cuadro de diálogo al hacer clic en la página
document.addEventListener('DOMContentLoaded', function() {
    // Agregar evento de clic al body
    document.body.addEventListener('click', function(event) {
        // Evitar que se muestre el diálogo si se hace clic en elementos interactivos
        if (event.target.tagName === 'BUTTON' || event.target.tagName === 'A') {
            return;
        }
        
        // Mostrar cuadro de diálogo
        showDialog();
    });
});

function showDialog() {
    // Crear el elemento del diálogo
    const dialog = document.createElement('div');
    dialog.className = 'dialog-overlay';
    dialog.innerHTML = `
        <div class="dialog-box">
            <h2>¡Hola!</h2>
            <p>Has hecho clic en la página.</p>
            <button class="dialog-close">Cerrar</button>
        </div>
    `;
    
    // Agregar el diálogo al body
    document.body.appendChild(dialog);
    
    // Agregar evento para cerrar el diálogo
    const closeButton = dialog.querySelector('.dialog-close');
    closeButton.addEventListener('click', function() {
        document.body.removeChild(dialog);
    });
    
    // Cerrar el diálogo al hacer clic fuera de él
    dialog.addEventListener('click', function(event) {
        if (event.target === dialog) {
            document.body.removeChild(dialog);
        }
    });
    
    // Cerrar con la tecla Escape
    document.addEventListener('keydown', function(event) {
        if (event.key === 'Escape' && document.body.contains(dialog)) {
            document.body.removeChild(dialog);
        }
    });
}
