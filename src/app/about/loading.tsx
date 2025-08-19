import { CircularProgress, Stack } from '@mui/material';

import { MainContentBasic } from '@/components/templates/MainContentBasic';

export default function AboutPageLoading() {
  return (
    <MainContentBasic title="About">
      <Stack direction="row" justifyContent="center" py={10}>
        <CircularProgress />
      </Stack>
    </MainContentBasic>
  );
}
