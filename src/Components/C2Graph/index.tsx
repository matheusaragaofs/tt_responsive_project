import React from 'react';

import { ResponsivePie } from '@nivo/pie';

interface dataprops {
  data: object[];
}

const MyResponsivePie: React.FC<dataprops> = ({ data }) => (
  <ResponsivePie
    data={data}
    
    margin={{ top: 0, right: 10, bottom: 20, left: 30 }}
    innerRadius={0.85}
    colors={['#7FC008', '#DB8C28', '#EB5757']}
    enableRadialLabels={false}
    radialLabelsTextColor="#000000"
    radialLabelsLinkOffset={-7}
    radialLabelsLinkDiagonalLength={18}
    radialLabelsLinkColor={{ from: 'color' }}
    enableSliceLabels={false}
    sliceLabelsSkipAngle={8}
    sliceLabelsTextColor="#333333"
    isInteractive
  />
);
export default MyResponsivePie;