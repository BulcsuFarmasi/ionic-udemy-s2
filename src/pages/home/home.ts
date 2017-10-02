import { Component } from '@angular/core';
import { NavController } from 'ionic-angular'

import { UsersPage } from '../users/users';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
    public userPage = UsersPage;

    constructor (private navController:NavController){}

    onGoToUsers () {
        this.navController.push(this.userPage)
            .catch((error) => console.log(`Acces denied, argument was ${error}`));
    }
}
