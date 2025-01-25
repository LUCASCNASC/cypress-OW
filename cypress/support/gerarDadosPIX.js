function gerarChavePixTelefone(ddd = 44) {
    // Gerar o número de celular começando com '9' seguido por 8 dígitos aleatórios
    const numero = '9' + Array.from({ length: 8 }, () => Math.floor(Math.random() * 10)).join('');
  
    // Retornar o telefone no formato DDD + número gerado
    return `${ddd}${numero.slice(0, 1)}${numero.slice(1, 5)}${numero.slice(5)}`;
  }

export { gerarChavePixTelefone }; 