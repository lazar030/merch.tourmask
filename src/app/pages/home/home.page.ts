import {Component, OnInit, OnDestroy} from '@angular/core';
import {SubSink} from 'subsink';

import {InstagramService} from 'src/app/services/instagram.service';
import {ContactService} from 'src/app/services/contact.service';

import {environment} from 'src/environments/local';

@Component({
    selector: 'app-home',
    templateUrl: 'home.page.html',
    styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit, OnDestroy {
  private subs = new SubSink();

  maskImages = [
    'assets/img/arena-mask-female-front.jpg',
    'assets/img/arena-mask-female-side.jpg',
    'assets/img/Arena-Mask-Photos-01.jpg',
    'assets/img/Arena-Mask-Photos-02.jpg',
    'assets/img/Arena-Mask-Photos-03.jpg',
    'assets/img/Arena-Mask-Photos-04.jpg',
    'assets/img/Arena-Mask-Photos-05.jpg',
    'assets/img/Arena-Mask-Photos-06.jpg',
    'assets/img/Arena-Mask-Photos-07.jpg',
    'assets/img/Arena-Mask-Photos-08.jpg',
    'assets/img/Arena-Mask-Photos-09.jpg',
    'assets/img/Arena-Mask-Photos-10.jpg',
    'assets/img/Arena-Mask-Photos-11.jpg',
  ];

  firstName: any;
  lastName: any;
  organization: any;
  email: any;
  message: any;

  instaImages = [];

  githubSha = '';
  constructor(
    private instagramService: InstagramService,
    private contactService: ContactService,
  ) { }

  ngOnInit() {
    this.subs.sink = this.instagramService.getRecentMedia().subscribe(res => {
      for (const media of res) {
        this.instaImages.push(media.images.standard_resolution.url);
      }
    });
  }

  onSubmitContact(form) {
    if (!form.valid) { return; }
    this.subs.sink = this.contactService.sendBulkOrder(this.firstName, this.lastName,
      this.organization, this.email, this.message).subscribe(res => {
      console.log({res});
    });
  }

  ngOnDestroy() {
    this.subs.unsubscribe();
  }
}
