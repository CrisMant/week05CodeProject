// Parking# and Cars on those Parking
class Car {
    constructor(name, position) {
    this.name = name;
    this.position = position;
    }
    
    describe() {
    //console.log(`${this.name} plays ${this.position}`)
    return `${this.name} is parked at parking# ${this.position}`;
    }
    }
    class Parking {
    constructor(name) {
    this.name = name;
    this.cars = [];
    }
    
    addCar(car) {
    if (car instanceof Car) {
    this.cars.push(car);
    } else {
    throw new Error(`You can only add an instance of Car. 
    argument is not a car: ${car}`);
    }
    }
    
    describe() {
    return `${this.name} has ${this.cars.length} cars.`;
    }
    }
    class Menu { // what drives the application and our choices
    constructor() {
    this.parkings = [];
    this.selectedParking = null; // manage one parking at a time
    }
    
    start() { // entry point to application
    let selection = this.showMainMenuOptions(); 
    while (selection != 0) {
    switch(selection) {
    case '1' :
    this.createParking();
    break;
    case '2' :
    this.viewParking();
    break;
    case '3' :
    this.deleteParking();
    break;
    case '4' :
    this.displayParking();
    break;
    default:
    selection = 0;
    }
    selection = this.showMainMenuOptions();
    }
    alert('Goodbye!');
    }
    
    
    showMainMenuOptions() {
    return prompt(`
    0) exit
    1) create a new parking name
    2) view a parking name
    3) delete a parking name
    4) display all parkings
    `);
    }
    
    showParkingMenuOptions(parkingInfo) {
    return prompt(`
    0) back
    1) add a new car
    2) delete a car
    -----------------
    ${parkingInfo}
    `);
    }
    
    displayParking() {
    let parkingString = '';
    for (let i = 0; i < this.parkings.length; i++) {
        parkingString += i+ ') ' + this.parkings[i].name + '\n';
    }
    alert(parkingString);
    }
    
    createParking() {
    let name = prompt('Enter name for new parking: ');
    this.parkings.push(new Parking(name));
    }
    
    viewParking() {
    let index = prompt("Enter the index of the parking that you want to view:");
    if (index > -1 && index < this.parkings.length) {
    this.selectedParking = this.parkings[index];
    let description = 'Parking Name: ' + this.selectedParking.name + '\n';
    description += ' ' + this.selectedParking.describe() + '\n ';
    for (let i = 0; i < this.selectedParking.cars.length; i++) {
    // description += i + ') ' + this.selectedParking.cars[i].name + ' - '
    // + this.selectedParking.cars[i].position + '\n';
    description += i + ') ' + this.selectedParking.cars[i].describe() + '\n';
    }
    let selection1 = this.showParkingMenuOptions(description);
    switch (selection1) {
    case '1' :
    this.createCar();
    break;
    case '2' :
    this.deleteCar();
    }
    } // validate user input
    }
    
    deleteParking() {
    let index = prompt('Enter the index of the parking that you wish to delete: ');
    if (index > -1 && index < this.parkings.length) {
    this.parkings.splice(index,1);
    }
    }
    
    
    createCar() {
    let name = prompt('Enter name for new car: ');
    let position = prompt('Enter parking# for new car: ');
    //this.selectedParking.cars.push(new Car(name, position));
    this.selectedParking.addCar(new Car(name,position));
    }
    
    deleteCar() {
    let index = prompt('Enter the index of the car that you wish to delete: ');
    if (index > -1 && index < this.selectedParking.cars.length) { this.selectedParking.cars.splice(index,1);
    }
    }
    }
    let menu = new Menu();
    menu.start();
    