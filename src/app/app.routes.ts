import { Routes } from '@angular/router';
import { Admin } from './components/admin/admin';
import { ControlFlow } from './components/control-flow/control-flow';
import { ResourceAPIComponent } from './components/resource-api/resource-api';
import { DataBinding } from './components/data-binding/data-binding';
import { SingnalExample } from './components/singnal-example/singnal-example';
import { AttDirective } from './components/att-directive/att-directive';
import { GetAPI } from './components/get-api/get-api';
import { User } from './components/user/user';
import { DynamicComponent } from './components/dynamic-component/dynamic-component';

export const routes: Routes = [
    {
        path: 'admin',
        component: Admin
    },
    {
        path: 'user',
        component: User
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
    },
    {
        path: 'attribute-directive',
        component: AttDirective
    },
    {
        path: 'get-api',
        component: GetAPI
    },
    {
        path: 'dynamic-component',
        component: DynamicComponent
    }

];
