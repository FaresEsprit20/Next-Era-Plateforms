# Mapbox Setup Guide for Next Era Platforms

## 1. Get Mapbox Access Token

1. Go to [Mapbox.com](https://www.mapbox.com) and create a free account
2. Navigate to your [Account page](https://account.mapbox.com/)
3. Copy your **Default public token**
4. Replace `YOUR_MAPBOX_ACCESS_TOKEN` in `src/app/components/features/map/map.ts`

## 2. Install Mapbox GL JS

Add Mapbox GL JS to your project:

```bash
npm install mapbox-gl
```

## 3. Add Mapbox CSS

Add this to your `src/index.html` in the `<head>` section:

```html
<link href='https://api.mapbox.com/mapbox-gl-js/v2.15.0/mapbox-gl.css' rel='stylesheet' />
```

## 4. Usage Examples

### Basic Usage
```html
<app-reusable-map
  [accessToken]="'your_token_here'"
  [locations]="yourLocations"
  [height]="'500px'">
</app-reusable-map>
```

### Advanced Usage
```html
<app-reusable-map
  [mapId]="'custom-map'"
  [accessToken]="'your_token_here'"
  [style]="'mapbox://styles/mapbox/dark-v11'"
  [center]="[lng, lat]"
  [zoom]="10"
  [locations]="locations"
  [showControls]="true"
  [height]="'600px'"
  [width]="'100%'">
</app-reusable-map>
```

## 5. Location Data Format

```typescript
locations = [
  {
    name: 'Location Name',
    latitude: 40.7128,
    longitude: -74.0060,
    description: 'Location description',
    projects: 'X projects',
    color: '#ff4a17', // Optional
    scale: 1.0, // Optional marker size
    onClick: (location) => console.log('Clicked:', location) // Optional
  }
];
```

## 6. Free Tier Limits

- 50,000 map loads per month
- 50,000 geocoding requests per month
- Perfect for most business websites

## 7. Customization Options

- **Styles**: Choose from various map styles (light, dark, satellite, etc.)
- **Colors**: Customize marker colors to match your brand
- **Popups**: Rich HTML content in location popups
- **Controls**: Enable/disable zoom and navigation controls
- **Responsive**: Automatically adapts to different screen sizes
