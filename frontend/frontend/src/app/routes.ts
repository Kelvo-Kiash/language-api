import { Routes } from "@angular/router";
import { LanguageComponent } from "./language/language.component";
import { PosComponent } from "./pos/pos.component";
import { SentimentsComponent } from "./sentiments/sentiments.component";
import { ShengComponent } from "./sheng/sheng.component";
import { TranslationComponent } from "./translation/translation.component";
import { AboutComponent } from "./about/about.component";
import { IndexComponent } from "./index/index.component";





export const appRoutes:Routes = [
    {path: "language", component: LanguageComponent},
    {path: "sheng", component: ShengComponent},
    {path: "pos", component: PosComponent},
    {path: "sentiments", component: SentimentsComponent},
    {path: "translation", component: TranslationComponent},
    {path: "about", component: AboutComponent},
    {path: "index", component: IndexComponent},
    {path: "", redirectTo: "index", pathMatch: 'full'}
    
    
]