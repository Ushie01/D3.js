import React, { useEffect } from "react";
import * as d3 from "d3";
import Header from "../components/header";

export default function Shape() {
  useEffect(() => {
    const chartArea = d3.select("#chart-area");
    chartArea.selectAll("*").remove();
    const svg = chartArea
      .append("svg")
      .attr("width", 500)
      .attr("height", 400)
      .style("background-color", "gray");

    svg
      .append("line")
      .attr("x1", 20)
      .attr("y1", 70)
      .attr("x2", 100)
      .attr("y2", 350)
      .attr("stroke", "brown")
      .attr("stroke-width", 5);

    svg
      .append("rect")
      .attr("x", 200)
      .attr("y", 50)
      .attr("width", 240)
      .attr("height", 120)
      .attr("fill", "blue");

    svg
      .append("ellipse")
      .attr("cx", 300)
      .attr("cy", 300)
      .attr("rx", 50)
      .attr("ry", 70)
      .attr("fill", "yellow");

    svg
      .append("rect")
      .attr("x", 100)
      .attr("y", 100)
      .attr("width", 100)
      .attr("height", 100)
      .attr("fill", "green");
  }, []);

  return (
    <div>
      <Header />
      <h1 className="bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text text-4xl font-bold p-10">
        Designs on D3.JS
      </h1>
      <div id="chart-area" className="p-12"></div>
    </div>
  );
}
