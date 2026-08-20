/* =========================================================
   INTERNET BANKING
   Shared Front-End JavaScript
========================================================= */


document.addEventListener("DOMContentLoaded", function () {


    /* =====================================================
       ACTIVE NAVIGATION
    ===================================================== */

    const currentPage =
        window.location.pathname
            .split("/")
            .pop();


    document.querySelectorAll(
        ".navigation a"
    ).forEach(function (link) {

        const linkPage =
            link.getAttribute("href");

        if (linkPage === currentPage) {

            link.classList.add("active");

        }

    });



    /* =====================================================
       PROFILE SAVE
    ===================================================== */

    const saveProfile =
        document.getElementById(
            "saveProfile"
        );


    if (saveProfile) {

        saveProfile.addEventListener(
            "click",
            function () {

                alert(
                    "Profile information has been updated."
                );

            }
        );

    }



    /* =====================================================
       SETTINGS SAVE
    ===================================================== */

    const saveSettings =
        document.getElementById(
            "saveSettings"
        );


    if (saveSettings) {

        saveSettings.addEventListener(
            "click",
            function () {

                alert(
                    "Settings have been updated."
                );

            }
        );

    }



    /* =====================================================
       TRANSACTION SEARCH
    ===================================================== */

    const searchInput =
        document.getElementById(
            "search"
        );


    const typeFilter =
        document.getElementById(
            "typeFilter"
        );


    const yearFilter =
        document.getElementById(
            "yearFilter"
        );


    const transactionRows =
        document.querySelectorAll(
            "#transactionTable tr"
        );


    function filterTransactions() {

        if (!searchInput) {
            return;
        }


        const search =
            searchInput.value
                .toLowerCase()
                .trim();


        const selectedType =
            typeFilter
                ? typeFilter.value
                : "";


        const selectedYear =
            yearFilter
                ? yearFilter.value
                : "";


        transactionRows.forEach(
            function (row) {


                const rowText =
                    row.textContent
                        .toLowerCase();


                const rowType =
                    row.dataset.type || "";


                const rowYear =
                    row.dataset.year || "";


                const matchesSearch =
                    !search ||
                    rowText.includes(search);


                const matchesType =
                    !selectedType ||
                    rowType === selectedType;


                const matchesYear =
                    !selectedYear ||
                    rowYear === selectedYear;


                if (
                    matchesSearch &&
                    matchesType &&
                    matchesYear
                ) {

                    row.style.display = "";

                } else {

                    row.style.display =
                        "none";

                }

            }
        );

    }


    if (searchInput) {

        searchInput.addEventListener(
            "input",
            filterTransactions
        );

    }


    if (typeFilter) {

        typeFilter.addEventListener(
            "change",
            filterTransactions
        );

    }


    if (yearFilter) {

        yearFilter.addEventListener(
            "change",
            filterTransactions
        );

    }



    /* =====================================================
       THEME PREVIEW
    ===================================================== */

    const theme =
        document.getElementById(
            "theme"
        );


    if (theme) {

        theme.addEventListener(
            "change",
            function () {


                if (
                    theme.value ===
                    "Dark"
                ) {

                    document.body.classList.add(
                        "dark-preview"
                    );

                } else {

                    document.body.classList.remove(
                        "dark-preview"
                    );

                }

            }
        );

    }



    /* =====================================================
       DENSITY PREVIEW
    ===================================================== */

    const density =
        document.getElementById(
            "density"
        );


    if (density) {

        density.addEventListener(
            "change",
            function () {


                if (
                    density.value ===
                    "Compact"
                ) {

                    document.body.classList.add(
                        "compact-view"
                    );

                } else {

                    document.body.classList.remove(
                        "compact-view"
                    );

                }

            }
        );

    }



    /* =====================================================
       LOGOUT CONFIRMATION
    ===================================================== */

    document.querySelectorAll(
        'a[href="logout.html"]'
    ).forEach(function (link) {

        link.addEventListener(
            "click",
            function (event) {

                const confirmed =
                    confirm(
                        "Are you sure you want to sign out?"
                    );


                if (!confirmed) {

                    event.preventDefault();

                }

            }
        );

    });


});