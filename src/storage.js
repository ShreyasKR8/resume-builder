function saveDetails(formDetails) {
    localStorage.setItem('Resume', JSON.stringify(formDetails));
}

function loadDetails() {
    const fetchedData =  JSON.parse(localStorage.getItem('Resume'));
    return fetchedData;
}

export default {
    saveDetails,
    loadDetails,
}