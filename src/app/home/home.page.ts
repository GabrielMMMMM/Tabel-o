import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  times = [
    { logo: 'assets/img/botafogo.png', nome: 'Botafogo', posicao: 1, pontos: 73 },
    { logo: 'assets/img/palmeiras.png', nome: 'Palmeiras', posicao: 2, pontos: 70 },
    { logo: 'assets/img/Internacional.png', nome: 'Internacional', posicao: 3, pontos: 65 },
    { logo: 'assets/img/Fortaleza.png', nome: 'Fortaleza', posicao: 4, pontos: 65 },
    { logo: 'assets/img/Flamengo.png', nome: 'Flamengo', posicao: 5, pontos: 63 },
    { logo: 'assets/img/sao-paulo.png', nome: 'São Paulo', posicao: 6, pontos: 59 },
    { logo: 'assets/img/Cruzeiro.png', nome: 'Cruzeiro', posicao: 7, pontos: 48 },
    { logo: 'assets/img/Bahia.png', nome: 'Bahia', posicao: 8, pontos: 47 },
    { logo: 'assets/img/corinthians.png', nome: 'Corinthians', posicao: 9, pontos: 47 },
    { logo: 'assets/img/Atletico-MG.png', nome: 'Atlético-MG', posicao: 10, pontos: 44 },
    { logo: 'assets/img/Vasco.png', nome: 'Vasco', posicao: 11, pontos: 43 },
    { logo: 'assets/img/Vitoria.png', nome: 'Vitória', posicao: 12, pontos: 42 },
    { logo: 'assets/img/Juventude.png', nome: 'Juventude', posicao: 13, pontos: 42 },
    { logo: 'assets/img/Gremio.png', nome: 'Grêmio', posicao: 14, pontos: 41 },
    { logo: 'assets/img/Athletico_Paranaense.png', nome: 'Athletico-PR', posicao: 15, pontos: 41 },
    { logo: 'assets/img/Fluminense.png', nome: 'Fluminense', posicao: 16, pontos: 39 },
    { logo: 'assets/img/Criciuma.png', nome: 'Criciúma', posicao: 17, pontos: 38 },
    { logo: 'assets/img/Bragantino.png', nome: 'Bragantino', posicao: 18, pontos: 37 },
    { logo: 'assets/img/Cuiaba.png', nome: 'Cuiabá', posicao: 19, pontos: 30 },
    { logo: 'assets/img/Atletico-GO.png', nome: 'Atlético-GO', posicao: 20, pontos: 26 },
  ];
  


  constructor() {}

}
