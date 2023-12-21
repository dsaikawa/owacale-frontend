import { Card, Image, Text, Title, Anchor } from '@mantine/core';
import { useElementSize } from '@mantine/hooks';

const ComedianCard = () => {
  const { ref, width } = useElementSize();
  return (
    <>
      <Card ref={ref}>
        <Card.Section>
          <Anchor underline="never" href="/comedian">
            <Image src="/sample-image/comedian.jpg" h={width} radius="md" />
            <Title order={4} c="dark" mt="xs">
              キリマンジャロ
            </Title>
            <Text size="sm" c="gray">
              ケイダッシュステージ
            </Text>
          </Anchor>
        </Card.Section>
      </Card>
    </>
  );
};

export default ComedianCard;
