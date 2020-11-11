import * as React from 'react';
import './App.css';
import { Card, CardContent, Typography } from '@material-ui/core';
import { Field, Form, Formik } from 'formik';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import BorderLinearProgress from '@material-ui/core/LinearProgress';

export default class QuintoPaso extends React.Component {
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
                            <p>V.	Promociones y Ofertas – Materializadas al Cumplir una Mecánica – Reglas Generales.</p>
                        </Grid>
                        <Grid item xs={12} sm={8}>
                            <p>Si la promoción conlleva el uso, ya sea en los T&Cs o en el material publicitario, de un logo, marca, aviso comercial o personaje de terceros, ¿cuentas con una licencia a carta formal de autorización para su uso?</p>
                        </Grid>
                        <Grid item xs={12} sm={2} style={{ padding: 30 }}>
                            <label>
                                <Field type="radio" name="p1e" value="0" />
                      Si
                    </label>
                        </Grid>
                        <Grid item xs={12} sm={2} style={{ padding: 30 }}>
                            <label>
                                <Field type="radio" name="p1e" value="1" />
                      No
                    </label>
                        </Grid>
                        <Grid item xs={12} sm={8}>
                            <p>Si la promoción conlleva el uso, ya sea en los T&Cs o en el material publicitario, de un logo, marca, aviso comercial o personaje de terceros y cuentas con una licencia a carta formal de autorización para su uso, ¿la licencia o autorización aún está vigente?</p>
                        </Grid>
                        <Grid item xs={12} sm={2} style={{ padding: 30 }}>
                            <label>
                                <Field type="radio" name="p2e" value="0" />
                      Si
                    </label>
                        </Grid>
                        <Grid item xs={12} sm={2} style={{ padding: 30 }}>
                            <label>
                                <Field type="radio" name="p2e" value="1" />
                      No
                    </label>
                        </Grid>
                        <Grid item xs={12} sm={8}>
                            <p>Si la promoción conlleva el uso, ya sea en los T&Cs o en el material publicitario, del nombre, la imagen y/o material de un artista (e.g., canción) ¿cuentas con una licencia a carta formal de autorización para su uso?</p>
                        </Grid>
                        <Grid item xs={12} sm={2} style={{ padding: 30 }}>
                            <label>
                                <Field type="radio" name="p3e" value="0" />
                      Si
                    </label>
                        </Grid>
                        <Grid item xs={12} sm={2} style={{ padding: 30 }}>
                            <label>
                                <Field type="radio" name="p3e" value="1" />
                      No
                    </label>
                        </Grid>
                        <Grid item xs={12} sm={8}>
                            <p>Si la promoción conlleva el uso, ya sea en los T&Cs o en el material publicitario, del nombre, la imagen y/o material de un artista (e.g., canción) ¿la licencia o autorización aún está vigente?</p>
                        </Grid>
                        <Grid item xs={12} sm={2} style={{ padding: 30 }}>
                            <label>
                                <Field type="radio" name="p4e" value="0" />
                      Si
                    </label>
                        </Grid>
                        <Grid item xs={12} sm={2} style={{ padding: 30 }}>
                            <label>
                                <Field type="radio" name="p4e" value="1" />
                      No
                    </label>
                        </Grid>
                        <Grid item xs={12} sm={8}>
                            <p>Si la promoción conlleva a el uso de una aplicación descargable en App Store o Google Play, ¿tus T&Cs y/o material publicitario ya señalan la leyenda "App Store es una marca de servicio de Apple Inc. o Google Play y su logo son una marca comercial de Google Inc."?</p>
                        </Grid>
                        <Grid item xs={12} sm={2} style={{ padding: 30 }}>
                            <label>
                                <Field type="radio" name="p5e" value="0" />
                      Si
                    </label>
                        </Grid>
                        <Grid item xs={12} sm={2} style={{ padding: 30 }}>
                            <label>
                                <Field type="radio" name="p5e" value="1" />
                      No
                    </label>
                        </Grid>
                        <Grid item xs={12} sm={8}>
                           <p>Si la promoción conlleva el uso de una aplicación, ¿los T&Cs o el material publicitario ya indica quién es el responsable del desarrollo de la App?
Debes incluir la identificación del desarrollador y responsable de la App y distinguirlo de la identificación del responsable del desarrollo y ejecución de la promoción a través de la App.
</p>
                        </Grid>
                        <Grid item xs={12} sm={2} style={{ padding: 30 }}>
                            <label>
                                <Field type="radio" name="p6e" value="0" />
                      Si
                    </label>
                        </Grid>
                        <Grid item xs={12} sm={2} style={{ padding: 30 }}>
                            <label>
                                <Field type="radio" name="p6e" value="1" />
                      No
                    </label>
                        </Grid>
                        <Grid item xs={12} style={{border:'1px solid blue'}}>
                            <p>Si respondiste “No” a cualquiera de estas preguntas, se debe ajustar la pieza publicitaria.
Fundamento: NOM-028-SCFI-2007, prácticas comerciales-Elementos de información en las promociones y/o promociones por medio de sorteos y concursos.
</p>
                            <p style={{fontWeight:500, textAlign:'center'}}>Principios de Autorregulación Jumex®</p>
                            <p>Hay restricción al uso de imperativos que invitan a la compra en material dirigido a niños.</p>
                            <p>No hay restricción de imperativo cuando no es un material dirigido a niños (el producto únicamente comunica a adultos), e.g. “registra” “gana” “participa”.</p>
                            <p>No hay restricción de imperativos cuando los imperativos se limitan a la mecánica de registro o la mecánica de la promoción.</p>
                            <p>La revisión de los imperativos tiene que considerar el contexto completo de la publicación.</p>
                        </Grid>

                    </Grid>
                </Form>
            </Formik>
        );
    }
}