import { Card, Image, Text, Title, Anchor } from '@mantine/core';
import { useElementSize } from '@mantine/hooks';

export const LiveCard = () => {
  const { ref, width } = useElementSize();
  return (
    <>
      <Card ref={ref}>
        <Card.Section>
          <Anchor underline="never" href="/live">
            <Image src="/sample-image/live-card.jpg" h={(width * 3) / 4} radius="md" />
            <Title order={4} c="dark" mt="xs">
              池袋夜寄せ
            </Title>
          </Anchor>
          <Text size="sm">池袋のどこどこでライブをします。あの有名な芸人さんがMCをやります。</Text>
        </Card.Section>
      </Card>
    </>
  );
};
