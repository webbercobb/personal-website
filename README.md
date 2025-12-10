# Connor Wright — Artist Website

Personal portfolio website for Connor Wright.

## How to Update Content

### Adding New Artwork

1. Add your image to the `images/` folder (name it `image12.jpg`, `image13.jpg`, etc.)
2. Open `artwork-data.js`
3. Add a new line with your artwork info:
   ```javascript
   { id: 12, dimensions: "228.6 × 167.6 cm", loading: "lazy" }
   ```

### Updating Events

Open `events.html` and edit the event details directly in the HTML.

### Adding Press Links

Open `cv.html` and add new press items to the Selected Press section:

```html
<div class="press-item">
  <span class="press-publication">Publication Name</span>,
  <a href="URL" target="_blank">"Article Title"</a>
</div>
```

### Updating CV

Open `cv.html` to edit:

- Education section
- Selected Projects & Exhibitions
- Selected Press

### Changing Contact Email

Open `contact.html` and update the email address.

## Pages

- **Home** (`index.html`) — Hero image and name
- **Work** (`work.html`) — Gallery of artwork
- **Events** (`events.html`) — Exhibition listings
- **CV** (`cv.html`) — Resume and press
- **Contact** (`contact.html`) — Email address

## Images

All artwork images go in the `images/` folder. Keep file sizes reasonable for web (under 1-2MB each).
