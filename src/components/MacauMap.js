import { MapContainer, Marker, TileLayer, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import Image from "next/image";
const MacauMap = ({ popupInfo }) => {
  const { address, phone, email } = popupInfo;
  const icon = new L.divIcon({
    html: `
    <div class="w-10 h-10 bg-white border-2 border-green-600  shadow-xl flex items-center justify-center">
    <img src="/Milo-logo.png" class="w-8 h-8" alt="Milo Logo" />
  </div>
  `,
    className: "",
    iconSize: [38, 38],
    iconAnchor: [19, 19],
    popupAnchor: [0, -30],
  });

  return (
    <MapContainer
      center={[22.191878945684888, 113.5405019516037]}
      zoom={17}
      style={{ width: "100%", height: "400px" }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution="&copy; OpenStreetMap contributors"
      />
      <Marker position={[22.191878945684888, 113.5405019516037]} icon={icon}>
        <Popup>
          <div className="grid grid-cols-[auto_auto]">
            <div className="relative w-16 h-16 tablet:w-24 tablet:h-24 laptop:w-32 laptop:h-32 ">
              <Image
                src="/profile.jpg"
                alt="Company Overview"
                className="object-contain"
                fill
              />
            </div>
            <div>
              <div className="mt-1 flex">
                <div className="whitespace-nowrap ">
                  <strong>{address.key}:</strong>
                </div>
                &nbsp;
                <div>
                  {address.value.map((value, index) => (
                    <div className="" key={index}>
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
          </div>
        </Popup>
      </Marker>
    </MapContainer>
  );
};

export default MacauMap;
