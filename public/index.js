import { buildMenuBodyGrid } from '../src/utils/scripts/build-menu-body-grid.js';
import * as demoLists from '../src/utils/data/demo-lists.js';

/** TRANSACTIONS DEMO DATA
const transactionsMap = {
    menuMap: {
        dpcLogo: "../src/assets/dpc-x-black.png",
        activeCompany: {
            companyLogo: "../src/assets/qq.png",
            companyName: "Twiga Foods",
            extras: "531923 • Till Number • Basic"
        },
        menuServiceItems: demoLists.menu_items,
        menuSettingsItems: demoLists.menu_settings_items
    },
    showTransactions: demoLists.transactions_list,
    mainSectionMap: {
        appbarMap: {
            menuIcon: '../src/assets/dpc-menu.png',
            title: "M-PESA",
            searchPlaceholder: "Tap to search Transactions",
            showSearchBar: false,
            companiesList: demoLists.companies_list,
            notifications: demoLists.notifications_list,
        },
        tabbarMap: {
            visible: true,
            tabsList: demoLists.tabs_list
        }
    }
}
*/

const dashboardMap = {
    menuMap: {
        dpcLogo: "../src/assets/dpc-x-black.png",
        activeCompany: {
            companyLogo: "../src/assets/qq.png",
            companyName: "Twiga Foods",
            extras: "531923 • Till Number • Basic"
        },
        menuServiceItems: demoLists.menu_items,
        menuSettingsItems: demoLists.menu_settings_items
    },
    mainSectionMap: {
        appbarMap: {
            menuIcon: '../src/assets/dpc-menu.png',
            title: "Dashboard",
            searchPlaceholder: "Tap to search DPC-X Services",
            showSearchBar: false,
            companiesList: demoLists.companies_list,
            notifications: demoLists.notifications_list,
        },
        tabbarMap: {
            visible: false,
        }
    }
}

/// Make sure to include the [menu-body-grid.css] and [customs.css] files.
document.addEventListener("DOMContentLoaded", function (e) {
    document.body.append(...buildMenuBodyGrid(dashboardMap, 0)); // Dashboards
    // document.body.append(...buildMenuBodyGrid(transactionsMap, 1)); TRANSACTIONS
});