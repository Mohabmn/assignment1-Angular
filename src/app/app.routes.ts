import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { AboutComponent } from '../about/about.component';
import { PortfolioComponent } from '../portfolio/portfolio.component';
import { ContactComponent } from '../contact/contact.component';
import { HomeComponent } from '../home/home.component';

export const routes: Routes = [
    {path:'' , component:HomeComponent , title:'Home'},
    {path:'about' , component:AboutComponent, title:'About'},
    {path:'portfolio' , component:PortfolioComponent , title:'Portfolio'},
    {path:'contact', component:ContactComponent , title:'Contact'},
    {path:'home' , component:HomeComponent , title:'Home'}
];
