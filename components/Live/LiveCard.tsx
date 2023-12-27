import { Card, Image, Text, Title, Anchor, Group } from '@mantine/core';
import { useElementSize } from '@mantine/hooks';

export const LiveCard = () => {
  const { ref, width } = useElementSize();
  return (
    <>
      <Card ref={ref}>
        <Card.Section>
          <Anchor underline="never" href="/live">
            <Image src="/sample-image/live-card.jpg" h={(width * 3) / 4} radius="md" />
            <Group justify="space-between" mt="xs">
              <Title order={4} c="dark">
                池袋夜寄せ
              </Title>
              <Text c="dark" size="sm">
                2024/01/01
              </Text>
            </Group>
            <Text c="dark" size="sm">
              池袋のどこどこでライブをします。あの有名な芸人さんがMCをやります。
            </Text>
          </Anchor>
        </Card.Section>
      </Card>
    </>
  );
};
