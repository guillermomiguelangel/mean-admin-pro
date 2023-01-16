import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {

  public linkTheme = document.querySelector('#theme'); 

  constructor() {
    const url = localStorage.getItem('urlTheme') || "./assets/css/colors/default-dark.css";
    this.linkTheme?.setAttribute('href', url);   
  }

  changeTheme(colorTheme: string){
    const url = `./assets/css/colors/${colorTheme}.css`;
    this.linkTheme?.setAttribute('href', url); 
    localStorage.getItem('urlTheme');

    this.checkCurrentTheme();
  }

  checkCurrentTheme () {
    const links = document.querySelectorAll('.selector');

    links.forEach((elem: { classList: { remove: (arg0: string) => void; add: (arg0: string) => void; }; getAttribute: (arg0: string) => any; }) => {
      elem.classList.remove('working')
      const btnTheme = elem.getAttribute('data-theme');
      const btnThemeUrl = `./assets/css/colors/${btnTheme}.css`;
      const currentThemeUrl = this.linkTheme?.getAttribute('href');

      if(currentThemeUrl === btnThemeUrl) {
        elem.classList.add('working')
      }
    })
  }



}
