**Evaluacion Tecnica / Rodrigo Aravena**

Este proyecto implementa una API backend en Node.js con Express y SQLite, y un cliente web estático que se comunica en tiempo real mediante WebSockets usando Socket.IO.

---

## Configuración del entorno

1. Clona el repositorio:

   ```bash
   git clone https://github.com/rodrigog898/prueba-tecnica-node.git
   cd prueba-tecnica-node
   ```

2. (Opcional) Crea un archivo de variables de entorno en la raíz :

   ```bash
   cp .env.example .env
   ```

   * Ajusta `DB_PATH` si quieres cambiar la ruta o el nombre de la base de datos SQLite.

3. Instala las dependencias del proyecto:

   ```bash
   npm install
   ```

4. (Opcional) instala dependencias de desarrollo:

   ```bash
   npm install --save-dev nodemon
   ```

---

## Ejecución de la aplicación

* Para ejecutar en modo desarrollo (auto-reinicio al cambiar código):

  ```bash
  npm run dev
  ```

  Esto usa **nodemon** para levantar el servidor.

* Para iniciar en modo producción:

  ```bash
  npm start
  ```

* La API quedará disponible en `http://localhost:3000/api/tasks`.

* El cliente web estático se sirve desde `http://localhost:3000/`.

---

## Endpoints principales

* **POST** `/api/tasks`: crea una nueva tarea.
* **GET** `/api/tasks`: obtiene todas las tareas.
* **PUT** `/api/tasks/:id`: actualiza el `status` de una tarea.
* **DELETE** `/api/tasks/:id`: elimina una tarea.

---

## Diseño y consideraciones


* La estructura **MVC** se adoptó para separar responsabilidades entre controladores, rutas y modelos, mejorando la mantenibilidad y escalabilidad del código.
* El manejo de errores está centralizado en `middlewares/errorHandler.js`, garantizando respuestas uniformes y facilitando la detección y solución de fallos.

---

