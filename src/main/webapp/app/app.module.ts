import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import './vendor';
import { DeployingTestSharedModule } from 'app/shared/shared.module';
import { DeployingTestCoreModule } from 'app/core/core.module';
import { DeployingTestAppRoutingModule } from './app-routing.module';
import { DeployingTestHomeModule } from './home/home.module';
import { DeployingTestEntityModule } from './entities/entity.module';
// jhipster-needle-angular-add-module-import JHipster will add new module here
import { JhiMainComponent } from './layouts/main/main.component';
import { NavbarComponent } from './layouts/navbar/navbar.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { PageRibbonComponent } from './layouts/profiles/page-ribbon.component';
import { ActiveMenuDirective } from './layouts/navbar/active-menu.directive';
import { ErrorComponent } from './layouts/error/error.component';

@NgModule({
  imports: [
    BrowserModule,
    DeployingTestSharedModule,
    DeployingTestCoreModule,
    DeployingTestHomeModule,
    // jhipster-needle-angular-add-module JHipster will add new module here
    DeployingTestEntityModule,
    DeployingTestAppRoutingModule
  ],
  declarations: [JhiMainComponent, NavbarComponent, ErrorComponent, PageRibbonComponent, ActiveMenuDirective, FooterComponent],
  bootstrap: [JhiMainComponent]
})
export class DeployingTestAppModule {}
