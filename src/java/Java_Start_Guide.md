# Introduction to Java 
### What is Java?
Java is a programming language that is used to create computer applications. The most recent version, Java 11, is now available and that is what we'll be focusing on in this start guide. 

The language of Java revolves around Object Oriented Programming (OOP), which allows for the programmer to manipulate 'objects' that are created through the code with functional commands called 'methods.'

Documentation can be found [here](https://www.oracle.com/technetwork/java/javase/documentation/index.html).
### Getting Started
You need to download the Java Development Kit (JDK) off of Oracle's [official website](https://www.oracle.com/technetwork/java/javase/downloads/index.html). You also need an Integrated Development Environment (IDE) to begin writing code. Some examples can be found below:
- [BlueJ](https://www.bluej.org/])
- [Eclipse](https://www.eclipse.org/ide/)
- [IntelliJ](https://www.jetbrains.com/idea/)
- [Netbeans](https://netbeans.org/)
### Hello World!
As is tradition with most languages, you first learn how to output "Hello World!" In Java, this is done through an output method. But before you can do that, you need to learn how to declare a class and method in Java.

    public class HelloWorld {
        public static void main(String[]args) {
            System.out.println("Hello World!");
        }
    }
The code above declared the class in Line 1, declared the main method in Line 2, and called upon the 'System' to output the string "Hello World!" In Java, blocks of code are separated by open brackets ({) and closed brackets (}). Whenever a class or method is declared, the code that relates to that class or method should be encapsulated in brackets.

Line 1 creates a class with 'public' access and the name 'HelloWorld'.

Let's take a closer look at Line 2:
    
    public static void main(String[]args)
This line initiates the main method, which is where you would create objects and manipulate data relating to your objects. 
- 'Public' marks the method as global and it can be accessed by any other class. 
- 'Static' allows you to use this method without creating an object first.
- 'Void' means that the method does not return a value, which is the job of accessor methods.
- 'Main' denotes the main method, which is where you would create objects and manipulate data relating to your objects. 
- 'String[]args' creates an array called 'args' with the variable type of String, but this is a more complex concept and can be delved into later.

And finally, we arrive at the method that prints 'Hello World!' So what exactly does it do? It calls upon a predefined object called the System to output something onto the next line. This is a commonly used method and is used whenever you want to display something.
### Compiling Your Code
Now that you've written a simple class, you will need to compile it. Depending on your IDE, the shortcut or button for compiling is different. However, the process is the same. The computer converts the code into binary (0s and 1s) which it understands. Whereever the computer fails to understand the code, it will return an error.
### Moving On
Now you can try executing your code and you will receive the following:

    Hello World!
Now what? There's not that much syntax for Java, but there's so many ways you can program and explore. Consider visiting a tutorial site such as [LearnJava](https://www.learnjavaonline.org/) or [CodeAcademy](https://www.codecademy.com/learn/learn-java) to delve deeper into the language of Java.
    
