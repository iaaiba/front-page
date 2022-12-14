import { Component } from '@angular/core';
import { MatCheckboxChange } from '@angular/material/checkbox';
import { MatSelectChange } from '@angular/material/select';
import { UntilDestroy } from '@ngneat/until-destroy';
import { combineLatest } from 'rxjs';
import { map } from 'rxjs/operators';

import { SicarSubject } from '../../models/sicar.model';
import { DrawerService } from '../../services/drawer.service';
import { SicarService } from '../../services/sicar.service';

@UntilDestroy()
@Component({
    selector: 'app-sicar-panel',
    templateUrl: './sicar-panel.component.html',
    styleUrls: ['./sicar-panel.component.scss']
})
export class SicarPanelComponent {
    isLoading$ = combineLatest([
        this.sicarService.isAreasLoading$,
        this.sicarService.isFarmsLoading$
    ]).pipe(
        map(([areasLoading, farmsLoading]) =>
            areasLoading || farmsLoading
        )
    )

    cities$ = this.sicarService.cities$
    cityGeoid$ = this.sicarService.cityGeoid$
    subject$ = this.sicarService.areaSubject$
    isFarmsEnabled$ = this.sicarService.isFarmsEnabled$
    isControlsDisabled$ = this.sicarService.cityGeoid$
        .pipe(map(geoid => geoid === null))

    constructor(
        private drawer: DrawerService,
        private sicarService: SicarService
    ) { }

    onCityChanged(event: MatSelectChange) {
        this.sicarService.cityGeoid = event.value
    }

    onSubjectChanged(event: MatCheckboxChange, subject: SicarSubject) {
        if (event.checked) {
            this.sicarService.areaSubject = subject
        } else {
            this.sicarService.areaSubject = null
        }
    }

    onFarmsChecked(event: MatCheckboxChange) {
        this.sicarService.isFarmsEnabled = event.checked
    }

    close() {
        this.drawer.closeDrawer()
    }

}
