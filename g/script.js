function fetchData() {
	const customerId = document.getElementById("customer_id").value;

	// First POST request
	fetch(`http://perfume2dayadmin.com/API/gshim.php?customer_id=${customerId}`, {
			method: 'POST',
			headers: {
					'Content-Type': 'application/json'
			}
	})
	.then(response => response.json())
	.then(data => {
			const customerSeq = data.customer_seq;
			const surveySeq = data.survey_seq;

			// Second POST request
			return fetch(`http://perfume2dayadmin.com/API/perfume.php?type=complete_perfume_list&customer_seq=${customerSeq}&survey_seq=${surveySeq}`, {
					method: 'POST',
					headers: {
							'Content-Type': 'application/json'
					}
			})
	})
	.then(response => response.text()) // Assuming you want to display the raw response
	.then(content => {
			document.getElementById("responseContent").innerHTML = content;
	})
	.catch(error => {
			console.error('Error:', error);
			document.getElementById("responseContent").innerHTML = "An error occurred.";
	});
}
