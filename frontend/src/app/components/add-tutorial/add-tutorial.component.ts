import { Component } from '@angular/core';
import { Tutorial } from 'src/app/models/tutorial.model';
import { TutorialService } from 'src/app/services/tutorial.service';

@Component({
  selector: 'app-add-tutorial',
  templateUrl: './add-tutorial.component.html',
  styleUrls: ['./add-tutorial.component.css']
})
export class AddTutorialComponent {

  tutorial: Tutorial = {
    title: '',
    description: '',
    published: false
  };
  submitted = false;

  constructor(private tutorialService: TutorialService) { }

  saveTutorial(): void {
    if (!this.tutorial.title || !this.tutorial.description) {
      alert('Please fill in both title and description');
      return;
    }

    const data = {
      title: this.tutorial.title,
      description: this.tutorial.description,
      published: this.tutorial.published
    };

    console.log('Submitting tutorial data:', data);

    this.tutorialService.create(data)
      .subscribe({
        next: (res) => {
          console.log('Tutorial created successfully:', res);
          this.submitted = true;
        },
        error: (e) => {
          console.error('Error creating tutorial:', e);
          alert('Error creating tutorial: ' + e.message);
        }
      });
  }

  newTutorial(): void {
    this.submitted = false;
    this.tutorial = {
      title: '',
      description: '',
      published: false
    };
  }

}