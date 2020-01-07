import { Component, OnInit, OnDestroy } from '@angular/core';
import { UserService } from '../../../../../_services/api/user.service';
import { startWith, flatMap } from 'rxjs/operators';
import { Subscription } from 'rxjs';
import { FieldOfficerLocation } from '../../../../../_models/user.model';
import { interval } from 'rxjs/observable/interval';

declare let google: any;

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit, OnDestroy {
  options: any;
  overlays: any[] = [];
  infoWindow: any;

  private subscription = new Subscription(); 

  constructor(
    private userSvc: UserService
  ) { }

  ngOnInit() {
    this.options = {
      center: {lat: 10.3157, lng: 123.8854},
      zoom: 12
    };

    this.infoWindow = new google.maps.InfoWindow();

    this.subscription.add(
      interval(10 * 1000)
        .pipe(
          startWith(0),
          flatMap(() => this.userSvc.getSimpleList())
        )
        .subscribe((res) => {
          this.overlays = [];
          const locations: FieldOfficerLocation[] = res as FieldOfficerLocation[];

          locations.forEach((location) => {
            this.overlays.push(new google.maps.Marker({position: {lat: +location.latitude, lng: +location.longitude}, title: location.name}));
          });
        })
    );
  }

  handleOverlayClick(event) {
    let isMarker = event.overlay.getTitle != undefined;

    if (isMarker) {
      let title = event.overlay.getTitle();
      this.infoWindow.setContent('' + title + '');
      this.infoWindow.open(event.map, event.overlay);
      event.map.setCenter(event.overlay.getPosition());
    }
}

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
