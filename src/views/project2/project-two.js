import { useEffect } from "react";
import * as d3 from "d3";
import Header from "../../components/header";
import aapl from "./data.json";

const ProjectTwo = () => {
  useEffect(() => {
    // Select the chart area and remove any existing SVG
    d3.select("#chart-area").select("svg").remove();

    // Declare the chart dimensions and margins
    const width = 928;
    const height = 500;
    const marginTop = 20;
    const marginRight = 30;
    const marginBottom = 30;
    const marginLeft = 40;

    // Declare the x (horizontal position) scale.
    const x = d3
      .scaleUtc()
      .domain(d3.extent(aapl, (d) => new Date(d.date)))
      .range([marginLeft, width - marginRight]);

    // Declare the y (vertical position) scale
    const y = d3
      .scaleLinear()
      .domain([0, d3.max(aapl, (d) => d.close)])
      .range([height - marginBottom, marginTop]);

    // Create the SVG container and append it to the DOM
    const svg = d3
      .select("#chart-area")
      .append("svg")
      .attr("width", width)
      .attr("height", height)
      .attr("viewBox", [0, 0, width, height])
      .attr("style", "max-width: 100%; height: auto;");

    // Define the area generator function
    const area = d3
      .area()
      .x((d) => x(new Date(d.date)))
      .y0(y(0))
      .y1((d) => y(d.close));

    // Append a path for the area (under the axes).
    svg.append("path").datum(aapl).attr("fill", "steelblue").attr("d", area);

    // Add the x-axis.
    svg
      .append("g")
      .attr("transform", `translate(0,${height - marginBottom})`)
      .call(
        d3
          .axisBottom(x)
          .ticks(width / 80)
          .tickSizeOuter(0)
      );

    // Add the y-axis.
    svg
      .append("g")
      .attr("transform", `translate(${marginLeft},0)`)
      .call(d3.axisLeft(y).ticks(height / 40))
      .call((g) => g.select(".domain").remove())
      .call((g) =>
        g
          .selectAll(".tick line")
          .clone()
          .attr("x2", width - marginLeft - marginRight)
          .attr("stroke-opacity", 0.1)
      )
      .call((g) =>
        g
          .append("text")
          .attr("x", -marginLeft)
          .attr("y", 10)
          .attr("fill", "currentColor")
          .attr("text-anchor", "start")
          .text("↑ Daily close ($)")
      );
  }, []);

  return (
    <div>
      <Header />
      <div id="chart-area" className="p-12"></div>
    </div>
  );
};

export default ProjectTwo;
