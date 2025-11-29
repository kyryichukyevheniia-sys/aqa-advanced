const divide = (numerator, denominator) => {
	if (denominator === 0) {
		throw new Error('The denominator is zero');
	} else if (isNaN(denominator) || isNaN(numerator)) {
		throw new Error('Value is not a number');
	}
	return numerator / denominator;
};

try {
	console.log(divide(3, 0));
} catch (error) {
	console.log(error.message);
}

try {
	console.log(divide(1, 's'));
} catch (error) {
	console.log(error.message);
}

try {
	console.log(divide(1, 2));
} catch (error) {
	console.log(error.message);
} finally {
	console.log('Work is completed');
}
