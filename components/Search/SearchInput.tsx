import { Input, Stack, Title, UnstyledButton } from '@mantine/core';
import { useForm } from '@mantine/form';
import { IconArrowRight } from '@tabler/icons-react';
import { useRouter } from 'next/router';

export const SearchInput = () => {
  const router = useRouter();
  const form = useForm({
    initialValues: {
      keyword: '',
    },
  });

  return (
    <Stack my="lg" gap="xs">
      <Title order={4}>お笑い芸人を見つける</Title>
      <form
        onSubmit={form.onSubmit((values) => router.push(`/comedian?keyword=${values.keyword}`))}
      >
        <Input
          placeholder="  ex. キリマンジャロ"
          c="dark"
          rightSection={
            <UnstyledButton type="submit" mr="xs" mt={7}>
              <IconArrowRight size={40} color="#000000" stroke={0.7} height="100%" />
            </UnstyledButton>
          }
          rightSectionPointerEvents="fill"
          size="xl"
          radius="xl"
          {...form.getInputProps('keyword')}
        />
      </form>
    </Stack>
  );
};
