import { Component, Input, OnInit, OnChanges } from '@angular/core';

@Component({
  selector: 'app-detailcard',
  standalone: true,
  imports: [],
  templateUrl: './detailcard.component.html',
  styleUrl: './detailcard.component.css'
})
export class DetailcardComponent implements OnInit, OnChanges {
  @Input() data: any;

  
  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges() {
    console.log(this.data);
  }
}
