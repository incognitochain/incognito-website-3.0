import apiExplorerService from '@src/services/rpcClient/apiExplorerService';
import { convertISOtoMMYYYY } from '@src/utils/timeUtils';
import { formatPrice } from '@utils/convert';
import moment from 'moment';
import React, { memo, useEffect, useState } from 'react';
import { isMobile } from 'react-device-detect';
import { useHistory } from 'react-router-dom';
import {
  Area,
  Bar,
  BarChart,
  CartesianGrid,
  ComposedChart,
  Legend,
  Line,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';

const MAX_ACTIVE_VALIDATOR = 5000;
const MAX_APR = 180;

import styled, { ITheme } from 'styled-components';
interface ChartDataItem {
  PRVRewardInMonth: number;
  activeValidator: number;
  averageAPR: number;
  beaconHeight: number;
  startOfMonth: string;
}
interface ChartData {
  activeValidatorChartData: ChartDataItem[];
  circulatingSupply: number;
  estimatedAPR: number;
  totalPRVStaked: number;
  totalValidator: number;
}

const ChartDataInit: ChartData = {
  activeValidatorChartData: [],
  circulatingSupply: 0,
  estimatedAPR: 0,
  totalPRVStaked: 0,
  totalValidator: 0,
};

const Styled = styled.div<{ isMobile: boolean }>`
  margin-top: 140px;
  display: flex;
  flex-direction: column;

  .title {
    text-align: center;
  }

  .row {
    flex: 1;
    margin-top: 60px;
    display: flex;
    flex-direction: row;
    .leftView {
      border: 2px solid #363636;
      border-radius: 16px;
      display: flex;
      flex: 1;
      min-height: 600px;
      overflow: hidden;
      .chart-container {
        display: flex;
        position: relative;
        width: 100%;
        height: 100%;
      }
    }

    .rightView {
      margin-left: 50px;
      display: flex;
      padding: 20px;
      min-width: 350px;
      border: 2px solid #363636;
      border-radius: 16px;

      .tableContent {
        flex: 1;
        flex-direction: column;
        .title {
          margin-top: 20px;
          text-align: left;
          p {
            font-weight: 400;
            font-size: 16px;
          }
        }
        .rowTableView {
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          p {
            font-weight: 500;
            font-size: 24px;
          }
        }
      }
    }

    ${({ theme }: { theme: ITheme }) => theme.mediaWidth.upToLarge`
      margin-top: 60px;
      flex-direction: column !important;
      .leftView {
        border: 2px solid #363636;
        border-radius: 16px;
        min-height: 600px;
        flex: none;
        height: 600px;
      }

      .rightView {
        margin-left: 0px;
        margin-top: 40px;
      }
    `}

    ${({ theme }: { theme: ITheme }) => theme.mediaWidth.upToMedium`
      .leftView {
        overflow: auto;
        overflow-y: hidden;
        .chart-container {
          min-width: 1200px;
        }
      }
    `}
  }

  ${({ theme }: { theme: ITheme }) => theme.mediaWidth.upToSupperLarge`
    `}

  .timeText {
    word-wrap: break-word;
    line-break: auto;
    text-align: center;
  }

  .wrapperClassName {
    border-color: transparent;
    border-radius: 14px;
  }
`;

const CustomizedAxisTick = (props: any) => {
  const { x, y, stroke, payload } = props;
  return (
    <g transform={`translate(${x - 28},${y - 20})`}>
      <foreignObject x="10" y="10" width="40" height="40">
        <p className="timeText">{payload.value}</p>
      </foreignObject>
    </g>
  );
};
const ValidatorRewardEstimation = () => {
  // const history = useHistory();
  const [dataChart, setDataChart] = useState<ChartData>(ChartDataInit);
  const [drawDataChart, setDrawDataChart] = useState<any[]>([]);

  const getData = async () => {
    const dataChart: ChartData = await apiExplorerService.getLandingValidatorData();
    // console.log('DATA ', dataChart);
    setDataChart(dataChart);
    convertData(dataChart.activeValidatorChartData || []);
  };

  const convertData = (listData: ChartDataItem[]) => {
    const activeValidatorChartData: ChartDataItem[] = listData;
    const result = activeValidatorChartData.map((item, index) => ({
      time: convertISOtoMMYYYY(item.startOfMonth),
      APR: formatPrice({ price: item.averageAPR }),
      'Active Validator': item.activeValidator,
    }));
    setDrawDataChart(result);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <Styled isMobile={isMobile}>
      <p className="title fw-medium main-title-text">Rewards Estimation</p>
      <div className="row">
        <div className="leftView">
          <ResponsiveContainer className="chart-container">
            <ComposedChart
              data={drawDataChart}
              margin={{
                top: 20,
                right: 30,
                left: 20,
                bottom: 5,
              }}>
              <CartesianGrid
                stroke="#363636"
                vertical={false}
                strokeDasharray="3 3"
                horizontal={{ width: '100%' }}
              />
              <XAxis
                dataKey="time"
                stroke="#FFFFFF"
                height={50}
                minTickGap={0}
                tickMargin={10}
                angle={40}
                width={10}
                tick={<CustomizedAxisTick />}
              />

              <Tooltip
                wrapperClassName="wrapperClassName"
                contentStyle={{
                  backgroundColor: '#363636',
                  borderColor: 'transparent',
                  lineHeight: 2.2,
                  fontWeight: 600,
                  fontSize: 16,
                }}
                labelStyle={{
                  color: '#9C9C9C',
                  fontWeight: 400,
                  fontSize: 16,
                }}
              />
              <Legend
                iconSize={14}
                wrapperStyle={{
                  paddingTop: 30,
                  paddingBottom: 30,
                }}
              />
              <YAxis
                yAxisId="left"
                orientation="left"
                stroke="#1A73E8"
                padding={{
                  top: 50,
                }}
                type="number"
                domain={[0, MAX_ACTIVE_VALIDATOR]}
                tickCount={6}
                allowDataOverflow={true}
              />
              <Bar
                yAxisId="left"
                dataKey="Active Validator"
                fill="#1A73E8"
                barSize={35}
              />
              <YAxis
                stroke="#FFFFFF"
                orientation="right"
                padding={{
                  top: 50,
                }}
                domain={[0, MAX_APR]}
                tickCount={8}
              />
              <Line
                isAnimationActive={false}
                type="monotone"
                orientation="right"
                strokeWidth={0.8}
                dataKey="APR"
                dot={{ stroke: '#FFFFFF', strokeWidth: 1, r: 4, strokeDasharray: '' }}
                stroke="#FFFFFF"
                fill={'#FFFFFF'}
              />
            </ComposedChart>
          </ResponsiveContainer>
        </div>
        <div className="rightView">
          <div className="tableContent">
            <p className="text2 title">Circulating supply:</p>
            <div className="rowTableView">
              <p>{formatPrice({ price: dataChart.circulatingSupply })}</p>
              <p>PRV</p>
            </div>
            <p className="text2 title">Total PRV staked:</p>
            <div className="rowTableView">
              <p>{formatPrice({ price: dataChart.totalPRVStaked })}</p>
              <p>PRV</p>
            </div>

            <p className="text2 title">Estimated APR:</p>
            <div className="rowTableView">
              <p>{formatPrice({ price: dataChart.estimatedAPR })}</p>
              <p>%</p>
            </div>

            <p className="text2 title">Total validators:</p>
            <div className="rowTableView">
              <p>{formatPrice({ price: dataChart.totalValidator })}</p>
            </div>

            <p className="text2 title">Statistics on</p>
            <div className="rowTableView">
              <p>{moment(new Date().toISOString()).format('MM/DD/YYYY')}</p>
            </div>
          </div>
        </div>
      </div>
    </Styled>
  );
};

export default memo(ValidatorRewardEstimation);
