import { Pagination, Stack } from '@mantine/core';
import LiveInformation from '@/components/Live/LiveInformation';
import AreaTitle from '@/components/common/AreaTitle';

const ComedianPage = () => {
  return (
    <Stack>
      <AreaTitle title="ライブ情報" />
      <LiveInformation displayCount={12} withMoreLive={false} />
      <Pagination boundaries={1} my="xl" total={5} color="dark" mx="auto" />
    </Stack>
  );
};

export default ComedianPage;
