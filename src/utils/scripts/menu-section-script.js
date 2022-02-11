
const _genrateIcon = (data_icon) => {
    let icon = document.createElement("i");
    let span = document.createElement("span");
    span.classList.add("iconify");
    span.setAttribute("data-icon", data_icon);
    icon.append(span);
    return icon;
}

const onMenuIconClick = (e) => {
    let menu_section = document.getElementsByClassName("menu-section-area")[0];
    menu_section.classList.toggle("open-menu-section-area");
    console.log(menu_section.classList);
}


const buildActiveCompanyTile = (activeCompanyMap) => {
    let activeCompany = document.createElement("div");
    activeCompany.classList.add("active-company-wrapper");

    /// build the active company contract card.
    let activeCompanyContactedWrapper = document.createElement("div");
    activeCompanyContactedWrapper.classList.add(...["menu--items-container", "contracted-company-card"]);

    let activeCompanyContractedLogo = document.createElement("img");
    activeCompanyContractedLogo.setAttribute("id", "menu-company-profile-image-contracted");
    activeCompanyContractedLogo.setAttribute("src", `${activeCompanyMap.companyLogo}`);
    activeCompanyContractedLogo.setAttribute("alt", `${activeCompanyMap.companyName} Logo`);
    activeCompanyContactedWrapper.append(activeCompanyContractedLogo);

    /// build the active company expanded card.
    let activeCompanyExpandedWrapper = document.createElement("div");
    activeCompanyExpandedWrapper.classList.add(...["menu--items-container", "active-company-card"]);

    let activeCompanyExpandedLogo = document.createElement("img");
    activeCompanyExpandedLogo.setAttribute("id", "menu-company-profile-image");
    activeCompanyExpandedLogo.setAttribute("src", `${activeCompanyMap.companyLogo}`);
    activeCompanyExpandedLogo.setAttribute("alt", `${activeCompanyMap.companyName} Logo`);

    let activeCompanyExpandedDetailsWrapper = document.createElement("div");
    activeCompanyExpandedDetailsWrapper.classList.add("company-name-col");
    activeCompanyExpandedDetailsWrapper.setAttribute("id", "menu-company-profile-details");

    let companyName = document.createElement("h6");
    companyName.textContent = `${activeCompanyMap.companyName}`;

    let companyExtraDetails = document.createElement("p");
    companyExtraDetails.textContent = `${activeCompanyMap.extras}`;

    let forwardIcon = document.createElement("i");
    let span = document.createElement("span");
    span.classList.add("iconify");
    span.setAttribute("data-icon", "akar-icons:chevron-right");
    forwardIcon.append(span);

    activeCompanyExpandedDetailsWrapper.append(companyName, companyExtraDetails);

    activeCompanyExpandedWrapper.append(activeCompanyExpandedLogo, activeCompanyExpandedDetailsWrapper, forwardIcon);

    /// Add the contacted and expanded company cards to the active company wrapper.
    activeCompany.append(activeCompanyContactedWrapper, activeCompanyExpandedWrapper);

    return activeCompany;
}

const buildMenuListItems = (menuList, menuItems) => {

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
        menuList.appendChild(li);

    }
}


export const buildMenuSection = (menuMap) => {

    /// Build the section wrapper.
    let sectionWrapper = document.createElement("section");
    sectionWrapper.classList.add("menu-section-area");

    /// Build the site logo and header.
    let siteHeader = document.createElement("div");
    siteHeader.classList.add("dpc-logo-name");

    let img = document.createElement("img");
    img.setAttribute("src", `${menuMap.dpcLogo}`);
    img.setAttribute("alt", "DPC Logo");

    let siteName = document.createElement("h2");
    siteName.textContent = "DPC X";

    siteHeader.append(img, siteName);

    /// Build the active company section.
    let activeCompany = buildActiveCompanyTile(menuMap.activeCompany);

    /// Build the menu services list.
    let serviceList = document.createElement("ul");
    serviceList.classList.add("menu-services-list");
    serviceList.setAttribute("id", "menu-services-list");
    buildMenuListItems(serviceList, menuMap.menuServiceItems);

    /// Build the divider.
    let divider = document.createElement("div");
    divider.classList.add("menu-divider");

    /// Build the menu settings list.
    let settingsList = document.createElement("ul");
    settingsList.classList.add(...["menu-services-list", "menu-settings-container"]);
    settingsList.setAttribute("id", "menu-settings-list");
    buildMenuListItems(settingsList, menuMap.menuSettingsItems);

    /// Add all the menu items to the section wrapper.
    sectionWrapper.append(siteHeader, activeCompany, serviceList, divider, settingsList);
    return sectionWrapper;
}

