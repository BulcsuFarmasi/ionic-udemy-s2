import { Component } from '@angular/core';
import { NavController } from 'ionic-angular'

import { UsersPage } from '../users/users';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
    public usersPage = UsersPage;

    constructor (private navController:NavController){}

    onGoToUsers () {
        this.navController.push(this.usersPage)
            .then(result => {
                if (!result) {
                    console.log(`Access denied, the argument was ${result}`);
                }
            });
    }
}
