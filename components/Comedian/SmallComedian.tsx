import { Group, Avatar, Text, Stack, Title, Anchor } from '@mantine/core';

const SmallComedian = (props: { name: string; id: string }) => {
  const { name, id } = props;
  return (
    <Anchor c="dark" href={`/comedian/${id}`}>
      <Group gap="xs" mt="sm">
        <Avatar src="/sample-image/comedian.JPG" size="md" />
        <Stack gap={0} mt={0}>
          <Title mt={0} mb={0} order={6}>
            {name}
          </Title>
          <Text size="sm">池袋ライブ</Text>
        </Stack>
      </Group>
    </Anchor>
  );
};

export default SmallComedian;
