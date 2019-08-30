import { Component, OnInit, ViewChild } from '@angular/core';
import { Chart } from 'chart.js';
import { InventariosService } from '../../Services/inventarios.service';
import { Storage } from '@ionic/storage';
import { SucursalesService } from '../../Services/sucursales.service';

@Component({
  selector: 'app-estadisticas',
  templateUrl: './estadisticas.page.html',
  styleUrls: ['./estadisticas.page.scss'],
})
export class EstadisticasPage implements OnInit {

  @ViewChild('barCanvas') barCanvas;
  @ViewChild('doughnutCanvas') doughnutCanvas;
  @ViewChild('doughnutCanvasService') doughnutCanvasService;
  @ViewChild('lineCanvas') lineCanvas;

  barChart: any;
  doughnutChart: any;
  lineChart: any;


  id_sucursal;
  sucursales = []
  entregasDiarias = []
  producto_inventario;
  servicios_mensual;
  servicios_anual = [];

  constructor(private Pro_inventarios:InventariosService,
              private storage:Storage,
              private Pro_sucursales:SucursalesService) { }

  ngOnInit() {
    this.storage.get('token').then(token=>{
      this.Pro_sucursales.obtenerSucursalSeleccionda(token).subscribe(async sucursal=>{
          this.id_sucursal = sucursal.id_sucursal.toString()
          let suc = await this.Pro_sucursales.sucursalesListUsuario()
          this.sucursales = Array.isArray(suc) ? suc : []
          await this.verSucursal()
      })
    })
  }

  async verSucursal(){
    let data = await this.Pro_inventarios.getChartAsync(this.id_sucursal)
      this.entregasDiarias = data[0].servicios_diario.dias
      this.producto_inventario = data[0].productos_inventario
      this.servicios_mensual = data[0].servicios_mensual
      this.servicios_anual = data[0].servicios_anual.meses
      this.barChartMethod();
      this.doughnutChartMethod();
      this.lineChartMethod();
      this.doughnutChartMethodServicio();
  }

  barChartMethod() {
    this.barChart = new Chart(this.barCanvas.nativeElement, {
      type: 'bar',
      data: {
        labels: ['LUN', 'MAR', 'MIE', 'JUE', 'VIE', 'SAB'],
        datasets: [{
          label: '# Entregas semanal',
          data: this.entregasDiarias,
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(255, 159, 64, 0.2)'
          ],
          borderColor: [
            'rgba(255,99,132,1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)'
          ],
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true
            }
          }]
        }
      }
    });
  }

  doughnutChartMethod() {
    this.doughnutChart = new Chart(this.doughnutCanvas.nativeElement, {
      type: 'pie',
      data: {
        labels: this.producto_inventario.productos,
        datasets: [{
          label: 'Productos',
          data: this.producto_inventario.inventario,
          backgroundColor: [
            'rgba(255, 159, 64, 0.2)',
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)'
          ],
          hoverBackgroundColor: [
            '#FFCE56',
            '#FF6384',
            '#36A2EB',
            '#FFCE56',
            '#FF6384'
          ]
        }]
      }
    });
  }

  doughnutChartMethodServicio() {
    this.doughnutChart = new Chart(this.doughnutCanvasService.nativeElement, {
      type: 'pie',
      data: {
        labels: this.servicios_mensual.servicios,
        datasets: [{
          label: 'Servicios por mes',
          data: this.servicios_mensual.inventario,
          backgroundColor: [
            'rgba(255, 159, 64, 0.2)',
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)'
          ],
          hoverBackgroundColor: [
            '#FFCE56',
            '#FF6384',
            '#36A2EB',
            '#FFCE56',
            '#FF6384'
          ]
        }]
      }
    });
  }

  lineChartMethod() {
    this.lineChart = new Chart(this.lineCanvas.nativeElement, {
      type: 'line',
      data: {
        labels: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'],
        datasets: [
          {
            label: 'Entregas por mes',
            fill: false,
            lineTension: 0.1,
            backgroundColor: 'rgba(75,192,192,0.4)',
            borderColor: 'rgba(75,192,192,1)',
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: 'rgba(75,192,192,1)',
            pointBackgroundColor: '#fff',
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: 'rgba(75,192,192,1)',
            pointHoverBorderColor: 'rgba(220,220,220,1)',
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            data: this.servicios_anual,
            spanGaps: false,
          }
        ]
      }
    });
  }
}
