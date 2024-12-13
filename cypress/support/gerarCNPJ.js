//Função para gerar CNPJ
// cypress/support/gerarCnpj.js

const { default: gerarCpf } = require("./gerarCPF");

// function gerarCNPJ() {
//     const randomNumber = () => Math.floor(Math.random() * 10);

//     // Gera a base do CNPJ (12 primeiros dígitos)
//     let cnpjBase = '';
//     for (let i = 0; i < 12; i++) {
//         cnpjBase += randomNumber();
//     }

//     // Função para calcular o dígito verificador
//     const calcularDigito = (cnpj, peso) => {
//         let soma = 0;
//         for (let i = 0; i < cnpj.length; i++) {
//             soma += cnpj[i] * peso;
//             peso--;
//             if (peso < 2) {
//                 peso = 9;
//             }
//         }
//         const resto = soma % 11;
//         return resto < 2 ? 0 : 11 - resto;
//     };

//     const primeiroDigito = calcularDigito(cnpjBase, 5);
//     const segundoDigito = calcularDigito(cnpjBase + primeiroDigito, 6);

//     // Monta o CNPJ completo, com os últimos 4 dígitos fixos em "0001"
//     const cnpjCompleto = `${cnpjBase}${primeiroDigito}${segundoDigito}0001`;
    
//     // Formata o CNPJ no padrão XX.XXX.XXX/0001-XX
//     return `${cnpjCompleto.slice(0, 2)}.${cnpjCompleto.slice(2, 5)}.${cnpjCompleto.slice(5, 8)}/0001-${cnpjCompleto.slice(8, 14)}`;
// }


// export default gerarCNPJ;


// cypress/support/commands.js

// cypress/support/cnpjGenerator.js

const gerarCNPJ = () => {
    const randomDigits = () => Math.floor(Math.random() * 10);
  
    // Gera os primeiros 8 dígitos aleatórios
    const baseCNPJ = Array.from({ length: 8 }, randomDigits).join('');
    const matriz = '0001'; // Para matriz
  
    // Função para calcular os dígitos verificadores
    const calculateDigit = (cnpj, position) => {
      const weights = position === 1 
        ? [5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2]
        : [6, 5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2];
  
      const total = cnpj.split('').reduce((sum, digit, index) => {
        return sum + digit * weights[index];
      }, 0);
  
      const remainder = total % 11;
      return remainder < 2 ? 0 : 11 - remainder;
    };
  
    const firstDigit = calculateDigit(baseCNPJ + matriz, 1);
    const secondDigit = calculateDigit(baseCNPJ + matriz + firstDigit, 2);
  
    // Monta o CNPJ no formato XX.XXX.XXX/0001-XX
    return `${baseCNPJ.substr(0, 2)}.${baseCNPJ.substr(2, 3)}.${baseCNPJ.substr(5, 3)}/${matriz}-${firstDigit}${secondDigit}`;
  };


module.exports = gerarCNPJ;
