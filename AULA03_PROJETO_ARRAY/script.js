var lista = ['aluno1', 'aluno2', 'aluno3', 100];

//buscando elemento pela posição dentro do array
console.log(lista);
console.log(lista[3]);

//descobrindo o tamanho do array
console.log(lista.length);

//saber se um elemento está dentro do array
console.log(lista.indexOF('aluno3'));
console.log(lista.indexOF('aluno4'));

//alterando um elemento dentro do array
lista[0]="Asdrubal";
console.log(lista);

//adicionar um elemento ao array
lista.push('aluno4');
console.log(lista);

//removendo o primeiro elemento da lista
lista.shift();
console.log(lista);

//removendo o ultimo elemento da lista
lista.pop();
console.log(lista);

//retornando os elemntos da lista com separador
lista.join(',');
console.log(lista.join(' - '));