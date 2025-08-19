import { CircularProgress, Stack } from '@mui/material';

import { MainContentBasic } from '@/components/templates/MainContentBasic';

export default function __name__PageLoading() {
  return (
    <MainContentBasic title="__name__(sentenceCase)">
      <Stack direction="row" justifyContent="center" py={10}>
        <CircularProgress />
      </Stack>
    </MainContentBasic>
  );
}
