export function validateNumber(value: number) {
    if(isFinite(value) && value > 0 && typeof value === 'number' && !isNaN(value)) return true;
    return false; 
}