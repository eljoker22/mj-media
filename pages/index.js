import {useRef} from 'react';
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Container from '@mui/material/Container';
import classes from '../styles/Home.module.css';
import Grid from '@mui/material/Grid';
import MarktingSvg from '../assest/svg/markting.svg';
import { ButtonHome, ButtonSectionCard } from '../component/Buttons';
import {CardSection} from '../component/Cards';
import ExplainSection from '../component/sections/ExplainSection'
import ServicesSection from '../component/sections/ServicesSection'
import HowWork from '../component/sections/WorkSection'

export default function Home({services}) {
  const ref = useRef(null)
  const handleScroll = () => {
    window.scrollTo({
      top: ref.current.offsetTop - 200,
      left: 0,
      behavior: 'smooth'
    })
  }
  return (
    <>
    <Container maxWidth="sm" style={{maxWidth: '1200px'}}>
      <section className={classes.heroSection}>
        <Grid container spacing={2} style={{alignItems: 'center'}}>
          <Grid item xs={12} md={6}>
            <div className={classes.svgContainer}>
            <MarktingSvg />
            </div>
          </Grid>
          <Grid item md={6}>
            <h2 style={{marginBottom: '15px'}}>زيادة متابعيك وجمهورك على وسائل التواصل الأجتماعى!</h2>
            <p style={{marginBottom: '20px'}}>
            زيادة متابعيك وجمهورك على وسائل التواصل الأجتماعى!
            روج لحسابك الاجتماعي و احصل على أقصى نمو على حسابات وسائل التواصل الاجتماعي الخاصة بك عن طريق زيادة متابعيك وإنشاء الحملات الأعلانية على فيس بوك وانستجرام و جوجل.
            </p>
            
            <div onClick={handleScroll}>
            <ButtonHome>
              عرض خدماتنا
            </ButtonHome>
            </div>
          </Grid>
        </Grid>
      </section>

      <ServicesSection myRef={ref} services={services} />

    </Container>

    <ExplainSection />

    <Container maxWidth="sm" style={{maxWidth: '1200px'}}>
      <HowWork />
    </Container>

    <div className={classes.contactSection}>
      <h3>هل لديك اى اسئلة ؟</h3>
      <p>تواصل معنا والدعم سيكون موجود للرد على كافة الأسئلة</p>
      <Link href="/contact-us">
        <a>
          <ButtonSectionCard>
          اتصل بنا
          </ButtonSectionCard>
        </a>
      </Link>
    </div>

    </>
  )
}

export async function getStaticProps() {
  const res = await fetch(`${process.env.API_URL}/services?populate=icon`);
  const data = await res.json();

  return{
      props: {services: data}
  }
}