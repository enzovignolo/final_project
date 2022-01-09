const filterBuilder = (queryObj) => {
	const arrayFilter = ['_id', 'name', 'category', 'price', 'stock'];
	let filter = {};
	Object.keys(queryObj).map((queryFilter) => {
		if (arrayFilter.includes(queryFilter)) {
			filter[queryFilter] = queryObj[queryFilter];
		}
	});
	return filter;
};

export default filterBuilder;
