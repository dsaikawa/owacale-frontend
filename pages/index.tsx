import { Stack } from '@mantine/core';
import Hero from '@/components/Hero/Hero';
import LiveInformation from '@/components/Live/LiveInformation';
import { SearchInput } from '@/components/Search/SearchInput';
import ComedianInformation from '@/components/Comedian/ComediansInformation';

export default function HomePage() {
  return (
    <>
      <Stack>
        <Hero />
        <SearchInput />
        <ComedianInformation />
        <LiveInformation />
      </Stack>
    </>
  );
}
