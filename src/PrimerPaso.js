import * as React from 'react';
import './App.css';
import { Card, CardContent, CardMedia, Typography } from '@material-ui/core';
import { Field, Form, Formik } from 'formik';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import BorderLinearProgress from '@material-ui/core/LinearProgress';

export default class PrimerPaso extends React.Component {
    render() {
        return (
            <Formik initialValues={{
                firstName: '',
                lastName: '',
                millionaire: false,
                money: 0,
                description: ''
            }} onSubmit={() => { }}>
                <Form style={{ padding: '50px 80px' }}>
                    <Grid style={{ lineHeight: 1 }} container spacing={3}>
                        <Grid xs={12} style={{ fontWeight: 500, borderBottom: '1px solid' }}>
                            <p>I.	Publicidad – Concepto Publicitario y Claims Asociados</p>
                        </Grid>
                        <Grid item xs={12} sm={8}>
                            <p>El material publicitario, ¿atribuye a los productos cualidades preventivas, terapéuticas, rehabilitatorias, nutritivas, estimulantes o de otra índole, que no correspondan a su función o uso?</p>
                        </Grid>
                        <Grid item xs={12} sm={2} style={{ padding: 30 }}>
                            <label>
                                <Field type="radio" name="p1a" value="0" />
                      Si
                    </label>
                        </Grid>
                        <Grid item xs={12} sm={2} style={{ padding: 30 }}>
                            <label>
                                <Field type="radio" name="p1a" value="1" />
                      No
                    </label>
                        </Grid>
                        <Grid item xs={12} sm={8}>
                            <p>El material publicitario, ¿indica o sugiere que el uso o consumo de un producto es un factor determinante para modificar la conducta de las personas?</p>
                        </Grid>
                        <Grid item xs={12} sm={2} style={{ padding: 30 }}>
                            <label>
                                <Field type="radio" name="p2a" value="0" />
                      Si
                    </label>
                        </Grid>
                        <Grid item xs={12} sm={2} style={{ padding: 30 }}>
                            <label>
                                <Field type="radio" name="p2a" value="1" />
                      No
                    </label>
                        </Grid>
                        <Grid item xs={12} sm={8}>
                            <p>El material publicitario, ¿presenta al producto como estimulante o modificador del estado físico o mental?</p>
                        </Grid>
                        <Grid item xs={12} sm={2} style={{ padding: 30 }}>
                            <label>
                                <Field type="radio" name="p3a" value="0" />
                      Si
                    </label>
                        </Grid>
                        <Grid item xs={12} sm={2} style={{ padding: 30 }}>
                            <label>
                                <Field type="radio" name="p3a" value="1" />
                      No
                    </label>
                        </Grid>
                        <Grid item xs={12} sm={8}>
                            <p>El material publicitario, ¿indica o induce a creer, explícita o implícitamente, que el producto cuenta con ingredientes o propiedades que no tiene?</p>
                        </Grid>
                        <Grid item xs={12} sm={2} style={{ padding: 30 }}>
                            <label>
                                <Field type="radio" name="p4a" value="0" />
                      Si
                    </label>
                        </Grid>
                        <Grid item xs={12} sm={2} style={{ padding: 30 }}>
                            <label>
                                <Field type="radio" name="p4a" value="1" />
                      No
                    </label>
                        </Grid>
                        <Grid item xs={12} sm={8}>
                            <p>¿El producto se asocia directamente o indirectamente con el consumo de bebidas alcohólicas o tabaco?</p>
                        </Grid>
                        <Grid item xs={12} sm={2} style={{ padding: 30 }}>
                            <label>
                                <Field type="radio" name="p5a" value="0" />
                      Si
                    </label>
                        </Grid>
                        <Grid item xs={12} sm={2} style={{ padding: 30 }}>
                            <label>
                                <Field type="radio" name="p5a" value="1" />
                      No
                    </label>
                        </Grid>
                        <Grid item xs={12} style={{border:'1px solid blue'}}>
                            <p>Si respondiste “Sí” a cualquiera de estas preguntas, se debe ajustar la pieza publicitaria para evitar el efecto señalado.
Fundamentos: Artículos 6, 21 y 22 Reglamento de la Ley General de Salud en Materia de Publicidad.
</p>
                        </Grid>
                    </Grid>
                </Form>
            </Formik>
            
        );
    }
}