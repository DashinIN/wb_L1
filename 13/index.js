// 13.	Задача на классы и наследование: создайте базовый класс Shape (фигура), который имеет методы для расчета 
// площади и периметра. Затем создайте подклассы, представляющие различные фигуры, такие как прямоугольник, круг и 
// треугольник. Реализуйте методы расчета площади и периметра для каждой фигуры.


class Shape {
  constructor() {
    this.name = "";
  }

  calculateArea() {
    throw new Error("метод 'calculateArea' должен быть переопределен");
  }

  calculatePerimeter() {
    throw new Error("метод 'calculatePerimeter' должен быть переопределен");
  }
}

// У базового класса есть конструктор, который инициализирует свойство name, 
// и два абстрактных метода calculateArea и calculatePerimeter.
// Они не имеют реализации, потому что в базовом классе площадь и периметр не известны,
// так как конкретная фигура не определена.

class Rectangle extends Shape {
  constructor(width, height) {
    super();
    this.name = "Прямоугольник";
    this.width = width;
    this.height = height;
  }

  calculateArea() {
    return this.width * this.height;
  }

  calculatePerimeter() {
    return 2 * (this.width + this.height);
  }
}

// В подклассе прямоугольник мы определяем конструктор, который вызывает конструктор базового класса
//  и инициализирует свойства name, width и height. Методы calculateArea и calculatePerimeter 
//  выполняют расчет площади и периметра фигуры.

class Circle extends Shape {
  constructor(radius) {
    super();
    this.name = "Круг";
    this.radius = radius;
  }

  calculateArea() {
    return Math.PI * this.radius**2;
  }

  calculatePerimeter() {
    return 2 * Math.PI * this.radius;
  }
}

// В подклассе круг определяется конструктор, который вызывает конструктор базового класса и
//  инициализирует свойства name и radius. Методы calculateArea и calculatePerimeter 
//  выполняют расчет площади и периметра для круга.

class Triangle extends Shape {
  constructor(side1, side2, side3) {
    super();
    this.name = "Треугольник";
    this.side1 = side1;
    this.side2 = side2;
    this.side3 = side3;
  }

  calculateArea() {
    //Для определения площади треугольника по трем сторонам
    //вычисляем полупериметр, его используем для нахождения площади по формуле Герона.
    const s = (this.side1 + this.side2 + this.side3) / 2;
    return Math.sqrt(s * (s - this.side1) * (s - this.side2) * (s - this.side3));
  }

  calculatePerimeter() {
    return this.side1 + this.side2 + this.side3;
  }
}

// Подкласс для треугольника также имеет конструктор, который вызывает конструктор базового класса и 
// инициализирует свойства name, side1, side2 и side3. Методы calculateArea и calculatePerimeter
// выполняют расчет площади и периметра треугольника.

//Примеры работы:

//Прямоугольник
const rectangle = new Rectangle(5, 3);
console.log(rectangle.calculateArea()); //15
console.log(rectangle.calculatePerimeter()); //16

//Круг
const circle = new Circle(4);
console.log(circle.calculateArea()); //50.26548245743669
console.log(circle.calculatePerimeter()); //25.132741228718345

//Треугольник
const triangle = new Triangle(3, 4, 5);
console.log(triangle.calculateArea()); //6
console.log(triangle.calculatePerimeter()); //12