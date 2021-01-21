import { Component, OnInit } from '@angular/core';
import { Title, Meta, MetaDefinition } from '@angular/platform-browser';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { filter, map } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor(private router: Router,
    private activatedRoute: ActivatedRoute,
    private titleService: Title,
    private metaService: Meta) {
      
  }
 
  ngOnInit() {
 
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd),
    )
      .subscribe(() => {
 
        let rt = this.getChild(this.activatedRoute)
 
        rt.data.subscribe((data:any) => {
          console.log(data);
          this.titleService.setTitle(data.title)
 
          if (data.description) {
            this.metaService.updateTag({ name: 'description', content: data.description })
          } else {
            this.metaService.removeTag("name='description'")
          }
 
          if (data.robots) {
            this.metaService.updateTag({ name: 'robots', content: data.robots })
          } else {
            this.metaService.updateTag({ name: 'robots', content: "follow,index" })
          }
 
          if (data.ogUrl) {
            this.metaService.updateTag({ property: 'og:url', content: data.ogUrl })
          } else {
            this.metaService.updateTag({ property: 'og:url', content: this.router.url })
          }
 
          if (data.ogTitle) {
            this.metaService.updateTag({ property: 'og:title', content: data.ogTitle })
          } else {
            this.metaService.removeTag("property='og:title'")
          }
 
          if (data.ogDescription) {
            this.metaService.updateTag({ property: 'og:description', content: data.ogDescription })
          } else {
            this.metaService.removeTag("property='og:description'")
          }
 
          if (data.ogImage) {
            this.metaService.updateTag({ property: 'og:image', content: data.ogImage })
          } else {
            this.metaService.removeTag("property='og:image'")
          }
 
 
        })
 
      })

      this.router.events.pipe(
        filter(event => event instanceof NavigationEnd),
      )
        .subscribe(() => {
          var rt = this.getChild(this.activatedRoute)
          rt.data.subscribe(data => {
            console.log(data);
            this.titleService.setTitle(data.title)
            if (data.description) {
              this.metaService.updateTag({ name: 'description', content: data.description })
            } else {
              this.metaService.removeTag("name='description'")
            }
            if (data.robots) {
              this.metaService.updateTag({ name: 'robots', content: data.robots })
            } else {
              this.metaService.updateTag({ name: 'robots', content: "follow,index" })
            }
          })
        })

  }
 
  getChild(activatedRoute: ActivatedRoute) {
    if (activatedRoute.firstChild) {
      return this.getChild(activatedRoute.firstChild);
    } else {
      return activatedRoute;
    }
 
  }

 


}
