const form = document.querySelector('form');
const formInput = document.querySelector('#input');
const button = document.querySelector('#button');


form.addEventListener('submit', (e) => {
    e.preventDefault();
    const input = formInput.value;
    const url = 'http://127.0.0.1:3000';
    const data = {
        input: input
    };

    fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(res => res.json())
    .then(data => {
        console.log(data);
        formInput.value = '';
        formInput.focus();
    })
    .catch(err => console.log(err));
});