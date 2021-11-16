// var n1 = 5;
// var n2 = 3;
// var nome = 'cientista';
// var idade = 20;
// var idade2 = 1;
// var frase = 'Japão é o melhor time do mundo';
// // alert(nome + ' tem ' + idade + 'anos');

// console.log(nome);
// console.log(idade + idade2);
// console.log(n1 * n2);
// console.log(frase.toLocaleLowerCase());
// console.log(frase.replace('Japão', 'Angola'));

// var lista = ['maçã', 'pera', 'laranja'];
// lista.push('uva');
// lista.pop();
// console.log(lista);
// console.log(lista.toString());
// console.log(lista.join('-'));

// var fruta = {
//   nome: 'maçã',
//   cor: 'vermelha',
// };
// console.log(fruta.nome);
// alert(fruta.nome);

// var fruta = [
//   {
//     nome: 'maçã',
//     cor: 'vermelha',
//   },
//   {
//     nome: 'uva',
//     cor: 'roxa',
//   },
// ];
// console.log(fruta[0].nome)

// var idade = prompt('qual a sua idade');

// if (idade >= 18) {
//   alert('maior de idade');
// } else {
//   alert('menor de idade');
// }

// var count = 0;
// while (count <= 5) {
//   console.log(count);
//   count++;
// }

// var count;
// for (count = 0; count <= 5; count++) {
//   console.log(count);
// }

// var d = new Date();

// console.log(d.getDay());
// console.log(d.getHours());
// console.log(d.getMinutes());

// function soma(x, y) {
//   return x + y;
// }

// function setReplace(frase, nome, novo_nome) {
//   return frase.replace(nome, novo_nome);
// }

// console.log(soma(5, 10));

// console.log(setReplace('vai Japão', 'Japão', 'Angola'));

// function validaIdade(idade) {
//   var validar;
//   if (idade >= 18) {
//     validar = true;
//   } else {
//     validar = false;
//   }
//   return validar;
// }

// var idade = prompt('Qual a sua idade');
// console.log(validaIdade(idade));

function clicou() {
  document.getElementById('redirect').innerHTML = '<b>Obrigado por Clicar</b>';
}

function Redirect() {
  window.open('/cientista');
  window.location.href = '/avogadro';
}

function Trocar(e) {
  //   document.getElementById('mouseover').innerHTML =
  //     'Obrigado por passar o mouse';
  e.innerHTML = 'Obrigado por passar o mouse';
}

function Voltar(e) {
  // document.getElementById('mouseover').innerHTML =
  // 'Passar o mouse aqui';
  e.innerHTML = 'Passar o mouse aqui';
}

function Load() {
  console.log('página carregada');
}

function funcChange(e) {
    console.log(e.value)
}