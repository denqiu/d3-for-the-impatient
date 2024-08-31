function makeDemo1() {
	d3.tsv("simple-example-1.tsv").then(data => {
		d3.select("svg")
			.selectAll("circle")
			.data(data)
			.enter()
			.append("circle")
			.attr("r", 5).attr("fill", "red")
			.attr("cx", d => d.x)
			.attr("cy", d => d.y)
	});
}