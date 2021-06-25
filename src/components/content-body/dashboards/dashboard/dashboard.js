import React, { useState, useEffect } from 'react';
import Highcharts from 'highcharts/highstock';
import {
  HighchartsStockChart, Chart, withHighcharts, XAxis, YAxis, Title, Legend,
  LineSeries, Navigator, RangeSelector, Tooltip
} from 'react-jsx-highstock';
import '../dashboard.css'

import ev_sales from '../../../../assets/ev_sales.json'
import ev_sales_prediction from '../../../../assets/ev_sales_prediction.json'
import cobalt_prices from '../../../../assets/cobalt_prices.json'
import cobalt_prediction from '../../../../assets/cobalt_prediction.json'
import lithium_prices from '../../../../assets/lithium_prices.json'
import lithium_prediction from '../../../../assets/lithium_prediction.json'

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
          <YAxis.Title>Price</YAxis.Title>
          <LineSeries id="ev_sales" name="EV Sales" data={ev_sales} />
          <LineSeries id="ev_sales_predictions" name="EV Sales Predictions" data={ev_sales_prediction} />
        </YAxis>

        <RangeSelector selected={4}>
          <RangeSelector.Button count={1} type="day">1d</RangeSelector.Button>
          <RangeSelector.Button count={7} type="day">7d</RangeSelector.Button>
          <RangeSelector.Button count={1} type="month">1m</RangeSelector.Button>
          <RangeSelector.Button type="all">All</RangeSelector.Button>
          <RangeSelector.Input boxBorderColor="" />
        </RangeSelector>

        <Navigator>
          <Navigator.Series seriesId="ev_sales" />
          <Navigator.Series seriesId="ev_sales_predictions" />
        </Navigator>
      </HighchartsStockChart>
      <HighchartsStockChart>
        <Chart zoomType="x" />

        <Title>Lithium and Cobalt Prices</Title>

        <Legend>
          <Legend.Title>Key</Legend.Title>
        </Legend>

        <Tooltip />

        <XAxis>
          <XAxis.Title>Time</XAxis.Title>
        </XAxis>
        <YAxis>
          <YAxis.Title>Price</YAxis.Title>
          <LineSeries id="cobalt_prices" name="Cobalt Prices" data={cobalt_prices} />
          <LineSeries id="cobalt_prediction" name="Cobalt Predictions" data={cobalt_prediction} />
          <LineSeries id="lithium_prices" name="Lithium Prices" data={lithium_prices} />
          <LineSeries id="lithium_prediction" name="Lithium Predictions" data={lithium_prediction} />
        </YAxis>

        <RangeSelector selected={4}>
          <RangeSelector.Button count={1} type="day">1d</RangeSelector.Button>
          <RangeSelector.Button count={7} type="day">7d</RangeSelector.Button>
          <RangeSelector.Button count={1} type="month">1m</RangeSelector.Button>
          <RangeSelector.Button type="all">All</RangeSelector.Button>
          <RangeSelector.Input boxBorderColor="" />
        </RangeSelector>

        <Navigator>
          <Navigator.Series seriesId="cobalt_prices" />
          <Navigator.Series seriesId="cobalt_prediction" />
        </Navigator>
      </HighchartsStockChart>
    </div>
  );
}

export default withHighcharts(Dashboard2, Highcharts);