/*function Person(firstName,birthYear){
    console.log(this);
    this.firstName=firstName;
    this.birthYear=birthYear; 
}

Person.prototype.calculateAge = function(){
    console.log("Calculating age!");

}

const jawad = new Person("Jawad",12);
jawad.calculateAge()
 

console.log(jawad.__proto__.__proto__);

 Array.prototype.unique=function(){
    return [...new Set(this)]
 }

 const arr=  [1,1,1,2,3,2,2,3];

 console.log(arr.unique() )


*/
class Person{
    constructor(fullName,birthYear){
        this.fullName=fullName;
        this.birthYear=birthYear;
        this.school="st";
    }
    calcAge(){
        console.log(2024-this.birthYear)
    }
    get age(){
        return 2037-this.birthYear
    }
    set fullName(name){
        if(name.includes(" ")){
            this._fullName=name;
        }
    }
    get fullName(){
        return this._fullName;
    }
    static hey(){
        console.log(`Pfffsssss`)
    }
}
 
class Student extends Person{
    constructor(fullName,birthYear,course){
        super(fullName,birthYear)
        this.course=course; 
    }
    introduce(){
        console.log(`Hi My Name is ${this.fullName} and I am Enrolled in ${this.course}`)
    }
    calcAge(){
        console.log(`I am ${2037-this.birthYear} years old but as student i feel more like 40`)
    } 
}

 





 /*
const account = {
    owner:"Jonas",
    movements : [200,530,120,300],
    get latest(){
        return this.movements.slice(-1).pop();
    },
    set latest(move){
        this.movements.push(move)
    }
}

account.latest=19;


console.log(account.movements);

console.log(account.latest)




const a = Array.from({length:10},(_,i)=>i+1);
a



class Car{
    constructor(make,speed){
        this.make=make;
        this.speed=speed;
    }
    accelerate(){
        this.speed+=10;
        console.log(`${this.make} is going at ${this.speed} km/h`)
    }
    break(){
        this.speed-=10;
        console.log(`${this.make} is going at ${this.speed} km/h`)
    }
    get speedUS(){
        return this.speed/1.6;
    }
    set speedUS(speed){
        this.speed = speed*1.6
    }
}

const ford = new Car("Ford",100);
console.log(ford.speedUS);
ford.accelerate();
ford.accelerate();
ford.accelerate();
ford.break();
ford.speedUS = 100
console.log(ford.speed)
  */
 
class Account {

    locale="US-EN";

    

    //Private Feilds
    #movements = []
    #pin;

    constructor(owner,currency,pin){
        this.owner=owner;
        this.currency = currency;
        this.#pin=pin;
        // this._movements = [];
        // this.locale = "jajja" 

        console.log(`Thanks for opening an account, ${this.owner}`)
    }

    getMovement(){
        return this.#movements;
    }

    deposit(val){
        this.#movements.push(val);
        return this;  
    }
    withdraw(val){
        this.deposit(-val);
        return this;
    }

    #approveLoan(val){
        if(val){
            console.log(val)
            return true;
        }else{
            console.log(val);
            return false
        }
    }

    static helper(){
        console.log("Only avalibale in Class")
    }

    requestLoan(val){
        if(this.#approveLoan(val)===true){
            console.log(`Loan Granted`)
        }else{
            console.log(`Loan Rejected`)
        }
    }


}
Account.helper();


const acc1 = new Account("Jawad","EUR",1111);

acc1.deposit(500).deposit(399).withdraw(199)

console.log(acc1.getMovement())



// acc1.movements.push(250);
// acc1.movements.push(-140);
// acc1.deposit(250);
// acc1.withdraw(140)
 
 
// // acc1.#approveLoan(false); 
// acc1.requestLoan(110)
// // console.log(acc1.getMovement())
 
// console.log(acc1.getMovement());

// console.log(acc1.#movements)


// acc1