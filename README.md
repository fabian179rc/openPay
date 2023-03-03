Repositorio(Publico):

https://github.com/fabian179rc/openPay


-> Scripts <-

Desde SQL Shell, para crear la DDBB:

CREATE DATABASE openpay;

**Las tablas se crean automaticamente**

Una vez creada la DB, completar en el .env.example el nombre de usuario y contraseña de postgres. 
**Las claves de OpenPay se proporcionan para el testeo**
Al finalizar cambiar el nombre del archivo por ".env".

Desde la consola interna, para inicializar la App:

npm i
npm start

Rutas creadas:

Customers:
http://localhost:3000/customers/ (GET, GET(id), POST, PUT, DELETE)

Charges:
http://localhost:3000/charges/:customerId (POST)

Extras: 
Validacion de datos de entrada en Endpoints(Solo campos "Required" que figuran en openPay)
Proteccion de rutas con JWT.


Generacion de Token en ruta /login enviando por ejemplo:

{"username": "admin",
    "password": "admin"}

**Ruta de prueba, se deberia leer la db y ver que rol contempla para dar autorizacion o no a las rutas**

Una vez obtenido el token, proveerlo en las rutas protegidas a travez de Headers como Authorization: Bearer {Token}.

