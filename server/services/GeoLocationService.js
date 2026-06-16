class GeoLocationService {
  createPreview(latitude, longitude) {
    const lat = Number(latitude);
    const lon = Number(longitude);
    return {
      latitude: lat,
      longitude: lon,
      previewUrl: `https://staticmap.openstreetmap.de/staticmap.php?center=${lat},${lon}&zoom=14&size=600x320&markers=${lat},${lon},red-pushpin`
    };
  }
}

module.exports = GeoLocationService;
