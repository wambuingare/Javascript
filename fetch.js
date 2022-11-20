const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));

fetch('https://jsonplaceholder.typicode.com/posts/101',{
method:"GET",
headers:{
"Content-type":"application/json"
},
body: JSON.stringify({
    userId:1,
    title:"AdaLab",
    body:"We love each other"
})
})
.then(function (response) {
return response.json();
})
.then(function (data) {
console.log('success', data);
})
.catch(function (error) {
console.log('error', error);
})