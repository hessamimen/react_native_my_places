import { StyleSheet } from "react-native";
import MapView, { Marker } from "react-native-maps";

function Map() {
  const region = {
    latitude: -33.8688,
    longitude: 151.2093,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  };

  return <MapView initialRegion={region} style={styles.map}></MapView>;
}

export default Map;

const styles = StyleSheet.create({
  map: {
    flex: 1,
  },
});
