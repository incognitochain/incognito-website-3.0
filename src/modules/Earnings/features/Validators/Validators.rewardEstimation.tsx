import apiExplorerService from '@src/services/rpcClient/apiExplorerService';
import { convertISOtoMMYYYY } from '@src/utils/timeUtils';
import { formatPrice } from '@utils/convert';
import moment from 'moment';
import React, { memo, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import {
  Area,
  Bar,
  CartesianGrid,
  ComposedChart,
  Legend,
  Line,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';
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

const data = [
  {
    name: 'Page A',
    uv: 590,
    pv: 800,
    amt: 1400,
  },
  {
    name: 'Page B',
    uv: 868,
    pv: 967,
    amt: 1506,
  },
  {
    name: 'Page C',
    uv: 1397,
    pv: 1098,
    amt: 989,
  },
  {
    name: 'Page D',
    uv: 1480,
    pv: 1200,
    amt: 1228,
  },
  {
    name: 'Page E',
    uv: 1520,
    pv: 1108,
    amt: 1100,
  },
  {
    name: 'Page F',
    uv: 1400,
    pv: 680,
    amt: 1700,
  },
  {
    name: 'Page F',
    uv: 1400,
    pv: 680,
    amt: 1700,
  },
  {
    name: 'Page F',
    uv: 1400,
    pv: 680,
    amt: 1700,
  },
  {
    name: 'Page F',
    uv: 400,
    pv: 180,
    amt: 1700,
  },
  {
    name: 'Page F',
    uv: 680,
    pv: 280,
    amt: 1700,
  },
  {
    name: 'Page F',
    uv: 2400,
    pv: 1680,
    amt: 1700,
  },
  {
    name: 'Page F',
    uv: 1100,
    pv: 480,
    amt: 1700,
  },
];

const Styled = styled.div`
  margin-top: 140px;
  display: flex;
  flex-direction: column;

  .title {
    text-align: center;
  }
  .row {
    flex: 1;
    margin-top: 30px;
    display: flex;
    flex-direction: row;
    .leftView {
      border: 2px solid #363636;
      border-radius: 16px;
      display: flex;
      flex: 0.75;
      height: 500px;
      max-height: 500px;

      .chart-container {
        flex: 1;
        display: flex;
      }
      .timeText {
        color: 'white';
      }
    }

    .rightView {
      margin-left: 50px;
      display: flex;
      padding: 20px;
      flex: 0.25;
      border: 2px solid #363636;
      border-radius: 16px;
      /* background-color: lightgreen; */

      .tableContent {
        flex: 1;
        /* background-color: red; */
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

    ${({ theme }: { theme: ITheme }) => theme.mediaWidth.upToSmall`
      flex-direction: column;
      .rightView {
        flex: 1;
      }
      .leftView {
        flex: 1;
      }
    `}

    ${({ theme }: { theme: ITheme }) => theme.mediaWidth.upToMedium`
      flex-direction: column;
      .rightView {
      flex: 1;
    }

    .leftView {
      flex: 1;
    }
    `}

    ${({ theme }: { theme: ITheme }) => theme.mediaWidth.upToLarge`
    flex-direction: column;
    .rightView {
      flex: 1;
    }

    .leftView {
      flex: 1;
    }
  `}
    ${({ theme }: { theme: ITheme }) => theme.mediaWidth.upToSupperLarge`
    flex-direction: row;
  `}
  }
`;

const CustomizedAxisTick = (props: any) => {
  const { x, y, stroke, payload } = props;
  return (
    <g transform={`translate(${x},${y})`}>
      <text x={0} y={0} dy={16} textAnchor="end" fill="#FFFFFF" transform="rotate(-35)">
        {payload.value}
      </text>
    </g>
  );
};
const ValidatorRewardEstimation = () => {
  // const history = useHistory();
  const [dataChart, setDataChart] = useState<ChartData>(ChartDataInit);
  const [drawDataChart, setDrawDataChart] = useState<any[]>([]);

  const getData = async () => {
    const dataChart: ChartData = await apiExplorerService.getLandingValidatorData();
    setDataChart(dataChart);
    convertData(dataChart.activeValidatorChartData || []);
  };

  const convertData = (listData: ChartDataItem[]) => {
    const activeValidatorChartData: ChartDataItem[] = listData;
    const result = activeValidatorChartData.map((item) => ({
      time: convertISOtoMMYYYY(item.startOfMonth),
      uv: 590,
      pv: 800,
      amt: 1400,
    }));
    setDrawDataChart(result);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <Styled>
      <p className="title fw-medium main-title-text">Rewards Estimation</p>
      <div className="row">
        <div className="leftView">
          <ResponsiveContainer className="chart-container">
            <ComposedChart data={drawDataChart}>
              <CartesianGrid
                stroke="#363636"
                vertical={false}
                horizontal={{ width: '100%' }}
              />
              <XAxis
                dataKey="time"
                className="timeText"
                stroke="#FFFFFF"
                height={50}
                minTickGap={0}
                tickMargin={10}
                angle={40}
                width={10}
              />
              <YAxis stroke="#FFFFFF" />
              <Tooltip />
              <Bar dataKey="pv" barSize={25} fill="#1A73E8" />
              <Line type="monotone" dataKey="uv" stroke="red" fill={'#1A73E8'} />
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
              <p>{convertISOtoMMYYYY('2022-06-27T07:11:11.356Z')}</p>
            </div>
          </div>
        </div>
      </div>
    </Styled>
  );
};

export default memo(ValidatorRewardEstimation);
