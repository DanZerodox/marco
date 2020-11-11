import * as React from 'react';
import './App.css';
import { Card, CardContent, Typography } from '@material-ui/core';
import { Field, Form, Formik } from 'formik';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import BorderLinearProgress from '@material-ui/core/LinearProgress';

export default class SextoPaso extends React.Component {
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
                            <p>VI.	Promociones y Ofertas –Términos y Condiciones</p>
                        </Grid>
                        <Grid item xs={12} sm={8}>
                            <p>Nombre completo, formal, de la entidad que lleva a cabo la promoción?</p>
                        </Grid>
                        <Grid item xs={12} sm={2} style={{ padding: 30 }}>
                            <label>
                                <Field type="radio" name="p1f" value="0" />
                      Si
                    </label>
                        </Grid>
                        <Grid item xs={12} sm={2} style={{ padding: 30 }}>
                            <label>
                                <Field type="radio" name="p1f" value="1" />
                      No
                    </label>
                        </Grid>
                        <Grid item xs={12} sm={8}>
                            <p>Domicilio completo, formal de la entidad que lleva a cabo la promoción?</p>
                        </Grid>
                        <Grid item xs={12} sm={2} style={{ padding: 30 }}>
                            <label>
                                <Field type="radio" name="p2f" value="0" />
                      Si
                    </label>
                        </Grid>
                        <Grid item xs={12} sm={2} style={{ padding: 30 }}>
                            <label>
                                <Field type="radio" name="p2f" value="1" />
                      No
                    </label>
                        </Grid>
                        <Grid item xs={12} sm={8}>
                            <p>Alcance geográfico de la promoción (e.g., nacional, regional, sólo ciertas ciudades, etc.)?</p>
                        </Grid>
                        <Grid item xs={12} sm={2} style={{ padding: 30 }}>
                            <label>
                                <Field type="radio" name="p3f" value="0" />
                      Si
                    </label>
                        </Grid>
                        <Grid item xs={12} sm={2} style={{ padding: 30 }}>
                            <label>
                                <Field type="radio" name="p3f" value="1" />
                      No
                    </label>
                        </Grid>
                        <Grid item xs={12} sm={8}>
                            <p>Vigencia de la promoción, indicando día de inicio y día de finalización?</p>
                        </Grid>
                        <Grid item xs={12} sm={2} style={{ padding: 30 }}>
                            <label>
                                <Field type="radio" name="p4f" value="0" />
                      Si
                    </label>
                        </Grid>
                        <Grid item xs={12} sm={2} style={{ padding: 30 }}>
                            <label>
                                <Field type="radio" name="p4f" value="1" />
                      No
                    </label>
                        </Grid>
                        <Grid item xs={12} sm={8}>
                            <p>La vigencia de la promoción, ¿da margen para llevar a cabo las revisiones internas de Jumex®? </p>
                        </Grid>
                        <Grid item xs={12} sm={2} style={{ padding: 30 }}>
                            <label>
                                <Field type="radio" name="p5f" value="0" />
                      Si
                    </label>
                        </Grid>
                        <Grid item xs={12} sm={2} style={{ padding: 30 }}>
                            <label>
                                <Field type="radio" name="p5f" value="1" />
                      No
                    </label>
                        </Grid>
                        <Grid item xs={12} sm={8}>
                          <p>¿Tu promoción indica a los consumidores que deberán de comprar producto y exhibir su ticket? </p>
                        </Grid>
                        <Grid item xs={12} sm={2} style={{ padding: 30 }}>
                            <label>
                                <Field type="radio" name="p6f" value="0" />
                      Si
                    </label>
                        </Grid>
                        <Grid item xs={12} sm={2} style={{ padding: 30 }}>
                            <label>
                                <Field type="radio" name="p6f" value="1" />
                      No
                    </label>
                        </Grid>
                        <Grid item xs={12} sm={8}>
                            <p>Si respondiste que “Sí” a la pregunta anterior, la vigencia de la promoción da margen para llevar a cabo las revisiones internas de Jumex® y presentar, en su caso, el aviso a PROFECO en tiempo? </p>
                            <p style={{fontWeight:500}}>El aviso de promoción debe efectuarse cuando menos 3 (tres) días hábiles anteriores de la fecha y hora en que inicia(n) la(s) promoción(es) que tenga prevista realizar.</p>
                        </Grid>
                        <Grid item xs={12} sm={2} style={{ padding: 30 }}>
                            <label>
                                <Field type="radio" name="p7f" value="0" />
                      Si
                    </label>
                        </Grid>
                        <Grid item xs={12} sm={2} style={{ padding: 30 }}>
                            <label>
                                <Field type="radio" name="p7f" value="1" />
                      No
                    </label>
                        </Grid>
                        <Grid item xs={12} sm={8}>
                            <p>Productos participantes (con descripción de marca, presentación, etc.)?</p>
                        </Grid>
                        <Grid item xs={12} sm={2} style={{ padding: 30 }}>
                            <label>
                                <Field type="radio" name="p8f" value="0" />
                      Si
                    </label>
                        </Grid>
                        <Grid item xs={12} sm={2} style={{ padding: 30 }}>
                            <label>
                                <Field type="radio" name="p8f" value="1" />
                      No
                    </label>
                        </Grid>
                        <Grid item xs={12} sm={8}>
                            <p>Establecimientos participantes?</p>
                        </Grid>
                        <Grid item xs={12} sm={2} style={{ padding: 30 }}>
                            <label>
                                <Field type="radio" name="p9f" value="0" />
                      Si
                    </label>
                        </Grid>
                        <Grid item xs={12} sm={2} style={{ padding: 30 }}>
                            <label>
                                <Field type="radio" name="p9f" value="1" />
                      No
                    </label>
                        </Grid>
                        <Grid item xs={12} sm={8}>
                            <p>Descripción clara y completa de incentivos, incluyendo cantidad de incentivos y valor monetario en el mercado?</p>
                        </Grid>
                        <Grid item xs={12} sm={2} style={{ padding: 30 }}>
                            <label>
                                <Field type="radio" name="p10f" value="0" />
                      Si
                    </label>
                        </Grid>
                        <Grid item xs={12} sm={2} style={{ padding: 30 }}>
                            <label>
                                <Field type="radio" name="p10f" value="1" />
                      No
                    </label>
                        </Grid>
                        <Grid item xs={12} sm={8}>
                            <p>Las garantías que se ofrecen sobre los incentivos objeto de la promoción?
Si el autor de la promoción u oferta no cumple su ofrecimiento, el consumidor podrá optar por exigir el cumplimento, aceptar otro bien o servicio equivalente o la rescisión del contrato y, en todo caso, tendrá derecho al pago de la diferencia económica entre el precio al que se ofrezca el bien o servicio objeto de la promoción u oferta y su precio normal, sin perjuicio de la bonificación compensación que le corresponda.
</p>
                        </Grid>
                        <Grid item xs={12} sm={2} style={{ padding: 30 }}>
                            <label>
                                <Field type="radio" name="p11f" value="0" />
                      Si
                    </label>
                        </Grid>
                        <Grid item xs={12} sm={2} style={{ padding: 30 }}>
                            <label>
                                <Field type="radio" name="p11f" value="1" />
                      No
                    </label>
                        </Grid>
                        <Grid item xs={12} sm={8}>
                            <p>Mecánica y condiciones para que el consumidor pueda hacerse acreedor al incentivo?</p>
                        </Grid>
                        <Grid item xs={12} sm={2} style={{ padding: 30 }}>
                            <label>
                                <Field type="radio" name="p12f" value="0" />
                      Si
                    </label>
                        </Grid>
                        <Grid item xs={12} sm={2} style={{ padding: 30 }}>
                            <label>
                                <Field type="radio" name="p12f" value="1" />
                      No
                    </label>
                        </Grid>
                        <Grid item xs={12} sm={8}>
                            <p>Medios de comunicación y fechas para dar a conocer resultados de la promoción?</p>
                        </Grid>
                        <Grid item xs={12} sm={2} style={{ padding: 30 }}>
                            <label>
                                <Field type="radio" name="p13f" value="0" />
                      Si
                    </label>
                        </Grid>
                        <Grid item xs={12} sm={2} style={{ padding: 30 }}>
                            <label>
                                <Field type="radio" name="p13f" value="1" />
                      No
                    </label>
                        </Grid>
                        <Grid item xs={12} sm={8}>
                            <p>Procedimiento, lugar y fecha para la entrega - recepción del incentivo (e.g., canje, envío a domicilio, etc.)?</p>
                        </Grid>
                        <Grid item xs={12} sm={2} style={{ padding: 30 }}>
                            <label>
                                <Field type="radio" name="p14f" value="0" />
                      Si
                    </label>
                        </Grid>
                        <Grid item xs={12} sm={2} style={{ padding: 30 }}>
                            <label>
                                <Field type="radio" name="p14f" value="1" />
                      No
                    </label>
                        </Grid>
                        <Grid item xs={12} sm={8}>
                            <p>Restricciones al consumidor respecto a la cantidad mínima o máxima de compra o de los bienes promocionados?</p>
                        </Grid>
                        <Grid item xs={12} sm={2} style={{ padding: 30 }}>
                            <label>
                                <Field type="radio" name="p15f" value="0" />
                      Si
                    </label>
                        </Grid>
                        <Grid item xs={12} sm={2} style={{ padding: 30 }}>
                            <label>
                                <Field type="radio" name="p15f" value="1" />
                      No
                    </label>
                        </Grid>
                        <Grid item xs={12} sm={8}>
                            <p>Teléfono(s) para información y aclaraciones, señalando el horario de atención?</p>
                        </Grid>
                        <Grid item xs={12} sm={2} style={{ padding: 30 }}>
                            <label>
                                <Field type="radio" name="p16f" value="0" />
                      Si
                    </label>
                        </Grid>
                        <Grid item xs={12} sm={2} style={{ padding: 30 }}>
                            <label>
                                <Field type="radio" name="p16f" value="1" />
                      No
                    </label>
                        </Grid>
                        <Grid item xs={12} sm={8}>
                            <p>La referencia de que el Organizador podrá realizar cambios a los T&Cs y dónde, cómo y cuándo se difundirán.</p>
                            <p style={{fontWeight:500}}>Se sebe dar aviso a PROFECO de cualquier cambio, cuando menos 1 (un) día hábil antes de que éstos se realicen.</p>
                        </Grid>
                        <Grid item xs={12} sm={2} style={{ padding: 30 }}>
                            <label>
                                <Field type="radio" name="p17f" value="0" />
                      Si
                    </label>
                        </Grid>
                        <Grid item xs={12} sm={2} style={{ padding: 30 }}>
                            <label>
                                <Field type="radio" name="p17f" value="1" />
                      No
                    </label>
                        </Grid>
                        <Grid item xs={12} style={{border:'1px solid blue'}}>
                            <p>Si respondiste “No” a cualquiera de estas preguntas, los T&Cs no están listos para revisión de legal.
Fundamentos: Artículo 48 de la Ley Federal de Juegos y Sorteos. Apartado 4 de la NOM-28-SCFI-2007, Prácticas comerciales-Elementos de información en las promociones coleccionables y/o promociones por medio de sorteos y concursos.
</p>
                        </Grid>
                    </Grid>
                </Form>
            </Formik>
        );
    }
}
