const axios = require('axios')
const { fetchUserData } = require('./api')

jest.mock('axios')

describe('Mocking Axios', () => {
	test('should return user data on success', async () => {
		const mockUser = { id: 1, name: 'John' }

		axios.get.mockResolvedValue({ data: mockUser })

		const result = await fetchUserData()

		expect(result).toEqual(mockUser)
		expect(axios.get).toHaveBeenCalledWith('/users/1')
	})

	test('should throw error on failed request', async () => {
		axios.get.mockRejectedValue(new Error('404 error'))

		await expect(fetchUserData()).rejects.toThrow('Unable to fetch user')
	})
})
