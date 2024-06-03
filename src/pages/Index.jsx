import React from "react";
import { Container, Text, VStack, Box } from "@chakra-ui/react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { FaBicycle } from "react-icons/fa";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

// Custom icon for bike pump stations
const bikePumpIcon = new L.Icon({
  iconUrl: "https://cdn-icons-png.flaticon.com/512/194/194933.png",
  iconSize: [25, 25],
  iconAnchor: [12, 24],
  popupAnchor: [0, -24],
});

const bikePumpStations = [
  { id: 1, name: "Pump Station 1", position: [59.3293, 18.0686] },
  { id: 2, name: "Pump Station 2", position: [59.3326, 18.0649] },
  { id: 3, name: "Pump Station 3", position: [59.334, 18.07] },
  // Add more stations as needed
];

const Index = () => {
  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4} width="100%">
        <Text fontSize="2xl">Bike Pump Stations in Stockholm</Text>
        <Box width="100%" height="500px">
          <MapContainer center={[59.3293, 18.0686]} zoom={13} style={{ height: "100%", width: "100%" }}>
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            {bikePumpStations.map((station) => (
              <Marker key={station.id} position={station.position} icon={bikePumpIcon}>
                <Popup>
                  <Text>{station.name}</Text>
                </Popup>
              </Marker>
            ))}
          </MapContainer>
        </Box>
      </VStack>
    </Container>
  );
};

export default Index;
