document.addEventListener("DOMContentLoaded", function() {
    
    const tabs = document.querySelectorAll('.tab');
    const tabContents = document.querySelectorAll('.tab-content');

    
    tabs.forEach(tab => {
        tab.addEventListener('click', function() {
            
            tabs.forEach(t => t.classList.remove('active'));
            tabContents.forEach(content => content.classList.remove('active'));

            tab.classList.add('active');

            const tabId = tab.getAttribute('data-tab');
            const tabContent = document.querySelector(`.tab-content[data-tab="${tabId}"]`);
            tabContent.classList.add('active');
        });
    });
});

