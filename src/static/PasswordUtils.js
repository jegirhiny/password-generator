const letters = 'abcdefghijklmnopqrstuvwxyz';
const symbols = ".,!?;:'\"-_+-*/=<>[]{}()@#$%&|\\~!?#^`";
const numbers = '1234567890';

export function generatePassword(formData) {
    let hasUppercase = formData.uppercase;
    let hasNumbers = formData.numbers;
    let hasSymbols = formData.symbols;
    let pool = getPool(hasNumbers, hasSymbols);

    for(let attempts = 0; attempts < 1000; attempts++) {
        let passwordChars = [];

        for(let i = 0; i < formData.length; i++) {
            passwordChars.push(getKey(pool, hasUppercase));
        }

        const password = passwordChars.join('');

        if(hasSelected(password, hasUppercase, hasNumbers, hasSymbols)) {
            return password;
        }
    }

    throw new Error('Unable to generate a valid password - exceeded the maximum number of attempts.');
}

export function getStrength(password) {
    let hasSymbol = false, hasNumber = false, hasCapital = false;
    let strength = 0;

    for (const key of password) {
        if (!hasSymbol && symbols.includes(key)) {
            hasSymbol = true;
            strength += 12;
        } else if (!hasNumber && numbers.includes(key)) {
            hasNumber = true;
            strength += 12;
        } else if (!hasCapital && key !== key.toLowerCase()) {
            hasCapital = true;
            strength += 12;
        }
    }

    const length = password.length, maxPasswordLength = 48, maxStrength = 50;
    strength += Math.min(1, (length - 12) / (maxPasswordLength - 12)) * (maxStrength - 10) + 10;
    strength = Math.min(strength, maxStrength);

    return strength;
}

function hasSelected(password, hasUppercase, hasNumbers, hasSymbols) {
    const numberSet = new Set(numbers), symbolSet = new Set(symbols);
    let checkUppercase = false, checkNumbers = false, checkSymbols = false;

    for(const letter of password) {
        if(letter !== letter.toLowerCase()) {
            checkUppercase = true;
        } else if(numberSet.has(letter)) {
            checkNumbers = true;
        } else if(symbolSet.has(letter)) {
            checkSymbols = true;
        }
    }

    return hasUppercase === checkUppercase && hasNumbers === checkNumbers && hasSymbols === checkSymbols;
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