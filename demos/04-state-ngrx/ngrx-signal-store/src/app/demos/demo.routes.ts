import { Routes } from '@angular/router';
import { DemoContainerComponent } from './demo-container/demo-container.component';
import { AppStateComponent } from './samples/app-state/app-state.component';
import { ChangeDetectionProfileComponent } from './samples/change-detection-profile/change-detection-profile.component';
import { ChangeDetectionComponent } from './samples/change-detection/change-detection.component';
import { ChangeDetectorRefComponent } from './samples/change-detector-ref/change-detector-ref.component';
import { ContainerPresenterNgrxComponent } from './samples/container-presenter-ngrx/container-presenter-ngrx.component';
import { StoreCrudComponent } from './samples/store-crud/store-crud.component';
import { StoreEntitiesComponent } from './samples/store-entities/store-entities.component';
import { NgrxInteropComponent } from './samples/ngrx-interop/ngrx-interop.component';
import { CustomStoreFeaturesComponent } from './samples/custom-store-features/custom-store-features.component';

export const demoRoutes: Routes = [
  {
    path: '',
    component: DemoContainerComponent,
    children: [
      { path: 'app-state', component: AppStateComponent, title: 'Demos - App State' },
      { path: 'store-crud', component: StoreCrudComponent, title: 'Demos - CRUD withMethods' },
      { path: 'store-entities-datasource', component: StoreEntitiesComponent, title: 'Demos - Entities' },
      { path: 'ngrx-interop', component: NgrxInteropComponent, title: 'Demos - NgRx Interop' },
      { path: 'custom-store-features', component: CustomStoreFeaturesComponent, title: 'Demos - Custom Store Features' },
      { path: 'cd-intro', component: ChangeDetectionComponent, title: 'Demos - Change Detection' },
      { path: 'cd-profile', component: ChangeDetectionProfileComponent, title: 'Demos - Change Detection Profile' },
      { path: 'presenter-ngrx', component: ContainerPresenterNgrxComponent, title: 'Demos - Container Presenter Ngrx' },
      {
        path: 'change-detector-ref',
        component: ChangeDetectorRefComponent,
        title: 'Demos - Change Detector Ref',
      }
    ],
  },
];
