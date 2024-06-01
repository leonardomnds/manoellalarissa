import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProjetosComponent } from './projetos.component';
import { ProjetoDetalhesComponent } from './projeto-detalhes/projeto-detalhes.component';
import { ProjetoMainComponent } from './projeto-main/projeto-main.component';
import { CustomData, TipoProjeto } from './types';

const getImages = (lenght: number, image: string) => Array.from({ length: lenght + 1 }, () => `assets/images/${image}-min.webp`);

const routes: Routes = [
  {
    path: '',
    component: ProjetosComponent,
    children: [
      {
        path: '',
        component: ProjetoMainComponent,
      },
      {
        path: 'dolce-vitta',
        component: ProjetoDetalhesComponent,
        title: 'Dolce Vitta',
        data: {
          isProjetoArquitetonico: true,
          isProjetoInteriores: true,
          isProjetoPaisagismo: true,
          tipoProjeto: TipoProjeto.Residencial,
          anoProjeto: 2016,
          images: getImages(7, '01')
        } as CustomData
      },
      {
        path: 'casa-das-papoulas',
        component: ProjetoDetalhesComponent,
        title: 'Casa das Papoulas',
        data: {
          isProjetoArquitetonico: true,
          isProjetoPaisagismo: true,
          tipoProjeto: TipoProjeto.Residencial,
          anoProjeto: 2011,
          images: getImages(5, '02')
        } as CustomData
      },
      {
        path: 'a-primeira',
        component: ProjetoDetalhesComponent,
        title: 'A Primeira',
        data: {
          isProjetoArquitetonico: true,
          isProjetoInteriores: true,
          isProjetoPaisagismo: true,
          tipoProjeto: TipoProjeto.Residencial,
          anoProjeto: 2002,
          images: getImages(9, '03')
        } as CustomData
      },
      {
        path: 'lola-kafe',
        component: ProjetoDetalhesComponent,
        title: 'Lola Kafé',
        data: {
          isProjetoArquitetonico: true,
          isProjetoInteriores: true,
          tipoProjeto: TipoProjeto.Comercial,
          anoProjeto: 2023,
          images: getImages(9, '04')
        } as CustomData
      },
      {
        path: 'restaurante-pantanal',
        component: ProjetoDetalhesComponent,
        title: 'Restaurante Pantanal - Toledo/PR',
        data: {
          isProjetoInteriores: true,
          tipoProjeto: TipoProjeto.Comercial,
          anoProjeto: 2019,
          images: getImages(9, '05')
        } as CustomData
      },
      {
        path: 'drei-schritte',
        component: ProjetoDetalhesComponent,
        title: 'Drei Schritte',
        data: {
          isProjetoArquitetonico: true,
          isProjetoInteriores: true,
          tipoProjeto: TipoProjeto.Comercial,
          anoProjeto: 2022,
          images: getImages(10, '06')
        } as CustomData
      },
      {
        path: 'brisa-da-mata',
        component: ProjetoDetalhesComponent,
        title: 'Brisa da Mata',
        data: {
          isProjetoArquitetonico: true,
          isProjetoInteriores: true,
          isProjetoPaisagismo: true,
          tipoProjeto: TipoProjeto.Residencial,
          anoProjeto: 2019,
          images: getImages(7, '07')
        } as CustomData
      },
      {
        path: 'chale-do-campo',
        component: ProjetoDetalhesComponent,
        title: 'Chalé do Campo',
        data: {
          isProjetoArquitetonico: true,
          tipoProjeto: TipoProjeto.Residencial,
          anoProjeto: 2021,
          images: getImages(6, '08')
        } as CustomData
      },
      {
        path: 'edificio-aurelio',
        component: ProjetoDetalhesComponent,
        title: 'Edifício Aurélio',
        data: {
          isProjetoArquitetonico: true,
          tipoProjeto: TipoProjeto.Residencial,
          anoProjeto: 2021,
          images: getImages(9, '09')
        } as CustomData
      },
      {
        path: 'centro-odontologico-lago',
        component: ProjetoDetalhesComponent,
        title: 'Centro Odontológico Lago',
        data: {
          isProjetoArquitetonico: true,
          isProjetoInteriores: true,
          tipoProjeto: TipoProjeto.Comercial,
          anoProjeto: 2019,
          images: getImages(10, '10')
        } as CustomData
      },
      {
        path: 'casa-41',
        component: ProjetoDetalhesComponent,
        title: 'Casa 41',
        data: {
          isProjetoArquitetonico: true,
          isProjetoInteriores: true,
          isProjetoPaisagismo: true,
          tipoProjeto: TipoProjeto.Residencial,
          anoProjeto: 2021,
          images: getImages(13, '11')
        } as CustomData
      },
      {
        path: 'restaurante-pantanal-cascavel',
        component: ProjetoDetalhesComponent,
        title: 'Restaurante Pantanal - Cascavel/PR',
        data: {
          isProjetoInteriores: true,
          tipoProjeto: TipoProjeto.Comercial,
          anoProjeto: 2023,
          images: getImages(9, '12')
        } as CustomData
      },
      {
        path: 'casa-alecrim',
        component: ProjetoDetalhesComponent,
        title: 'Casa Alecrim',
        data: {
          isProjetoInteriores: true,
          tipoProjeto: TipoProjeto.Residencial,
          anoProjeto: 2023,
          images: getImages(9, '13')
        } as CustomData
      },
      {
        path: 'casa-country',
        component: ProjetoDetalhesComponent,
        title: 'Casa do Country',
        data: {
          isProjetoArquitetonico: true,
          isProjetoInteriores: true,
          isProjetoPaisagismo: true,
          tipoProjeto: TipoProjeto.Residencial,
          anoProjeto: 2020,
          images: getImages(10, '14')
        } as CustomData
      },
      {
        path: 'casa-rio',
        component: ProjetoDetalhesComponent,
        title: 'Casa do Rio',
        data: {
          isProjetoInteriores: true,
          tipoProjeto: TipoProjeto.Residencial,
          anoProjeto: 2022,
          images: getImages(9, '15')
        } as CustomData
      },
      {
        path: 'ape-do-musico',
        component: ProjetoDetalhesComponent,
        title: 'Apê do Músico',
        data: {
          isProjetoInteriores: true,
          tipoProjeto: TipoProjeto.Residencial,
          anoProjeto: 2019,
          images: getImages(7, '16')
        } as CustomData
      },
      {
        path: 'ape-downtown',
        component: ProjetoDetalhesComponent,
        title: 'Apê Downtown',
        data: {
          isProjetoInteriores: true,
          tipoProjeto: TipoProjeto.Residencial,
          anoProjeto: 2022,
          images: getImages(6, '17')
        } as CustomData
      },
      {
        path: 'fixar',
        component: ProjetoDetalhesComponent,
        title: 'Fixar - Propriedade Intelectual',
        data: {
          isProjetoInteriores: true,
          tipoProjeto: TipoProjeto.Comercial,
          anoProjeto: 2022,
          images: getImages(6, '18')
        } as CustomData
      },
      {
        path: 'vila-neoclassica',
        component: ProjetoDetalhesComponent,
        title: 'Vila Neoclássica',
        data: {
          isProjetoArquitetonico: true,
          isProjetoPaisagismo: true,
          tipoProjeto: TipoProjeto.Residencial,
          anoProjeto: 2011,
          images: getImages(7, '19')
        } as CustomData
      },
      {
        path: 'my-way',
        component: ProjetoDetalhesComponent,
        title: 'My Way',
        data: {
          isProjetoArquitetonico: true,
          isProjetoInteriores: true,
          isProjetoPaisagismo: true,
          tipoProjeto: TipoProjeto.Residencial,
          anoProjeto: 2011,
          images: getImages(13, '20')
        } as CustomData
      },
      {
        path: 'la-fontana',
        component: ProjetoDetalhesComponent,
        title: 'La Fontana',
        data: {
          isProjetoArquitetonico: true,
          isProjetoInteriores: true,
          isProjetoPaisagismo: true,
          tipoProjeto: TipoProjeto.Residencial,
          anoProjeto: 2006,
          images: getImages(7, '21')
        } as CustomData
      },
      {
        path: 'casa-dos-porticos',
        component: ProjetoDetalhesComponent,
        title: 'Casa dos Pórticos',
        data: {
          isProjetoArquitetonico: true,
          isProjetoInteriores: true,
          isProjetoPaisagismo: true,
          tipoProjeto: TipoProjeto.Residencial,
          anoProjeto: 2020,
          images: getImages(6, '22')
        } as CustomData
      },
      {
        path: 'contemporanea',
        component: ProjetoDetalhesComponent,
        title: 'Contemporânea',
        data: {
          isProjetoArquitetonico: true,
          isProjetoPaisagismo: true,
          tipoProjeto: TipoProjeto.Residencial,
          anoProjeto: 2015,
          images: getImages(6, '23')
        } as CustomData
      },
      {
        path: 'casa-das-palmeiras',
        component: ProjetoDetalhesComponent,
        title: 'Casa das Palmeiras',
        data: {
          isProjetoArquitetonico: true,
          isProjetoInteriores: true,
          isProjetoPaisagismo: true,
          tipoProjeto: TipoProjeto.Residencial,
          anoProjeto: 2019,
          images: getImages(6, '24')
        } as CustomData
      },
      {
        path: 'monumento-fundadores',
        component: ProjetoDetalhesComponent,
        title: 'Monumento Fundadores',
        data: {
          isProjetoArquitetonico: true,
          isProjetoInteriores: true,
          isProjetoPaisagismo: true,
          isObraPublica: true,
          tipoProjeto: TipoProjeto.InstitucionalPublico,
          anoProjeto: 2011,
          images: getImages(3, '25')
        } as CustomData
      },
      {
        path: 'academia-da-saude',
        component: ProjetoDetalhesComponent,
        title: 'Academia da Saúde',
        data: {
          isProjetoArquitetonico: true,
          isProjetoPaisagismo: true,
          tipoProjeto: TipoProjeto.Residencial,
          anoProjeto: 2011,
          images: getImages(3, '26')
        } as CustomData
      },
      {
        path: 'rodoviaria',
        component: ProjetoDetalhesComponent,
        title: 'Rodoviária',
        data: {
          isProjetoArquitetonico: true,
          tipoProjeto: TipoProjeto.Publico,
          anoProjeto: 2016,
          images: getImages(3, '27')
        } as CustomData
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProjetosRoutingModule { }
