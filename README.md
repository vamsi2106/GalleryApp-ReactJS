# Gallery App

![Gallery App Demo](https://assets.ccbp.in/frontend/content/react-js/gallery-output.gif)

## Description

This is a Gallery App project built using React.js. It allows users to view a list of images and switch between them by clicking on thumbnails.

## Functionality

- Initially, the first image in the list should be displayed.
- When the user clicks on a thumbnail, then the corresponding image should be displayed.
- The `Gallery` component is provided with `imagesList`. It consists of a list of image details objects with the following properties in each object:

  | Key             | Data Type |
  | --------------- | --------- |
  | id              | Number    |
  | imageUrl        | String    |
  | thumbnailUrl    | String    |
  | imageAltText    | String    |
  | thumbnailAltText| String    |

## Components Structure

![Gallery App Component Structure](https://assets.ccbp.in/frontend/content/react-js/gallery-app-component-breakdown-structure.png)

## Implementation Files

Use these files to complete the implementation:

- `src/components/Gallery/index.js`
- `src/components/Gallery/index.css`
- `src/components/ThumbnailItem/index.js`
- `src/components/ThumbnailItem/index.css`

## Resources

### Colors

- Background: #1e293b
- Text: #ffffff
- Accent: #64748b

### Font-families

- Roboto
