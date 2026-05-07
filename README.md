# Guía interactiva - Práctico SQL Server

Página HTML autocontenida para estudiar el trabajo práctico de SQL Server sobre la base `NewLibrary`.

## Cómo usarla

1. Abrí `index.html` en el navegador.
2. Elegí un punto del práctico desde la barra lateral.
3. Leé la explicación, copiá el SQL y ejecutalo en SQL Server Management Studio o Azure Data Studio.
4. Marcá cada punto como completado. El progreso se guarda en el navegador.

También podés abrir `abrir.html`, que muestra un acceso simple hacia la guía.

## Qué incluye

- Los 22 puntos del PDF convertidos en tarjetas interactivas.
- Explicación breve de cada consigna.
- SQL Server listo para copiar.
- Filtros por tema y buscador.
- Checklist de práctica por ejercicio.
- Tarjetas de repaso.
- Script base opcional para crear las tablas si no se tiene a mano el script del profesor.

## Nota sobre el modelo

El PDF contiene el diagrama del modelo como imagen, por lo que la guía usa un modelo compatible con los enunciados:

- `Estudiantes(studentId, Nombre, Apellido, Genero, Clase, FechaNacimiento)`
- `Autores(authorId, NombreAutor, ApellidoAutor)`
- `Tipos(typeId, NombreTipo)`
- `Libros(bookId, NombreLibro, CantPaginas, Puntos, FechaCompra, authorId, typeId)`
- `Prestamos(borrowId, studentId, bookId, DiaPrestamo)`

Si el archivo de inserción del profesor usa nombres de columnas distintos, ajustá esos nombres en las consultas. La lógica de SQL Server es la misma.
