import { Anchor, Text, Grid, Group, Title, useMantineTheme } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import { LiveCard } from './LiveCard';

const LiveCards = (props: { displayCount: number }) => {
  const { displayCount } = props;
  const lives = [];
  for (let i = 0; i < displayCount; i += 1) {
    lives.push(
      <Grid.Col span={{ base: 12, xl: 4, lg: 4, md: 4, sm: 6, xs: 12 }}>
        <LiveCard />
      </Grid.Col>
    );
  }
  return <>{lives}</>;
};

type LiveInformationProps = { withMoreLive?: boolean; displayCount?: number };
const LiveInformation = ({ withMoreLive = true, displayCount }: LiveInformationProps) => {
  const theme = useMantineTheme();
  const mobile = useMediaQuery(`(max-width: ${theme.breakpoints.md})`);
  return (
    <>
      <Grid gutter="lg">
        <LiveCards displayCount={displayCount ? displayCount : mobile ? 2 : 3} />
      </Grid>
    </>
  );
};

export default LiveInformation;
