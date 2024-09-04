// Given a positive integer millis, write an asynchronous function that sleeps for millis milliseconds.
// It can resolve any value.

/**
 * @param {number} millis
 * @return {Promise}
 */
async function sleep(millis) {
    return myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve();
    }, millis);
    });
}

/** 
 * let t = Date.now()
 * sleep(100).then(() => console.log(Date.now() - t)) // 100
 */