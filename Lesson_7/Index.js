// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// створити пустий масив, наповнити його 10 об'єктами new User(....)

function User (id, name, surname , email, phone) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
}

let user = [];
let user1 = new User(1,'Bart','Simpson','El_Barto@gmail.com','555-0113');
let user2 = new User(2,'Lisa','Simpson','Lisa_Simpson@gmail.com','555-0113');
let user3 = new User(3,'Homer','Simpson','HomerJS@gmail.com','555-0113');
let user4 = new User(4,'Marjorie','Simpson','MargeJS@gmail.com','555-0113');
let user5 = new User(5,'Moe','Szyslak','Moe_Szyslak@gmail.com','555—1239');
let user6 = new User(6,'Nedward','Flanders','Ned_Flanders_Jr@gmail.com','Unknown');
let user7 = new User(7,'Edna','Krabappel','Sweet_Edna@gmail.com','Unknown');
let user8 = new User(8,'Montgomery','Burns','Mr_Burns@gmail.com','555-0001');
let user9 = new User(9,'Seymour','Skinner','Skinner_1946@gmail.com','Ask Bart');
let user10 = new User(10,'Herschel','Krustofsky','Hey_hey_clown@gmail.com','Unknown');

user = [user1,user2,user3, user4, user5, user6, user7, user8, user9, user10];
console.log(user);

// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)

console.log(user.filter(value => value.id % 2 === 0));

// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)

console.log(user.sort((a, b) => a.id - b.id));

// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)

class Client {
    constructor(id, name, surname , email, phone, order) {
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.phone = phone;
        this.order = order;
    }
}

// створити пустий масив, наповнити його 10 об'єктами Client

let arrClient = [];

let client1 = new Client(1, 'Vasya', 'Vasylenko', 'Vasylenko@gmail.com', '355-36-45', ['lemon', 'orange', 'apple']);
let client2 = new Client(2, 'Misha', 'Ivanenko', 'Ivanenko@gmail.com', '785-85-12', ['chicken', 'fig', 'pear', 'lime', 'mango']);
let client3 = new Client(3, 'Vanya', 'Pupkin', 'Pupkin@gmail.com', '210-25-00', ['melon', 'tuna']);
let client4 = new Client(4, 'Ira', 'Kvitka', 'Kvitka@gmail.com', '985-03-03', ['cherry', 'blueberry', 'liver', 'onion']);
let client5 = new Client(5, 'Katya', 'Mashkiv', 'Mashkiv@gmail.com', '458-12-78', ['avocado', 'beetroot', 'bacon', 'raspberry']);
let client6 = new Client(6, 'Andriy', 'Kotygoroshko', 'Kotygoroshko@gmail.com', '965-56-07', ['pineapple', 'carrot', 'chicken', 'cherry']);
let client7 = new Client(7, 'Olena', 'Shevchenko', 'Shevchenko@gmail.com', '325-89-32', ['pear', 'mango', 'onion', 'duck']);
let client8 = new Client(8, 'Sasha', 'Kotyk', 'Kotyk@gmail.com', '125-02-20', ['blueberry', 'liver', 'beetroot']);
let client9 = new Client(9, 'Vadim', 'Honchar', 'Honchar@gmail.com', '100-10-00', ['fig', 'pear', 'lime', 'pork']);
let client10 = new Client(10, 'Olesya', 'Bila', 'Bila@gmail.com', '454-25-02', ['avocado', 'beetroot', 'bacon', 'pineapple']);

arrClient = [client1, client2, client3, client4, client5, client6, client7, client8, client9, client10];
console.log(arrClient);

// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)

console.log(arrClient.sort((a, b) => a.order.length - b.order.length));

// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car

function Car (model, manufacture, yearOfManufacture, maxSpeed, engineCapacity) {
    this.model = model;
    this.manufacture = manufacture;
    this.yearOfManufacture = yearOfManufacture;
    this.maxSpeed = maxSpeed;
    this.engineCapacity = engineCapacity;

    this.drive = function () {
        return `їдемо зі швидкістю ${this.maximumSpeed} на годину`;
    }

    this.info = function () {
        return this.driver
            ? ` Модель - ${this.model}\n Виробник - ${this.manufacture}\n Рік випуску - ${this.yearOfManufacture}\n Максимальна швидкість (км/год) - ${this.maxSpeed}\n Об'єм двигуна (л) - ${this.engineCapacity}\n Водій:\n Ім'я - ${this.driver.name}\n Років - ${this.driver.age}\n Досвід - ${this.driver.experience}`
            : ` Модель - ${this.model}\n Виробник - ${this.manufacture}\n Рік випуску - ${this.yearOfManufacture}\n Максимальна швидкість (км/год) - ${this.maxSpeed}\n Об'єм двигуна (л) - ${this.engineCapacity}`
    }

    this.increaseMaxSpeed = function newSpeed(a) {
        return this.maxSpeed + a;
    }

    this.changeYear = function newValue(newValue) {
        return this.yearOfManufacture = newValue;
    }

    this.addDriver = function driver(driver) {
        this.driver = driver;
    }
}

let car = new Car('BMW 324', 'Germany', 1986, 130, 2.4);

console.log(car);
console.log(car.drive());
console.log(car.info());
console.log(car.increaseMaxSpeed(30));
console.log(car.changeYear(1989));
car.addDriver({name: 'Vasyl', age: 46, experience: 28});
console.log(car.info());

// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car

class Car1 {
    constructor(model, manufacture, yearOfManufacture, maxSpeed, engineCapacity) {
        this.model = model;
        this.manufacture = manufacture;
        this.yearOfManufacture = yearOfManufacture;
        this.maxSpeed = maxSpeed;
        this.engineCapacity = engineCapacity;
    }

    drive() {
        return `їдемо зі швидкістю ${(this.maxSpeed)} км на годину`;
    }

    info() {
        return this.driver
            ? ` Модель - ${this.model}\n Виробник - ${this.manufacture}\n Рік випуску - ${this.yearOfManufacture}\n Максимальна швидкість (км/год) - ${this.maxSpeed}\n Об'єм двигуна (л) - ${this.engineCapacity}\n Водій:\n Ім'я - ${this.driver.name}\n Років - ${this.driver.age}\n Досвід - ${this.driver.experience}`
            : ` Модель - ${this.model}\n Виробник - ${this.manufacture}\n Рік випуску - ${this.yearOfManufacture}\n Максимальна швидкість (км/год) - ${this.maxSpeed}\n Об'єм двигуна (л) - ${this.engineCapacity}`
    }

    increaseMaxSpeed(newSpeed) {
        return this.maxSpeed + newSpeed;
    }

    changeYear(newValue) {
        return this.yearOfManufacture = newValue;
    }

    addDriver(driver) {
        this.driver = driver;
    }
}

let car1 = new Car1('Ford Mustang Cobra Shelby Jet', 'USA', 1971, 370, 8.5);

console.log(car1);
console.log(car1.drive());
console.log(car1.info());
console.log(car1.increaseMaxSpeed(30));
console.log(car1.changeYear(1989));
car1.addDriver({name: 'Oleksandr', age: 29, experience: 9});
console.log(car1.info());

// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
//     За допомоги циклу знайти яка попелюшка повинна бути з принцом.
//     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку

class Cinderella {
    constructor(name, age, footSize) {
        this.name = name;
        this.age = age;
        this.footSize = footSize;
    }
}

let cinderella = [
    new Cinderella('Mira', 19, 37),
    new Cinderella('Anna', 24, 39),
    new Cinderella('Lisa', 17, 34),
    new Cinderella('Inna', 22, 42),
    new Cinderella('Dina', 14, 31),
    new Cinderella('Olesya', 27, 34),
    new Cinderella('Adda', 20, 27),
    new Cinderella('Anna', 25, 37),
    new Cinderella('Viktoria', 26, 41),
    new Cinderella('Aglaya', 18, 40)
];

class Prince {
    constructor(name, age, foundShoe) {
        this.name = name;
        this.age = age;
        this.foundShoe = foundShoe;
    }
    findLove = (arr) => {
        for (let i = 0; i < arr.length; i++) {
            if (arr[i].footSize === prince.foundShoe) {
                return arr[i];
            }
        }
    }
}

let prince = new Prince('Richard', 28, 27);

console.log(prince.findLove(cinderella));


let find = cinderella.find(item => item.footSize === prince.foundShoe);
console.log(find);
