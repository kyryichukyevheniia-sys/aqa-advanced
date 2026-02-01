const axios = require('axios')
const { fetchWithHeadersAndParams } = require('./api')

jest.mock('axios')

describe('Testing headers and params', () => {
	test('should send correct headers and params', async () => {
		axios.get.mockResolvedValue({ data: [] })

		await fetchWithHeadersAndParams()

		expect(axios.get).toHaveBeenCalledWith('https://example.com/api', {
			headers: {
				Authorization: 'Bearer test-token',
				'X-Custom-Header': 'CustomValue',
			},
			params: {
				page: 1,
				limit: 10,
			},
		})
	})
})
