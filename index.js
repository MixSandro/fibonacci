function sequenciafibonacci(){
// declarar a lista vazia, essa lista irá conter a sequência de Fibonacci
let sequencia = []

//Adiciona o valor 0, na posição 0 da lista
 sequencia[0] = 0

 //Adiciona o valor 1, na posição 1 da lista
 sequencia[1] = 1


 // percorrer uma lista
 // começando do número dois, enquanto 2 for menor que 8, continua repetindo o laço
   
 for (let index = 2; index <= 10; index++) {
    //Fn = Fn - 1 + Fn - 2
    sequencia[index] = sequencia[index - 1] + sequencia[index - 2]
    // sequencia[2] = sequencia[1] + sequencia[0]
    // index = index + 1
    // index = 3
    // sequencia[3] = sequencia[2] + sequencia[1]
    // index = index + 1
    // index = 4
    // sequencia[4] = sequencia[3] + sequencia[2]
    // index = index + 1
    // index = 5
    // sequencia[5] = sequencia[4] + sequencia[3]
    console.log(sequencia[index])
 }




}

sequenciafibonacci()