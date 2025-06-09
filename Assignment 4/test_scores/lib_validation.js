const validation = {
    isNumeric(value) {
        return !isNaN(value);
    },
    isInRange(value, minimum, maximum) {
        if (this.isNumeric(value)) {
            return value >= minimum && value <= maximum;
        }
    }
}