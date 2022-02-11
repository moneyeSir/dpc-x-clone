const _buildHighlightItem = (item) => {
    let li = document.createElement("li");
    li.classList.add("highlights-list-item");


    /// Create the subtitle element.
    let subtitleTile = document.createElement("div");
    subtitleTile.classList.add("highlights-item-subtitle");

    let subtitle = document.createElement("p");
    subtitle.textContent = `${item.subtitle}`;

    let icon_avatar = document.createElement("div");
    icon_avatar.classList.add("highlights-icon-avatar");

    let tile_icon = document.createElement("i");
    tile_icon.style.color = `${item.avatar.color}`;

    let tile_icon_span = document.createElement("span");
    tile_icon_span.classList.add("iconify");
    tile_icon_span.setAttribute("data-icon", `${item.avatar.icon}`);
    tile_icon.append(tile_icon_span);

    let avatar = document.createElement("div");
    avatar.style.backgroundColor = `${item.avatar.backgroundColor}`;

    icon_avatar.append(tile_icon, avatar);

    subtitleTile.append(subtitle, icon_avatar);

    /// Create the title element.
    let titleTile = document.createElement("h2");
    titleTile.classList.add("highlights-item-title");
    titleTile.textContent = `${item.title}`;

    /// Create info/summary tile.
    let infoTile = document.createElement("div");
    infoTile.classList.add("highlights-info-tile");

    let chart_icon = document.createElement("i");
    chart_icon.style.color = `${item.summary.color}`;

    let chart_icon_span = document.createElement("span");
    chart_icon_span.classList.add("iconify");
    chart_icon_span.setAttribute("data-icon", `${item.summary.icon}`);
    chart_icon.append(chart_icon_span);

    let percentage_summary = document.createElement("p");
    percentage_summary.textContent = `${item.summary.percentage}`;
    percentage_summary.style.color = `${item.summary.color}`;

    let summary_text = document.createElement("span");
    summary_text.textContent = `${item.summary.text}`;
    percentage_summary.append(summary_text);

    infoTile.append(chart_icon, percentage_summary);

    li.append(subtitleTile, titleTile, infoTile);
    return li;
}

const _buildDashboardHiglights = (highlightsMap) => {
    let dashboardHighlights = document.createElement("div");
    dashboardHighlights.classList.add("dashboard-highlights");

    
    for(let highlight in highlightsMap) {

        let  highlight_instance = highlightsMap[highlight];

        let h3 = document.createElement("h3");
        h3.classList.add("highlights-title");
        h3.textContent = `${highlight_instance.title}`;

        let ul = document.createElement("ul");
        ul.classList.add(...["dashboard-card", "highlights-list"]);

        for(let item in highlight_instance.items) {
            let item_instance = highlight_instance.items[item];
            let highlight_item = _buildHighlightItem(item_instance);
            ul.append(highlight_item);
        }

        let div = document.createElement("div");
        div.classList.add("highlights-list-container");
        div.append(h3, ul);

        dashboardHighlights.append(div);
    }

    return dashboardHighlights;
}

export const buildDashboardView = (dashboardMap) => {
    let dashboardWrapper = document.createElement("div");
    dashboardWrapper.classList.add("dashboard-wrapper");

    let dashboardHighlights = _buildDashboardHiglights(dashboardMap.highlightsMap);

    dashboardWrapper.append(dashboardHighlights);

    return dashboardWrapper;
}
