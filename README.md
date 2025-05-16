# Pasos para correr el proyecto

## 1. Clonar el proyecto

```bash
git clone https://github.com/luisito241/PruebaPocky.git

```
---
## 2. Instalar dependencias

```bash
cd pocky-chat
npm install
npm install axios
cd  backend
npm install
npm install express mysql2 cors body-parser dotenv

```


---
## 3. Crear la base de datos

a. Inicia **XAMPP**, **WAMP** o **Laragon**

b. Abre **phpMyAdmin** o **MySQL Workbench** en mi caso la cree en mysql

c. Crea una base de datos con el nombre que prefiera

d. Ejecuta la siguiente consulta SQL para crear la tabla:

```sql
CREATE TABLE messages (
  id_message INT AUTO_INCREMENT PRIMARY KEY,
  content TEXT NOT NULL,
  sender ENUM('user', 'bot') NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

---

## 4. Crear y configurar el archivo .env

a. Ve a la carpeta `backend`
b. Crea el archivo `.env` usando uno de los siguientes comandos, según tu sistema operativo:
**si no te funciona ningun comando crea el archivo manual en la carpeta del backend a la misma altura de index.js**

### Comandos por sistema

* **Windows (CMD):**

  ```cmd
  type nul > .env
  ```
* **PowerShell:**

  ```powershell
  New-Item -Path .env -ItemType File
  ```


c. Abre el archivo `.env` y agrega la siguiente configuración:

```env
PORT=3001  
DB_HOST=localhost
DB_USER=tu_usuario
DB_PASSWORD=tu_contraseña
DB_NAME=nombre_de_tu_base_de_datos
```

## 5. Iniciar el proyecto

a. Abre **dos terminales**

### Primera terminal (backend)

```bash
cd backend
npm run dev
```

### Segunda terminal (frontend)

```bash
cd pocky-chat
npm start
```

---

Ahora deberías tener tu aplicación corriendo con el frontend en `http://localhost:3000` y el backend en `http://localhost:3001`.
