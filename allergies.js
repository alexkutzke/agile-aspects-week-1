//
// Cauê Veiga
// 

function obterAlergias(pontuacao) {
  const alergenos = {
    1: 'ovos',
    2: 'amendoins',
    4: 'frutos do mar',
    8: 'morangos',
    16: 'tomates',
    32: 'chocolate',
    64: 'pólen',
    128: 'gatos'
  };

  const alergicoA = [];
  for (const valor in alergenos) {
    if (pontuacao & valor) {
      alergicoA.push(alergenos[valor]);
    }
  }

  return alergicoA;
}

function eAlergico(pontuacao, item) {
  const alergenos = obterAlergias(pontuacao);
  return alergenos.includes(item);
}

// Testes
const pontuacaoTom = 34;
console.log(eAlergico(pontuacaoTom, 'amendoins')); //true
console.log(eAlergico(pontuacaoTom, 'morangos')); //false

const outraPontuacao = 257;
console.log(eAlergico(outraPontuacao, 'ovos')); //  true
console.log(eAlergico(outraPontuacao, 'gatos')); // false

const maisUmaPontuacao = 88;
console.log(obterAlergias(maisUmaPontuacao)); // amendoins, morangos, gatos
