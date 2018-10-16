import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';


const routes: Routes = [
    // Home
    {
        path: '',
        pathMatch: 'full',
        component: HomePageComponent,
    },
]



export const RoutingModule = RouterModule.forRoot(routes);
