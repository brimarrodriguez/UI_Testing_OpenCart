Este proyecto contiene un pruebas automatizadas de UI dentro de la página web de OpenCart (http://opencart.abstracta.us), estas pruebas están desarrolladas utilizando WebDriverIO y Cucumber.

El flujo automatizado simula la búsqueda de un producto, añadirlo al carrito, luego validar la existencia del producto en el carrito de compras, remover el producto del carrito y finalmente validar que el producto no existe en el carrito de compras.

**Para la ejecución de las pruebas se deben seguir los siguientes pasos:**

1. Descargar/clonar la carpeta del proyecto.
2. Instalar las dependencias con "npm install"
3. Ejecutar las pruebas con "npx wdio run wdio.conf.js"

**Consideraciones importantes:**
1. El proyecto requiere tener Google Chrome instalado en el computador.
2. La versión de ChromeDriver debe ser compatible con la versión de Chrome instalada.
3. El proyecto guarda screenshots en la carpeta /screenshots/ ante fallos de ejecución.
