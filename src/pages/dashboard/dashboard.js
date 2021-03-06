import { buildMenuBodyGrid } from '../../utils/scripts/build-menu-body-grid.js';
import * as demoLists from '../../utils/data/demo-lists.js';

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
            searchPlaceholder: "Tap to search services",
            showSearchBar: false,
            companiesList: demoLists.companies_list,
            notifications: demoLists.notifications_list,
        },
        tabbarMap: {
            visible: false,
        }
    },
    highlightsMap: demoLists.highlights_list
}

/// Make sure to include the [menu-body-grid.css] and [customs.css] files.
document.addEventListener("DOMContentLoaded", function (e) {
    document.body.append(...buildMenuBodyGrid(dashboardMap, 0)); // Dashboards
    // document.body.append(...buildMenuBodyGrid(transactionsMap, 1)); TRANSACTIONS
});