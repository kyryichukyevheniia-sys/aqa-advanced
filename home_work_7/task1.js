const handleNum = (num, handleEven, handleOdd) => {
	if (num % 2 === 0) {
		return handleEven();
	} else {
	return handleOdd();
    }
};

const handleEven = () => {
	return 'number is even';
};
const handleOdd = () => {
	return 'number is odd';
};
console.log(handleNum(6, handleEven, handleOdd));
