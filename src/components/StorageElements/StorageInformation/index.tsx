import {
  DivPercent,
  DivStorageInformation,
  RegularText,
  SmallText,
  TextNumberPerc,
  TitleTextStorage,
} from './StorageInformationStyled';
import { PieChart } from 'react-minimal-pie-chart';
import ContentStorageInfo from './ContentStorageInfo';
import { storagesInfoArray } from '../../../utils/elements';
const StorageInformation = () => {
  return (
    <>
      <DivStorageInformation>
        <TitleTextStorage>Storage</TitleTextStorage>
        <PieChart
          data={[
            { title: 'One', value: 20, color: '#689FF8' },
            { title: 'Two', value: 12, color: '#4AC29D' },
            { title: 'Three', value: 25, color: '#FF9F00' },

            { title: 'Fourth', value: 8, color: '#BCBECA' },
          ]}
          startAngle={-180}
          lengthAngle={180}
          lineWidth={10}
          radius={47}
        />
        <DivPercent>
          <TextNumberPerc>85%</TextNumberPerc>
          <RegularText>Used</RegularText>
        </DivPercent>

        <SmallText>420.2 GB of 500 GB used</SmallText>
        {storagesInfoArray.map((storageInfo, key) => {
          return (
            <ContentStorageInfo key={key} storageInfoProps={storageInfo} />
          );
        })}
      </DivStorageInformation>
    </>
  );
};
export default StorageInformation;
