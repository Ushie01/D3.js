import { useEffect } from "react";
import * as d3 from "d3";
import Header from "../../components/header";

// JSON data
const data = [
  { "month": "January", "revenue": 13432, "profit": 8342 },
  { "month": "February", "revenue": 19342, "profit": 10342 },
  { "month": "March", "revenue": 17443, "profit": 15423 },
  { "month": "April", "revenue": 26342, "profit": 18432 },
  { "month": "May", "revenue": 34213, "profit": 29434 },
  { "month": "June", "revenue": 50321, "profit": 45343 },
  { "month": "July", "revenue": 54273, "profit": 47452 },
];

const Histogram = () => {
  useEffect(() => {
    const MARGIN = { LEFT: 100, RIGHT: 10, TOP: 10, BOTTOM: 130 };
    const WIDTH = 600 - MARGIN.LEFT - MARGIN.RIGHT;
    const HEIGHT = 400 - MARGIN.TOP - MARGIN.BOTTOM;

    // Clear any existing SVG elements
    d3.select("#chart").selectAll("*").remove();

    const svg = d3
      .select("#chart")
      .append("svg")
      .attr("width", WIDTH + MARGIN.LEFT + MARGIN.RIGHT)
      .attr("height", HEIGHT + MARGIN.TOP + MARGIN.BOTTOM)

    const g = svg
      .append("g")
      .attr("transform", `translate(${MARGIN.LEFT}, ${MARGIN.TOP})`);

    // X label
    g.append("text")
      .attr("class", "x axis-label")
      .attr("x", WIDTH / 2)
      .attr("y", HEIGHT + 50)
      .attr("font-size", "20px")
      .attr("text-anchor", "middle")
      .text("Month");

    // Y label
    g.append("text")
      .attr("class", "y axis-label")
      .attr("x", -(HEIGHT / 2))
      .attr("y", -60)
      .attr("font-size", "20px")
      .attr("text-anchor", "middle")
      .attr("transform", "rotate(-90)")
      .text("Revenue ($)");

    // Parsing the data
    data.forEach((d) => {
      d.revenue = +d.revenue;
      d.profit = +d.profit;                                            
    });

    const x = d3
      .scaleBand()
      .domain(data.map((d) => d.month))
      .range([0, WIDTH])
      .paddingInner(0.3)
      .paddingOuter(0.2);

    const y = d3
      .scaleLinear()
      .domain([0, d3.max(data, (d) => d.revenue)])
      .range([HEIGHT, 0]);

    const xAxisCall = d3.axisBottom(x);
    g.append("g")
      .attr("class", "x axis")
      .attr("transform", `translate(0, ${HEIGHT})`)
      .call(xAxisCall)
      .selectAll("text")
      .attr("y", "10")
      .attr("x", "-5")
      .attr("text-anchor", "end")
      .attr("transform", "rotate(-40)");

    const yAxisCall = d3
      .axisLeft(y)
      .ticks(3)
      .tickFormat((d) => d + "$");
    g.append("g").attr("class", "y axis").call(yAxisCall);

    const rects = g.selectAll("rect").data(data);

    rects
      .enter()
      .append("rect")
      .attr("y", (d) => y(d.revenue))
      .attr("x", (d) => x(d.month))
      .attr("width", x.bandwidth)
      .attr("height", (d) => HEIGHT - y(d.revenue))
      .attr("fill", "grey");
  }, []);

  return (
    <div>
      <Header />
      <div id="chart" className="p-12"></div>
    </div>
  );
};

export default Histogram;
