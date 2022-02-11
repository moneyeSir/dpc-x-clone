document.addEventListener('DOMContentLoaded', () => {
    loadDPCMenu();
})

/// Load Menu
const loadDPCMenu = () => {
    /// Load the selected company.
    _loadSelectedCompanyProfile();

    /// Load All Menu Items.
    _loadMenuServices(_menu_items);

    console.log('dpc menu');
}


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
