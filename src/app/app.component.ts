import { Component } from '@angular/core';
import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';

const AllPostsQuery = gql`
  query {
    allPosts {
      title
      content
      createdAt
      author {
        id
        name
      }
    }
  }
`;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  allPosts: any;
  constructor(private apollo: Apollo) { }

  ngOnInit() {
    this.apollo.watchQuery({
      query: AllPostsQuery
    }).subscribe(({ data, loading }: any) => {
      this.allPosts = data.allPosts;
    });
  }
}