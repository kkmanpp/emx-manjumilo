import { MapContainer, Marker, TileLayer, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import Image from "next/image";

const MacauMap = ({ popupInfo }) => {
  const { address, phone, email } = popupInfo;
  const icon = new L.divIcon({
    html: `
    <div class="shadow-xl flex items-center justify-center bg-white border-green-600 w-6 h-6 border-2 tablet:w-8 tablet:h-8 laptop:w-10 laptop:h-10  ">
    <img src="/Milo-logo.png" class="w-4 h-4 tablet:w-6 tablet:h-6 laptop:w-8 laptop:h-8" alt="Milo Logo" />
  </div>
  `,
    className: "",
    iconSize: [38, 38],
    iconAnchor: [19, 19],
    popupAnchor: [0, -30],
  });

  return (
    <div className="relative z-0 w-full aspect-square laptop:aspect-video">
      <MapContainer
        center={[22.191878945684888, 113.5405019516037]}
        zoom={17}
        style={{ width: "100%", height: "100%" }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution="&copy; OpenStreetMap contributors"
        />
        <Marker position={[22.191878945684888, 113.5405019516037]} icon={icon}>
          <Popup className="hidden largeMobile:block">
            <div className="grid grid-cols-[auto_auto]">
              {/* Image */}
              <div className="relative w-16 h-16 hidden tablet:block tablet:w-24 tablet:h-24  ">
                <Image
                  src="/profile.jpg"
                  alt="Company Overview"
                  className="object-contain"
                  fill
                />
              </div>
              {/* Text Content */}
              <div>
                {/* Address */}
                <div className="mt-1 hidden largeMobile:flex">
                  <div className="whitespace-nowrap font-bold ">
                    {address.key}: &nbsp;
                  </div>

                  <div>
                    {address.value.map((value, index) => (
                      <div className="" key={index}>
                        {value}
                      </div>
                    ))}
                  </div>
                </div>
                {/* Contact */}
                <div className="mt-1 hidden tablet:flex">
                  <div className="whitespace-nowrap font-bold ">
                    {phone.key}: &nbsp;
                  </div>
                  <div>
                    {phone.value.map((value, index) => (
                      <div key={index}>{value}</div>
                    ))}
                  </div>
                </div>
                {/* Email */}
                <div className="mt-1 hidden tablet:flex">
                  <div className="whitespace-nowrap font-bold ">
                    {email.key}:&nbsp;
                    <a
                      href={`mailto:${email.value}`}
                      className="hover:underline"
                    >
                      {email.value}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default MacauMap;
