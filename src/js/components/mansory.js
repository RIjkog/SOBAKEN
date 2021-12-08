function mansory() {
	const numCols = 3;
	const margin = 30;
	const colHeights = Array(numCols).fill(0);
	const container = document.querySelector('.reviews-section__container');
	const numItems = container.children.length;
	Array.from(container.children).forEach((child, i) => {
		const order = i % numCols;
		child.style.order = order;
		colHeights[order] += parseFloat(child.clientHeight);
	})
	if (numItems > 1 && numItems < 4)
		container.style.marginBottom = '70px';
	container.style.height = Math.max(...colHeights) + margin * Math.floor(numItems / 3) + 'px';
}
