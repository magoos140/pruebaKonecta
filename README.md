# Proyecto Konecta

Este proyecto fue desarrollado por Mateo Gonzalez Osorio como parte de la prueba técnica para el puesto de analista de desarrollo en la empresa Konecta.

## Instalación y Aplicación

### Clonar Repositorio

Para comenzar, clona el repositorio en la carpeta donde desees tener el proyecto utilizando la terminal y el siguiente comando:
>git clone https://github.com/magoos140/pruebaKonecta.git


### Docker

Asegúrate de tener Docker instalado en tu sistema antes de continuar con los siguientes pasos.

### Backend

Una vez descargado el repositorio, navega hasta la carpeta `backend` utilizando la terminal y ejecuta los siguientes comandos:

>docker-compose ps # Verificar procesos Docker activos
>
>docker-compose down # Detener procesos Docker existentes (en caso necesario)
>
>docker-compose up # Crear contenedor relacionado con la base de datos y el backend


Asegúrate de que los logs del proceso `backend-app` muestren "Servidor Express iniciado en el puerto 3001".

### Base de Datos

Accede a un gestor de bases de datos, como MySQL Workbench, y crea una conexión con los siguientes datos:

- Hostname: localhost
- Port: 3307
- Username: root
- Password: 12345678
- Default Schema: tecnica

Importa el archivo SQL ubicado en la raíz del repositorio a la base de datos. Puedes hacerlo utilizando el método que prefieras, asegurándote de que los datos se almacenen en la base de datos "tecnica".

### Frontend

Dirígete a la carpeta `frontend` del proyecto y convierte el archivo `Dockerfile` en una imagen de Docker ejecutando el siguiente comando en la terminal:

>docker build -t frontend .


Después de construir la imagen Docker del frontend, puedes ejecutarla en un contenedor utilizando el siguiente comando:

>docker run --rm -it -p 3000:3000/tcp frontend:latest


Una vez ejecutado el contenedor, puedes abrir el navegador y acceder a la aplicación utilizando la URL [http://localhost:3000/](http://localhost:3000/).

También puedes utilizar alguna extensión del gestor de códigos que estés utilizando, como Visual Studio Code, para ejecutar el contenedor de manera más conveniente.

### Iniciar Sesión

Puedes probar la aplicación utilizando las siguientes credenciales:

**Administradores:**
- Email: empleado@empleado.com
- Contraseña: 12345678
- Email: admin@admin.com
- Contraseña: 12345678

**Empleados:**

- Email: empleado3@empleado.com
- Contraseña: 12345678

---

Este proyecto actualmente permite a los administradores gestionar empleados y roles, y muestra información relevante según el tipo de usuario. Aunque inicialmente se planeaba incluir un sistema de solicitudes para vacaciones o permisos, esta funcionalidad no fue implementada debido a restricciones de tiempo. En caso de implementarse, se utilizarían formularios en el frontend para enviar datos al servidor y se crearían controladores para que solo los administradores puedan gestionar las solicitudes creadas.

## Prácticas Utilizadas en el Proyecto

### Separación de Capas

En este proyecto se ha aplicado una clara separación entre la capa de datos (bases de datos), el backend y el frontend.

#### Bases de Datos

Se ha optado por utilizar MySQL como base de datos relacional. Además, se ha creado la tabla `roles` para normalizar y permitir cumplir con el requerimiento de roles en el sistema.

#### Backend

El backend funciona con Express de Node.js, lo que permite crear una API utilizando controladores y rutas. Cada función tiene su controlador y su ruta, lo que facilita la identificación y modificación del código. El archivo `app.js` que se utiliza para ejecutar la aplicación es corto gracias a esta modalidad de controlador y ruta.

Se utilizan CORS para restringir las solicitudes a un origen específico. La autenticación y el registro se manejan con JSON Web Tokens (JWT), y las contraseñas se encriptan en forma de hash. Se utilizan variables de entorno y variables de configuración para una mejor gestión de la aplicación.

Las consultas a la base de datos se realizan con un ORM llamado Sequelize, que simplifica la interacción con la base de datos y proporciona una capa de abstracción sobre MySQL.

#### Frontend

En el frontend se trabaja con React.js utilizando el paradigma funcional y separando los componentes de las vistas. Se crea una carpeta `api` dentro del frontend para configurar las solicitudes a la API, y para esto se utiliza Axios.

Se maneja el CSS sin frameworks, utilizando la nomenclatura BEM (Block Element Modifier).

