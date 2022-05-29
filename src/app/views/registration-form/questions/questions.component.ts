import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.scss']
})
export class QuestionsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  questions = [
    {
      question: '¿Porqué Magnet solo trabaja con empresas y reclutadores verificados?',
      answer: 'Trabajar directamente con empresas, reclutadores y agencias de reclutamiento con perfiles verificados nos ayuda a mantener un entorno profesional, con vacantes reales y de igual manera mitigamos la posibilidad de scams y fraudes de impersonación.'
    },
    {
      question: '¿Cuánto cuesta el servicio de Magnet?',
      answer: 'Magnet es un servicio de acceso libre para proveedores de empleo. No existe ningun costo ni tarifa por utilizar la plataforma de Magnet, el sitio web ni los medios asociados, tales como cuentas de redes sociales de Magnet.'
    },
    {
      question: '¿Por cuánto tiempo permanece activa una publicación?',
      answer: 'Toda vacante permanece activa por un lapso de 30 días a menos que el contratante la \'cierre\'. Si una vacante permanece abierta por 30 días, esta se cierra automáticamente. De todas formas, el publicante tiene la opción de volver a abrirla con un solo click. '
    }
  ]
}
