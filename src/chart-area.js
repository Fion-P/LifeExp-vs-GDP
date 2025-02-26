const margin = { left: 80, right: 50, top: 10, bottom: 280 };

export const width = 750 - margin.left - margin.right;
export const height = 640 - margin.top - margin.bottom;

export const g = d3.select("#chart-area")
  .append("svg")
  .attr("width", width + margin.left + margin.right)
  .attr("height", height + margin.top + margin.bottom)
  .append("g")
  .attr("transform", "translate(" + margin.left
    + ", " + margin.top + ")");

