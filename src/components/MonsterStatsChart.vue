<template>
  <div ref="chart" class="mt-10"></div>
</template>

<script setup>
import { ref, onMounted, watchEffect, nextTick } from "vue"
import * as d3 from "d3"

const chart = ref(null)

const props = defineProps({
  monster: Object
})

function renderChart(monster) {
  if (!monster || !chart.value) return

  chart.value.innerHTML = ""

  const data = [
    { stat: "Fuerza", value: monster.strength || 0 },
    { stat: "Destreza", value: monster.dexterity || 0 },
    { stat: "Constitución", value: monster.constitution || 0 },
    { stat: "Inteligencia", value: monster.intelligence || 0 },
    { stat: "Sabiduría", value: monster.wisdom || 0 },
    { stat: "Carisma", value: monster.charisma || 0 }
  ]

  const margin = { top: 30, right: 20, bottom: 70, left: 40 }
  const width = 500 - margin.left - margin.right
  const height = 300 - margin.top - margin.bottom

  const svg = d3.select(chart.value)
    .append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
    .append("g")
    .attr("transform", `translate(${margin.left},${margin.top})`)

  const x = d3.scaleBand()
    .domain(data.map(d => d.stat))
    .range([0, width])
    .padding(0.3)

  const y = d3.scaleLinear()
    .domain([0, 22])
    .nice()
    .range([height, 0])

  // x
  svg.append("g")
    .attr("transform", `translate(0, ${height})`)
    .call(d3.axisBottom(x))
    .selectAll("text")
    .attr("transform", "rotate(-20)")
    .style("text-anchor", "end")
    .attr("fill", "#eadcc6")

  // y
  svg.append("g")
    .call(d3.axisLeft(y).ticks(5))
    .selectAll("text")
    .attr("fill", "#eadcc6")

  // barras
  svg.selectAll("rect")
    .data(data)
    .enter()
    .append("rect")
    .attr("x", d => x(d.stat))
    .attr("y", d => y(d.value))
    .attr("width", x.bandwidth())
    .attr("height", d => height - y(d.value))
    .attr("fill", "#f59e0b")

  // vaores
  svg.selectAll(".value")
    .data(data)
    .enter()
    .append("text")
    .attr("x", d => x(d.stat) + x.bandwidth() / 2)
    .attr("y", d => {
      const barHeight = height - y(d.value)

      // barra alta texto dentro
      if (barHeight > 30) {
        return y(d.value) + 18
      }

      // baja txt arriba
      return y(d.value) - 5
    })
    .attr("text-anchor", "middle")
    .attr("fill", d => {
      const barHeight = height - y(d.value)
      return barHeight > 30 ? "#000" : "#eadcc6"
    })
    .attr("font-size", "12px")
    .text(d => d.value)
}

onMounted(async () => {
  await nextTick()

  watchEffect(() => {
    if (props.monster) {
      renderChart(props.monster)
    }
  })
})
</script>