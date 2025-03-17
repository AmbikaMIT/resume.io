function showTab(event, tabId) {
    let tabs = document.querySelectorAll('.tab');
    let contents = document.querySelectorAll('.tab-content');
    
    tabs.forEach(tab => tab.classList.remove('active'));
    event.currentTarget.classList.add('active');
    
    contents.forEach(content => content.classList.remove('active'));
    document.getElementById(tabId).classList.add('active');
}

document.addEventListener("DOMContentLoaded", function () {
    document.querySelector(".tab").click();
});