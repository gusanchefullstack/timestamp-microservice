# Timestamp Microservice API

Este es un microservicio API que convierte fechas entre formatos Unix timestamp y UTC string. Es parte del proyecto de certificación de APIs y Microservicios de freeCodeCamp.

## Características

- Convierte fechas entre formatos Unix timestamp y UTC string
- Maneja fechas naturales (ej: 2015-12-25)
- Maneja timestamps Unix (ej: 1451001600000)
- Devuelve el tiempo actual cuando no se proporciona fecha
- Manejo de errores para fechas inválidas

## Requisitos

- Node.js (v14 o superior)
- npm (v6 o superior)

## Instalación

1. Clona el repositorio:
```bash
git clone https://github.com/tu-usuario/timestamp-microservice.git
cd timestamp-microservice
```

2. Instala las dependencias:
```bash
npm install
```

3. Inicia el servidor:
```bash
npm start
```

El servidor se ejecutará en `http://localhost:3000`

## Uso

### Endpoints

1. **Obtener timestamp actual**
```
GET /api/
```
Respuesta:
```json
{
  "unix": 1451001600000,
  "utc": "Fri, 25 Dec 2015 00:00:00 GMT"
}
```

2. **Convertir fecha**
```
GET /api/:date
```
Donde `:date` puede ser:
- Una fecha natural (ej: 2015-12-25)
- Un timestamp Unix (ej: 1451001600000)

Respuesta exitosa:
```json
{
  "unix": 1451001600000,
  "utc": "Fri, 25 Dec 2015 00:00:00 GMT"
}
```

Respuesta de error:
```json
{
  "error": "Invalid Date"
}
```

## Estructura del Proyecto

```
timestamp-microservice/
├── src/
│   ├── routes/
│   │   └── timestamp.js
│   ├── controllers/
│   │   └── timestampController.js
│   ├── services/
│   │   └── timestampService.js
│   └── app.js
├── package.json
└── README.md
```

## Tecnologías Utilizadas

- Express.js
- Express Validator
- CORS
- Node.js

## Licencia

MIT 