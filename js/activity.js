document.addEventListener('DOMContentLoaded', function() {
    var toggleBtn = document.getElementById('toggle-info-btn');
    var moreInfo = document.getElementById('more-info');

    toggleBtn.addEventListener('click', function() {
        if (moreInfo.style.display === 'none' || moreInfo.style.display === '') {
            moreInfo.style.display = 'block';
            toggleBtn.textContent = 'Click to hide information';
        } else {
            moreInfo.style.display = 'none';
            toggleBtn.textContent = 'Click to show more information';
        }
    });
});
