/* ES5 */
var isMomHappy = false;

// Promise
// the whole thing is object of Promise
// resole and reject are both function name
var willIGetNewPhone = new Promise(
    function (resolve, reject) {
        if (isMomHappy) {
            var phone = {
                brand: 'Samsung',
                color: 'black'
            };
            resolve(phone); // fulfilled, the 'phone' will be capture by the then function
        } else {
            var reason = new Error('mom is not happy');
            reject(reason); // reject
        }

    }
);


var askMom = function () {
    console.log('before asking Mom'); // log before
// anything in the chain ( then or catch ) will still run synchronously.
// however anything that is not logically included into them will be run
// asynchronoulsy
//
    willIGetNewPhone
        .then(showOff)
        .then(function (fulfilled) {
            console.log(fulfilled);
        })
        .catch(function (error) {
            console.log(error.message);
        });
    console.log('after asking mom'); // log after, this is not part of of promise chain
}
