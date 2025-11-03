# 🎁 Página Interactiva de Regalos

Página web interactiva para el cumpleaños con 3 regalos especiales.

## 📁 Estructura de Archivos

```
.
├── index.html          # Página principal
├── styles.css          # Estilos
├── script.js           # Lógica interactiva
├── images/             # Carpeta para las imágenes
│   ├── hero-1.jpg           # Imagen de fondo 1 (página de inicio)
│   ├── hero-2.jpg           # Imagen de fondo 2 (página de inicio)
│   ├── gift1-btn-1.jpg      # Imagen de fondo del botón regalo 1
│   ├── gift1-btn-2.jpg      # Segunda imagen del botón regalo 1
│   ├── gift1-modal.jpg      # Imagen del modal regalo 1
│   ├── gift2-btn-1.jpg      # Imagen de fondo del botón regalo 2
│   ├── gift2-btn-2.jpg      # Segunda imagen del botón regalo 2
│   ├── gift2-modal.jpg      # Imagen del modal regalo 2
│   ├── gift3-btn-1.jpg      # Imagen de fondo del botón regalo 3
│   ├── gift3-btn-2.jpg      # Segunda imagen del botón regalo 3
│   └── gift3-modal.jpg      # Imagen del modal regalo 3
└── audio/              # Carpeta para las canciones
    ├── gift1.mp3
    ├── gift2.mp3
    └── gift3.mp3
```

## 🎯 Cómo Usar

1. **Prepara las imágenes:**
   - **Fondo de la página de inicio:** Coloca 2 imágenes románticas como `hero-1.jpg` y `hero-2.jpg` (se alternarán automáticamente)
   - **Botones de regalos:** Cada botón puede tener 2 imágenes:
     - `gift1-btn-1.jpg` y `gift1-btn-2.jpg` para el regalo 1
     - `gift2-btn-1.jpg` y `gift2-btn-2.jpg` para el regalo 2
     - `gift3-btn-1.jpg` y `gift3-btn-2.jpg` para el regalo 3
   - **Modales:** Imágenes que se muestran al abrir cada regalo:
     - `gift1-modal.jpg`, `gift2-modal.jpg`, `gift3-modal.jpg`
   - Si no tienes todas las imágenes, puedes usar la misma imagen para ambas del botón o actualizar las rutas en `index.html` y `script.js`

2. **Prepara las canciones:**
   - Coloca las canciones en la carpeta `audio/`
   - Nómbralas: `gift1.mp3`, `gift2.mp3`, `gift3.mp3`
   - O actualiza las rutas en `script.js`

3. **Abre la página:**
   - Simplemente abre `index.html` en tu navegador
   - O usa un servidor local si es necesario

## ✨ Características

- **Página de inicio:** Mensaje grande "Feliz cumpleaños amor de mi vida" con fondo de imágenes que cambian automáticamente
- **Botones de regalos:** Cada botón tiene imágenes de fondo personalizadas
- Diseño moderno y atractivo
- Animaciones suaves
- Responsive (se adapta a móviles y tablets)
- Audio automático al abrir cada regalo
- Imágenes de fondo personalizadas
- Mensajes personalizados para cada regalo

## 📝 Personalización

Puedes modificar:
- Las rutas de las imágenes en `index.html` (botones) y `script.js` (modales)
- Las rutas de las canciones en `script.js` (líneas 5, 11, 17)
- Los mensajes en `script.js` (líneas 6, 12, 18)
- Los colores y estilos en `styles.css`
- El mensaje principal en `index.html` (línea 18)

## 📸 Sugerencia de Distribución de Imágenes

Basándome en las fotos que tienes:

**Fondo de inicio (hero):**
- Pareja en balcón al atardecer con vela
- Mujer bajando escaleras con vestido rojo y velas

**Regalo 1 (música/princesa):**
- Botones: selfies casuales, momentos íntimos
- Modal: paisajes o momentos especiales

**Regalo 2 (teatro):**
- Botones: pareja elegante vestida
- Modal: mujer con vestido rojo o pareja elegante

**Regalo 3 (historias):**
- Botones: vistas panorámicas, paisajes
- Modal: paisajes montañosos o vistas

Ver `images/INSTRUCCIONES_IMAGENES.md` para más detalles.

