


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








// async function getMarketCap() {


//     //  getting the environment variable from the environment





//     console.log(
//         'about to start operation 1'
//     );

//     try {
//         const response = await axios.request(url, {
//             headers: {
//                 'X-CMC_PRO_API_KEY': apikey,
//                 'Content-Type': 'applications/json'
//             }
//         });

//         console.log('now we are here');
//         // var data =
//         //     JSON.stringify(response.data);

//         // console.log(data)


//     } catch (error) {
//         console.log('sorry an unknown error occured', error);
//     }



//     console.log(response.statusText);
// }


async function fetchCryptoData() {


    const apikey = "75f505f3-1022-42ca-82e1-a626f71b16e9";
    const url = "https://pro-api.coinmarketcap.com/v1/cryptocurrency/info?symbol=CHEEKS";

    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('X-CMC_PRO_API_KEY', apikey);
    // try {



    //     console.log(headers.entries());
    //     const response = axios.getAdapter;

    // } catch (error) {
    //     console.error('Error fetching cryptocurrency data:', error);


    //     return [];
    // }

    console.debug(headers.entries());
}


window.onload = fetchCryptoData();
