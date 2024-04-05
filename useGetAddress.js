export const useGetAddress = (GeocodApiKey) => {
  const [location, setLocation] = useState({});

  const coordConvert = async (lat, lon) => {
    try {
      const response = await fetch(
        `https://api.geocod.io/v1.7/reverse?q=${lat},${lon}&api_key=${GeocodApiKey}`
      );
      const data = await response.json();
      const address = data.results[0].address_components;
      setLocation({
        city: address.city,
        state: address.state,
        country: address.country,
        zip: address.zip,
      });
    } catch (error) {
      console.error("Error fetching address:", error);
    }
  };

  const updateLocation = () => {
    navigator.geolocation.getCurrentPosition((position) => {
      coordConvert(position.coords.latitude, position.coords.longitude);
    });
  };
  return { location, updateLocation };
};
