import { MainContentBasic } from '@/components/templates/MainContentBasic';
import { Typography } from '@mui/material';

export default function AboutPage() {
  return (
    <MainContentBasic title="The Pizza Palace Story">
      <Typography>
        At Pizza Palace, we believe pizza is more than food—it’s an experience.
        Born in the heart of a small town, our kitchen is fueled by a love for
        bold flavors and the joy of bringing people together. Every pie is
        handcrafted with care, from our scratch-made dough to our signature
        sauces and fresh toppings. We don’t just make pizza—we put flavor in
        every bite, creating moments that keep families, friends, and neighbors
        coming back for more.
      </Typography>

      <Typography>
        Whether you’re grabbing a quick slice or sitting down for a night out,
        our mission is simple: serve up unforgettable taste with small-town
        heart.
      </Typography>
    </MainContentBasic>
  );
}
