import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css']
})
export class ResumeComponent implements OnInit {
  isLoading: boolean = true;

  constructor() {}

  ngOnInit() {
    this.loadResume();
  }

  loadResume() {
    // Simulate an async operation (e.g., fetching data from an API)
    setTimeout(() => {
      this.isLoading = false;
    }, 1000); // Simulating a 2-second delay
  }
}
