
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Elmnt: TAB BAR
const _buildMainSectionTabBar = (tabbarMap) => {
    /// Build the section tab bar wrapper.
    let mainSectionTabBar = document.createElement("nav");
    mainSectionTabBar.classList.add("main-section-tab-bar");

    /// Build the tab bar.
    let tabBar = document.createElement("ul");
    tabBar.classList.add("linear-tabs");
    tabBar.setAttribute("id", "linear-tabs");
    mainSectionTabBar.append(tabBar);

    let tabs_list = tabbarMap.tabsList;

    /// Check if the tabs list is not empty.
    /// If it is not, load the tabs.
    if (tabs_list.length) {
        for (let i = 0; i < tabs_list.length; i++) {
            /// Create new [li] elements for [tabs] and [linear] tabs.
            let linearTab = document.createElement("li");

            /// Check if the tab is selected.
            /// If so, Add the selected class to the li element.
            if (tabs_list[i].selected || tabs_list.length === 1) {
                linearTab.classList.add("selected-linear-tab");
            }

            /// Add the text.
            linearTab.textContent = tabs_list[i].name;

            /// Add the [li] to the [ul]
            tabBar.append(linearTab);
        }
    }

    /// Hide the tab bar if the tabs list is empty.
    else {
        mainSectionTabBar.parentElement.style.display = "none";
    }

    return mainSectionTabBar;
}


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Elmnt: APP BAR
const _buildMainSectionHeaderAppBar = (appbarMap) => {
    /// Build the section header app bar.
    let sectionHeaderAppBar = document.createElement("div");
    sectionHeaderAppBar.classList.add("main-section-app-bar");

    /// A. Build the section header leading app bar.
    let sectionHeaderLeadingAppBar = _leadingAppBarSection(appbarMap);

    /// B. Build the section header trailing app bar.
    let sectionHeaderTrailingAppBar = _trailingAppBarSection(appbarMap);

    /// Add the leading and trailing app bar to the section header app bar.
    sectionHeaderAppBar.append(sectionHeaderLeadingAppBar, sectionHeaderTrailingAppBar);
    return sectionHeaderAppBar;
}

const _leadingAppBarSection = (appbarMap) => {
    
    /// Build the section header menu icon.
    let sectionHeaderMenuIcon = document.createElement("img");
    sectionHeaderMenuIcon.setAttribute("id", "toggle-menu-icon")
    sectionHeaderMenuIcon.setAttribute("src", `${appbarMap.menuIcon}`);

    /// Build the section header title.
    let sectionHeaderTitle = document.createElement("h2");
    sectionHeaderTitle.textContent = `${appbarMap.title}`;

    /// Build the section header search input.
    let sectionHeaderSearchInputWrapper = document.createElement("input-search-container");
    sectionHeaderSearchInputWrapper.classList.add("input-search-container");

    let searchIcon = document.createElement("i");
    searchIcon.classList.add("iconify");
    searchIcon.setAttribute("data-icon", "akar-icons:search");

    let searchInput = document.createElement("input");
    searchInput.setAttribute("type", "search");
    searchInput.setAttribute("placeholder", `${appbarMap.searchPlaceholder}`);

    sectionHeaderSearchInputWrapper.append(searchIcon, searchInput);

    /// A. Build the section header leading app bar.
    /// And add menu icon, title, and search input to the section header leading app bar.
    let sectionHeaderLeadingAppBar = document.createElement("div");
    sectionHeaderLeadingAppBar.classList.add("leading-app-bar");
    sectionHeaderLeadingAppBar.append(sectionHeaderMenuIcon, sectionHeaderTitle, sectionHeaderSearchInputWrapper);
    return sectionHeaderLeadingAppBar;
}

const _trailingAppBarSection = (appbarMap) => {
    /// B. Build the section header trailing app bar.
    let sectionHeaderTrailingAppBar = document.createElement("div");
    sectionHeaderTrailingAppBar.classList.add("trailing-app-bar");

    let selectCompanyContainer = _selectCompanyContainer(appbarMap.companiesList);
    let notificationBellIcon = _notificationBellIcon(appbarMap.notifications);

    sectionHeaderTrailingAppBar.append(selectCompanyContainer, notificationBellIcon);
    return sectionHeaderTrailingAppBar;
}


const _selectCompanyContainer = (companiesList) => {
    
    /// Build the select element.
    let selectElement = document.createElement("select");
    selectElement.classList.add("select-company");
    selectElement.setAttribute("id", "companies-select-options");

    /// Build the selected item container.
    let selecedtCompanyContainer = document.createElement("div");
    selecedtCompanyContainer.classList.add("selected-company-container");
    selecedtCompanyContainer.setAttribute("id", "selected-company");

    /// Build the selected company name and icon.
    let selectedCompanyName = document.createElement("h6");
    selectedCompanyName.textContent = `${companiesList[0].name}`;

    let selectedCompanyIcon = document.createElement("i");
    selectedCompanyIcon.classList.add("iconify");
    selectedCompanyIcon.setAttribute("data-icon", "akar-icons:chevron-down");

    /// Add the selected company name and icon to the selected company container.
    selecedtCompanyContainer.append(selectedCompanyName, selectedCompanyIcon);

    /// Build the select options.
    let selectOptions = document.createElement("ul");
    selectOptions.classList.add(...["companies-select-list", "hide-companies-list"]);

    /// Build the select company container.
    /// And add all the elemnts to the company container.
    let selectCompanyContainer = document.createElement("div");
    selectCompanyContainer.classList.add("select-company-container");
    selectCompanyContainer.append(selectElement, selecedtCompanyContainer, selectOptions);
    return selecedtCompanyContainer;
}


const _notificationBellIcon = (notifications) => {
    let notificationWrapper = document.createElement("div");
    notificationWrapper.classList.add("main-section-notification-icon");

    /// Build notification bell icon.
    let notificationBellIcon = document.createElement("i");
    notificationBellIcon.classList.add("material-icons");
    notificationBellIcon.textContent = "notifications";

    /// Build the notification count
    let notificationCount = document.createElement("p");
    notificationCount.textContent = `${notifications.length}`;

    /// Add the notification bell icon and notification count to the notification wrapper.
    notificationWrapper.append(notificationBellIcon, notificationCount);
    return notificationWrapper;
}


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Elmnt: MAIN SECTION
export const buildMainSectionArea = (mainSectionMap, body) => {
    /// Build the body wrapper.
    let mainSectionWrapper = document.createElement("main");
    mainSectionWrapper.classList.add("main-section-area");

    /// Build the section header wrapper.
    let sectionHeaderWrapper = document.createElement("div");
    sectionHeaderWrapper.classList.add("main-section-header");

    let sectionHeaderAppBar = _buildMainSectionHeaderAppBar(mainSectionMap.appbarMap);
    let sectionHeaderTabBar = _buildMainSectionTabBar(mainSectionMap.tabbarMap);
    
    /// Add the section header app bar and section header tab bar to the section header wrapper.
    sectionHeaderWrapper.append(sectionHeaderAppBar, sectionHeaderTabBar);
    
    /// Add the section header wrapper and body to the main section wrapper.
    mainSectionWrapper.append(sectionHeaderWrapper, body);
    return mainSectionWrapper;
}   

