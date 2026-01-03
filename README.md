# DevTools Playground - Frontend

Frontend desarrollado con React, Vite y Tailwind CSS siguiendo principios SOLID y Clean Code.

## Arquitectura

El proyecto sigue una arquitectura modular con separación clara de responsabilidades:

```
frontend/
├── src/
│   ├── components/      # Componentes reutilizables
│   │   ├── DictionaryTool.jsx
│   │   ├── ShoppingTool.jsx
│   │   └── WordsTool.jsx
│   ├── App.jsx         # Componente principal
│   ├── main.jsx        # Punto de entrada
│   └── index.css       # Estilos globales
├── public/             # Archivos estáticos
├── package.json        # Dependencias
├── vite.config.js      # Configuración de Vite
├── tailwind.config.js  # Configuración de Tailwind
└── nginx.conf          # Configuración de Nginx (producción)
```

## Principios SOLID Aplicados

### Single Responsibility Principle (SRP)
- Cada componente tiene una responsabilidad única
- `DictionaryTool`: Solo maneja funcionalidad de diccionario
- `ShoppingTool`: Solo maneja cálculos de compras
- `WordsTool`: Solo maneja concatenación de palabras

### Open/Closed Principle (OCP)
- Componentes extensibles mediante props y composición
- Fácil agregar nuevas herramientas sin modificar existentes

### Liskov Substitution Principle (LSP)
- Componentes pueden ser reemplazados por implementaciones compatibles
- Props bien definidas permiten intercambiabilidad

### Interface Segregation Principle (ISP)
- Props específicas para cada componente
- No se fuerza a componentes a recibir props innecesarias

### Dependency Inversion Principle (DIP)
- Componentes dependen de abstracciones (props/interfaces)
- No dependen de implementaciones concretas

## Clean Code

- **Nombres descriptivos**: Variables y funciones con nombres claros
- **Componentes pequeños**: Cada componente hace una sola cosa
- **Hooks personalizados**: Lógica reutilizable extraída a hooks
- **Separación de concerns**: UI, lógica y estado separados
- **Type safety**: Props bien definidas y documentadas
- **Manejo de errores**: Manejo robusto de errores y estados de carga

## Características

- ✅ Dark Mode con persistencia en localStorage
- ✅ Diseño responsive con Tailwind CSS
- ✅ Manejo de estados de carga y errores
- ✅ Validación de formularios
- ✅ Interfaz moderna y profesional

## Tecnologías

- **React 18**: Biblioteca de UI
- **Vite**: Build tool rápida
- **Tailwind CSS**: Framework de utilidades CSS
- **Nginx**: Servidor web para producción

## Desarrollo Local

```bash
# Instalar dependencias
npm install

# Ejecutar en modo desarrollo
npm run dev

# Construir para producción
npm run build

# Preview de producción
npm run preview
```

## Variables de Entorno

Crear archivo `.env.local`:

```env
VITE_API_URL=http://localhost:8000
```

## Docker

```bash
# Construir imagen
docker build -t devtools-frontend --build-arg VITE_API_URL=http://localhost:8000 .

# Ejecutar contenedor
docker run -p 3000:80 devtools-frontend
```

## Estructura de Componentes

Cada componente sigue el mismo patrón:
- Estado local para inputs y resultados
- Manejo de errores
- Estados de carga
- Validación de inputs
- Llamadas a API con fetch

## Mejores Prácticas

1. **Componentes funcionales**: Uso exclusivo de componentes funcionales y hooks
2. **Custom hooks**: Lógica reutilizable en hooks personalizados
3. **Error boundaries**: Manejo de errores en componentes
4. **Loading states**: Feedback visual durante operaciones asíncronas
5. **Validación**: Validación tanto en cliente como servidor

