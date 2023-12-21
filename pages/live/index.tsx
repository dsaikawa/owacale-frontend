import { Pagination, Stack } from '@mantine/core';
import LiveInformation from '@/components/Live/LiveInformation';

const ComedianPage = () => {
  return (
    <Stack>
      <LiveInformation displayCount={12} withMoreLive={false} />
      <Pagination boundaries={1} my="xl" total={5} color="dark" mx="auto" />
    </Stack>
  );
};

export default ComedianPage;
