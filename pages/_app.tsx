import '@mantine/core/styles.css';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import {
  Anchor,
  AppShell,
  Burger,
  Container,
  Group,
  Image,
  MantineProvider,
  em,
} from '@mantine/core';
import { useDisclosure, useMediaQuery } from '@mantine/hooks';
import { theme } from '../theme';

export default function App({ Component, pageProps }: AppProps) {
  const [opened, { toggle }] = useDisclosure();
  const isMobile = useMediaQuery(`(max-width: ${em(450)})`);
  return (
    <MantineProvider theme={theme}>
      <Head>
        <title>Mantine Template</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, user-scalable=no"
        />
        <link rel="shortcut icon" href="/favicon.svg" />
      </Head>
      <AppShell header={{ height: 60 }} padding="md">
        <AppShell.Header withBorder={false}>
          <Container size="responsive" h="100%">
            <Group h="100%" justify="space-between">
              <Anchor h={45} href="/">
                <Image src={isMobile ? '/small-logo.png' : '/logo.png'} h="100%" w="auto" />
              </Anchor>
              <Burger opened={opened} onClick={toggle} size="sm" />
            </Group>
          </Container>
        </AppShell.Header>
        <AppShell.Main>
          <Container>
            <Component {...pageProps} />
          </Container>
        </AppShell.Main>
      </AppShell>
    </MantineProvider>
  );
}
