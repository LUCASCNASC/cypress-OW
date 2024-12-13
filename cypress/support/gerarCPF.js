// cypress/support/gerarCpf.js

//Função para gerar CPF
function gerarCpf() {
    const randomDigits = Array.from({ length: 9 }, () => Math.floor(Math.random() * 10));
    const d1 = calcularDigito(randomDigits);
    const d2 = calcularDigito([...randomDigits, d1]);
    return [...randomDigits, d1, d2].join('');

    function calcularDigito(digits) {
        const soma = digits.reduce((acc, val, index) => acc + val * (digits.length + 1 - index), 0);
        const resto = soma % 11;
        return resto < 2 ? 0 : 11 - resto;
    }
}

export default gerarCpf;

