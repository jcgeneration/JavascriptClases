    /**
     * Clase Person que representa a una persona y su información
     */
    class Person {
      /** @property {String} name - Identifica el nombre de la persona  */
        name = "";
      /** @property {String} email - Identifica el correo electrónico de la persona */
        email = "";
      /** @property {Number} age - Identifica la edad de la persona */
        age = 15;
      /** @property {String} resume - Almacena el resumen de la persona */
        resume = "";
        static total = 0;  // solo existe una vez y se accede mediante la clase
     /**
     * Constructor default de la clase persona
     * @param {String} name - Parámetro para asignar el nombre de la persona
     * @param {String} email - Parámetro para asignar el correo electrónico de la persona
     * @param {Number} age - Parámetro para asignar la edad de la persona
     * @param {String} resume - Parámetro para asignar el resumen de la persona
     */
        constructor (name, email, age, resume){
            this.name = name;
            this.email = email;
            this.age = age;
            this.resume = resume;
            Person.total++;
            this.id = Person.total;
        }//constructor
    /**
     * Método que imprime la información de la persona
     * @param {HTMLElement} div - Div donde se agrega la Card de la persona
     */
        printInfo(div) {
            div.innerHTML += `<div class="card bg-light mb-3" style="cursor:pointer;" style="max-width: 18rem;" id="card_${this.id}">
            <div class="card-header">${this.id}.- ${this.name} - ${this.age}</div>
            <div class="card-body">
              <h5 class="card-title">${this.email}</h5>
              <p class="card-text">${this.resume}</p>
            </div>
          </div>`;
        }//printInfo
        hide() {
          document.getElementById("card_" + this.id).style.display = "none";
          Swal.fire(`Se ocultó a ${this.name}`);
        }//hide
        show() {
          document.getElementById("card_"+this.id).style.display = "block";
        }//show
        getElement() {
          return document.getElementById("card_"+this.id);
        }// getElement
        static printTotal (div) {
        div.innerHTML += `<div class="alert alert-primary" role="alert">
            Total de Personas ${Person.total}</div>`;
        }//printTotal
    }//class Person
/**
 * Clase Employee que representa a un Empleado y su información
 * @extends Person
 */
    class Employee extends Person {
       /** @property {String} department - Almacena el departamento del empleado */  
      department = "";
      /** @property {Number} salary - Almacena el salario del empleado */  
        salary = 0.0;
        /**
     * Constructor default de la clase empleado
     * @param {String} name - Parámetro para asignar el nombre de la empleado
     * @param {String} email - Parámetro para asignar el correo electrónico de la empleado
     * @param {Number} age - Parámetro para asignar la edad de la empleado
     * @param {String} resume - Parámetro para asignar el resumen de la empleado
     * @param {String} department - Representa el departamento del empleado
     * @param {Number} salary - Representa el salario por día del empleado
     */
        constructor(name, email, age, resume, department, salary) {
          super(name, email, age, resume);
          this.department = department;
          this.salary = salary;
        }//constructor
        printInfo(div) {
          super.printInfo(div);
          this.getElement().getElementsByClassName("card-body")[0].insertAdjacentHTML("beforeend", 
          `<p class="card-text">Department: ${this.department}</p>
          <p class="card-text">Salary:$ ${this.calculateSalary()}</p>`);
        }// prinInfo
        calculateSalary() {
            return ((this.salary * 21) * 1.16).toFixed(2);
        }//calculateSalary 
    }//Employee

    class Manager extends Employee{
        numberOfEmployees = 0;
        bonus = 0.0;
        constructor(name, email, age, resume, department, salary, 
                                                         numberOfEmployees, bonus) {
          super(name, email, age, resume, department, salary);
          this.numberOfEmployees = numberOfEmployees;
          this.bonus = bonus;
        }//constructor
        printInfo(div) {
          super.printInfo(div);
          this.getElement().getElementsByClassName("card-body")[0].insertAdjacentHTML("beforeend", 
          `<p class="card-text">Number of Employees: ${this.numberOfEmployees}</p>
          <p class="card-text">Bonus:$ ${this.bonus}</p>`);
        }// prinInfo
        calculateSalary() {
          return (((this.salary * 21)+(this.numberOfEmployees*this.bonus)) * 1.16).toFixed(2);
      }//calculateSalary 
    }//class Manager

    let cards = document.getElementById("tarjetas");
    let andy=new Employee ("Andrea Uribe", "andrea.uribe@generation.org", 18, "Mentora CH13", "Mentoría", 500.50);
    andy.printInfo(cards);
    let ali = new Employee("Aline Guzmán", "aline.guzman@generation.org", 18, "Mentora CH13", "Mentoría", 490);
    ali.printInfo(cards);
    let amy = new Employee("Amizaday Hernández","amizaday.hernandez@idr.edu.mx", 18, "Instructora CH13", "Capacitación", 520.00);
    amy.printInfo(cards);
    let marina = new Manager("Marina Pardo", "marina.pardo@generation.org", 18, "Coordinadora", "Capacitación", 550, 15, 100);
    marina.printInfo(cards);
   andy.getElement().addEventListener("click", (e) => andy.hide() );
   ali.getElement().addEventListener("click", (e) => ali.hide() );
   amy.getElement().addEventListener("click", (e) => amy.hide() );
   marina.getElement().addEventListener("click", (e) => marina.hide() );
   
   Person.printTotal(document.getElementById("total"));
     document.getElementsByClassName("bi-eye")[0].addEventListener("click", (event)=> {
    andy.show(); ali.show(); amy.show(); marina.show(); 
   }
   
   );
    

// const car = {name: "Fiat", model:"500" , weight:"850kg", color:"white"};
// const car1 = {name: "VW", model:"vocho" , weight:"750kg", color:"red"};
// console.log(typeof(car));
// console.log(car.name, car.color, car.model);

// console.log(typeof(car1));
// console.log(car1.name, car1.color, car1.model);

