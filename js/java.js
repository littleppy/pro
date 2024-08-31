function showInfo(infoType) {
    const infoElement = document.getElementById('info');

    let infoText = '';

    switch (infoType) {
        case 'info1':
            infoText = 'This is the information for Info 1.';
            break;
        case 'info2':
            infoText = 'This is the information for Info 2.';
            break;
        case 'info3':
            infoText = 'This is the information for Info 3.';
            break;
        default:
            infoText = 'No information available.';
    }

    infoElement.textContent = infoText;
}
