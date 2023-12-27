import { Group, Text, Title, Anchor } from '@mantine/core';

type Props = { title: string; moreInfoHref?: string };
const AreaTitle = ({ title, moreInfoHref }: Props) => {
  return (
    <Group justify="space-between">
      <Title order={4}>{title}</Title>
      {moreInfoHref && (
        <Anchor href={moreInfoHref} c="dark" underline="always">
          <Text fw={600}>もっと見る</Text>
        </Anchor>
      )}
    </Group>
  );
};
export default AreaTitle;
