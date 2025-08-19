'use client';

import { MainContentBasic } from '@/components/templates/MainContentBasic';
import { PageError } from '@/components/ui/PageError';

export default function __name__PageError() {
  return (
    <MainContentBasic title="__name__(sentenceCase)">
      <PageError>
        There was an error loading the page please try back later.
      </PageError>
    </MainContentBasic>
  );
}
