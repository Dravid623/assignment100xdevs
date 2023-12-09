/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]
*/

function calculateTotalSpentByCategory(transactions) {
    let output = [];

    for (let j = 0; j < transactions.length; j++) {
        let categoryFound = false;

        for (let i = 0; i < output.length; i++) {
            if (transactions[j].category === output[i].category) {
                output[i].totalSpent += transactions[j].price;
                categoryFound = true;
                break;
            }
        }

        if (!categoryFound) {
            // Create a new entry for the category
            output.push({ category: transactions[j].category, totalSpent: transactions[j].price });
        }
    }

    return output;
}

module.exports = calculateTotalSpentByCategory;
