import performanceImage from '../../../public/performance.jpg';
import Hero from '@/components/hero';

export default function PerformangePage() {
  return (
    <Hero imgData={performanceImage} 
    imgAlt='cwelding' 
    title='We serve High performance Applications'>
    </Hero>
  );
}