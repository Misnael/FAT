fetch("https://api.chucknorris.io/jokes/random")
.then(res => res.json())
.then(data => {
 console.log(data)
document.getElementById('joke').innerHTML = data.value
});