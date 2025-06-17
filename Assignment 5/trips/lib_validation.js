export function isEmptyString(string) {
        return string == "" ? true : false;
    }

export function isNegative(value) {
    return value < 0;
}

export function isNumeric(value) {
    return !isNaN(value);
}