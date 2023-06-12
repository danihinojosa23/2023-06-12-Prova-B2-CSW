// Questão 1 //

function isPrimo(number) {
    if (number <= 1) {
      return false;
    }
  
    for (let i = 2; i <= Math.sqrt(number); i++) {
      if (number % i === 0) {
        return false;
      }
    }
  
    return true;
  }
  
  function listPrimos() {
    for (let i = 1; i <= 1000; i++) {
      if (isPrimo(i)) {
        console.log(i);
      }
    }
  }
  
  listPrimos();

// Questão 2 //

function verfSenha(senha) {
    if (senha.length < 8) {
      return false;
    }
  
    var temMaius = false;
    var temMinus = false;
    var temNum = false;
  
    for (var i = 0; i < senha.length; i++) {
      var char = senha.charAt(i);
  
      if (char >= '0' && char <= '9') {
        temNum = true;
      } else if (char >= 'a' && char <= 'z') {
        temMinus = true;
      } else if (char >= 'A' && char <= 'Z') {
        temMaius = true;
      }
    }
  
    if (!temMaius || !temMinus || !temNum) {
      return false;
    }
  
    return true;
  }

// Questão 3 //

function fatorial(num) {
    let resultado = 1;
    for (let i = 1; i <= num; i++) {
      resultado *= i;
    }
    return resultado;
  }
  
  for (let i = 1; i <= 10; i++) {
    console.log(`O fatorial de ${i} é ${fatorial(i)}`);
  }

// Questão 4 //

function isQuadPer(num) {
    let sqrt = Math.sqrt(num);
    return sqrt === Math.floor(sqrt);
  }
  
  console.log(isQuadPer(25));
  console.log(isQuadPer(10));
