### Proyecto Final Coderhouse Backend : Ecommerce API 
## Enzo Vignolo

Este proyecto fue creado a modo de entrega final del curso de backend para coderhouse.

El proyecto consiste de un servidor Backend , con servicios de API para un ECOMMERCE.
Se encuentra desarrollado en Typescript y utiliza como base de datos un servidor MongoDB.

------------------------------------------------------------------------------------------
Las rutas que requieran autenticación deben ser utilizadas insertando un header con el campo "authorization" cuyo valor debe ser "Bearer {token}" 
siendo {token} el valor del JWT generado durante el logueo.

Cuenta además con una vista de chat, en la ruta /chat, servida por el back, creada en EJS donde los usuarios registrados podrán enviar mensajes.
Mediante la ruta /chat/:email se tendrá acceso a los mensajes del propio usuario.

-------------------------------------------------------------------------------------------
El proyecto cuenta además con un Frontend desarrollado en React, el cual permite probar funcionalidades como , registro, logueo y deslogueo de usuario.
Agregar y eliminar procutos del carrito. Filtrado por categoria, nombre específico y orden de precio. Realizar compras.

Este frontend es solo a modo de prueba de la API
----------------------------------------------------------------------------------------------

Por último se adjunta documentación creada con POSTMAN para prueba de las rutas disponibles en el backend:

https://documenter.getpostman.com/view/12538693/UVXgLHB6
