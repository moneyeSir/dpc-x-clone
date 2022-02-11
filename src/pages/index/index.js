// Wait for the document to load
document.addEventListener('DOMContentLoaded', () => {

    /// Load the Transactions.
    _loadTransactions(_transactions_list);
});

const _loadTransactions = (transactions_list) => {
    let tables = document.getElementsByTagName("table");

    if (tables.length && transactions_list.length) {

        /// Add the transaction keys as heads to the table.
        let table_head_row = document.createElement("tr");
        table_head_row.classList.add("table-head-row");
        let transaction_keys = Object.keys(transactions_list[0]);

        for (let i = 0; i < transaction_keys.length; i++) {
            let th = document.createElement("th");
            let text = `${transaction_keys[i].replace("_", " ")}`;
            th.textContent = text.charAt(0).toUpperCase() + text.slice(1);
            table_head_row.appendChild(th);
        }
        let thead = tables[0].getElementsByTagName("thead")[0];
        thead.appendChild(table_head_row);
        tables[0].append(thead);

        /// Load all transactions to the first table.
        let tbody = tables[0].getElementsByTagName("tbody")[0];
        for (let i = 0; i < transactions_list.length; i++) {
            let tr = document.createElement("tr");
            let name = document.createElement("td");
            let amount = document.createElement("td");
            let org_balance = document.createElement("td");
            let mpesa_trx = document.createElement("td");
            let phone = document.createElement("td");
            let acc_no = document.createElement("td");
            let src = document.createElement("td");
            let src_paybill = document.createElement("td");
            let trx_time = document.createElement("td");

            name.textContent = transactions_list[i].name;
            amount.textContent = transactions_list[i].amount;
            org_balance.textContent = transactions_list[i].org_balance;
            mpesa_trx.textContent = transactions_list[i].mpesa_trx;
            phone.textContent = transactions_list[i].phone;
            acc_no.textContent = transactions_list[i].acc_no;
            src.textContent = transactions_list[i].src;
            src_paybill.textContent = transactions_list[i].src_paybill;
            trx_time.textContent = transactions_list[i].trx_time;

            tr.append(name, amount, org_balance, mpesa_trx, phone, acc_no, src, src_paybill, trx_time);

            /// Remove border-bottom from the last row.
            if (i + 1 === transactions_list.length) {
                tr.style.borderBottom = "none";
            }

            tr.setAttribute("data-tooltip", "Click to see more details");

            /// Add the [tr] to the [table]
            tbody.append(tr);
        }

        console.log(tbody.children.length);
        tables[0].append(tbody);
    }
}

const _tab_items = [
    {
        name: "Payments",
        selected: false
    },
    {
        name: "Disbursements",
        selected: false
    },
    {
        name: "Check Status",
        selected: false
    },
    {
        name: "Reverse Transactions",
        selected: true
    },
    {
        name: "Manage Paypoints",
        selected: false
    },
    {
        name: "New Intergrations",
        selected: false
    },
]
