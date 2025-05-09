class User {
    constructor(name, age, email) {
        this.name = name;
        this.age = age;
        this.email = email;
    }

    get name() {
        return this._name;
    }

    get age() {
        return this._age;
    }

    get email() {
        return this._email;
    }

    
    set name(newName) {
        if (newName.length > 2) {
            this._name = newName;
        } else {
            console.log('Name should be longer than 2 characters.');
        }
    }

    set age(newAge) {
        if (newAge >= 0 && newAge <= 120) {
            this._age = newAge;
        } else {
            console.log('Please provide a valid age.');
        }
    }

    set email(newEmail) {
        const symbols = /[.]/.test(newEmail) && /[@]/.test(newEmail);
        if (symbols) {
            this._email = newEmail;
        } else {
            console.log('Invalid email format.');
        }
    }

    showInfo() {
        console.log(`Name: ${this._name}`);
        console.log(`Age: ${this._age}`);
        console.log(`Email: ${this._email}`);
    }
}

const user1 = new User('Ana', 25, 'ana@example.com');


console.log(user1.name);
console.log(user1.age);
console.log(user1.email);


user1.name = 'Gio';
user1.age = 30;
user1.email = 'Gio@gmail.com';

user1.showInfo();

const user2 = new User("I", -5, "invalidi.invalidi/com")
user2.showInfo()
console.log(user2)