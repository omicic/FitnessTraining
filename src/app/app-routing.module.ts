
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { TrainingComponent } from './training/training.component';


const routes: Routes=[
    { path: '', component: WelcomeComponent },
    { path: 'training', component: TrainingComponent }
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
    providers:[]
})

export class AppRoutingModule {}