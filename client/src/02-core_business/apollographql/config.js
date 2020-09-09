import PhoneIcon from '@material-ui/icons/Phone';
import FavoriteIcon from '@material-ui/icons/Favorite';
import PersonPinIcon from '@material-ui/icons/PersonPin';
import HelpIcon from '@material-ui/icons/Help';
import ShoppingBasket from '@material-ui/icons/ShoppingBasket';
import ThumbDown from '@material-ui/icons/ThumbDown';
import ThumbUp from '@material-ui/icons/ThumbUp';
import AddShoppingCart from '@material-ui/icons/AddShoppingCart'

const labels = [
  "Get a Post",
  "Get a User",
  "Get User's Post",
  "Get a Photo's Album",
  "Get All Posts",
  "Create a Post",
  "Update a Post",
  "Delete a Post"
]

export const NavLabels1 = [PhoneIcon, FavoriteIcon, PersonPinIcon, HelpIcon,
  ShoppingBasket, ThumbDown, ThumbUp, AddShoppingCart].reduce((map, icon, idx) => {
    map.set(icon, labels[idx])
    return map;
}, new Map)

export const NavLabels = [
  "Get a Post",
  "Get a User",
  "Get User's Post",
  "Get a Photo's Album",
  "Get All Posts",
  "Create a Post",
  "Update a Post",
  "Delete a Post"
]

export const Queries = [
  `
    query get_post {
      post(id: 1) {
        id
        title
        body
      }
    }
  `,
  `
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
  `,
  `
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
  `,
  `
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
  `,
  `
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
  `,
  `
    mutation create_post (
      $input: CreatePostInput!
    ) {
      createPost(input: $input) {
        id
        title
        body
      }
    }
  `,
  `
    mutation update_post (
      $id: ID!,
      $input: UpdatePostInput!
    ) {
      updatePost(id: $id, input: $input) {
        id
        body
      }
    }
  `,
  `
    mutation delete_post (
      $id: ID!
    ) {
      deletePost(id: $id)
    }
  `,
]
