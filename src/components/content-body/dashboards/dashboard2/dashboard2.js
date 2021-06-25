import React, { useState, useEffect } from 'react';
import Highcharts from 'highcharts/highstock';
import {
  HighchartsStockChart, Chart, withHighcharts, XAxis, YAxis, Title, Legend,
  LineSeries, Navigator, RangeSelector, Tooltip
} from 'react-jsx-highstock';
import '../dashboard.css'

import ev_sales from '../../../../assets/ev_sales.json'

function Dashboard2() {
  return (
    <div id="dashboard-container">
      <HighchartsStockChart>
        <Chart zoomType="x" />

        <Title>EV Sales</Title>

        <Legend>
          <Legend.Title>Key</Legend.Title>
        </Legend>

        <Tooltip />

        <XAxis>
          <XAxis.Title>Time</XAxis.Title>
        </XAxis>

        <YAxis>
          <YAxis.Title>EV Sales</YAxis.Title>
          <LineSeries id="ev_sales" name="EV Sales" data={ev_sales} />
        </YAxis>

        <RangeSelector selected={4}>
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

export default withHighcharts(Dashboard2, Highcharts);