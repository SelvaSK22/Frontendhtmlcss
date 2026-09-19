// js/menu.js
$(document).ready(function() {
    // 1. Load the common menu HTML into the placeholder
    $("#nav-placeholder").load("menu.html", function() {
        
        // 2. Get the current page filename (e.g., "about.html")
        let currentFileName = window.location.pathname.split("/").pop();
        if (currentFileName === "") {
            currentFileName = "index.html"; // Default to home if no file name
        }

        // 3. Find the matching link and add the "active" class
        $(".navbar-nav .nav-link").each(function() {
            if ($(this).attr("href") === currentFileName) {
                $(this).addClass("active");
            }
        });
    });
    
    // 2. Load the common footer HTML
    $("#footer-placeholder").load("footer.html");
});