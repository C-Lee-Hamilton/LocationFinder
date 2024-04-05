# A Simple Location Finder

## Requirement

To use this location finder, you need to obtain an API key from [Geocod.io](https://www.geocod.io/).

## Usage

### Run updateLocation to update the location object.

```javascript
import { useGetAddress } from "@the_grid/locationfinder";

const MyComponent = () => {
  const { location, updateLocation } = useGetAddress(API_KEY);
};
```
