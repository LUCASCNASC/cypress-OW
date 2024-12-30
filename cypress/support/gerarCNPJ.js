//Função para gerar CNPJ

const { default: gerarCpf } = require("./gerarCPF");

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
