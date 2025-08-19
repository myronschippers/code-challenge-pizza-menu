'use client';

import { MainContentBasic } from '@/components/templates/MainContentBasic';
import { PageError } from '@/components/ui/PageError';

export default function CartPageError() {
  return (
    <MainContentBasic title="Cart">
      <PageError>
        There was an error loading the page please try back later.
      </PageError>
    </MainContentBasic>
  );
}
