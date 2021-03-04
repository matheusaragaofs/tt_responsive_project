import React from 'react';
import { ResponsivePie } from '@nivo/pie';

interface dataProps {
  data: object[];
}
const GraphOfGraphicContent: React.FC<dataProps> = ({ data }) => (
  <ResponsivePie
    data={data}
    margin={{ top: 14, right: 40, bottom: 10, left: 100 }}
    innerRadius={0.8}
    colors={['#7FC008', '#DB8C28', '#EB5757']}
    borderColor={{ from: 'color', modifiers: [['darker', 0.2]] }}
    enableRadialLabels={false}
    radialLabelsTextColor="#000000"
    radialLabelsLinkOffset={-7}
    radialLabelsLinkDiagonalLength={18}
    radialLabelsLinkColor={{ from: 'color' }}
    enableSliceLabels={false}
    sliceLabelsSkipAngle={8}
    sliceLabelsTextColor="#333333"
  />
);

export default GraphOfGraphicContent;