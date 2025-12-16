// -------- CHAVES PIX CORRETAS --------

/**
 * Gera uma chave PIX de telefone válida (sem formatação, apenas números).
 * @param {number} ddd - DDD do telefone (default: 44)
 * @returns {string}
 */
function generatePixPhoneKey(ddd = 44) {
  const number = '9' + Array.from({ length: 8 }, () => Math.floor(Math.random() * 10)).join('');
  return `${ddd}${number.slice(0, 1)}${number.slice(1, 5)}${number.slice(5)}`;
}

/**
 * Gera uma chave PIX de email válida.
 * @returns {string}
 */
function generatePixEmailKey() {
  const chars = 'abcdefghijklmnopqrstuvwxyz0123456789';
  let username = '';
  for (let i = 0; i < 10; i++) {
    const idx = Math.floor(Math.random() * chars.length);
    username += chars[idx];
  }
  return username + '@gmail.com';
}

/**
 * Gera uma chave PIX de CPF válida (apenas dígitos).
 * @returns {string}
 */
function generatePixCPFKey() {
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
 * Gera uma chave PIX aleatória válida (alfanumérica, 4 grupos de 8 caracteres separados por '-').
 * @returns {string}
 */
function generatePixRandomKey() {
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let key = '';
  for (let i = 0; i < 4; i++) {
    let group = '';
    for (let j = 0; j < 8; j++) {
      const idx = Math.floor(Math.random() * chars.length);
      group += chars.charAt(idx);
    }
    key += group;
    if (i < 3) key += '-';
  }
  return key;
}

// -------- CHAVES PIX INCORRETAS --------

/**
 * Gera uma chave PIX de telefone inválida (formato incorreto).
 * @returns {string}
 */
function generateWrongPixPhoneKey() {
  // Número aleatório de 10 dígitos, sem DDD ou padrão de celular
  const number = Math.floor(1000000000 + Math.random() * 9000000000);
  return number.toString();
}

/**
 * Gera uma chave PIX de email inválida (sem domínio).
 * @returns {string}
 */
function generateWrongPixEmailKey() {
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let result = '';
  for (let i = 0; i < 16; i++) {
    const idx = Math.floor(Math.random() * chars.length);
    result += chars[idx];
  }
  return result + '@';
}

/**
 * Gera uma chave PIX de CPF/CNPJ inválida (formato aleatório).
 * @returns {string}
 */
function generateWrongPixCpfCnpjKey() {
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let result = '';
  for (let i = 0; i < 16; i++) {
    const idx = Math.floor(Math.random() * chars.length);
    result += chars[idx];
  }
  return result + '@';
}

// Exportação padronizada em inglês para consistência
export {
  generatePixPhoneKey,
  generateWrongPixPhoneKey,
  generateWrongPixEmailKey,
  generateWrongPixCpfCnpjKey,
  generatePixEmailKey,
  generatePixCPFKey,
  generatePixRandomKey
};