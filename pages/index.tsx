import { Stack } from '@mantine/core';
import Hero from '@/components/Hero/Hero';
import LiveInformation from '@/components/Live/LiveInformation';
import { SearchInput } from '@/components/Search/SearchInput';
import ComedianInformation from '@/components/Comedian/ComediansInformation';
import ComedianScroller from '@/components/Comedian/ComedianScroller';
import AreaTitle from '@/components/common/AreaTitle';
import LiveScroller from '@/components/Live/LiveScroller';

export default function HomePage() {
  return (
    <>
      <Stack>
        <Hero />
        <SearchInput />
        <AreaTitle title="お笑い芸人情報" moreInfoHref="/comedian" />
        <ComedianScroller />
        <AreaTitle title="ライブ情報" moreInfoHref="/live" />
        <LiveScroller />
      </Stack>
    </>
  );
}
