# Evaluacion Tecnica / Rodrigo Aravena


---

## Configuración del entorno

0. Dependencias necesarias:
  ```bash
   NodeJS : https://nodejs.org/en
   Sqlite: https://www.sqlite.org/download.html
   Visual Studio Code : https://code.visualstudio.com/
   ```

2. Clona el repositorio:

   ```bash
   git clone https://github.com/rodrigog898/prueba-tecnica-node.git
   cd prueba-tecnica-node
   cd Proyecto
   ```

3. Instala las dependencias del proyecto:

   ```bash
   npm install
   ```

---

## Ejecución de la aplicación

* Para iniciar:

  ```bash
  npm start
  ```

* La API quedará disponible en `http://localhost:3000/api/tasks`.

* Interfaz web `http://localhost:3000/`.

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

