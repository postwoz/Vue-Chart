<template>

  <canvas ref="lineChart" width="50" height="10"></canvas>

</template>

<script>
/* eslint-disable */

export default {
    mounted() {
        var ctx = this.$refs.lineChart.getContext('2d');

        var chart = new this.$_Chart(ctx, {
            type: 'line',

            data: {
                labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
                datasets: [{
                    label: 'My First dataset',
                    backgroundColor: 'rgb(255, 99, 132)',
                    borderColor: 'rgb(255, 99, 132)',
                    data: [0, 10, 5, 2, 20, 30, 45]
                }]
            },
        });
    }
}

</script>


<style>

</style>