import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';


import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { NavComponent } from './nav/nav.component';
import { FooterComponent } from './footer/footer.component';
import { BodyComponent } from './body/body.component';
import { SidebarComponent } from './sidebar/sidebar.component';

import { ItemService } from './services/item.service';
import { LanguageComponent } from './language/language.component';
import { SentimentsComponent } from './sentiments/sentiments.component';
import { PosComponent } from './pos/pos.component';
import { TranslationComponent } from './translation/translation.component';
import { ShengComponent } from './sheng/sheng.component';


import { appRoutes } from './routes';
import { IncludesComponent } from './includes/includes.component';
import { AboutComponent } from './about/about.component';
import { IndexComponent } from './index/index.component';


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    FooterComponent,
    BodyComponent,
    SidebarComponent,
    LanguageComponent,
    SentimentsComponent,
    PosComponent,
    TranslationComponent,
    ShengComponent,
    IncludesComponent,
    AboutComponent,
    IndexComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
    
  ],
  providers: [ItemService],
  bootstrap: [AppComponent]
})
export class AppModule { }
