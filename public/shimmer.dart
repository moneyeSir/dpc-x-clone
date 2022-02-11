/**
 * 
    <div class="body-wrapper">
        <section class="menu-section-area">

            <!-- Site's Logo And Name-->
            <div class="dpc-logo-name">
                <img src="../src//assets/dpc-x-black.png" alt="DPC Logo">
                <h2>DPC X</h2>
            </div>

            <!-- Active Company Details-->
            <div class="active-company-wrapper">
                
                <div class="menu--items-container contracted-company-card">
                    <img id="menu-company-profile-image-contracted">
                </div>

                <div class="menu--items-container active-company-card">
                    <img id="menu-company-profile-image">
                    <div class="company-name-col" id="menu-company-profile-details">
                        <h6></h6>
                        <p></p>
                    </div>
                    <i><span class="iconify" data-icon="akar-icons:chevron-right"></span></i>
                </div>
            </div>

            <!-- DPC Services -->
            <ul class="menu-services-list" id="menu-services-list"></ul>

            <div class="menu-divider"></div>

            <!-- DPC Settings -->
            <ul class="menu-services-list menu-settings-container" id="menu-settings-list"></ul>

        </section>
        <main class="main-section-area">
            <div class="main-section-header">
                <div class="main-section-app-bar">
                    <div class="leading-app-bar">
                        <img src="../src/assets/dpc-menu.png" alt="Menu Icon" id="toggle-menu-icon" onclick="onMenuIconClick()">
                        <h2>M-PESA</h2>
                        <div class="input-search-container">
                            <i class="iconify" data-icon="akar-icons:search"></i>
                            <input type="search" placeholder="Tap to search transactions">
                        </div>
                    </div>

                    <div class="trailing-app-bar">
                        <div class="select-company-container">
                            <select name="companies" id="companies-select-options"></select>
                            <div id="selected-company" class="selected-company-container">
                                <h6>Surv Technologies</h6>
                                <i class="iconify" data-icon="akar-icons:chevron-down"></i>
                            </div>
                            <ul class="companies-select-list hide-companies-list">
                                <li>Surv Technologies</li>
                                <li>Surv Technologies</li>
                                <li>Surv Technologies</li>
                            </ul>
                        </div>
                        <div class="main-section-notification-icon">
                            <i><svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20"
                                    fill="currentColor">
                                    <path
                                        d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z" />
                                </svg></i>
                            <p>10</p>
                        </div>
                    </div>

                </div>
                <nav class="main-section-tab-bar">
                    <ul class="linear-tabs" id="linear-tabs"></ul>
                    <ul class="tabs-list" id="tabs-list"></ul>
                </nav>
            </div>
            <div class="table-wrapper">
                <table>
                    <thead class="sticky-header"></thead>
                    <tbody></tbody>
                    <tfoot>
                        <tr class="table-pagination">
                            <td id="pagination-info">
                                <p>Showing 1-10 of 100</p>
                            </td>
                            <td class="pagination-controls">
                                <button class="pagination-controls-button" id="pagination-controls-first">
                                    <i class="iconify" data-icon="fa-solid:chevron-left"></i>
                                    <i class="iconify" data-icon="fa-solid:chevron-left"></i>
                                </button>
                                <button class="pagination-controls-button" id="pagination-controls-previous">
                                    <i class="iconify" data-icon="fa-solid:chevron-left"></i>
                                </button>
                                <ul class="pagination-page-index">
                                    <li>
                                        <button class="pagination-controls-button">
                                            <p>1</p>
                                        </button>
                                    </li>
                                    <li>
                                        <button class="pagination-controls-button">
                                            <p>2</p>
                                        </button>
                                    </li>
                                    <li>
                                        <button class="pagination-controls-button">
                                            <p>3</p>
                                        </button>
                                    </li>
                                    <li>
                                        <button class="pagination-controls-button">
                                            <p>4</p>
                                        </button>
                                    </li>
                                    <li>
                                        <button class="pagination-controls-button">
                                            <p>5</p>
                                        </button>
                                    </li>
                                </ul>
                                <button class="pagination-controls-button" id="pagination-controls-next">
                                    <i class="iconify" data-icon="fa-solid:chevron-right"></i>
                                </button>
                                <button class="pagination-controls-button" id="pagination-controls-last">
                                    <i class="iconify" data-icon="fa-solid:chevron-right"></i>
                                    <i class="iconify" data-icon="fa-solid:chevron-right"></i>
                                </button>
                            </td>
                        </tr>
                    </tfoot>
                </table>
            </div>
            
        </main>
    </div>
    <footer>
        <a href="https://survtechnologies.co.ke" target="_blank">© 2009-2022 Surv Technologies Ltd. All Rights Reserved.</a>

        <p>Version 2.0.22</p>
        
        <div>
            <a href="">Contact Us</a>
            <a href="">About</a>
            <a href="">Privacy Policy</a>
            <a href="">Terms Of Use</a>
        </div>
    </footer>
 */