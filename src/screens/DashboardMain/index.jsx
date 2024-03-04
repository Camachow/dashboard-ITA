import * as React from 'react';
import {useEffect, useState} from 'react';
import EducationTypePie from '../../components/EducationTypePie';
import {Box, Paper, Typography, CircularProgress} from '@mui/material';
import AgeRangePie from '../../components/AgeRangePie';
import IncomePie from '../../components/IncomePie';
import GenderPie from '../../components/GenderPie';

const DashboardMain = () => {

    return (
        <Box sx={{ 
            flexGrow: 1,
            width: '100%',
            height: '100%',
            backgroundColor: '#F5F5F5', 
            py: 3,
        }}>
            <Paper sx={
            {
                p: 2,
                display: 'flex',
                mx: 'auto',
                flexDirection: 'column',
                alignItems: 'center',
                height: '90%',
                width: '80%',
                margin: 'auto',
            }
        }>
                <Typography variant='h2' textAlign={'center'} fontWeight={'bold'}>Painel de Inscrições</Typography>
                <Typography variant='h2' textAlign={'center'} fontWeight={'bold'}>Itabira</Typography>
                <Typography variant='h5' fontWeight={'bold'} my={2} textAlign={'center'}>Total de Candidatos Inscritos: 4877</Typography>
                <Typography variant='h5' textAlign={'center'} fontWeight={'bold'} my={2}>Escola Pública x Escola Particular</Typography>
                <EducationTypePie nomeLabel1={'Publica'} qtdLabel1={4336} nomeLabel2={'Particular'} qtdLabel2={520}/>
                <Typography variant='h5' fontWeight={'bold'} my={2}>Faixa Etária</Typography>
                <AgeRangePie qtdLabel1={1571} qtdLabel2={1297} qtdLabel3={1136} qtdLabel4={857}/>
                <Typography variant='h5' fontWeight={'bold'} my={2}>Renda Familiar</Typography>
                <IncomePie qtdLabel1={3065} qtdLabel2={1543} qtdLabel3={213} qtdLabel4={33} />
                <Typography variant='h5' fontWeight={'bold'} my={2}>Gênero</Typography>
                <GenderPie qtdLabel1={2445} qtdLabel2={2333} qtdLabel3={0} qtdLabel4={0} qtdLabel5={97}/>
            </Paper>
        </Box>
    )
}

export default DashboardMain;