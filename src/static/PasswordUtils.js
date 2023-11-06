const letters = 'abcdefghijklmnopqrstuvwxyz';
const symbols = ".,!?;:'\"-_+-*/=<>[]{}()@#$%&|\\~!?#^`";
const numbers = '1234567890';

export function generatePassword(formData) {
    const length = formData.length;
    const prefix = formData.prefix;
    const suffix = formData.suffix;

    if(prefix.length + suffix.length === length) {
        return prefix + suffix;
    }

    let password = prefix, pool = getPool(formData.numbers, formData.symbols);
    const infixationLength = length - (prefix.length + suffix.length);

    for(let i = 0; i < infixationLength; i++) {
        password += getKey(pool, formData.uppercase);
    }

    return password + suffix;
}

function getPool(hasNumbers, hasSymbols) {
    let pool = letters;

    if (hasNumbers) {
        pool += numbers;
    }
    
    if (hasSymbols) {
        pool += symbols;
    }

    return pool;
}

function getKey(pool, hasUppercase) {
    const key = pool.charAt(getRandom(pool.length));

    if(hasUppercase && letters.includes(key)) {
        if(getRandom(3) > 1) {
            return key.toUpperCase();
        }
    }

    return key;
}

function getRandom(max) {
    return Math.floor(Math.random() * max);
}