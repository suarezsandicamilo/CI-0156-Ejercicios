# Ejercicio 2

El proyecto ejercicio1 utiliza la estructura básica de carpetas para un proyecto con Front-End Clean Architecture.

Para demostrar esta arquitectura se puede pensar en un sistema de TODO. Esta arquitectura tienen cuatro capas, que son dominio, aplicación, infraestructura y presentación. Cada una de estas capas tiene su carpeta, que son `src/domain/`, `src/application/`, `src/infrastructure/` y `src/presentation/`, respectivamente.

Según un artículo de Alex Bespoyasov sobre [Clean Architecture on Frontend](https://bespoyasov.me/blog/clean-architecture-on-frontend/), estas son las definiciones de cada una de las capas. Notar que parte de las definiciones y los nombres de los ejemplos se basan en el proyecto realizado en el Proyecto Integrador de Ingeniería de Software y Bases de Datos.

## Dominio

Esta capa tiene las entidades y los datos que describen el área temática de la aplicación, así como el código para transformar esos datos.

Por ejemplo en el proyecto ejercicio1 en la carpeta `src/domain/` se tiene la entidad `TodoList.tsx`, la que puede tener funciones cómo agregar elemento a la lista, eliminar elemento de la lista, marcar un elemento de la lista como completado, etc. Las funciones que tiene la entidad depende de los requerimientos de negocio.

## Aplicación

Esta capa describe los casos de uso, es decir escenarios de uso.

Esta capa está conectada únicamente con la capa de dominio.

Por ejemplo en el proyecto ejercicio1 en la carpeta `src/application/` se tiene los archivos `ITodoListUseCase.tsx` y `TodoListUseCase.tsx`. El primero representa la interfaz que define todos los casos de uso y el segundo es la implementación de esos casos de uso. Además de estos archivos anteriores tiene el archivo `ITodoListRepository.tsx` que representa la interfaz del repositorio que es parte de la capa de infraestructura. Esta interfaz es utilizada por la capa de presentación para que esté conectada con la capa de aplicación en lugar de la capa de infraestructura directamente.

## Infraestructura

Esta capa contiene los adaptadores o repositorios a servicios externos.

Esta capa está conectada con la capa de aplicación y los servicios externos.

Por ejemplo en el proyecto ejercicio1 en la carpeta `src/infrastructure/` se tiene el archivo `TodoListRepository` que puede estar conectado a una base de datos o a una API y tener funciones básicas de CRUD. Además es importante notar que este repositorio tiene que implementar la interfaz definida en la capa de aplicación.

## Presentación

Esta capa está conectada con la capa de aplicación y una forma de presentar los datos que depende de cómo se quiere compartir los datos, por ejemplo una página web o REST.

Por ejemplo en el proyecto ejercicio1 en la carpeta `src/presentation/` se tiene al archivo `TodoListPage.tsx` que puede ser un componente de React que muestra la lista y tiene formularios para actualizar la lista.
