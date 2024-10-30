// Declaração de um objeto chamado Evinilson com algumas propriedades iniciais
const Evinilson = {
    nickName: 'Nilson',               // Propriedade nickName com o valor 'Nilson'
    age: 23,                          // Propriedade age com o valor 23
    occupation: 'Software Engineer',  // Propriedade occupation com o valor 'Software Engineer'
    hobbies: ['reading', 'hiking', 'coding']  // Propriedade hobbies com uma lista de hobbies
};

// Exibe o valor da propriedade 
console.log(Evinilson.nickName);
console.log(Evinilson.age);
console.log(Evinilson.hobbies);

// Adiciona uma nova propriedade chamada address com o valor 'Praia' ao objeto Evinilson
Evinilson.address = "Praia";

// Atualiza o valor da propriedade nickName para 'Nelson'
Evinilson.nickName = "Nelson";
console.log(Evinilson.nickName);
console.log(Evinilson.address);

// Adiciona um "método" chamado getage ao objeto Evinilson, que retorna o valor da propriedade age
Evinilson.getage = function () {
    return this.age;
}

Evinilson.getname = function() {
    return this.nickName;
}

// Chama o método getage e exibe o valor retornado no console (23)
console.log(Evinilson.getage());
console.log(Evinilson.getname())


Evinilson.getoccupation = function() {
    return this.occupation;
}

console.log(Evinilson.getoccupation())



// Declaração do objeto Cledilson com as propriedades firstName e lastName
const Cledilson = {
    firstName: 'Lucas',
    lastName: 'Frreira',
    
    // Método que retorna o nome completo
    getFullName: function() {
        return `${this.firstName} ${this.lastName}`;
    }
};



// Chama o método getFullName e exibe o nome completo no console
console.log(Cledilson.getFullName()); // Saída: Lucas Frreira




// Declaração de um objeto chamado Mena com propriedades firstName e lastName
const Mena = {
    firstName: 'Maria',      // Propriedade firstName com o valor 'Maria'
    lastName: 'Filomena'     // Propriedade lastName com o valor 'Filomena'
}

// Adiciona um método chamado getFullName ao objeto Mena
Mena.getFullName = function() {
    // O método retorna o nome completo concatenando firstName e lastName com um espaço entre eles
    return `${this.firstName} ${this.lastName}`;
}

// Chama o método getFullName e exibe o nome completo no console
console.log(Mena.getFullName()); // Saída: Maria Filomena



// Declaração do objeto Carlinhos com propriedades firstName e lastName
const Carlinhos = {
    firstName: 'josé',      // Propriedade firstName com o valor 'josé'
    lastName: 'Ferreira',   // Propriedade lastName com o valor 'Ferreira'
    
    // Método showname que aceita um template e exibe o nome completo
    showname(template) {
        console.log(template + " " + this.firstName + " " + this.lastName);
    },
};

// Chama o método showname com um argumento
Carlinhos.showname("Nome completo:"); // Saída: Nome completo: josé Ferreira



// Função construtora Person que cria um novo objeto Person
function Person(firstName, lastName) {
    this.firstName = firstName;  // Atribui o parâmetro firstName à propriedade firstName do objeto
    this.lastName = lastName;     // Atribui o parâmetro lastName à propriedade lastName do objeto
}

// Cria uma nova instância de Person chamada denise, passando os valores "jaquiline" e "ferrira"
const denise = new Person("jaquiline", "ferrira");

console.log("seu nome é ", denise.firstName); // Saída: seu nome é jaquiline
console.log("seu sobrenome é ", denise.lastName); // Saída: seu sob


// Declaração da classe People
class People {
    // O construtor recebe um parâmetro name
    constructor(name) {
        this.name = name; // Atribui o parâmetro name à propriedade name do objeto
    }

    // Método que retorna o nome
    getName() {
        return this.name; // Retorna o valor da propriedade name
    }

    // Método para definir um novo nome
    setName(newName) {
        this.name = newName; // Atribui o novo nome à propriedade name
    }
}

// Cria uma nova instância da classe People chamada vania, passando o valor "safende"
const vania = new People("safende");

// Exibe no console o nome retornado pelo método getName
console.log(vania.getName()); // Saída: safende

// Define um novo nome usando o método setName
vania.setName("vila Nova"); // Atualiza o nome para "vila Nova"

// Exibe no console o novo nome retornado pelo método getName
console.log(vania.getName()); // Saída: vila Nova
