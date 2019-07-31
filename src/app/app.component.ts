import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'myblog';

  posts = [
  {
    title: 'Premier post',
    content: 'Contenu du premier post',
    loveIts: 3
  },
  {
    title: 'Deuxième post',
    content: 'Contenu du deuxième post ',
    loveIts: -2
  },
  {
    title: 'Troisième post',
    content: 'Contenu du troisième post ',
    loveIts: 0
  }
];
}
