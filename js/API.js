function API_getRequest(id) {
	axios.get('http://localhost:8080/items/' + id)
		.then(function (response) {
			console.log(response);
		})
		.catch(function (error) {
			console.log(error);
		})
		.then(function () {
		});
}

function API_putRequest(id, data) {
	axios.put('http://localhost:8080/items', {
		id: id,
		data: data
	})
		.then(function (response) {
			console.log(response);
		})
		.catch(function (error) {
			console.log(error);
		})
		.then(function () {
		});
}

function API_deleteRequest(id) {
	axios.delete('http://localhost:8080/items/' + id)
		.then(function (response) {
			console.log(response);
		})
		.catch(function (error) {
			console.log(error);
		})
		.then(function () {
		});
}


function API_getAllRequest() {
	axios.get('http://localhost:8080/items')
		.then(function (response) {
			console.log(response);
		})
		.catch(function (error) {
			console.log(error);
		})
		.then(function () {
		});
}

function API_getFilteredRequest(filter) {
	axios.get('http://localhost:8080/items', {
		params: {
			filter: filter
		}
	})
		.then(function (response) {
			console.log(response);
		})
		.catch(function (error) {
			console.log(error);
		})
		.then(function () {
		});
}

function API_postRequest(data) {
	axios.post('http://localhost:8080/items', {
		data: data
	})
		.then(function (response) {
			console.log(response);
		})
		.catch(function (error) {
			console.log(error);
		})
		.then(function () {
		});
}