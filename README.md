Team Challenge useState,useEffect,router

En este proyecto vamos a hacer seguimiento de las principales criptomonedas del mercado. Para ello, vamos a utilizar la API de CoinCap para obtener información sobre las criptomonedas y mostrarla en nuestra aplicación.

url: https://api.coincap.io/v2/assets/

Pasos previos
Clona el repositorio y haz un npm i para instalar todas las dependencias necesarias. Si no hemos clonado el repositorio debemos crear un proyecto de React con vite. Para ello, ejecutamos el siguiente comando:

npm create vite .


Instalación
Si el proyecto no tuviera react-router, ejecuta el siguiente comando para instalarlo:

npm install react-router-dom

Estructura
Leer todo antes de empezar

Configuración de Rutas:
Primero, definimos las rutas de nuestro proyecto en el archivo routes. Usando react-router-dom, definimos las diferentes rutas que usaremos en el proyecto y cuál componente será renderizado en cada una.

La ruta raíz (/) renderizará el componente Root. Este componente mostrará una barra de navegación y el contenido de la página correspondiente a la ruta actual. Esta ruta tendrá a las demás como rutas hijas. 
La subruta / renderizará el componente Home. Este componente mostrará la lista de las principales criptomonedas del mercado.

La subruta /coin/:id renderizará el componente Coin. Este componente mostrará información detallada sobre una criptomoneda en particular.

La subruta /favorites renderizará el componente Favorites. Este componente mostrará la lista de criptomonedas favoritas. (Esta se creará como BONUS)

Home:
El componente Home es el componente principal de nuestra aplicación. Este componente muestra la lista de las principales criptomonedas del mercado. Para ello, hace una petición a la API de CoinCap y muestra la información de las criptomonedas en una lista. Cada elemento de la lista es un enlace a la ruta /coin/:id, donde :id es el identificador de la criptomoneda.

Coin:
El componente Coin muestra información detallada sobre una criptomoneda en particular. Para ello, hace una petición a la API de CoinCap y muestra la información de la criptomoneda en un formato más detallado.

url de ejemplo: https://api.coincap.io/v2/assets/bitcoin

CSS: Además añade estilo a tu aplicación. Recuerda la diferencia de añadir estilos de manera modular y global.

BONUS:

Coin:

Dentro de coin se muestra un botón para añadir o quitar la criptomoneda de la lista de favoritos. Esta lista se guarda en el localStorage del navegador con el nombre favorites. Se puede guardar solo el id de la criptomoneda o el objeto completo.

Favorites:

El componente Favorites muestra la lista de criptomonedas favoritas. Para ello, obtiene la lista de favoritos del localStorage del navegador y muestra la información de las criptomonedas en una lista. Cada elemento de la lista es un enlace a la ruta /coin/:id, donde :id es el identificador de la criptomoneda. Si no hay criptomonedas favoritas, muestra un mensaje indicando que no hay criptomonedas favoritas.

recordamos la estructura del localStorage para guardar:

localStorage.setItem('clave', 'valor')
PISTA:
Si guardamos toda la información de cada criptomoneda en el localStorage, los datos de cada criptomoneda no se actualizarán automáticamente. Para solucionar esto, podemos usar el hook useEffect para hacer una petición a la API de CoinCap cada vez que se renderice el componente Favorites. Podemos filtrar las criptomonedas favoritas de la lista de criptomonedas que nos devuelve la API y mostrar solo las criptomonedas favoritas con la información actualizada.

Referencias
Tutorial React Router
CoinCap API