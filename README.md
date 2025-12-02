# TaskFlow.Plus

## 🎯 Descripción General

TaskFlow.Plus es una aplicación de lista de tareas ("Todo App") moderna y responsiva, construida con React y gestionada con Redux Toolkit para el estado. Utiliza persistencia local para guardar automáticamente las tareas en el navegador del usuario.

## 🚀 Características Clave

- ✅ Gestión Completa de Tareas: Añadir, completar/descompletar y eliminar tareas.

- 📊 Seguimiento de Progreso: Tarjeta de estadísticas con porcentaje de tareas completadas.

- 🏷️ Filtrado: Ver todas las tareas, solo las activas o solo las completadas.

- 🔄 Drag & Drop (D&D): Reordenamiento de tareas mediante arrastrar y soltar (solo en la vista “Todas”).

- 💾 Persistencia: Guarda el estado de las tareas con localStorage.

## 🛠️ Tecnologías Utilizadas

- React: Biblioteca principal para construir la interfaz de usuario.
- Redux Toolkit (RTK): Lógica de estado centralizada y simplificada.
- React Redux: Conecta React con el store de Redux.
- TypeScript: Tipado estático para mayor robustez.
- Lucide React: Iconos utilizados en la interfaz.
- Tailwind CSS: Diseño y estilos de la aplicación.

## 💻 Configuración del Proyecto

1. Requisitos Previos:

   Asegúrate de tener Node.js y npm (o yarn/pnpm) instalados.

2. Instalación de Dependencias:

   ```
   En la raíz del proyecto ejecuta:

   npm install

   # o

   yarn install
   ```

3. Ejecución

   Inicia la aplicación en modo desarrollo:

   ```
   npm run dev

   # o

   yarn dev
   ```

La aplicación estará disponible en: http://localhost:5173

## 📦 Estructura del Código

La aplicación sigue un patrón de separación por características (Ducks/Feature Slices):

```
src/
├─ redux/ # Lógica central de Redux (todoSlice.ts, hooks.ts)
├─ types.ts # Tipos globales de TypeScript
├─ components/
│ ├─ ui/ # Componentes reutilizables (Input, Filtros, TaskItem...)
│ └─ layout/ # Componentes de estructura (Persistencia, AppContent)
└─ App.tsx # Componente raíz con el Provider de Redux
```
