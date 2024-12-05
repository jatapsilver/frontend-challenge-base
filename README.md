# QuickBet Movies - Aplicación de Búsqueda de Películas

**QuickBet Movies** es una aplicación web que permite a los usuarios buscar películas utilizando la API de The Movie Database (TMDB). Los usuarios pueden realizar búsquedas por nombre de película o explorar películas populares y por género.

## Requisitos previos

Antes de comenzar, asegúrate de tener lo siguiente instalado:

- [Node.js](https://nodejs.org/) (versión 18 o superior)
- [npm](https://www.npmjs.com/) (incluido con Node.js)
- [Next.js](https://nextjs.org/) (este proyecto utiliza Next.js)

## Instrucciones de Instalación

1. **Clona el repositorio:**
    
    Clona el repositorio a tu máquina local utilizando Git:
    
    
    git clone https://github.com/jatapsilver/frontend-challenge-base.git 
    
2. **Instala las dependencias:**
    
    Asegúrate de instalar todas las dependencias necesarias con npm (o yarn si prefieres):
      
    `npm install`
    
3. **Configura tu API Key de TMDB:**
    
    En el archivo `.env.local` de la raíz de tu proyecto, agrega tu clave API de TMDB (opcional):
    
    `NEXT_PUBLIC_TMDB_API_KEY=tu_api_key_aqui`
    
4. **Inicia el servidor de desarrollo:**
    
    Ahora puedes iniciar el servidor de desarrollo para ver la aplicación en tu navegador:
        
    `npm run dev`
    
    Abre tu navegador y accede a [http://localhost:3000](http://localhost:3000) para ver la aplicación en funcionamiento.
    

## Estructura del Proyecto

Este proyecto está construido con **Next.js** y utiliza React para el manejo de la UI. Aquí hay una breve descripción de la estructura principal:

- **`pages/index.tsx`**: Página principal donde se muestra el formulario de búsqueda y los resultados de las películas.
- **`components/MovieCard.tsx`**: Componente que muestra cada película individualmente.
- **`styles/`**: Archivos CSS para los estilos de la aplicación.


## Uso de la API de TMDB

El proyecto interactúa con la API de **The Movie Database (TMDB)**. Se realiza una consulta a la API dependiendo de las condiciones establecidas por el usuario (por nombre de película o por género). El código relevante es el siguiente:

### `useEffect` para obtener las películas

El hook `useEffect` es el encargado de realizar las solicitudes a la API y obtener las películas según los parámetros de búsqueda del usuario.

### Explicación del Código:

1. **Búsqueda por Término (query):**
    
    - Si el usuario introduce un término en el campo de búsqueda, la URL de la API se construye con el parámetro `query`, lo que permite buscar películas por nombre.
2. **Búsqueda por Género (genreId):**
    
    - Si el usuario selecciona un género, se construye la URL de la API con el parámetro `with_genres`, lo que filtra las películas según el género seleccionado.
3. **Películas Populares:**
    
    - Si no hay búsqueda o género especificado, la aplicación muestra las películas populares utilizando la URL de la API correspondiente.

Cada vez que cambia el término de búsqueda o el género, el `useEffect` se ejecuta nuevamente y hace la solicitud a la API para obtener los resultados actualizados.

## Desafíos Superados

- **Integración de la API de TMDB:** Aprender a manejar las solicitudes a la API de TMDB y procesar correctamente las respuestas JSON para mostrar los datos de las películas de manera dinámica.

Este README ofrece una visión completa de cómo configurar, ejecutar y mejorar el proyecto QuickBet Movies.