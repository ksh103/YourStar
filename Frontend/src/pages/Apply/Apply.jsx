import { Grid } from '@mui/material';
import React from 'react';
import HorizonLine from '../../components/Utils/HorizontalLine';
import UploadButton from '../../components/Apply/UploadButton';
import ApplyHead from '../../components/Apply/ApplyHead';
import ApplyInputSection from '../../components/Apply/ApplyInputSection';
import SubmitButton from '../../components/Utils/SubmitButton';
import {
  ScheduleBlock,
  ScheduleWrapper,
  Title,
  UploadImage,
  InputData,
} from './Apply.style';
export default function Apply() {
  return (
    <ScheduleWrapper>
      <ScheduleBlock>
        <Grid container>
          <Grid xs={12}>
            <Title>
              <ApplyHead></ApplyHead>
            </Title>
            <HorizonLine />
          </Grid>
          <Grid xs={4}>
            <UploadImage>
              <div>
                <UploadButton></UploadButton>
              </div>
            </UploadImage>
          </Grid>
          <Grid xs={8}>
            <InputData>
              <div>
                <ApplyInputSection></ApplyInputSection>
              </div>
              <SubmitButton name="제출"></SubmitButton>
            </InputData>
          </Grid>
        </Grid>
      </ScheduleBlock>
    </ScheduleWrapper>
  );
}
