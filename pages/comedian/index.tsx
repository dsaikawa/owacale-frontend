import { Pagination, Stack } from '@mantine/core';
import ComedianInformation from '@/components/Comedian/ComediansInformation';

const LivePage = () => {
  return (
    <Stack>
      <ComedianInformation displayCount={12} withMoreLive={false} />
      <Pagination boundaries={1} my="xl" total={5} color="dark" mx="auto" />
    </Stack>
  );
};

export default LivePage;
