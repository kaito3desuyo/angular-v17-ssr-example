import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-example1',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './example1.component.html',
  styleUrl: './example1.component.scss',
})
export class Example1Component { }
