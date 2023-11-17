
startDroplet = (element) => {
	
	//get values from data
	const id = element.getAttribute('data-id');
	const name = element.getAttribute('data-name');
	const image = element.getAttribute('data-image');

	//send request
	fetch('/api/droplets/start', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify({
			id: id,
		})
	}).then(response => response.json() )
	.then(json => { 
		if (json.success) {
			window.location.href = '/instance/' + json["instance_id"];
	}});

}