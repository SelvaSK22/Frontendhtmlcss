// js/gallery.js
$(document).ready(function() {$('.custom-photo').each(function() {
        
        let src = $(this).attr('data-src');
        let title = $(this).attr('data-title');
        let subtitle = $(this).attr('data-subtitle');
        let filter = $(this).attr('data-filter');
        
        // New variables to handle video links and thumbnails
        let type = $(this).attr('data-type'); 
        let thumb = $(this).attr('data-thumb') || src; // Defaults to the src image if no thumb is provided
        
        let typeAttr = type ? `data-vbtype="${type}"` : '';
        let icon = type ? 'fa-play' : 'fa-expand'; // Changes icon to a play button for videos

        let expandedHTML = `
        <div class="col-lg-4 col-md-6 portfolio-item ${filter}">
          <div class="portfolio-wrap">
            <img src="${thumb}" class="img-fluid w-100" alt="${title}">
            <div class="portfolio-info">
              <h4>${title}</h4>
              <p>${subtitle}</p>
              <div class="portfolio-links">
                <a href="${src}" ${typeAttr} data-gall="portfolioGallery" class="venobox" title="${title}">
                  <i class="fas ${icon}"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
        `;

        $(this).replaceWith(expandedHTML);
    });

    $('.venobox').venobox({
        bgcolor: '#0563bb', 
        overlayColor: 'rgba(15, 23, 43, 0.85)', 
        spinColor: '#ffffff',
        numeratio: true 
    });

    // 3. Portfolio Filter Logic
    $('#portfolio-flters li').on('click', function() {
        // Remove the blue active color from all tabs, and add it to the clicked tab
        $('#portfolio-flters li').removeClass('filter-active');
        $(this).addClass('filter-active');

        // Check which category was clicked
        let filterValue = $(this).attr('data-filter');

        // Hide and show the matching photos smoothly
        if (filterValue === '*') {
            $('.portfolio-item').fadeIn(400); // Show everything for 'All'
        } else {
            $('.portfolio-item').hide(); // Hide everything first
            $(filterValue).fadeIn(400); // Fade in only the ones that match the clicked category
        }
    });
});