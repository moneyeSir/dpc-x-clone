// Wait for the document to load
document.addEventListener('DOMContentLoaded', () => {

    /// Load tab items.
    _loadTabItems(_tab_items);

    /// Load the Transactions.
    _loadTransactions(_transactions_list);
})

const _loadTabItems = (tabs_list) => {
    let tabs = document.getElementById("tabs-list");
    let linearTabs = document.getElementById("linear-tabs");

    /// Check if the tabs list is not empty.
    /// If it is not, load the tabs.
    if (tabs_list.length) {
        for (let i = 0; i < tabs_list.length; i++) {
            /// Create new [li] elements for [tabs] and [linear] tabs.
            let linearTab = document.createElement("li");

            let li = document.createElement("li");
            li.classList.add("tab-item");

            if (i === 0) {
                li.classList.add("first-tab-item");
            }

            if (i + 1 === tabs_list.length) {
                li.classList.add("last-tab-item");
            }

            /// Check if the tab is selected.
            /// If so, Add the selected class to the li element.
            if (tabs_list[i].selected || tabs_list.length === 1) {
                linearTab.classList.add("selected-linear-tab");
                li.classList.add("selected-tab-item");
            }

            /// Add the text.
            linearTab.textContent = tabs_list[i].name;
            li.textContent = tabs_list[i].name;

            /// Add the [li] to the [ul]
            linearTabs.append(linearTab);
            tabs.appendChild(li);
        }

        /// Hide one of the two tabs that you dont want to show.
        tabs.style.display = "none";
    }

    /// Hide the tab bar if the tabs list is empty.
    else {
        linearTabs.parentElement.style.display = "none";
        tabs.parentElement.style.display = "none";
    }
}


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

const _transactions_list = [
    {
        name: "Customer Looooong Nameeeee",
        amount: "Ksh. 1000",
        org_balance: "Ksh. 1000",
        mpesa_trx: "QB42LXC40O2",
        phone: "2547320048843",
        acc_no: "WHMCS_3108",
        src_paybill: "531920",
        src: "M-Pesa",
        trx_time: "12/12/2020 10:11:12",
    },
    {
        name: "Customer Looooong Nameeeee",
        amount: "Ksh. 1000",
        org_balance: "Ksh. 1000",
        mpesa_trx: "QB42LXC40O2",
        phone: "2547320048843",
        acc_no: "WHMCS_3108",
        src_paybill: "531920",
        src: "M-Pesa",
        trx_time: "12/12/2020 10:11:12",
    },
    {
        name: "Customer Looooong Nameeeee",
        amount: "Ksh. 1000",
        org_balance: "Ksh. 1000",
        mpesa_trx: "QB42LXC40O2",
        phone: "2547320048843",
        acc_no: "WHMCS_3108",
        src_paybill: "531920",
        src: "M-Pesa",
        trx_time: "12/12/2020 10:11:12",
    },
    {
        name: "Customer Looooong Nameeeee",
        amount: "Ksh. 1000",
        org_balance: "Ksh. 1000",
        mpesa_trx: "QB42LXC40O2",
        phone: "2547320048843",
        acc_no: "WHMCS_3108",
        src_paybill: "531920",
        src: "M-Pesa",
        trx_time: "12/12/2020 10:11:12",
    },
    {
        name: "Customer Looooong Nameeeee",
        amount: "Ksh. 1000",
        org_balance: "Ksh. 1000",
        mpesa_trx: "QB42LXC40O2",
        phone: "2547320048843",
        acc_no: "WHMCS_3108",
        src_paybill: "531920",
        src: "M-Pesa",
        trx_time: "12/12/2020 10:11:12",
    },
    {
        name: "Customer Looooong Nameeeee",
        amount: "Ksh. 1000",
        org_balance: "Ksh. 1000",
        mpesa_trx: "QB42LXC40O2",
        phone: "2547320048843",
        acc_no: "WHMCS_3108",
        src_paybill: "531920",
        src: "M-Pesa",
        trx_time: "12/12/2020 10:11:12",
    },
    {
        name: "Customer Looooong Nameeeee",
        amount: "Ksh. 1000",
        org_balance: "Ksh. 1000",
        mpesa_trx: "QB42LXC40O2",
        phone: "2547320048843",
        acc_no: "WHMCS_3108",
        src_paybill: "531920",
        src: "M-Pesa",
        trx_time: "12/12/2020 10:11:12",
    },
    {
        name: "Customer Looooong Nameeeee",
        amount: "Ksh. 1000",
        org_balance: "Ksh. 1000",
        mpesa_trx: "QB42LXC40O2",
        phone: "2547320048843",
        acc_no: "WHMCS_3108",
        src_paybill: "531920",
        src: "M-Pesa",
        trx_time: "12/12/2020 10:11:12",
    },
    {
        name: "Customer Looooong Nameeeee",
        amount: "Ksh. 1000",
        org_balance: "Ksh. 1000",
        mpesa_trx: "QB42LXC40O2",
        phone: "2547320048843",
        acc_no: "WHMCS_3108",
        src_paybill: "531920",
        src: "M-Pesa",
        trx_time: "12/12/2020 10:11:12",
    },
    {
        name: "Customer Looooong Nameeeee",
        amount: "Ksh. 1000",
        org_balance: "Ksh. 1000",
        mpesa_trx: "QB42LXC40O2",
        phone: "2547320048843",
        acc_no: "WHMCS_3108",
        src_paybill: "531920",
        src: "M-Pesa",
        trx_time: "12/12/2020 10:11:12",
    },
]