import { MainContentBasic } from '@/components/templates/MainContentBasic';
import { PizzaMenuList } from '@/components/features/PizzaMenuList';

export default function MenuPage() {
  return (
    <MainContentBasic title="Menu">
      <PizzaMenuList />
    </MainContentBasic>
  );
}
