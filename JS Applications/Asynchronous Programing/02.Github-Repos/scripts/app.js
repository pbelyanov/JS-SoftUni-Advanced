function loadRepos() {
	let input = document.getElementById('username').value;
	let arrayResult = []
	fetch(`https://api.github.com/users/${input}/repos`)
		.then((response) => {
			if (response.ok == false) {
				throw new Error(`Error: ${response.status} ${response.statusText}`)
			}
			return response.json()
		})
		.then(data => {
			document.getElementById('repos').innerHTML = ''
			for (let k of data) {
				arrayResult.push(k)
				let li = document.createElement('li');
				let a = document.createElement('a');
				li.appendChild(a);
				document.getElementById('repos').appendChild(li);
				a.textContent = k.full_name
				a.setAttribute('href', `${k.url}`)
			}
		}).catch((error) => {
			document.getElementById('repos').innerHTML = ''
			let li = document.createElement('li');
			document.getElementById('repos').appendChild(li);
			li.textContent = error
		})
	console.log(arrayResult)
	for (let k of arrayResult) {
		console.log(k)
	}
}