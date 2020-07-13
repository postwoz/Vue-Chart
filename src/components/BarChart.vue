<template>

  <canvas ref="barChart" width="50" height="10"></canvas>

</template>


<script>
/* eslint-disable */

export default {
    props: ['propsdata'],
    mounted() {
        var myChart = new this.$_Chart(this.$refs.barChart, {
            type: 'bar',
            data: {
                labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
                datasets: this.propsdata
            },
            options: {
                scales: {
                    yAxes: [{
                        ticks: {
                            beginAtZero: true
                        }
                    }]
                }
            }
        });
    }
}

</script>

<style>

</style>