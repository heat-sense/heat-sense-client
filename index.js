fetch('http://localhost:1234/session', {
    method: 'POST'
})
    .then(res => res.json())
    .then(data => {
        console.log(data)
    });