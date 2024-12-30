import { MapContainer, Marker, TileLayer, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import Image from "next/image";
const MacauMap = ({ popupInfo }) => {
  const { address, phone, email } = popupInfo;
  const icon = new L.Icon({
    iconUrl: "/Milo-logo.png",
    iconSize: [38, 38],
    iconAnchor: [19, 38],
    popupAnchor: [0, -30],
  });

  return (
    <MapContainer
      center={[22.191878945684888, 113.5405019516037]}
      zoom={13}
      style={{ width: "100%", height: "400px" }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution="&copy; OpenStreetMap contributors"
      />
      <Marker position={[22.191878945684888, 113.5405019516037]} icon={icon}>
        <Popup>
          <div className="items-center ">
            <div className="relative w-16 h-16 tablet:w-24 tablet:h-24 laptop:w-32 laptop:h-32 ">
              <Image
                src="/profile.jpg"
                alt="Company Overview"
                className="object-contain"
                fill
              />
            </div>
            <div className="mt-1">
              <div>
                {address.value.map((value, index) => (
                  <div className="py-1" key={index}>
                    {value}
                  </div>
                ))}
              </div>
            </div>
            <div className="mt-1 flex">
              <strong>{phone.key}:</strong> &nbsp;
              <div>
                {phone.value.map((value, index) => (
                  <div key={index}>{value}</div>
                ))}
              </div>
            </div>
            <div className="mt-2">
              <strong>{email.key}:</strong>&nbsp;
              <a href={`mailto:${email.value}`} className="hover:underline">
                {email.value}
              </a>
            </div>
          </div>
        </Popup>
      </Marker>
    </MapContainer>
  );
};

export default MacauMap;
