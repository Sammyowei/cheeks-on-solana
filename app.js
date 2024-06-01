



function getYear() {
    const today = new Date();
    var year = today.getFullYear();

    console.log(year)
    return year;
}

// Update the content of the paragraph with the year.
document.getElementById('copyright').textContent = getYear();

/// The [formatNumber] function is used to format and returns a large numerical value in 
/// the format of "K" for thousands, "M" for millions and "B" for billions.


function formatNumber(number) {
    if (number >= 1000000000) {
        return (number / 1000000000).toFixed(1) + 'B';
    } else if (number >= 1000000) {
        return (number / 1000000).toFixed(1) + 'M';
    } else if (number >= 1000) {
        return (number / 1000).toFixed(1) + 'K';
    } else {
        return number.toString();
    }
}

function copyContractAddress() {
    var copyText = document.getElementById('contract-address');

    navigator.clipboard.write(copyText.ariaValueText);
}




function customToast(message) {
    var customToast = document.getElementById("customToast");
    var customToastMessage = document.getElementById("customToastMessage");
    customToastMessage.innerText = message;
    customToast.style.display = "block";
    setTimeout(function () {
        customToast.style.display = "none";
    }, 3000); // Hide the toast after 3 seconds
}

// Function to close custom toast
function closeCustomToast() {
    var customToast = document.getElementById("customToast");
    customToast.style.display = "none";
}

// Function to show custom toast
function showCustomToast() {
    customToast('Contract address copied!');
}

// Custom toast function

