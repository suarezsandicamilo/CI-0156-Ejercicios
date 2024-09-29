# Ejercicio 4

## [Principio de Responsabilidad Única](srp.ts)

La clase `TodoTask` tiene la responsabilidad de la lógica interna de una tarea, como su creación, datos y cambio de estado.

La clase `TodoTaskPrinter` se encarga de la impresión de los datos de la tarea, que es una responsabilidad separada.

## [Principio Abierto/Cerrado](ocp.ts)

La clase `DoneTodoTaskFilter` es una implementación de la interfaz `TodoTaskFilter`, que filtra solo las tareas completadas. Si en el futuro se necesita implementar un filtro diferente, como filtrar tareas no completadas, se puede crear una nueva clase que implemente la misma interfaz sin modificar el código existente.

## [Principio de Sustitución de Liskov](lsp.ts)

La clase `ImportantTask` extiende la clase base `TodoTask`, agregando un atributo adicional, pero sin modificar el comportamiento de la clase `TodoTask`.

La función `isDone`, que toma como parámetro un objeto de tipo `TodoTask`, también permite recibir sin problemas un objeto de tipo `ImportantTask`, que es una subclase de `TodoTask`.

## [Principio de Segregación de Interfaces](isp.ts)

El código define dos interfaces: `Task` y `WithNotify`. La interfaz `Task` define la estructura básica de una tarea, mientras que la interfaz `WithNotify` introduce el comportamiento de notificación.

La clase `TodoTask` implementa solo la interfaz `Task`, ya que no necesita notificaciones. Esto evita que `TodoTask` dependa de métodos que no utiliza, respetando así el principio de segregación de interfaces.

La clase `NotifyTask` implementa tanto la interfaz `Task` como la interfaz `WithNotify`, ya que, además de administrar tareas, también debe notificar cuando una tarea ha sido completada. Al dividir la interfaz en dos, `NotifyTask` puede manejar ambos comportamientos sin que `TodoTask` tenga que implementar el método innecesariamente.

## [Principio de Inversión de Dependencias](dip.ts)

La interfaz `TodoTaskRepository` define un contrato para la persistencia de tareas. Las clases `FileTodoTaskRepository` y `DatabaseTodoTaskRepository` son implementaciones concretas que cumplen con esta interfaz, proporcionando diferentes formas de almacenar las tareas.

La clase `TodoTaskService`, que es un módulo de alto nivel, no se preocupa por los detalles de cómo se guardan las tareas; simplemente trabaja con la interfaz `TodoTaskRepository`. Esto significa que puede usar cualquier implementación de `TodoTaskRepository` sin necesidad de modificar su código.
