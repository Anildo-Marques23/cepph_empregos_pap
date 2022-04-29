import { Component, OnInit } from '@angular/core';
import { RequisicaoService } from '../servico/requisicao.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public incricao_vagas !: any;
  public departamentos : Array<any> = [
    'Pedagógico',
    'Administrativo'
  ];

  constructor(private requisicaoService : RequisicaoService) { }

  ngOnInit(): void {
    this.requisicaoService.listar_vagas().subscribe((res : any) =>{
      this.incricao_vagas = res.vagas;
    });
  }

  converteIdEmNum(id : any) {
    console.log(id);
    let idEmNumero = +(id.Departamento);
    return idEmNumero - 1;
  }

  

}
