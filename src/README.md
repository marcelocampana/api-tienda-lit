# Proyecto Tienda Online Bootcamp ♥️

Marcelo Campaña -
Bootcamp Javascript FullStack Trainee

## Descripción del proyecto y funcionamiento general del aplicativo

El proyecto persigue crear un prototipo de una tienda en línea para la venta de productos, es altamente orientado al desarrollo con web components y programación orientada a objetos. Entre sus funcionalidades se destacan:

- Catálogo de productos con filtrado por categorías
- Envío de productos al carrito con carga al localStorage para usuarios sin una sesión activa y carga a la base de datos para usarios con cuenta registrada y sesion activa.
- Pagína de acceso unico para cuentas de usuario final y administrador la cual redirecciona al sitio web o mantenedor respectivamente.
- Validacion de acceso y perfil a traves de JWT
- Mantenedor (CRUD) para la administración de productos de la tienda.
- Código minificado con webpack para mejorar la velocidad de carga y seguridad del aplicativo front.
- API rest para el servicio de datos
- Uso de Veriables de entorno para el manejo de datos sensibles

## Instalación

En cada proyecto.

1. Instalar los paquetes npm con: npm i
2. Levantar el servidor con: npm start

## Requerimientos de la rúbrica

### Consulta Base de Datos

- Selecciona las columnas requeridas para presentar la información (api-tienda-lit/src/models/product.js, api-tienda-lit/src/models/shoppingCart.js, api-tienda-lit/src/models/user.js)
- Utiliza join para seleccionar la información de las distintas tablas (api-tienda-lit/src/models/product.js, api-tienda-lit/src/models/user.js)
- Utiliza clausulas de ordenamiento para presentar la información(api-tienda-lit/src/models/product.js)
- Utiliza clausulas de agrupacion (api-tienda-lit/src/models/product.js)
- Utiliza where para filtrar la información requerida (api-tienda-lit/src/models/user.js)

### Algortimos de cálculo y manipulacion de archivos de texto

- Utilización general del lenguaje, selección de tipos de datos (front-tienda-lit/src/services/ApiManager.js, front-tienda-lit/src/components/store-login.js)
- Utilización de sentencias repetitivas (front-tienda-lit/src/components/admin-product-list.js, front-tienda-lit/src/components/store-product.js)
- Convenciones y estilos de programación(Ambos proyectos en general incluyen modulos, componentes, programación orientada a objetos, encapsulación)
- Utilización correcta de la estructura de datos(Ambos proyectos tiene una estructura de directorios acorde a las buenas practicas, separando los modulos y/o piezas de codigo en conjuntos de acuerdo al servicio que prestan )
- Manipulación de archivos (Escritura en archivo txt del log de conexiones de usuarios: api-tienda-lit/src/controllers/log/connections.txt, api-tienda-lit/src/controllers/auth.js)

### Pagina web y html

- Utilización de tags html, estilos y responsividad(Todo el directorio front-tienda-lit/src/components)
- Utilización de bootstrap (front-tienda-lit/src/components/utils-404.js, front-tienda-lit/src/components/store-carrousel.js)
- Inclusión de paquetes y librerias de usuario (package.json de ambos proyectos)
- Agrupación del código y separación por funcionalidad (api-tienda-lit/src/models, api-tienda-lit/src/controllers, src/components)
- Utilizacion de funciones asincronas (front-tienda-lit/src/services/ApiManager.js, api-tienda-lit/src/controllers/auth.js)
- Lectura de parametros de entrada (api-tienda-lit/src/controllers/users.js, api-tienda-lit/src/utils)

### Conexión a base de datos

- Manejo de conexión a base de datos desde node (api-tienda-lit/src/services/db_connection.js, api-tienda-lit/src/models/)
- Manejo y ejecucion de consultas desde node(api-tienda-lit/src/models/product.js, api-tienda-lit/src/models/user.js)

### Uso Express

- Creación de servicio Rest con express (api-tienda-lit/src/routes, api-tienda-lit/src/server.js)
