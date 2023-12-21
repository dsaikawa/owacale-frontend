import { Anchor, Text, Grid, Group, Title, useMantineTheme } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import ComedianCard from './ComedianCard';

const LiveCards = (props: { displayCount: number }) => {
  const { displayCount } = props;
  const lives = [];
  for (let i = 0; i < displayCount; i += 1) {
    lives.push(
      <Grid.Col span={{ base: 12, xl: 4, lg: 4, md: 4, sm: 6, xs: 12 }}>
        <ComedianCard />
      </Grid.Col>
    );
  }
  return <>{lives}</>;
};

type ComedianInformationProps = { withMoreLive?: boolean; displayCount?: number };
const ComedianInformation = ({ withMoreLive = true, displayCount }: ComedianInformationProps) => {
  const theme = useMantineTheme();
  const mobile = useMediaQuery(`(max-width: ${theme.breakpoints.md})`);
  return (
    <>
      <Group justify="space-between">
        <Title order={4}>お笑い芸人情報</Title>
        {withMoreLive && (
          <Anchor href="/comedian" c="dark" underline="always">
            <Text fw={600}>もっと見る</Text>
          </Anchor>
        )}
      </Group>
      <Grid gutter="lg">
        <LiveCards displayCount={displayCount ? displayCount : mobile ? 2 : 3} />
      </Grid>
    </>
  );
};

export default ComedianInformation;
