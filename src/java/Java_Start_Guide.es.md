# Introducción a Java
### Qué es Java?
Java es un lenguaje de programación que se utiliza para crear aplicaciones informáticas. La versión más reciente, Java 11, ya está disponible y eso es en lo que nos centraremos en esta guía de inicio. 

El lenguaje de Java gira en torno a la Programación Orientada a Objetos (OOP), que permite al programador manipular los "objetos" que se crean a través del código con comandos funcionales llamados "métodos".

Se puede encontrar documentación. [Aquí](https://www.oracle.com/technetwork/java/javase/documentation/index.html).
### Empezando
Debe descargar el Kit de desarrollo de Java (JDK) de Oracle's [sitio oficial](https://www.oracle.com/technetwork/java/javase/downloads/index.html). También necesita un entorno de desarrollo integrado (IDE) para comenzar a escribir código. Algunos ejemplos se pueden encontrar a continuación:
- [BlueJ](https://www.bluej.org/])
- [Eclipse](https://www.eclipse.org/ide/)
- [IntelliJ](https://www.jetbrains.com/idea/)
- [Netbeans](https://netbeans.org/)
### Hola Mundo!
Como es la tradición con la mayoría de los idiomas, primero aprende cómo mostrar "¡Hola mundo!" o "Hello Word" En Java, esto se hace a través de un método de salida. Pero antes de que pueda hacer eso, debe aprender a declarar una clase y un método en Java. En este caso declararemos HelloWord

    public class HelloWorld {
        public static void main(String[]args) {
            System.out.println("Hola mundo!");
        }
    }
El código anterior declaró la clase en la Línea 1, declaró el método principal en la Línea 2 y solicitó al 'Sistema' que produjera la cadena "Hola mundo!" En Java, los bloques de código están separados por corchetes abiertos ({) y corchetes cerrados (}). Cuando se declara una clase o un método, el código que se relaciona con esa clase o método debe encapsularse entre paréntesis.

Line 1 crea una clase con acceso 'public' y el nombre 'HelloWorld'.

Echemos un vistazo más de cerca a la línea 2:
    
    public static void main(String[]args)
Esta línea inicia el método principal, que es donde crearía objetos y manipularía los datos relacionados con sus objetos.
- 'Public' marca el método como global y cualquier otra clase puede acceder a él.
- 'Static' te permite usar este método sin crear un objeto primero.
- 'Vacío' significa que el método no devuelve un valor, que es el trabajo de los métodos de acceso.
- 'Principal' denota el método principal, que es donde crearía objetos y manipularía los datos relacionados con sus objetos.
- 'String [] args' crea una matriz llamada 'args' con el tipo variable de String, pero este es un concepto más complejo y se puede profundizar más adelante.

Y finalmente, llegamos al método que imprime '¡Hola mundo!' Entonces, ¿qué es exactamente lo que hace? Invoca un objeto predefinido llamado Sistema para dar salida a algo en la siguiente línea. Este es un método comúnmente usado y se usa cuando se quiere mostrar algo.
### Compilando su codigo
Ahora que has escrito una clase simple, necesitarás compilarla. Dependiendo de su IDE, el acceso directo o botón para compilar es diferente. Sin embargo, el proceso es el mismo. La computadora convierte el código en binario (0s y 1s) que entiende. Siempre que la computadora no entienda el código, devolverá un error.
### Continuando
Ahora puedes intentar ejecutar tu código y recibirás lo siguiente:

    Hola mundo!
¿Ahora que? No hay mucha sintaxis para Java, pero hay tantas maneras de programar y explorar. Considere visitar un sitio de tutoría como [LearnJava](https://www.learnjavaonline.org/) or [CodeAcademy](https://www.codecademy.com/learn/learn-java) Para profundizar en el lenguaje de Java.
