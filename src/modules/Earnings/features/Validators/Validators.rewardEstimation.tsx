import { memo } from 'react';
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
    display: flex;
    flex-direction: row;
    .leftView {
      border: 2px solid #363636;
      border-radius: 16px;
      display: flex;
      width: 60%;
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

    .spaceView {
      width: 20px;
    }

    .rightView {
      display: flex;
      flex: 1;
      padding: 20px;
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
      .spaceView {
        height: 20px
      }
    `}

    ${({ theme }: { theme: ITheme }) => theme.mediaWidth.upToMedium`
      flex-direction: column;
      .spaceView {
        height: 20px
      }
    `}

    ${({ theme }: { theme: ITheme }) => theme.mediaWidth.upToLarge`
    flex-direction: column;
    .spaceView {
      height: 20px
    }
  `}
  }
`;

const ValidatorRewardEstimation = () => {
  const history = useHistory();
  return (
    <Styled>
      <p className="title fw-medium main-title-text">Rewards Estimation</p>
      <div className="row">
        <div className="leftView">
          <ResponsiveContainer className="chart-container">
            <ComposedChart data={data}>
              <CartesianGrid
                stroke="#363636"
                vertical={false}
                horizontal={{ height: 22, width: '100%' }}
              />
              <XAxis dataKey="name" className="timeText" stroke="#FFFFFF" />
              <YAxis stroke="#FFFFFF" />
              <Tooltip />
              <Bar dataKey="pv" barSize={25} fill="#1A73E8" />
              <Line type="monotone" dataKey="uv" stroke="red" fill={'#1A73E8'} />
            </ComposedChart>
          </ResponsiveContainer>
        </div>
        <div className="spaceView"></div>
        <div className="rightView">
          <div className="tableContent">
            <p className="text2 title">Circulating supply:</p>
            <div className="rowTableView">
              <p>999,999.00</p>
              <p>PRV</p>
            </div>
            <p className="text2 title">Total PRV staked:</p>
            <div className="rowTableView">
              <p>999,999.00</p>
              <p>PRV</p>
            </div>

            <p className="text2 title">Estimated APR:</p>
            <div className="rowTableView">
              <p>1,000.00</p>
              <p>%</p>
            </div>

            <p className="text2 title">Total validators:</p>
            <div className="rowTableView">
              <p>999,999.00</p>
            </div>

            <p className="text2 title">Statistics on</p>
            <div className="rowTableView">
              <p>mm/dd/yy</p>
            </div>
          </div>
        </div>
      </div>
    </Styled>
  );
};

export default memo(ValidatorRewardEstimation);
