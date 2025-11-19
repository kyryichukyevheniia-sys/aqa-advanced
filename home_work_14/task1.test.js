const axios = require('axios');

describe('Api tests', () => {
	test('Getting the first users name', async () => {
		const response = await axios.get('https://jsonplaceholder.typicode.com/users');
		console.log(response.data[0].name, response.status);
		expect(response.status).toBe(200);
	});

	test('Creating post', async () => {
		const response = await axios.post('https://jsonplaceholder.typicode.com/posts');
		body: JSON.stringify({
			title: 'foo',
			body: 'bar',
			userId: 1,
		});
		console.log(response.data, response.status);
		expect(response.status).toBeLessThan(300);
	});

	test('Getting comments', async () => {
		const response = await axios.get('https://jsonplaceholder.typicode.com/comments?postId=1');
		console.log(response.data, response.status);
		expect(response.status).toEqual(200);
	});

	test('Getting comment from post 2', async () => {
		const response = await axios.get('https://jsonplaceholder.typicode.com/posts/2/comments');
		console.log(response.data, response.status);
		expect(response.status).toEqual(200);
	});

	test('Getting todos', async () => {
		const response = await axios.get('https://jsonplaceholder.typicode.com/todos');
		console.log(response.data, response.status);
		expect(response.status).toEqual(200);
	});
});
