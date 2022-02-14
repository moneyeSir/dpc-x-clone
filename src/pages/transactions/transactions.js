import { buildMenuBodyGrid } from '../../utils/scripts/build-menu-body-grid.js';
import * as demoLists from '../../utils/data/demo-lists.js';

const transactionsMap = {
    menuMap: {
        dpcLogo: "../../assets/dpc-x-black.png",
        activeCompany: {
            companyLogo: "../../assets/qq.png",
            companyName: "Twiga Foods",
            extras: "531923 • Till Number • Basic"
        },
        menuServiceItems: demoLists.menu_items,
        menuSettingsItems: demoLists.menu_settings_items
    },
    showTransactions: demoLists.transactions_list,
    mainSectionMap: {
        appbarMap: {
            menuIcon: '../../assets/dpc-menu.png',
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


/// Make sure to include the [menu-body-grid.css] and [customs.css] files.
document.addEventListener("DOMContentLoaded", function (e) {
    document.body.append(...buildMenuBodyGrid(transactionsMap, 1));
});