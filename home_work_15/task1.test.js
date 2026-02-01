const axios = require('axios')
const { fetchWithError } = require('./api')

jest.mock('axios')

test('should handle axios error correctly', async () => {
	axios.get.mockRejectedValue(new Error('Network Error'))

	await expect(fetchWithError()).rejects.toThrow('Failed to fetch data')
})
