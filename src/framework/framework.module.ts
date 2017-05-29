import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { FramworkBodyComponent } from './framwork-body/framwork-body.component';
import { ContentComponent } from './content/content.component';
import { TitleBarComponent } from './title-bar/title-bar.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { StatusBarComponent } from './status-bar/status-bar.component';
import { MenuItemComponent } from './menus/menu-item/menu-item.component';
import { MenuComponent } from './menus/menu/menu.component';

import { FrameworkConfigService } from './services/framework-config.service';
import { MenuService } from './services/menu.service';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [
    FramworkBodyComponent,
    ContentComponent,
    TitleBarComponent,
    TopBarComponent,
    StatusBarComponent,
    MenuItemComponent,
    MenuComponent
  ],
  providers: [
    FrameworkConfigService,
    MenuService
  ],
  exports: [
    FramworkBodyComponent
  ]
})
export class FrameworkModule { }
