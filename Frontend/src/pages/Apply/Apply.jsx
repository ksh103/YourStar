import { Grid } from '@mui/material';
import React from 'react';
import UploadButton from '../../components/Apply/UploadButton';
import ApplyHead from '../../components/Apply/ApplyHead';
import ApplyInputSection from '../../components/Apply/ApplyInputSection';
import { UploadImage, InputData, ApplyButton } from './Apply.style';
import { Block, Layout, Wrapper } from '../../styles/variables';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
export default function Apply() {
  return (
    <Layout>
      <Navbar />
      <Wrapper>
        <Block>
          <Grid container>
            <Grid xs={12}>
              <ApplyHead />
            </Grid>
            <Grid xs={4}>
              <UploadImage>
                <div>
                  <UploadButton />
                </div>
              </UploadImage>
            </Grid>
            <Grid xs={8}>
              <InputData>
                <div>
                  <ApplyInputSection />
                </div>
              </InputData>
              <ApplyButton>
                <button>신청하기</button>
              </ApplyButton>
            </Grid>
          </Grid>
        </Block>
      </Wrapper>
      <Footer />
    </Layout>
  );
}
