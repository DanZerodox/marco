import * as React from 'react';
import './App.css';
import { Card, CardContent, Typography } from '@material-ui/core';
import { Field, Form, Formik } from 'formik';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import BorderLinearProgress from '@material-ui/core/LinearProgress';

export default class CuartoPaso extends React.Component {
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
                            <p>IV.	Promociones y Ofertas – Materializadas al comprar un producto.</p>
                        </Grid>
                        <Grid item xs={12} sm={8}>
                            <p>El material publicitario, ¿ya indica el plazo de duración o el volumen de los bienes o servicios ofrecidos?
Si no se fija plazo ni volumen, se presume que son indefinidos hasta que se haga del conocimiento público la revocación de la promoción o de la oferta, de modo suficiente y por los mismos medios de difusión que se modificó la oferta.
</p>
                        </Grid>
                        <Grid item xs={12} sm={2} style={{ padding: 30 }}>
                            <label>
                                <Field type="radio" name="p1d" value="0" />
                      Si
                    </label>
                        </Grid>
                        <Grid item xs={12} sm={2} style={{ padding: 30 }}>
                            <label>
                                <Field type="radio" name="p1d" value="1" />
                      No
                    </label>
                        </Grid>
                        <Grid item xs={12} sm={8}>
                            <p>Si el material publicitario tiene un logo, marca, aviso comercial o personaje de terceros, ¿cuentas con una licencia a carta formal de autorización para su uso?</p>
                        </Grid>
                        <Grid item xs={12} sm={2} style={{ padding: 30 }}>
                            <label>
                                <Field type="radio" name="p2d" value="0" />
                      Si
                    </label>
                        </Grid>
                        <Grid item xs={12} sm={2} style={{ padding: 30 }}>
                            <label>
                                <Field type="radio" name="p2d" value="1" />
                      No
                    </label>
                        </Grid>
                        <Grid item xs={12} sm={8}>
                            <p>Si el material publicitario tiene un logo, marca, aviso comercial o personaje de terceros y cuentas con una licencia a carta formal de autorización para su uso, ¿la licencia o autorización aún está vigente?</p>
                        </Grid>
                        <Grid item xs={12} sm={2} style={{ padding: 30 }}>
                            <label>
                                <Field type="radio" name="p3d" value="0" />
                      Si
                    </label>
                        </Grid>
                        <Grid item xs={12} sm={2} style={{ padding: 30 }}>
                            <label>
                                <Field type="radio" name="p3d" value="1" />
                      No
                    </label>
                        </Grid>
                        <Grid item xs={12} sm={8}>
                            <p>Si el material publicitario tiene el nombre, la imagen y/o material de un artista (e.g., canción) ¿cuentas con una licencia a carta formal de autorización para su uso?</p>
                        </Grid>
                        <Grid item xs={12} sm={2} style={{ padding: 30 }}>
                            <label>
                                <Field type="radio" name="p4d" value="0" />
                      Si
                    </label>
                        </Grid>
                        <Grid item xs={12} sm={2} style={{ padding: 30 }}>
                            <label>
                                <Field type="radio" name="p4d" value="1" />
                      No
                    </label>
                        </Grid>
                        <Grid item xs={12} sm={8}>
                            <p>Si el material publicitario tiene el nombre, la imagen y/o material de un artista (e.g., canción) y cuentas con una licencia a carta formal de autorización para su uso, ¿la licencia o autorización aún está vigente?</p>
                        </Grid>
                        <Grid item xs={12} sm={2} style={{ padding: 30 }}>
                            <label>
                                <Field type="radio" name="p5d" value="0" />
                      Si
                    </label>
                        </Grid>
                        <Grid item xs={12} sm={2} style={{ padding: 30 }}>
                            <label>
                                <Field type="radio" name="p5d" value="1" />
                      No
                    </label>
                        </Grid>
                        <Grid item xs={12} style={{border:'1px solid blue'}}>
                          <p>Si respondiste “No” a cualquiera de estas preguntas, se debe ajustar la pieza publicitaria.
Fundamento: Artículo 48 de la Ley Federal del Consumidor, Ley de la Propiedad Industrial y Ley Federa del Derecho de Autor.
</p>
                        </Grid>
                    
                    </Grid>
                </Form>
            </Formik>
        );
    }
}