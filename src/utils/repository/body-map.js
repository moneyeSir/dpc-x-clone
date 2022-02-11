

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
];

// Demo Data
const _menu_settings_items = [
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
    }
]

const _companies_list = [
    {
        name: "Surv Technologies",
        id: 1,
        selected: true,
        type: "company"
    },

]

const _notifications_list = [
    {
        "id": 1,
        "title": "New Order",
        "message": "You have a new order",
    }
]

const _tabs_list = [
    {
        name: "Payments",
        selected: true,
    },
    {
        name: "Disbursements",
        selected: false,
    },
    {
        name: "Check Status",
        selected: false,
    },
    {
        name: "Reversed Transactions",
        selected: false,
    },
    {
        name: "Manage Paypoints",
        selected: false,
    },
    {
        name: "New Intergrations",
        selected: false,
    },
]

export const bodyMap = {
    menuMap: {
        dpcLogo: "../src/assets/dpc-x-black.png",
        activeCompany: {
            companyLogo: "../src/assets/qq.png",
            companyName: "Twiga Foods",
            extras: "531923 • Till Number • Basic"
        },
        menuServiceItems: _menu_items,
        menuSettingsItems: _menu_settings_items
    },
    showTransactions: _transactions_list,
    mainSectionMap: {
        appbarMap: {
            menuIcon: '../src/assets/dpc-menu.png',
            title: "M-PESA",
            searchPlaceholder: "Tap to search Transactions",
            showSearchBar: false,
            companiesList: _companies_list,
            notifications: _notifications_list,
        },
        tabbarMap: {
            visible: true,
            tabsList: _tabs_list
        }
    }
}
