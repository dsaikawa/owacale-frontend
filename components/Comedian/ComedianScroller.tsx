import { Carousel } from '@mantine/carousel';
import ComedianCard from './ComedianCard';

const ComedianScroller = () => {
  return (
    <Carousel
      withIndicators
      slideSize={{ base: '100%', sm: '50%', md: '33.333333%' }}
      slideGap={{ base: 0, sm: 'md' }}
      loop={true}
      align="start"
    >
      <Carousel.Slide>
        <ComedianCard />
      </Carousel.Slide>
      <Carousel.Slide>
        <ComedianCard />
      </Carousel.Slide>
      <Carousel.Slide>
        <ComedianCard />
      </Carousel.Slide>
      <Carousel.Slide>
        <ComedianCard />
      </Carousel.Slide>
      <Carousel.Slide>
        <ComedianCard />
      </Carousel.Slide>
    </Carousel>
  );
};

export default ComedianScroller;
