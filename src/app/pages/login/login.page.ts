import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { LoadingController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  email: string = 'eee';
  password: string = 'eee';
  constructor(
    private router: Router,
    private auth: AuthService,
    private loading: LoadingController
  ) {}

  ngOnInit() {}

  async loginForm() {
    const load = await this.loading.create({
      cssClass: 'myCustomClass',
      message: 'please wait...',
    });

    await load.present();
    console.log('email', this.email);
    console.log('password', this.password);

    this.auth.getProfile().subscribe((data) => {
      console.log('data', data);
    });

    this.auth.getProfile().subscribe(async (user) => {
      console.log('user', user);
      this.router.navigate(['/home']);
      await load.onDidDismiss();
    });
  }
}
