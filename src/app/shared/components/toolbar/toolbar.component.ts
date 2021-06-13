import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {
  public appName = 'Ventas online 24/7';
  constructor(public authSvc: AuthService) { }

  ngOnInit(): void {
  }

  onLogout(): void {
    this.authSvc.logout();
  }
}
