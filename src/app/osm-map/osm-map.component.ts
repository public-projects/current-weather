import { Component, OnInit, Input, SimpleChanges } from '@angular/core';
declare var ol: any;
@Component({
  selector: 'app-osm-map',
  templateUrl: './osm-map.component.html',
  styleUrls: ['./osm-map.component.css']
})
export class OsmMapComponent implements OnInit {

  constructor() { }

  @Input() latitude: number;
  @Input() longitude: number;

  map: any;

  ngOnInit() {
    this.map = new ol.Map({
      target: 'map',
      layers: [
        new ol.layer.Tile({
          source: new ol.source.OSM()
        })
      ],
      view: new ol.View({
        center: ol.proj.fromLonLat([this.longitude, this.latitude]),
        zoom: 15
      })
    });
  }
// tslint:disable-next-line: use-life-cycle-interface
  ngOnChanges(changes: SimpleChanges): void {
   this.latitude = changes.latitude.currentValue;
   this.longitude = changes.longitude.currentValue;
   this.setCenter();
  }

   setCenter() {
     if (this.map) {
       const view = this.map.getView();
       view.setCenter(ol.proj.fromLonLat([this.longitude, this.latitude]));
       view.setZoom(15);
     }
  }

}
