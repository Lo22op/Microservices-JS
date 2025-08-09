// JSON Used

// const JsonfromServer= '{"name": "John", "age": 30, "city": "New York"}';

// console.log(JsonfromServer);
// console.log(typeof JsonfromServer);

// const Api = JSON.parse(JsonfromServer);

// console.log(Api);
// console.log(typeof Api);


// Api['name'] = 'Jane';
// Api['age'] = 25;

// const JSONtoServer = JSON.stringify(Api);
// console.log(JSONtoServer);
// console.log(typeof JSONtoServer);

// console.log(JSON.parse(JSONtoServer));



// ############################################


// Asyancronous  Vs Synchronous


// // Synchronous
// console.log('Start Synchronous');
// console.log('Step 1');
// window.alert('This is a synchronous alert');
// console.log('Step 2');
// console.log('End Synchronous');


// Asynchronous

// console.log('Start Asynchronous');
// console.log('Step 1');
// setTimeout(function() {
//     window.alert('This is an asynchronous alert');
// }, 3000);
// console.log('Step 2');
// console.log('End Asynchronous');


// ############################################

// Call Stack and Web Api 

// ############################################

// Api Example || new XMLHttpRequest()
let btnGet = document.querySelector('#btn-get');

btnGet.addEventListener( 'click' , function() {

let myRequest = new XMLHttpRequest();

myRequest.open('GET', 'https://jsonplaceholder.typicode.com/posts');

myRequest.send();

 myRequest.onreadystatechange = function (){
    if (myRequest.readyState === 4 && myRequest.status === 200) {
        const response = JSON.parse(myRequest.responseText);

        for(let i = 0 ; i < 10 ; i++){
            const dataSection = document.querySelector('.data-section');
            const dataDiv = document.createElement('div');
            dataDiv.innerHTML = `
                <h1> id:  ${response[i].id}</h1>
                <h2> title:  ${response[i].title}</h2>
                <h3> body:  ${response[i].body}</h3>
                <p>Author ID: ${response[i].userId}</p>
                <hr />
            `;
            dataSection.appendChild(dataDiv);
        }

    } else if (myRequest.readyState === 4) {
        window.alert('Error: ' + myRequest.status);
    }
}


})



