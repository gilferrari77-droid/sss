function corrigir(gabarito, respostas, valores) {
  let nota = 0;

  for (let i = 0; i < gabarito.length; i++) {
    if (gabarito[i] === respostas[i]) {
      nota += valores[i];
    }
  }

  return nota;
}

module.exports = corrigir;