import { Routes } from '@angular/router';
import { Admin } from './components/admin/admin';
import { ControlFlow } from './components/control-flow/control-flow';
import { ResourceAPIComponent } from './components/resource-api/resource-api';
import { DataBinding } from './components/data-binding/data-binding';
import { SingnalExample } from './components/singnal-example/singnal-example';

export const routes: Routes = [
    {
        path: 'admin',
        component: Admin
    },
    {
        path: 'control-flow',
        component: ControlFlow
    },
    {
        path: 'resource-api',
        component: ResourceAPIComponent
    },
    {
        path: 'data-binding',
        component: DataBinding
    },
    {
        path: 'signal',
        component: SingnalExample
    }

];
