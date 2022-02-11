// Wait for the document to load
document.addEventListener('DOMContentLoaded', () => {

    /// Load the selected company.
    _loadSelectedCompanyProfile();

    /// Load All Menu Items.
    _loadMenuServices(_menu_items);

    /// Load tab items.
    _loadTabItems(_tab_items);

    /// Load the Transactions.
    _loadTransactions(_transactions_list);
})

const onMenuIconClick = (e) => {
    let menu_section = document.getElementsByClassName("menu-section-area")[0];  
    menu_section.classList.toggle("open-menu-section-area");
    console.log(menu_section.classList);
}


const _loadSelectedCompanyProfile = () => {
    /// Load the profile image.
    let profile_image = document.getElementById("menu-company-profile-image");
    profile_image.setAttribute("src", "../src/assets/qq.png");
    profile_image.setAttribute("alt", "Twiga Foods");

    let contractedImageView = document.getElementById("menu-company-profile-image-contracted");
    contractedImageView.setAttribute("src", "../src/assets/qq.png");
    contractedImageView.setAttribute("alt", "Twiga Foods");

    /// Load the company name.
    let company_col = document.getElementById("menu-company-profile-details");
    company_col.children[0].textContent = "SurvTechnologies";
    company_col.children[1].textContent = "531923 • Till Number • Basic";
}

const _loadMenuServices = (menuItems) => {
    let service_list = document.getElementById("menu-services-list");
    let settings_list = document.getElementById("menu-settings-list");

    for (let i = 0; i < menuItems.length; i++) {

        /// Create a new li element.
        let li = document.createElement("li");
        li.classList.add("menu-item-wrapper");
        // li.classList.add(...["menu--items-container", "menu-service-item"]);

        /// Create a wrapper div that will show all the items on large screens.
        /// And act as an overlay for small screens.
        let wrapper = document.createElement("div");
        wrapper.classList.add(...["menu--items-container", "menu-service-item"]);
        li.append(wrapper);

        /// Create a new div that will hold the icon only.
        let icon_div = document.createElement("div");
        icon_div.classList.add("menu-icons-only")
        li.append(icon_div);

        /// Check if the service is selected.
        /// If so, Add the selected class to the li element.
        if (menuItems[i].selected) {
            wrapper.classList.add("menu-selected-service");
            icon_div.classList.add("menu-selected-service");
        }

        /// Add the text.
        let text = document.createElement("h5");
        text.textContent = menuItems[i].name;

        /// Check if the service has a more than one count.
        /// If it does, add the count.
        if (menuItems[i].count !== undefined && menuItems[i].count !== 0 && menuItems[i].count !== 1) {
            let count = document.createElement("div");
            count.classList.add("menu-item-notification");
            let count_text = document.createElement("p");
            count_text.textContent = menuItems[i].count;
            count.append(count_text);

            /// Add all items to [wrapper]
            wrapper.append(_genrateIcon(menuItems[i].icon), text, count);
        }

        /// If the service has only one count or less count,
        /// add only the icon and text to [wrapper].
        else {
            wrapper.append(_genrateIcon(menuItems[i].icon), text);
        }

        /// Add the icon to the icon div
        icon_div.append(_genrateIcon(menuItems[i].icon));

        /// Add the [li] to the [ul]
        if (menuItems[i].type === "service") {
            service_list.appendChild(li);
        } else {
            settings_list.appendChild(li);
        }
    }
};

const _genrateIcon = (data_icon) => {
    let icon = document.createElement("i");
    let span = document.createElement("span");
    span.classList.add("iconify");
    span.setAttribute("data-icon", data_icon);
    icon.append(span);
    return icon;
}


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
            if (tabs_list[i].selected) {
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


// Demo Data
const _menu_items = [
    {
        icon: "bx:bx-bar-chart-alt-2",
        name: "Dashboard",
        count: 0,
        selected: false,
        type: "service"
    },
    {
        icon: "mdi:cash-multiple",
        name: "M-Pesa",
        count: 6,
        selected: true,
        type: "service"
    },
    {
        icon: "ic:outline-sms",
        name: "Africa's Talking",
        count: 0,
        selected: false,
        type: "service"
    },
    {
        icon: "bi:code",
        name: "Kopo Kopo",
        count: 0,
        selected: false,
        type: "service"
    },
    {
        icon: "bi:clipboard-data",
        name: "Reports",
        count: 2,
        selected: false,
        type: "service"
    },
    {
        icon: "bi:gear-wide-connected",
        name: "System Settings",
        count: 2,
        selected: false,
        type: "setting"
    },
    {
        icon: "fa-solid:hands-helping",
        name: "Assistant",
        count: 3,
        selected: false,
        type: "setting"
    },
    {
        icon: "iconoir:log-out",
        name: "Log out",
        selected: false,
        type: "setting"
    },
];

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