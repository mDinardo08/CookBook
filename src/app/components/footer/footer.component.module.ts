import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { NgxBootstrapIconsModule, Person } from 'ngx-bootstrap-icons';

import { FooterComponent } from './footer.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: '',
        component: FooterComponent
      }
    ]),
    IonicModule,
    NgxBootstrapIconsModule.pick({ Person })
  ],
  declarations: [FooterComponent],
  exports: [FooterComponent]
})
export class FooterComponentModule {}
