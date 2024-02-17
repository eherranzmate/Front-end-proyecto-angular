import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CharacterListComponent } from './characters/components/character-list/character-list.component';
import { HouseListComponent } from './houses/components/house-list/house-list.component';
import { HomeComponent } from './home/home.component';
import { VideoComponent } from './videos/video.component';
import { verifyTokenGuard } from './modules/auth/guards/verify-token.guard';
import { adminGuard } from './modules/auth/guards/admin.guard';
import { DetailCharacterComponent } from './characters/components/detail-character/detail-character.component';

const routes: Routes = [
  {
    path: '', component: HomeComponent
  },
  {
    path: 'videos', component: VideoComponent
  },
  {
    path: 'api/characters',  component: CharacterListComponent
  },
  {
    path: 'detail/:id', component: DetailCharacterComponent
  },
  {
    path: 'api/houses',  component: HouseListComponent
  },
  {
    path: 'shop', canActivate: [verifyTokenGuard], loadChildren: () => import('./modules/shop/shop.module').then(module => module.ShopModule)
  },
  {
    path: 'auth', loadChildren: () => import('./modules/auth/auth.module').then(module => module.AuthModule)
  },
  {
    path:'admin', canActivate: [adminGuard], loadChildren:() => import('./modules/administrator/administrator.module').then(module => module.AdministratorModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
