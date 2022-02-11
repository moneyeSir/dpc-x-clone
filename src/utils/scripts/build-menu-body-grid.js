import { buildMenuSection } from './menu-section-script.js';
import { buildMainSectionArea } from './main-section-scrpit.js';
import { buildTransactionsTable } from './transactions-table-script.js';
import { buildDashboardView } from './dashboard-script.js';

const _buildBodyByTpe = (bodyMap, bodyType) => {
    switch (bodyType) {
        case 0:
            return buildDashboardView();
        case 1:
            return buildTransactionsTable(bodyMap.showTransactions);
        default:
            let div = document.createElement("div");
            return div;
    }
}

const _footerLinkText = (text, url) => {
    let a = document.createElement("a");
    a.textContent = text;
    a.setAttribute("href", url);
    a.setAttribute("target", "_blank");
    return a;
}

const _buildFooter = () => {
    let footer = document.createElement("footer");

    let copyright = _footerLinkText("© 2009-2022 Surv Technologies Ltd. All Rights Reserved.", "https://survtechnologies.co.ke");

    let version = _footerLinkText("Version 2.0.22", "https://survtechnologies.co.ke/blog");

    let footerWrapper = document.createElement("div");
    let contactUs = _footerLinkText("Contact Us", "https://survtechnologies.co.ke/contact-us");
    let about = _footerLinkText("About Us", "https://survtechnologies.co.ke/about-us");
    let privacy = _footerLinkText("Privacy Policy", "https://survtechnologies.co.ke/privacy-policy");
    let terms = _footerLinkText("Terms of Use", "https://survtechnologies.co.ke/terms-of-use");

    footerWrapper.append(contactUs, about, privacy, terms);

    footer.append(copyright, version, footerWrapper);
    return footer;
}

export const buildMenuBodyGrid = (bodyMap, bodyType) => {

    /// Build the body wrapper.
    let bodyWrapper = document.createElement("div");
    bodyWrapper.classList.add("body-wrapper");

    /// Build the menu.
    let menuSection = buildMenuSection(bodyMap.menuMap);

    /// Build the body by the parsed type.
    let body = _buildBodyByTpe(bodyMap, bodyType);

    /// Build the main section area.
    let mainSectionArea = buildMainSectionArea(bodyMap.mainSectionMap, body);

    /// Add the menu and main section area to the body wrapper.
    bodyWrapper.append(menuSection, mainSectionArea);
    return [bodyWrapper, _buildFooter()];
}