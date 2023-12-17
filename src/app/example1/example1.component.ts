import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select'

@Component({
  selector: 'app-example1',
  standalone: true,
  imports: [
    CommonModule,
    MatButtonModule,
    MatFormFieldModule,
    MatSelectModule
  ],
  templateUrl: './example1.component.html',
  styleUrl: './example1.component.scss',
})
export class Example1Component { }
