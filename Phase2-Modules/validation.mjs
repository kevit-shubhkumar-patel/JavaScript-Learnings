export function validateAccountNumber(accountNumber) {
    return accountNumber.startsWith("ACC") &&
           accountNumber.length === 6;
}