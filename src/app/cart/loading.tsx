import { CircularProgress, Stack } from '@mui/material';

import { MainContentBasic } from '@/components/templates/MainContentBasic';

export default function CartPageLoading() {
  return (
    <MainContentBasic title="Cart">
      <Stack direction="row" justifyContent="center" py={10}>
        <CircularProgress />
      </Stack>
    </MainContentBasic>
  );
}
