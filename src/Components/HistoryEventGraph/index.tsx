import { ResponsiveBar } from '@nivo/bar';
import React from 'react';

interface datasetProps {
  data: object[];
}

const HistoryEventGraphic: React.FC<datasetProps> = ({ data }) => (
  <ResponsiveBar
    data={data}
    keys={['realizadas', 'naoRealizadas', 'emAndamento']}
    indexBy="group"
    margin={{ top: 20, right: 40, bottom: 10, left: 60 }}
    padding={0.15}
    innerPadding={4}
    groupMode="grouped"
    valueScale={{ type: 'linear' }}
    indexScale={{ type: 'band', round: true }}
    colors={['#4B9EEA', '#C00808', '#A91B79']}
    defs={[
      {
        id: 'dots',
        type: 'patternDots',
        background: 'inherit',
        color: '#38bcb2',
        size: 4,
        padding: 1,
        stagger: true,
      },
      {
        id: 'lines',
        type: 'patternLines',
        background: 'inherit',
        color: '#eed312',
        rotation: -45,
        lineWidth: 6,
        spacing: 10,
      },
    ]}
    fill={[
      {
        match: {
          id: 'fries',
        },
        id: 'dots',
      },
      {
        match: {
          id: 'sandwich',
        },
        id: 'lines',
      },
    ]}
    borderColor={{ from: 'color', modifiers: [['darker', 1.6]] }}
    axisTop={null}
    axisRight={null}
    axisBottom={null}
    axisLeft={null}
    enableGridY={false}
    enableLabel={false}
    labelSkipWidth={12}
    labelSkipHeight={12}
    labelTextColor={{ from: 'color', modifiers: [['darker', 1.6]] }}
    legends={[]}
    animate
    motionStiffness={90}
    motionDamping={22}
  />
);

export default HistoryEventGraphic;
