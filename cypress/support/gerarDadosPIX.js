function gerarChavePixTelefone(ddd = 44) {
    // Gerar o número de celular começando com '9' seguido por 8 dígitos aleatórios
    const numero = '9' + Array.from({ length: 8 }, () => Math.floor(Math.random() * 10)).join('');
  
    // Retornar o telefone no formato DDD + número gerado
    return `${ddd}${numero.slice(0, 1)}${numero.slice(1, 5)}${numero.slice(5)}`;
  }

function gerarChavePixTelefoneErrada() {
  const numero = Math.floor(1000000000 + Math.random() * 9000000000); // Gera um número aleatório de 10 dígitos
  return numero.toString(); // Retorna o número como string
}

function gerarChavePixEmailErrada() {
  const caracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let resultado = '';
  for (let i = 0; i < 16; i++) {
      const indiceAleatorio = Math.floor(Math.random() * caracteres.length);
      resultado += caracteres[indiceAleatorio];
  }
  return resultado + '@';
}

function gerarChavePixCpfCnpjErrada() {
  const caracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let resultado = '';
  for (let i = 0; i < 16; i++) {
      const indiceAleatorio = Math.floor(Math.random() * caracteres.length);
      resultado += caracteres[indiceAleatorio];
  }
  return resultado + '@';
}


export { gerarChavePixTelefone, gerarChavePixTelefoneErrada, gerarChavePixEmailErrada, gerarChavePixCpfCnpjErrada }; 