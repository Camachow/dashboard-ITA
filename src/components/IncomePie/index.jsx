import { Box } from '@mui/material';
import { PieChart, ResponsiveChartContainer } from '@mui/x-charts';

const IncomePie = ({qtdLabel1, qtdLabel2, qtdLabel3, qtdLabel4, qtdLabel5}) => {
  const data = [
    { id: 0, value: qtdLabel1, label: "Até 2,9 Mil" },
    { id: 1, value: qtdLabel2, label: "2,9 a 7,1 Mil" },
    { id: 2, value: qtdLabel3, label: "7,1 a 22 Mil" },
    { id: 3, value: qtdLabel4, label: "22+ Mil" },
  ];
    return (
      <PieChart
        series={[
          {
            data: data,
            highlightScope: { faded: 'global' },
            faded: { innerRadius: 30, additionalRadius: -30, color: 'gray' },
          },
        ]}
        height={200}
        width={350}
      />
 
    );
  }

export default IncomePie;  