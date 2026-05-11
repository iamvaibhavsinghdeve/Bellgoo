import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { MapPin, ExternalLink } from "lucide-react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

type Stadium = {
  name: string;
  city: string;
  country: "USA" | "Canada" | "Mexico";
  lat: number;
  lng: number;
  live?: boolean;
  address?: string;
};

const stadiums: Stadium[] = [
  { name: "Tap N Ash Social Club", city: "Las Vegas, NV", country: "USA", lat: 36.1516, lng: -115.1537, live: true, address: "1606 S Commerce St, Las Vegas, NV 89102" },
  { name: "MetLife Stadium", city: "New Jersey", country: "USA", lat: 40.8135, lng: -74.0745 },
  { name: "SoFi Stadium", city: "Los Angeles", country: "USA", lat: 33.9535, lng: -118.3392 },
  { name: "AT&T Stadium", city: "Dallas", country: "USA", lat: 32.7473, lng: -97.0945 },
  { name: "Mercedes-Benz Stadium", city: "Atlanta", country: "USA", lat: 33.7554, lng: -84.4008 },
  { name: "Hard Rock Stadium", city: "Miami", country: "USA", lat: 25.9580, lng: -80.2389 },
  { name: "Levi's Stadium", city: "San Francisco", country: "USA", lat: 37.4030, lng: -121.9700 },
  { name: "Lincoln Financial Field", city: "Philadelphia", country: "USA", lat: 39.9008, lng: -75.1675 },
  { name: "Lumen Field", city: "Seattle", country: "USA", lat: 47.5952, lng: -122.3316 },
  { name: "GEHA Field", city: "Kansas City", country: "USA", lat: 39.0489, lng: -94.4839 },
  { name: "Gillette Stadium", city: "Boston", country: "USA", lat: 42.0909, lng: -71.2643 },
  { name: "NRG Stadium", city: "Houston", country: "USA", lat: 29.6847, lng: -95.4107 },
  { name: "BMO Field", city: "Toronto", country: "Canada", lat: 43.6332, lng: -79.4186 },
  { name: "BC Place", city: "Vancouver", country: "Canada", lat: 49.2768, lng: -123.1118 },
  { name: "Estadio Azteca", city: "Mexico City", country: "Mexico", lat: 19.3029, lng: -99.1505 },
  { name: "Akron Stadium", city: "Guadalajara", country: "Mexico", lat: 20.6829, lng: -103.4623 },
  { name: "Estadio BBVA", city: "Monterrey", country: "Mexico", lat: 25.6692, lng: -100.2447 },
];

const openMap = (lat: number, lng: number) => {
  const url = `https://www.google.com/maps/search/?api=1&query=${lat},${lng}`;
  const newWindow = window.open(url, "_blank");

  if (newWindow) {
    newWindow.opener = null;
    return;
  }

  const a = document.createElement("a");
  a.href = url;
  a.target = "_blank";
  a.rel = "noopener noreferrer";
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
};

// Custom gold pin icon (SVG) styled with Bellgoo brand
const goldPinIcon = L.divIcon({
  className: "bellgoo-pin",
  html: `
    <div style="position:relative;transform:translate(-50%,-100%);">
      <svg width="32" height="42" viewBox="0 0 32 42" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="gp" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stop-color="#F5D98A"/>
            <stop offset="100%" stop-color="#B8860B"/>
          </linearGradient>
        </defs>
        <path d="M16 0C7.16 0 0 7.16 0 16c0 11 16 26 16 26s16-15 16-26C32 7.16 24.84 0 16 0z" fill="url(#gp)" stroke="#1a1a1a" stroke-width="1.2"/>
        <circle cx="16" cy="15" r="5.5" fill="#0F0F0F"/>
        <circle cx="16" cy="15" r="2.4" fill="#F5D98A"/>
      </svg>
    </div>
  `,
  iconSize: [32, 42],
  iconAnchor: [16, 42],
  popupAnchor: [0, -38],
});

// Live (red, pulsing) pin icon for active machine locations
const livePinIcon = L.divIcon({
  className: "bellgoo-pin-live",
  html: `
    <div style="position:relative;transform:translate(-50%,-100%);">
      <span style="position:absolute;left:50%;top:100%;transform:translate(-50%,-100%);width:42px;height:42px;border-radius:9999px;background:rgba(239,68,68,0.45);box-shadow:0 0 0 0 rgba(239,68,68,0.7);animation:bellgoo-live-pulse 1.6s ease-out infinite;"></span>
      <svg width="38" height="50" viewBox="0 0 32 42" fill="none" xmlns="http://www.w3.org/2000/svg" style="position:relative;filter:drop-shadow(0 0 8px rgba(239,68,68,0.85));">
        <defs>
          <linearGradient id="rp" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stop-color="#FF6B6B"/>
            <stop offset="100%" stop-color="#B91C1C"/>
          </linearGradient>
        </defs>
        <path d="M16 0C7.16 0 0 7.16 0 16c0 11 16 26 16 26s16-15 16-26C32 7.16 24.84 0 16 0z" fill="url(#rp)" stroke="#1a1a1a" stroke-width="1.2"/>
        <circle cx="16" cy="15" r="5.5" fill="#0F0F0F"/>
        <circle cx="16" cy="15" r="2.4" fill="#FFFFFF"/>
      </svg>
    </div>
    <style>
      @keyframes bellgoo-live-pulse {
        0% { box-shadow: 0 0 0 0 rgba(239,68,68,0.7); transform: translate(-50%,-100%) scale(0.6); opacity: 1; }
        80% { box-shadow: 0 0 0 22px rgba(239,68,68,0); transform: translate(-50%,-100%) scale(1.4); opacity: 0; }
        100% { box-shadow: 0 0 0 0 rgba(239,68,68,0); opacity: 0; }
      }
    </style>
  `,
  iconSize: [38, 50],
  iconAnchor: [19, 50],
  popupAnchor: [0, -46],
});

export const CtaBanner = () => (
  <section className="py-24" id="find-machine">
    <div className="container">
      <div className="text-center mb-10">
        <MapPin className="text-gold mx-auto mb-4" size={28} />
        <p className="text-[11px] uppercase tracking-[0.3em] text-gold mb-3">Locate Bellgoo</p>
        <h2 className="font-display text-4xl md:text-6xl mb-4">
          Find a <span className="text-gradient-gold italic">Machine</span> Near You
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Soon we will be in 16 host stadiums for FIFA World Cup 2026 as host across the USA, Canada, and Mexico. Tap any pin or venue to open it in Google Maps.
        </p>
      </div>

      <div className="grid lg:grid-cols-5 gap-6">
        {/* MAP */}
        <div className="lg:col-span-3 relative rounded-3xl overflow-hidden border border-gold/20 shadow-luxe min-h-[420px] h-[520px] bg-onyx">
          <MapContainer
            center={[39, -98]}
            zoom={3}
            scrollWheelZoom={false}
            style={{ height: "100%", width: "100%", background: "#0a0a0a" }}
          >
            <TileLayer
              attribution='&copy; OpenStreetMap contributors &copy; CARTO'
              url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
            />
            {stadiums.map((s) => (
              <Marker
                key={s.name}
                position={[s.lat, s.lng]}
                icon={s.live ? livePinIcon : goldPinIcon}
                zIndexOffset={s.live ? 1000 : 0}
                eventHandlers={{
                  click: () => openMap(s.lat, s.lng),
                }}
              >
                <Popup>
                  <div style={{ minWidth: 170 }}>
                    {s.live && (
                      <div style={{ display: "inline-flex", alignItems: "center", gap: 6, fontSize: 10, fontWeight: 700, color: "#fff", background: "#dc2626", padding: "2px 8px", borderRadius: 999, marginBottom: 6, letterSpacing: 0.5 }}>
                        <span style={{ width: 6, height: 6, borderRadius: 999, background: "#fff", boxShadow: "0 0 6px #fff" }} />
                        LIVE NOW
                      </div>
                    )}
                    <div style={{ fontWeight: 600, fontSize: 13 }}>{s.name}</div>
                    <div style={{ fontSize: 11, color: "#666", marginBottom: 6 }}>
                      {s.city}{s.live ? "" : ` · ${s.country}`}
                    </div>
                    {s.live && (
                      <div style={{ fontSize: 10, color: "#dc2626", fontWeight: 700, marginBottom: 6, textTransform: "uppercase", letterSpacing: 0.5 }}>
                        Live Machine Location
                      </div>
                    )}
                    <button
                      type="button"
                      onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        openMap(s.lat, s.lng);
                      }}
                      style={{ fontSize: 11, color: "#B8860B", fontWeight: 600, background: "none", border: "none", padding: 0, cursor: "pointer" }}
                    >
                      Open in Google Maps →
                    </button>
                  </div>
                </Popup>
              </Marker>
            ))}
          </MapContainer>
        </div>

        {/* STADIUM LIST */}
        <div className="lg:col-span-2 glass-panel rounded-3xl p-6 max-h-[520px] overflow-y-auto">
          <ul className="space-y-2">
            {stadiums.map((s) => (
              <li key={s.name}>
                <button
                  type="button"
                  onClick={() => openMap(s.lat, s.lng)}
                  className={`w-full text-left flex items-start justify-between gap-3 p-3 rounded-lg border transition-all duration-300 group cursor-pointer ${
                    s.live
                      ? "border-red-500/50 bg-red-500/5 hover:border-red-500 hover:bg-red-500/10 hover:shadow-[0_0_24px_-4px_rgba(239,68,68,0.7)] animate-pulse-slow"
                      : "border-gold/10 hover:border-gold/50 hover:bg-gold/5 hover:shadow-[0_0_20px_-5px_hsl(var(--gold)/0.5)]"
                  }`}
                >
                  <div className="flex items-start gap-3">
                    <MapPin size={16} className={`mt-1 shrink-0 ${s.live ? "text-red-500" : "text-gold"}`} />
                    <div>
                      <div className="font-medium text-sm flex items-center gap-2">
                        {s.name}
                        {s.live && (
                          <span className="inline-flex items-center gap-1 text-[9px] font-bold uppercase tracking-wider text-white bg-red-600 px-1.5 py-0.5 rounded-full">
                            <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                            Live
                          </span>
                        )}
                      </div>
                      <div className="text-xs text-muted-foreground">{s.city}{s.live ? "" : ` · ${s.country}`}</div>
                    </div>
                  </div>
                  <ExternalLink size={14} className={`mt-1 transition ${s.live ? "text-red-500/70 group-hover:text-red-500" : "text-gold/60 group-hover:text-gold"}`} />
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="text-center mt-12">
        <Button variant="hero" size="xl" asChild>
          <Link to="/machines">Locate Bellgoo</Link>
        </Button>
      </div>
    </div>
  </section>
);
