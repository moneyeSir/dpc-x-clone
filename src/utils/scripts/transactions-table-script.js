
const _buildTableHeader = (transactions) => {
    let thead = document.createElement("thead");
    thead.classList.add("sticky-header");

    /// Add the transaction keys as heads to the table.
    let table_head_row = document.createElement("tr");
    table_head_row.classList.add("table-head-row");
    let transaction_keys = Object.keys(transactions[0]);

    for (let i = 0; i < transaction_keys.length; i++) {
        let th = document.createElement("th");
        let text = `${transaction_keys[i].replace("_", " ")}`;
        th.textContent = text.charAt(0).toUpperCase() + text.slice(1);
        table_head_row.appendChild(th);
    }
    
    thead.appendChild(table_head_row);
    return thead;
}

const _buildTableBody = (transactions) => {
    let tbody = document.createElement("tbody");

    for (let i = 0; i < transactions.length; i++) {
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

        name.textContent = transactions[i].name;
        amount.textContent = transactions[i].amount;
        org_balance.textContent = transactions[i].org_balance;
        mpesa_trx.textContent = transactions[i].mpesa_trx;
        phone.textContent = transactions[i].phone;
        acc_no.textContent = transactions[i].acc_no;
        src.textContent = transactions[i].src;
        src_paybill.textContent = transactions[i].src_paybill;
        trx_time.textContent = transactions[i].trx_time;

        tr.append(name, amount, org_balance, mpesa_trx, phone, acc_no, src, src_paybill, trx_time);

        /// Remove border-bottom from the last row.
        if (i + 1 === transactions.length) {
            tr.style.borderBottom = "none";
        }

        tr.setAttribute("data-tooltip", "Click to see more details");

        /// Add the [tr] to the [table]
        tbody.append(tr);
    }

    return tbody;
}

const _buildPaginationButton = (id, textContent) => {
    let button = document.createElement("button");
    button.classList.add("pagination-controls-button");
    button.setAttribute("id", id);
    button.textContent = textContent;
    return button;
}

const _buildTableFoot = () => {
    let tfoot = document.createElement("tfoot");
    let tfoot_row = document.createElement("tr");
    tfoot_row.classList.add("table-pagination");
    
    let paginationInfo = document.createElement("td");
    paginationInfo.setAttribute("id", "pagination-info");
    paginationInfo.textContent = "Showing 1 to 10 of 100 entries";

    let paginationControls = document.createElement("td");
    paginationControls.classList.add("pagination-controls");

    let previusButton = _buildPaginationButton("previus-page", "Previous");
    let nextButton = _buildPaginationButton("next-page", "Next");

    paginationControls.append(previusButton, nextButton);

    tfoot_row.append(paginationInfo, paginationControls);

    tfoot.append(tfoot_row);
    return tfoot;
}

////////////////////////////////////////////////////////////////////////////////
/// Build empty transactions view.
const _emptyTransactionsView = () => {
    let emptyView = document.createElement("div");
    emptyView.style.display = "flex";
    emptyView.style.justifyContent = "center";
    emptyView.style.alignItems = "center";
    emptyView.style.height = "100%";
    emptyView.style.width = "100%";
    emptyView.style.fontSize = "1.5rem";

    let emptyViewText = document.createElement("p");
    emptyViewText.textContent = "No transactions found.";

    emptyView.appendChild(emptyViewText);
    return emptyView;
}

export const buildTransactionsTable = (transactions) => {
    console.log(`Transactions: ${transactions.length}`);
    /// Check if transactions are empty.
    /// If so, return nothing found.
    if(transactions.length < 1) {
        console.log("Transactions Not found.");
        return _emptyTransactionsView();
    }

    console.log("Transactions found.");

    /// Build the table wrapper.
    let tableWrapper = document.createElement("div");
    tableWrapper.classList.add("table-wrapper");

    /// Build the table.
    let table = document.createElement("table");
    table.append(_buildTableHeader(transactions), _buildTableBody(transactions), _buildTableFoot(transactions));
    
    tableWrapper.append(table);
    return tableWrapper;
}
