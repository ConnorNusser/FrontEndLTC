import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title = 'FrontEndLTC'

  constructor(private router: Router) { 

  }

  ngOnInit(): void {
  }

  projectRouting(){
      this.router.navigateByUrl('/projects');

  }

}