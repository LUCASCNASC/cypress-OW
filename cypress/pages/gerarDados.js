/**
 * Utilitários para geração de dados aleatórios para testes.
 * Padronizado para facilitar manutenção e reuso.
 */

//@returns {string}
const generateCNPJ = () => {
  const randomDigits = () => Math.floor(Math.random() * 10);

  // Gera os primeiros 8 dígitos aleatórios
  const baseCNPJ = Array.from({ length: 8 }, randomDigits).join('');
  const matriz = '0001';

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

/**
 * Gera um CPF válido (apenas dígitos).
//@returns {string}
 */
function generateCPF() {
  const randomDigits = Array.from({ length: 9 }, () => Math.floor(Math.random() * 10));
  const d1 = calculateDigit(randomDigits);
  const d2 = calculateDigit([...randomDigits, d1]);
  return [...randomDigits, d1, d2].join('');

  function calculateDigit(digits) {
    const sum = digits.reduce((acc, val, index) => acc + val * (digits.length + 1 - index), 0);
    const rest = sum % 11;
    return rest < 2 ? 0 : 11 - rest;
  }
}

/**
 * Gera um e-mail aleatório do domínio @gmail.com.
 * @returns {string}
 */
function generateRandomEmail() {
  const chars = 'abcdefghijklmnopqrstuvwxyz0123456789';
  let username = '';
  for (let i = 0; i < 10; i++) {
    const idx = Math.floor(Math.random() * chars.length);
    username += chars[idx];
  }
  return username + '@gmail.com';
}

/**
 * Gera um nome aleatório (primeiro nome + sobrenome).
 * @returns {string}
 */
function generateRandomName() {
  const firstNames = ['Ana', 'Carlos', 'João', 'Maria', 'Pedro', 'Beatriz', 'Lucas', 'Juliana', 'Rafael', 'Fernanda'];
  const lastNames = ['Silva', 'Oliveira', 'Santos', 'Pereira', 'Costa', 'Almeida', 'Rodrigues', 'Lima', 'Martins', 'Gomes'];

  const name = firstNames[Math.floor(Math.random() * firstNames.length)];
  const surname = lastNames[Math.floor(Math.random() * lastNames.length)];

  return `${name} ${surname}`;
}

/**
 * Gera um nome de empresa fictício.
 * @returns {string}
 */
function generateCompanyName() {
  const prefixes = ['Tech', 'Global', 'Next', 'Mega', 'Prime', 'Super', 'Creative', 'Vision', 'Future', 'Eco'];
  const suffixes = ['Solutions', 'Systems', 'Group', 'Enterprises', 'Industries', 'Services', 'Corporation', 'Labs', 'Inc', 'Consulting'];
  const sectors = ['Consulting', 'Development', 'Design', 'Marketing', 'Software', 'Digital', 'E-commerce', 'Security', 'Finance', 'Health'];

  const prefix = prefixes[Math.floor(Math.random() * prefixes.length)];
  const suffix = suffixes[Math.floor(Math.random() * suffixes.length)];
  const sector = sectors[Math.floor(Math.random() * sectors.length)];

  return `${prefix} ${sector} ${suffix}`;
}

/**
 * Gera um telefone celular válido no formato (44) 9XXXX-XXXX.
 * @returns {string}
 */
function generateRandomPhone() {
  const ddd = 44;
  const cellphone = '9' + Array.from({ length: 8 }, () => Math.floor(Math.random() * 10)).join('');
  return `(${ddd}) ${cellphone.slice(0, 5)}-${cellphone.slice(5)}`;
}

/**
 * Gera um tipo de relacionamento aleatório entre duas pessoas.
 * @returns {string}
 */
function generateRelationship() {
  const types = [
    "amigo", "namorada", "namorado", "esposa", "esposo", "mãe", "pai",
    "irmão", "irmã", "tia", "tio", "avó", "parente", "colega de trabalho",
    "ex-namorado(a)", "mentor(a)", "inimigos"
  ];
  return types[Math.floor(Math.random() * types.length)];
}

/**
 * Gera uma observação aleatória com até 30 caracteres.
 * @returns {string}
 */
function generateObservation() {
  const words = [
    "amor", "vida", "felicidade", "sucesso", "trabalho", "amizade", "vontade",
    "carinho", "força", "esperança", "paz", "sabedoria", "confiança", "saúde",
    "alegria", "crescimento", "desafio", "sonhos", "coragem", "motivação", "Corinthians",
    "Futebol"
  ];
  let phrase = "";
  while (phrase.length < 30) {
    const w = words[Math.floor(Math.random() * words.length)];
    phrase += w + " ";
  }
  return phrase.trim().slice(0, 30);
}

/**
 * Retorna a data de amanhã no formato dd/mm/yyyy.
 * @returns {string}
 */
function oneDayAfterToday() {
  const today = new Date();
  today.setDate(today.getDate() + 1);
  const day = String(today.getDate()).padStart(2, '0');
  const month = String(today.getMonth() + 1).padStart(2, '0');
  const year = today.getFullYear();
  return `${day}/${month}/${year}`;
}

/**
 * Retorna a data daqui a 31 dias no formato dd/mm/yyyy.
 * @returns {string}
 */
function thirtyOneDaysAfterToday() {
  const today = new Date();
  today.setDate(today.getDate() + 31);
  const day = String(today.getDate()).padStart(2, '0');
  const month = String(today.getMonth() + 1).padStart(2, '0');
  const year = today.getFullYear();
  return `${day}/${month}/${year}`;
}

// Exporte padronizado (nomes em inglês para consistência)
export {
  generateCPF,
  generateRandomPhone,
  generateRandomEmail,
  generateRandomName,
  generateCNPJ,
  generateCompanyName,
  generateRelationship,
  generateObservation,
  oneDayAfterToday,
  thirtyOneDaysAfterToday
};