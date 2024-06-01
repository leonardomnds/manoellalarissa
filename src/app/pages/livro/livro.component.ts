import { Component } from '@angular/core';
import { environment } from '@env';

@Component({
  selector: 'app-livro',
  templateUrl: './livro.component.html'
})
export class LivroComponent {

  environment = environment;
  imageUrl = 'https://www.futuraexpress.com.br/admin//upload/produtos/77_Livro-Capa-Flexivel-Quadrado_03.jpg';

}
