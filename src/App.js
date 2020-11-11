import * as React from 'react';
import './App.css';
import { Card, CardContent, CardMedia, Typography } from '@material-ui/core';
import { Field, Form, Formik } from 'formik';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import BorderLinearProgress from '@material-ui/core/LinearProgress';
import PrimerPaso from './PrimerPaso';
import SegundoPaso from './SegundoPaso';
import TercerPaso from './TercerPaso';
import CuartoPaso from './CuartoPaso';
import QuintoPaso from './QuintoPaso';
import SextoPaso from './SextoPaso';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      paso2: true,
      paso3: false,
      paso4: false,
      paso5: false,
      paso6: false,
      paso7: false,
      finalizar: false,
      count: 0
    }
  }

  render() {
    return (
      <Card>
        <CardContent>
          <div style={{ textAlign: 'center', fontWeight: 700 }}>
            <p>Marco legal relacionado con Publicidad y Promociones </p>
            <p>Consideraciones Básicas</p>
            <label>
              Nombre del Proyecto: 
              <input style={{marginLeft:5, borderRadius:5, border:'1px solid', marginBottom:20}}></input>
            </label>
          </div>
          <BorderLinearProgress style={{ width: '100%' }} variant="determinate" value={this.state.count} />
          {this.state.paso2 === true ?
            <>
              <PrimerPaso></PrimerPaso>
              <Button style={{ float: 'right', marginBottom: 10 }} onClick={() => this.Pagina2()} variant="contained" color="primary" disableElevation>
                Siguiente
              </Button>
            </>
            : null
          }
          {
            this.state.paso3 === true ?
              <>
                <SegundoPaso></SegundoPaso>
                <Button style={{ float: 'left', marginBottom: 15 }} onClick={() => this.Pagina1()} variant="contained" color="primary" disableElevation>
                Anterior
              </Button>
                <Button style={{ float: 'right', marginBottom: 15 }} onClick={() => this.Pagina3()} variant="contained" color="primary" disableElevation>
                  Siguiente
            </Button>
              </>
              : null
          }
           {
            this.state.paso4 === true ?
              <>
                <TercerPaso></TercerPaso>
                <Button style={{ float: 'left', marginBottom: 15 }} onClick={() => this.Pagina2()} variant="contained" color="primary" disableElevation>
                Anterior
              </Button>
                <Button style={{ float: 'right', marginBottom: 15 }} onClick={() => this.Pagina4()} variant="contained" color="primary" disableElevation>
                  Siguiente
            </Button>
              </>
              : null
          }
           {
            this.state.paso5 === true ?
              <>
                <CuartoPaso></CuartoPaso>
                <Button style={{ float: 'left', marginBottom: 15 }} onClick={() => this.Pagina3()} variant="contained" color="primary" disableElevation>
                Anterior
              </Button>
                <Button style={{ float: 'right', marginBottom: 15 }} onClick={() => this.Pagina5()} variant="contained" color="primary" disableElevation>
                  Siguiente
            </Button>
              </>
              : null
          }
            {
            this.state.paso6 === true ?
              <>
                <QuintoPaso></QuintoPaso>
                <Button style={{ float: 'left', marginBottom: 15 }} onClick={() => this.Pagina4()} variant="contained" color="primary" disableElevation>
                Anterior
              </Button>
                <Button style={{ float: 'right', marginBottom: 15 }} onClick={() => this.Pagina6()} variant="contained" color="primary" disableElevation>
                  Siguiente
            </Button>
              </>
              : null
          }
           {this.state.paso7 === true ?
              <>
                <SextoPaso></SextoPaso>
                <Button style={{ float: 'left', marginBottom: 15 }} onClick={() => this.Pagina5()} variant="contained" color="primary" disableElevation>
                Anterior
              </Button>
                <Button style={{ float: 'right', marginBottom: 15 }} onClick={() => this.Finalizar()} variant="contained" color="primary" disableElevation>
                  Enviar
            </Button>
              </>
              : null
          }
           {this.state.finalizar === true ?
              <>
               <Card>
                 <CardContent>
                   <Typography style={{textAlign:'center', fontWeight:500}}>Se ha enviado tu documento.</Typography>
                   <CardMedia style={{ width: 75, height: 130 }} image={"./src/paupau.png"}></CardMedia>
                 </CardContent>
               </Card>
              </>
              : null
          }
        </CardContent>
      </Card>
    );
  }
  Finalizar(){
    this.setState({ paso2: false, paso3:false, paso4: false, paso5:false, paso6:false, paso7:false, finalizar: true, count: 100 })
  }
  Pagina6(){
    this.setState({ paso2: false, paso3:false, paso4: false, paso5:false, paso6:false, paso7:true, finalizar: false, count: 100 })
  }
  Pagina5(){
    this.setState({ paso2: false, paso3:false, paso4: false, paso5:false, paso6:true, paso7:false, finalizar: false, count: 80 })
  }
  Pagina4(){
    this.setState({ paso2: false, paso3:false, paso4: false, paso5:true, paso6:false, paso7:false, finalizar: false, count: 60 })
  }
  Pagina3() {
    this.setState({ paso2: false, paso3:false, paso4: true, paso5:false, paso6:false, paso7:false, finalizar: false, count: 40 })
  }
  Pagina2() {
    this.setState({ paso2: false, paso3: true, paso4: false, paso5:false, paso6:false, paso7:false, finalizar: false, count: 20 })
  }
  Pagina1() {
    this.setState({ paso2: true, paso3: false, paso4: false, paso5:false, paso6:false, paso7:false, finalizar: false, count: 0 })
  }
}
export default App;
