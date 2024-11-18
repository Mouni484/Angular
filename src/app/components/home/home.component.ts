import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ButtonModule, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  categoryItems = [
    { id: 1, name: 'Electronics', description: 'Bid on the latest gadgets'},
    { id: 2, name: 'Art', description: 'Own unique artworks'},
    { id: 3, name: 'vehicles', description: 'Find your dream car or bike'},
  ];

  featuredItems = [
    { id: 101, name: 'iPhone 14 pro', startingBid: 999},
    { id: 102, name: 'Classic Painting', startingBid: 500},
    { id: 103, name: 'Benz', startingBid: 12000},
  ];

  exploreCategory(categoryId: number) {
    alert(`Explore items in category ID: ${categoryId}`);
  }

  bidOnItem(itemId: number) {
    alert(`Place a bid on item ID: ${itemId}`);
  }
}