import React from 'react'
import classes from '../../styles/Home.module.css';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import ContentSvg from '../../assest/svg/content.svg';
function ExplainSection() {
    return(
        <div className={classes.explainSection}>
            <Container maxWidth="sm" style={{maxWidth: '1200px'}}>
                <Grid container spacing={5} style={{alignItems: 'center'}}>
                    <Grid item xs={12} md={6}>
                        <div>
                            <h2 style={{marginTop: '0'}}>لماذا تشترى خدمات منصات التواصل الأجتماعى ؟</h2>
                            <p>
                            أذا كنت تريد أن تكون من الموئثرين على منصات التواصل الأجتماعى أو كان لديك علامة تجارية وتريد زيادة مبيعاتك فلابد من نقل حساباتك على منصات التواصل الأجتماعى إلى مستوى اخر لتستطيع التفوق على منافسيك.
                            </p>
                            <p style={{marginBottom: '15px'}}>
                            ونحن نمكنك من تكبير حساباتك على مختلف منصات التواصل الأجتماعى بشكل سريع وأمن عن طريق شراء باقاتنا المختلفة التى تساهم فى زيادة جمهورك وما يميز باقتنا أنك يمكنك الأختيار بين نوعين من الباقات وهما أن تحصل على متابعين وتفاعلات من جميع أنحاء أو أنك تحصل على <strong>متابعين عرب فقط</strong> وفى كلتا الحالتين ستحصل على <strong>متابعيين حقيقيين</strong> مما يزيد من مصداقية حساباتك.
                            </p>
                        </div>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <div className={classes.svgContent}>
                            <ContentSvg />
                        </div>
                    </Grid>
                </Grid>
            </Container>
        </div>
    )
}

export default ExplainSection;