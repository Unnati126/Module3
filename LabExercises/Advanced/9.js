function randomDelay() {
    return new Promise((resolve, reject) => {
        const delay = Math.floor(Math.random() * 20) + 1;
        const delayMs = delay * 1000;

        setTimeout(() => {
            if (delay % 2 === 0) {
              resolve(`✅ Success! Delayed for ${delay} seconds.`);
            } else {
              reject(`❌ Failure! Delayed for ${delay} seconds (odd number).`);
            }
        }, delayMs);
    });
}

randomDelay()
  .then((message) => console.log(message))
  .catch((error) => console.error(error));