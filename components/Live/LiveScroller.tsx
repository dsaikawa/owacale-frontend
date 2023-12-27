import { Carousel } from '@mantine/carousel';
import { LiveCard } from './LiveCard';

const LiveScroller = () => {
  return (
    <Carousel
      withIndicators
      slideSize={{ base: '100%', sm: '50%', md: '33.333333%' }}
      slideGap={{ base: 0, sm: 'md' }}
      loop={true}
      align="start"
    >
      <Carousel.Slide>
        <LiveCard />
      </Carousel.Slide>
      <Carousel.Slide>
        <LiveCard />
      </Carousel.Slide>
      <Carousel.Slide>
        <LiveCard />
      </Carousel.Slide>
      <Carousel.Slide>
        <LiveCard />
      </Carousel.Slide>
      <Carousel.Slide>
        <LiveCard />
      </Carousel.Slide>
    </Carousel>
  );
};

export default LiveScroller;
