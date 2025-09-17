document.addEventListener('DOMContentLoaded', function () {
    // Seleccionamos el primer formulario que encuentre en el documento
    const form = document.querySelector('form');
    // Si no hay formulario, termina la ejecución
    if (!form) return;

    // Agrega un listener para el evento 'submit' del formulario
    form.addEventListener('submit', function (e) {
        // Seleccionamos todos los campos de entrada, área de texto dentro del formulario
        const fields = form.querySelectorAll('input, textarea');
        // Recorremos cada campo del formulario
        for (let field of fields) {
            // Verificamos si el campo es requerido y si está vacío (sin espacios)
            if (field.hasAttribute('required') && !field.value.trim()) {
                // Enfoca el campo vacío para que el usuario lo complete
                field.focus();
                // Previene el envío del formulario
                e.preventDefault();
                // Sale del ciclo después de encontrar el primer campo vacío
                break;
            }
        }
    });
});
```
Este script valida que todos los campos requeridos de un formulario estén completos antes de permitir el envío. Si encuentra un campo requerido vacío, evita el envío y enfoca ese campo para que el usuario lo corrija.