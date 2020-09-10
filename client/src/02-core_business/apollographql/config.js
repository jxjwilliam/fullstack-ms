import PhoneIcon from '@material-ui/icons/Phone';
import FavoriteIcon from '@material-ui/icons/Favorite';
import PersonPinIcon from '@material-ui/icons/PersonPin';
import HelpIcon from '@material-ui/icons/Help';
import ShoppingBasket from '@material-ui/icons/ShoppingBasket';
import ThumbDown from '@material-ui/icons/ThumbDown';
import ThumbUp from '@material-ui/icons/ThumbUp';
import AddShoppingCart from '@material-ui/icons/AddShoppingCart'

export const NavLabels = new Map([
  [PhoneIcon, "Get a Post"],
  [FavoriteIcon, "Get a User"],
  [PersonPinIcon, "Get User's Post"],
  [HelpIcon, "Get a Photo's Album"],
  [ShoppingBasket, "Get All Posts"],
  [ThumbDown, "Create a Post"],
  [ThumbUp, "Update a Post"],
  [AddShoppingCart, "Delete a Post"]
])

// [ gql-query, display-items ]
export const Queries = [
  [`
    query get_post {
      post(id: 1) {
        id
        title
        body
      }
    }
  `],
  [`
    query get_user {
      user(id: 1) {
        id
        username
        email
        address {
          geo {
            lat
            lng
          }
        }
      }
    }
  `],
  [`
    query get_user_post {
      user(id: 1) {
        posts {
          data {
            id
            title
          }
        }
      }
    }
  `],
  [`
    query get_photo_album (
      $id: ID!
    ) {
      photo(id: $id) {
        album {
          id
          title
          user {
            id
          }
        }
      }
    }
  `, {
      "id": 5
    }],
  [`
    query get_all_posts (
      $options: PageQueryOptions
    ) {
      posts(options: $options) {
        data {
          id
          title
        }
        meta {
          totalCount
        }
      }
    }
  `, {
      "options": {
        "paginate": {
          "page": 1,
          "limit": 5
        }
      }
    }],
  [`
    mutation (
      $input: CreatePostInput!
    ) {
      createPost(input: $input) {
        id
        title
        body
      }
    }
  `, {
      "input": {
        "title": "A Very Captivating Post Title",
        "body": "Some interesting content."
      }
    }],
  [`
    mutation update_post (
      $id: ID!,
      $input: UpdatePostInput!
    ) {
      updatePost(id: $id, input: $input) {
        id
        body
      }
    }
  `, {
      "id": 1,
      "input": {
        "body": "Some updated content."
      }
    }],
  [`
    mutation delete_post (
      $id: ID!
    ) {
      deletePost(id: $id)
    }
  `, {
      "id": 101
    }]
]
