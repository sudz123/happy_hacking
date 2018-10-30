# ¿Qué es PHP?

PHP (acrónimo recursivo de PHP: Hypertext Preprocessor) es un lenguaje de código abierto muy popular que ha sido usado desde 1994 y ha sido adoptado en muchos sitios webs, como es Wordpress. PHP es especialmente adecuado para el desarrollo web de contenido dinámico y que puede ser incrustado en HTML.

El cliente solo ve los resultados que produce, no el código PHP, esto es porque es un lenguaje que se ejecuta en el servidor y no en el cliente como es Javascript.
¿Por qué aprender PHP?
Porque es muy potente, fácil de aprender, de libre distribución, permite el acceso a bases de datos y otras funcionalidades orientadas a la red, dispone de abundante soporte en la Web

Bien, pero ¿qué significa realmente? Un ejemplo nos aclarará las cosas: 

**Ejemplo #1 Un ejemplo introductorio**

    <!DOCTYPE HTML>
    <html>
        <head>
            <title>Ejemplo</title>
        </head>
        <body>

            <?php
                echo "¡Hola, soy un script de PHP!";
            ?>

        </body>
    </html>
    
En lugar de usar muchos comandos para mostrar HTML (como en C o en Perl), las páginas de PHP contienen HTML con código incrustado que hace "algo" (en este caso, mostrar "¡Hola, soy un script de PHP!). El código de PHP está encerrado entre las etiquetas especiales de comienzo y final `<?php` y `?>` que permiten entrar y salir del "modo PHP".

## Quiero ejecutar código PHP, ¿Qué necesito?
* Un Servidor Web
* Un Interprete de código PHP
* Un Editor de texto

Código PHP:
* Los Archivos tienen la extensión .php
* El Código se pone entre las etiquetas:
`<?php
...
?>`

Probablemente no tengamos un servidor web alojado en internet, en ese caso tenemos que tener una aplicación como XAMPP que nos proporcione el servidor web para trabajar localmente y ejecutar el código.

## Sobre la sintaxis

`<?php ... ?>` etiquetas de apertura y cierre

// comentario de una línea

/* comentario de
Varias líneas */

*Para imprimir por pantalla se puede usar*
`echo`
`print`
>Nota: elegir solo una en la aplicación, por una cuestión de prolijidad.

## Variables
Todas las variables deben comenzar con el signo $
Las variables no pueden comenzar con números, no pueden llevar tildes o eñes ni pueden
comenzar o contener en su nombre símbolos especiales como ?, &, %, #, @, !, *, (, ), <, >.
* No son válidas:
$123
$niño
$%porcentaje
$)precio
$#_de_teléfono
$campeón

Las variables si pueden comenzar con guion bajo
* Son válidas:
$_nombre
$_123
$_campeon

>Nota: Existen variables reservadas que no pueden ser asignadas, como  $this o $_POST. 


## Variables - Tipos más comunes
* Números: enteros, decimales (punto flotante)
* Cadena de caracteres: texto encerrado entre comillas
* Booleanos: true o false
* Nulo
* Arreglos
* Recursos

#### Cadenas de texto: string
    Se pueden usar comillas dobles o simples.
    Se puede insertar una variable en una cadena de texto entre comillas dobles. Para concatenar se usa el punto (.)
#### Punto flotante
    Para los números decimales se utiliza el punto y no la coma: 3.25 no es igual a 3,25
#### NULL (Nulo)
    Sirve para vaciar el contenido de la variable, sin conservar su tipo
    
## Funciones Útiles
* isset() : devuelve True si la variable ha sido definida y no es NULL, de lo contrario,
retornará False
* unset() : elimina completamente la variable (libera la memoria)
* var_dump() : Permite conocer el tipo y valor de la variable
* gettype() : devuelve el tipo de la variable en una cadena

Se pueden insertar archivos de tipo: php, txt, html, htm y otros con formato de texto

* include() : busca el archivo solicitado, si no lo encuentra envía un mensaje de error (advertencia) y
continúa ejecutando el script sino, incluye el contenido del documento en ese lugar
* include_once() : como include() solo que, si el archivo ya está incluído, no lo vuelve a incorporar
* require() : como include() solo que, si no encuentra el archivo, emitirá un error fatal y NO continúa ejecutando el script
* require_once() : incluye solo una vez

## Operadores Aritméticos
Suma: + <br>
Resta: - <br>
Multiplicación: * <br>
División: / <br>
Resto de una división (módulo): %

**Unarios:**

* Incremento en una unidad: ++
* Decremento en una unidad: --

## Operadores de Asignación
Asignación: = <br>
Asignación con suma: += <br>
Asignación con resta: -= <br>
Asignación con multiplicación: *= <br>
Asignación con división: /= <br>
Asignación con resto: %= <br>

## Operadores de Comparación
Menor que: < <br>
Mayor que: > <br>
Menor o igual que : <= <br>
Mayor o igual que: >= <br>
Iguales: == <br>
Distintos: != <br>
Idénticos: === (compara también el tipo de dato) <br>
No Idénticos: !== (compara también el tipo de dato) <br>

## Operadores Lógicos
Negación: ! <br>
AND (si los 2 operandos son verdaderos, el resultado es verdadero): && <br>
OR (si uno de los operandos es verdadero, el resultado es verdadero): || <br>
AND (si los 2 operandos son verdaderos, el resultado es verdadero): AND <br>
OR (si uno de los operandos es verdadero, el resultado es verdadero): OR <br>
OR Exclusivo (el resultado es verdadero si uno de los operandos es verdadero, pero no ambos): XOR <br>

## Estructuras Condicionales

Toma de decisiones: realizar una u otra acción dependiendo del valor de la variable que se evalúa.
* if – switch
* Bucles o ciclos: permite ejecutar instrucciones un determinado número de veces, usado para realizar una tarea repetidamente: 
for – while – do while

## Estructura IF / IF-ELSE
Sintaxis IF:

	if ($expresión) {
		Acciones a realizar en caso afirmativo
	}

Sintaxis IF-ELSE:

	if ($expresión) {
		Acciones a realizar en caso afirmativo
	} else {
		Acciones a realizar en caso negativo
	}

## Estructura IF (con ELSE IF)
Sintaxis con ELSE IF:

	if ($expresión) {
		Codigo1;
	} elseif ($expresión2) {
		Codigo2;
	} else {
		Codigo3;
	}

## Operador Ternario (?:)
El operador ternario reemplaza la estructura if-else que tiene una instrucción en cada rama.
Realiza UNA tarea si la expresión evaluada es verdadera o UNA tarea si es falsa.

	$A = 5;
	$B = 3;
	if ($A > $B) {
		$Mayor = $A;
	} else {
		$Mayor = $B;
	}
	
Puede ser reemplazado por:

	$A = 5;
	$B = 3;
	$Mayor = ($A > $B)? $A: $B;

## Estructura SWITCH
Se utiliza cuando una variable puede tomar más de un valor
Sintaxis SWITCH:

	switch ($variable) {
		case valor1: //si $variable es igual a valor1
			instruccion1;
			break;
		case valor2:
			instruccion2;
			break;
		case default:
			instruccionDefault;
	}
>Nota: si no se agrega el ´break´, se seguirán ejecutando las próximas instrucciones
## SWITCH – Agrupación de case
Sintaxis:

	switch ($variable) {
		case valor1:
		case valor2:
		case valor3:
			instruccion1; //se ejecuta si $variable es igual a valor1, valor2 o valor3
			break;
		case valor4:
			instruccion2;
			break;
		case default:
			instruccionDefault;
	}

## Bucle while
Evalúa de forma booleana la expresión iterativamente, hasta que retorne False.
Sintaxis:

	while (expresión) {
		// algoritmo a ejecutar hasta expresión False
	}
	
## Bucle do - while

Ingresa al bucle al menos una vez y hasta que la expresión sea falsa
Sintaxis:

	do {
		/* algoritmo a ejecutarse al principio de la iteración y toda vez que
		expresión sea verdadera
		*/
	} while ($expresion);

## Bucle for

Evalúa 3 expresiones en cada iteración, siguiendo este esquema:
* Primera expresión: se ejecuta incondicionalmente al comienzo del bucle
* Segunda expresión: se evalúa como verdadera o falsa al inicio de cada iteración. El bucle continúa, solo si es verdadera.
* Tercera expresión: se ejecuta al final de cada iteración
(la sintaxis sola no ayuda mucho, por eso propongo este ejemplo)

	for ($i = 1; $i <= 10; $i++) {
		echo $i;
	}
>$i comienza en 1, por cada ciclo se incrementa una unidad, el bucle finaliza cuando $i <= 10 sea falso ($i mayor que 10)

Antes de ver foreach, veamos los array en php (son ligeramente distintos a los de otros lenguajes)
## Array
Conjunto ordenado de elementos en donde cada elemento es una variable.
En PHP, hay tres tipos de Arrays:
* Arrays indexados: poseen un índice numérico
* Arrays asociativos: poseen claves con nombre
* Arrays multidimensionales: contienen uno o más Arrays

### Arrays indexados
La forma común de cargar un array indexado es:
``$usuario = array('valor1', 'valor2', 'valor3');``
O el índice puede ser asignado manualmente:
``$array_ejemplo[0] = 'valor1';
$array_ejemplo[1] = 'valor2';
$array_ejemplo[2] = 'valor3';``

$array_ejemplo[] = 'nuevo_valor'; //Agrega un elemento al final

### Array asociativo
	Array(clave => valor)
> Clave puede ser un entero o cadena de texto y valor puede ser de cualquier tipo

Para cargarlo se puede hacer 
$array_ejemplo = array('clave1' => 'valor1', 'clave2' => 'valor2', 'clave3' => 'valor3');

Para acceder a un valor, de puede hacer
$array_ejemplo['clave2'] //devuelve 'valor2'

> La función count() se usa para saber la cantidad de elementos de un array: ´count($array_ejemplo);´
> Para ver los datos del array se puede usar: ´print_r($array_ejemplo);´

## Foreach

Recorre un array en forma dinámica

Sintaxis:

	foreach($array as $valor_del_elemento) {
		// algoritmo a realizar con cada elemento
	}

	foreach ($array as $clave => $valor){
		// algoritmo a realizar con cada elemento
	}
	
>Notar que en el segundo caso, se recupera tanto la clave (en la variable $clave) como el valor asociado (en $valor)

# Eso es todo por el momento
Si te interesa seguir investigando, podes buscar en la web, especialmente en la [página oficial](http://php.net/manual/es/).
