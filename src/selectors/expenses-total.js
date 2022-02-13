export default (expenses) => {
    let total = 0;
    expenses.map((item) => {
        total = total + item.amount;
    })
    return total;
};

// export default (expenses) => {
//     return expenses
//         .map((expense) => expense.amount) //creo un array solo de numeros
//         .reduce((sum, value) => sum + value, 0);
// };