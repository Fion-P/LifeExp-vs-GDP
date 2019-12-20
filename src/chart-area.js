const margin = { left: 80, right: 100, top: 50, bottom: 100 };

export const width = 880 - margin.left - margin.right;
export const height = 500 - margin.top - margin.bottom;

export const g = d3.select("#chart-area")
  .append("svg")
  .attr("width", width + margin.left + margin.right)
  .attr("height", height + margin.top + margin.bottom)
  .append("g")
  .attr("transform", "translate(" + margin.left
    + ", " + margin.top + ")");

