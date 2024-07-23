function showPopup(event, popupId) {
    event.preventDefault();
    // Hide any currently open popups
    var popups = document.querySelectorAll('.popup');
    popups.forEach(function(popup) {
        popup.style.display = "none";
    });
    // Display the new popup
    var popup = document.getElementById(popupId);
    popup.style.display = "block";

    // Adjust page height to fit popup content
    document.body.style.height = "auto";
    var popupHeight = popup.offsetHeight;
    var bodyHeight = document.body.scrollHeight;
    if (popupHeight > bodyHeight) {
        document.body.style.height = popupHeight + "px";
    }
}

function hidePopup(popupId) {
    var popup = document.getElementById(popupId);
    popup.style.display = "none";
}

/*search bar study section*/

document.addEventListener('DOMContentLoaded', function () {
    const searchInput = document.querySelector('.search-bar');
    const searchButton = document.querySelector('.search-button');
    const chapterLinks = document.querySelectorAll('.menu a');
    const searchResultsContainer = document.createElement('div'); // Create container for search results
    searchResultsContainer.classList.add('search-results'); // Add class for styling

    // Append the search results container just below the search bar
    searchInput.parentNode.insertBefore(searchResultsContainer, searchInput.nextSibling);

    // Function to perform search
    function performSearch() {
        const searchTerm = searchInput.value.trim().toLowerCase();
        searchResultsContainer.innerHTML = ''; // Clear previous search results

        chapterLinks.forEach(function (link) {
            const chapterName = link.textContent.toLowerCase();
            if (chapterName.includes(searchTerm)) {
                const resultLink = document.createElement('a');
                resultLink.textContent = link.textContent;
                resultLink.href = link.href;
                searchResultsContainer.appendChild(resultLink); // Append link to container
            }
        });

        // Position the search results container below the search bar
        const searchInputRect = searchInput.getBoundingClientRect();
        searchResultsContainer.style.position = 'absolute';
        searchResultsContainer.style.top = searchInputRect.bottom + 'px';
        searchResultsContainer.style.left = searchInputRect.left + 'px';
    }

    // Search when the search button is clicked
    searchButton.addEventListener('click', performSearch);

    // Search when Enter key is pressed
    searchInput.addEventListener('keypress', function (event) {
        if (event.key === 'Enter') {
            performSearch();
        }
    });
});


