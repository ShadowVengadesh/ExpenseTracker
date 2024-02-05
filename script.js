let balance = 0;
const balanceElement = document.getElementById('balance');
const transactionListElement = document.getElementById('transaction-list');

function updateBalance() {
    balanceElement.textContent = balance.toFixed(2);
}

function addTransaction() {
    const textElement = document.getElementById('text');
    const amountElement = document.getElementById('amount');

    const text = textElement.value.trim();
    const amount = parseFloat(amountElement.value);

    if (text === '' || isNaN(amount)) {
        alert('Please enter valid text and amount.');
        return;
    }

    const transaction = {
        text,
        amount
    };

    balance += amount;
    updateBalance();

    const listItem = document.createElement('li');
    listItem.innerHTML = `
        ${text} <span>${amount.toFixed(2)}</span>
    `;
    transactionListElement.appendChild(listItem);

    textElement.value = '';
    amountElement.value = '';
}

// Initial update
updateBalance();
