
# Meli Frontend Challenge

En la presente carpeta se encuentra el código fuente relacionado al backend que sirve la aplicación "Frontend Meli - Challenge"

## Proyecto

Como tecnología principal, el Backend se encuentra construido en NodeJS, utilizando Express para la creación del servidor y Javascript como lenguaje de programación base.

## Arquitectura

Se trabajó en una arquitectura por capas, con el código adecuadamente estructurado para la posible inclusión de futuros requerimientos y basándose  igualmente en "clean code".

![alt Arquitectura Front end](./wiki/Capas%20arquitectura%20backend.png)

Como se puede observar en la imagen, en el Backend se realizan validaciones para los datos que entran al mismo, posteriormente se redirige la petición a su respectivo controlador para finalmente realizar un llamado a un repositorio como capa de acceso a datos. Finalmente se realiza el proceso a la inversa retornando un JSON al usuario  con la información recuperada.

## `Coding`

Puedes ejecutiar el proyecto con la siguiente instrución:
`npm run dev`

#

Made with ❤️ by Santiago 👨🏽‍💻 
