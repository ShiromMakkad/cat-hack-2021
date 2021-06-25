import React, { useState, useEffect } from 'react';
import Highcharts from 'highcharts/highstock';
import {
  HighchartsStockChart, Chart, withHighcharts, XAxis, YAxis, Title, Legend,
  LineSeries, Navigator, RangeSelector, Tooltip
} from 'react-jsx-highstock';
import '../dashboard.css'

import electricity_prices from '../../../../assets/electricity_prices.json'
import gas_prices from '../../../../assets/gas_prices.json'

function Dashboard() {
  return (
    <div id="dashboard-container">
      <HighchartsStockChart>
        <Chart zoomType="x" />

        <Title>Gas vs Electricity Prices</Title>

        <Legend>
          <Legend.Title>Key</Legend.Title>
        </Legend>

        <Tooltip />

        <XAxis>
          <XAxis.Title>Time</XAxis.Title>
        </XAxis>
        <YAxis>
          <YAxis.Title>Gas Prices</YAxis.Title>
          <LineSeries id="gas_prices" name="Gas Prices" data={gas_prices} />
        </YAxis>

        <YAxis>
          <YAxis.Title>Electricity Prices</YAxis.Title>
          <LineSeries id="electricity_prices" name="Electricity Prices" data={electricity_prices} />
        </YAxis>

        <RangeSelector selected={1}>
          <RangeSelector.Button count={1} type="day">1d</RangeSelector.Button>
          <RangeSelector.Button count={7} type="day">7d</RangeSelector.Button>
          <RangeSelector.Button count={1} type="month">1m</RangeSelector.Button>
          <RangeSelector.Button type="all">All</RangeSelector.Button>
          <RangeSelector.Input boxBorderColor="" />
        </RangeSelector>

        <Navigator>
          <Navigator.Series seriesId="profit" />
        </Navigator>
      </HighchartsStockChart>
    </div>
  );
}

export default withHighcharts(Dashboard, Highcharts);