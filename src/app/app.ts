import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { Admin } from "./components/admin/admin";
import { User } from "./components/user/user";
import { DataBinding } from './components/data-binding/data-binding';
import { SingnalExample } from "./components/singnal-example/singnal-example";
import { LinkedSingnal } from "./components/linked-singnal/linked-singnal";
import { ResourceAPIComponent } from "./components/resource-api/resource-api";

@Component({
  selector: 'app-root',
  imports: [RouterLink, RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'angular20';
}
