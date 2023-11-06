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

    let password = prefix;
    const infixationLength = length - (prefix.length + suffix.length);

    for(let i = 0; i < infixationLength; i++) {
        password += getKey(formData.uppercase, formData.numbers, formData.symbols);
    }

    return password + suffix;
}

function getKey(hasUppercase, hasNumbers, hasSymbols) {
    let pool = letters;

    if (hasNumbers) {
        pool += numbers;
    }
    
    if (hasSymbols) {
        pool += symbols;
    }

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