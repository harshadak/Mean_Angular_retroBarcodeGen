import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  colors = randomize(colors);
}

function randomize(colors): Array<string> {
  var j, x, i;
  for (i = colors.length - 1; i > 0; i--) {
      j = Math.floor(Math.random() * (i + 1));
      x = colors[i];
      colors[i] = colors[j];
      colors[j] = x;
  }
  return colors;
}

var colors: Array<string> = ['Coral', 'DarkSalmon', 'DarkSeaGreen', 'Gold', 'HotPink', 'Lavender', 'LightPink', 'MediumOrchid', 'MediumSpringGreen', 'MistyRose'];
