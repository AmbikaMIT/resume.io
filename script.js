function openTab(event, tabId) {
    let tabContents = document.querySelectorAll('.tab-content');
    let tabButtons = document.querySelectorAll('.tab-button');
    
    tabContents.forEach(tab => tab.classList.remove('active'));
    tabButtons.forEach(button => button.classList.remove('active'));
    
    document.getElementById(tabId).classList.add('active');
    event.currentTarget.classList.add('active');
}

document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('.tab-button').click();
});