// @ts-nocheck
import {Routes} from '@angular/router';

export const NG_DOC_ROUTING: Routes = [
    {
        path: 'installation',
        loadChildren: () => import('ng-doc/ng-doc/guides/installation/module')
    },
];
