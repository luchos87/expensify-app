const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        //resolve('resolve data');
        reject('404');
    }, 1500);    
});

console.log('before');

promise.then((data) => {
    console.log(data);
}).catch((error) => {
    console.log('Error: ', error);
});

console.log('after');