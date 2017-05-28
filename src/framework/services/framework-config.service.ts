import { Injectable } from '@angular/core';

export interface IconFiles {
  imageFile: string,
  alt: string,
  link: string
}

export interface FrameworkConfigSettings {
  showStausBar?: boolean,
  socialIcons ?: Array<IconFiles>
}

@Injectable()
export class FrameworkConfigService {
  showStausBar = true;
  socialIcons = new Array<IconFiles>();
  
  configure(settings : FrameworkConfigSettings):void {
    Object.assign(this,settings);
  }

}
