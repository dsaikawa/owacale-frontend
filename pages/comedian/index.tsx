import { Pagination, Stack } from '@mantine/core';
import ComedianInformation from '@/components/Comedian/ComediansInformation';
import AreaTitle from '@/components/common/AreaTitle';

const LivePage = () => {
  return (
    <Stack>
      <AreaTitle title="お笑い芸人情報" />
      <ComedianInformation displayCount={12} withMoreLive={false} />
      <Pagination boundaries={1} my="xl" total={5} color="dark" mx="auto" />
    </Stack>
  );
};

export default LivePage;
