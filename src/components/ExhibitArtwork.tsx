import React from 'react';

export const FrontPageIllustration: React.FC = () => {
  return (
    <svg
      viewBox="0 0 600 600"
      role="img"
      aria-label="Editorial broadsheet illustration of Vishnu Bahadur Budhathoki's full-stack developer desk"
      className="h-full w-full select-none mix-blend-multiply"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <pattern id="fp-halftone" width="6" height="6" patternUnits="userSpaceOnUse">
          <circle cx="2" cy="2" r="1.05" fill="#16140f" fillOpacity="0.22" />
        </pattern>
        <pattern id="fp-hatch" width="8" height="8" patternUnits="userSpaceOnUse" patternTransform="rotate(35)">
          <line x1="0" y1="0" x2="0" y2="8" stroke="#16140f" strokeWidth="1" strokeOpacity="0.16" />
        </pattern>
        <pattern id="fp-dots-dense" width="4" height="4" patternUnits="userSpaceOnUse">
          <circle cx="1.5" cy="1.5" r="0.95" fill="#16140f" fillOpacity="0.34" />
        </pattern>
      </defs>

      {/* Newsprint backdrop */}
      <rect width="600" height="600" fill="#f4f1e9" />
      <rect x="18" y="18" width="564" height="564" fill="url(#fp-halftone)" opacity="0.45" />

      {/* Outer engraving frame */}
      <rect x="20" y="20" width="560" height="560" fill="none" stroke="#16140f" strokeWidth="2.5" />
      <rect x="28" y="28" width="544" height="544" fill="none" stroke="#16140f" strokeWidth="1" strokeOpacity="0.5" />

      {/* Top archival plate header */}
      <text
        x="48"
        y="58"
        fill="#45413a"
        fontSize="12"
        fontFamily="JetBrains Mono, monospace"
        fontWeight="700"
        letterSpacing="2.2"
      >
        PLATE I · SUBJECT DOSSIER
      </text>
      <text
        x="552"
        y="58"
        textAnchor="end"
        fill="#45413a"
        fontSize="12"
        fontFamily="JetBrains Mono, monospace"
        fontWeight="600"
      >
        FIG. 01 / GGN-IN
      </text>
      <line x1="44" y1="70" x2="556" y2="70" stroke="#16140f" strokeWidth="1.5" />

      {/* Sunburst engraving behind portrait / workstation */}
      <g opacity="0.14" stroke="#16140f" strokeWidth="1">
        {Array.from({ length: 18 }).map((_, idx) => {
          const angle = (idx * 10 - 175) * (Math.PI / 180);
          const x2 = 300 + Math.cos(angle) * 240;
          const y2 = 310 + Math.sin(angle) * 220;
          return <line key={idx} x1="300" y1="310" x2={x2} y2={y2} />;
        })}
      </g>

      {/* Window / architectural grid behind desk */}
      <rect x="78" y="96" width="444" height="252" fill="#fbfaf5" stroke="#16140f" strokeWidth="2" />
      <rect x="78" y="96" width="444" height="252" fill="url(#fp-hatch)" opacity="0.55" />
      <line x1="226" y1="96" x2="226" y2="348" stroke="#16140f" strokeWidth="1.2" strokeOpacity="0.4" />
      <line x1="374" y1="96" x2="374" y2="348" stroke="#16140f" strokeWidth="1.2" strokeOpacity="0.4" />
      <line x1="78" y1="222" x2="522" y2="222" stroke="#16140f" strokeWidth="1.2" strokeOpacity="0.4" />

      {/* Hanging drafting lamp */}
      <line x1="300" y1="70" x2="300" y2="112" stroke="#16140f" strokeWidth="2.5" />
      <path d="M262 142 Q300 108 338 142 Z" fill="#16140f" />
      <polygon points="258,142 342,142 426,348 174,348" fill="#fbfaf5" opacity="0.46" />

      {/* Dual monitor / coding workstation silhouette */}
      {/* Left main monitor */}
      <rect x="134" y="176" width="236" height="156" rx="3" fill="#16140f" />
      <rect x="144" y="186" width="216" height="132" fill="#fbfaf5" stroke="#16140f" strokeWidth="1" />
      {/* Code editor lines inside monitor */}
      <rect x="144" y="186" width="46" height="132" fill="#e7e0cf" />
      <line x1="190" y1="186" x2="190" y2="318" stroke="#16140f" strokeWidth="1" />
      <rect x="152" y="198" width="28" height="4" fill="#16140f" opacity="0.65" />
      <rect x="152" y="210" width="22" height="4" fill="#16140f" opacity="0.4" />
      <rect x="152" y="222" width="30" height="4" fill="#16140f" opacity="0.4" />
      <rect x="152" y="234" width="20" height="4" fill="#a6382c" opacity="0.85" />
      <rect x="152" y="246" width="26" height="4" fill="#16140f" opacity="0.4" />

      {/* Editor code tokens */}
      <rect x="202" y="198" width="46" height="5" fill="#a6382c" />
      <rect x="256" y="198" width="68" height="5" fill="#16140f" />
      <rect x="212" y="212" width="96" height="4" fill="#45413a" />
      <rect x="212" y="224" width="124" height="4" fill="#16140f" opacity="0.7" />
      <rect x="224" y="236" width="84" height="4" fill="#45413a" />
      <rect x="224" y="248" width="110" height="4" fill="#16140f" opacity="0.75" />
      <rect x="212" y="260" width="64" height="4" fill="#a6382c" opacity="0.85" />
      <rect x="202" y="274" width="136" height="4" fill="#16140f" opacity="0.55" />
      {/* Terminal strip */}
      <rect x="190" y="288" width="170" height="30" fill="#16140f" />
      <text x="198" y="306" fill="#fbfaf5" fontSize="9.5" fontFamily="JetBrains Mono, monospace">
        $ node server.js — 200 OK
      </text>

      {/* Monitor stand */}
      <rect x="238" y="332" width="28" height="26" fill="#16140f" />
      <rect x="206" y="354" width="92" height="8" fill="#16140f" />

      {/* Right vertical notebook / API spec screen */}
      <rect x="386" y="202" width="108" height="142" rx="3" fill="#16140f" />
      <rect x="394" y="210" width="92" height="122" fill="#fbfaf5" />
      <text x="402" y="226" fill="#16140f" fontSize="9" fontFamily="JetBrains Mono, monospace" fontWeight="700">
        MERN · AWS
      </text>
      <line x1="402" y1="232" x2="478" y2="232" stroke="#16140f" strokeWidth="1" />
      {/* Node connection graph */}
      <circle cx="418" cy="256" r="10" fill="none" stroke="#16140f" strokeWidth="1.8" />
      <circle cx="464" cy="256" r="10" fill="none" stroke="#16140f" strokeWidth="1.8" />
      <circle cx="441" cy="296" r="12" fill="#16140f" />
      <circle cx="441" cy="296" r="5" fill="#fbfaf5" />
      <line x1="428" y1="256" x2="454" y2="256" stroke="#16140f" strokeWidth="1.5" />
      <line x1="423" y1="265" x2="435" y2="286" stroke="#16140f" strokeWidth="1.5" />
      <line x1="459" y1="265" x2="447" y2="286" stroke="#16140f" strokeWidth="1.5" />
      <rect x="404" y="316" width="72" height="6" fill="url(#fp-dots-dense)" />

      {/* Desk surface */}
      <rect x="44" y="360" width="512" height="18" fill="#16140f" />
      <rect x="44" y="378" width="512" height="146" fill="url(#fp-dots-dense)" opacity="0.28" />

      {/* Mechanical keyboard & coffee mug on desk */}
      <polygon points="154,394 344,394 356,422 142,422" fill="#fbfaf5" stroke="#16140f" strokeWidth="2.2" />
      <line x1="158" y1="403" x2="340" y2="403" stroke="#16140f" strokeWidth="1.5" strokeDasharray="10 4" />
      <line x1="152" y1="412" x2="346" y2="412" stroke="#16140f" strokeWidth="1.5" strokeDasharray="12 4" />

      {/* Coffee mug */}
      <rect x="412" y="376" width="44" height="44" rx="3" fill="#fbfaf5" stroke="#16140f" strokeWidth="2.4" />
      <path d="M456 385 Q474 385 474 398 Q474 411 456 411" fill="none" stroke="#16140f" strokeWidth="2.4" />
      <path d="M424 366 Q429 356 424 348" fill="none" stroke="#45413a" strokeWidth="1.6" strokeLinecap="round" />
      <path d="M438 366 Q443 354 438 346" fill="none" stroke="#45413a" strokeWidth="1.6" strokeLinecap="round" />

      {/* Notepad / evidence folder on left */}
      <rect x="66" y="388" width="58" height="42" fill="#fbfaf5" stroke="#16140f" strokeWidth="2" transform="rotate(-5 95 409)" />
      <line x1="76" y1="400" x2="112" y2="397" stroke="#16140f" strokeWidth="1.5" />
      <line x1="77" y1="410" x2="113" y2="407" stroke="#16140f" strokeWidth="1.2" />
      <line x1="78" y1="420" x2="104" y2="418" stroke="#a6382c" strokeWidth="1.5" />

      {/* Engraved monogram seal & subject callout strip */}
      <rect x="44" y="454" width="512" height="96" fill="#fbfaf5" stroke="#16140f" strokeWidth="2" />
      <line x1="158" y1="454" x2="158" y2="550" stroke="#16140f" strokeWidth="1.5" />
      <circle cx="101" cy="502" r="34" fill="none" stroke="#16140f" strokeWidth="2.2" />
      <circle cx="101" cy="502" r="28" fill="none" stroke="#16140f" strokeWidth="1" strokeDasharray="2 2" />
      <text
        x="101"
        y="511"
        textAnchor="middle"
        fill="#16140f"
        fontSize="28"
        fontFamily="Libre Caslon Display, Georgia, serif"
      >
        VB
      </text>

      <text
        x="178"
        y="482"
        fill="#45413a"
        fontSize="11"
        fontFamily="Libre Franklin, sans-serif"
        fontWeight="800"
        letterSpacing="2"
      >
        SUBJECT IDENTIFIED · FULL-STACK ENGINEER
      </text>
      <text
        x="178"
        y="512"
        fill="#16140f"
        fontSize="25"
        fontFamily="Libre Caslon Display, Georgia, serif"
      >
        Vishnu Bahadur Budhathoki
      </text>
      <text
        x="178"
        y="534"
        fill="#45413a"
        fontSize="11.5"
        fontFamily="JetBrains Mono, monospace"
      >
        REACT · NODE.JS · EXPRESS · MONGODB · AWS RDS
      </text>

      {/* Tilted red archival ink stamp */}
      <g transform="translate(466, 118) rotate(8)" opacity="0.88">
        <rect x="-54" y="-17" width="108" height="34" fill="#fbfaf5" stroke="#a6382c" strokeWidth="2.5" />
        <text
          x="0"
          y="5"
          textAnchor="middle"
          fill="#a6382c"
          fontSize="11.5"
          fontFamily="Libre Franklin, sans-serif"
          fontWeight="900"
          letterSpacing="2.4"
        >
          ON FILE
        </text>
      </g>
    </svg>
  );
};

interface ExhibitArtworkProps {
  artworkKey: 'socially' | 'civicpulse' | 'startuped';
  className?: string;
}

export const ExhibitArtwork: React.FC<ExhibitArtworkProps> = ({ artworkKey, className = '' }) => {
  if (artworkKey === 'socially') {
    return (
      <svg
        viewBox="0 0 800 440"
        role="img"
        aria-label="Socially — Real-time chat application with Socket.IO presence and image detection interface"
        className={`h-full w-full select-none object-cover ${className}`}
        preserveAspectRatio="xMidYMid slice"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern id="soc-dots" width="5" height="5" patternUnits="userSpaceOnUse">
            <circle cx="1.8" cy="1.8" r="0.85" fill="#16140f" fillOpacity="0.2" />
          </pattern>
        </defs>
        <rect width="800" height="440" fill="#f4f1e9" />

        {/* Browser chrome */}
        <rect x="28" y="24" width="744" height="392" fill="#fbfaf5" stroke="#16140f" strokeWidth="2.4" />
        <rect x="28" y="24" width="744" height="34" fill="#16140f" />
        <circle cx="48" cy="41" r="4.5" fill="#f4f1e9" />
        <circle cx="64" cy="41" r="4.5" fill="#f4f1e9" opacity="0.6" />
        <circle cx="80" cy="41" r="4.5" fill="#f4f1e9" opacity="0.35" />
        <text x="108" y="45" fill="#f4f1e9" fontSize="11" fontFamily="JetBrains Mono, monospace">
          socially.app / rooms / engineering-live  ·  WS CONNECTED
        </text>
        <text x="752" y="45" textAnchor="end" fill="#f4f1e9" fontSize="10.5" fontFamily="JetBrains Mono, monospace">
          JWT · SOCKET.IO
        </text>

        {/* Left contacts sidebar */}
        <rect x="28" y="58" width="206" height="358" fill="#efeadd" stroke="#16140f" strokeWidth="1.5" />
        <text x="46" y="84" fill="#16140f" fontSize="14" fontFamily="Libre Caslon Display, Georgia, serif">
          Active Channels
        </text>
        <line x1="44" y1="94" x2="218" y2="94" stroke="#16140f" strokeWidth="1.2" />

        {/* Active chat list items */}
        {[
          { name: 'Aarav Sharma', meta: 'Online · typing...', active: true, y: 108 },
          { name: 'Design Review', meta: '3 online · Image scanned', active: false, y: 162 },
          { name: 'Neha Verma', meta: 'Online · 2m ago', active: false, y: 216 },
          { name: 'Backend Ops', meta: 'Socket synced', active: false, y: 270 },
          { name: 'Media Archive', meta: 'Cloudinary CDN', active: false, y: 324 },
        ].map((item) => (
          <g key={item.name}>
            <rect
              x="40"
              y={item.y}
              width="182"
              height="44"
              fill={item.active ? '#16140f' : '#fbfaf5'}
              stroke="#16140f"
              strokeWidth="1.2"
            />
            <circle
              cx="58"
              cy={item.y + 22}
              r="9"
              fill={item.active ? '#f4f1e9' : '#e7e0cf'}
              stroke="#16140f"
              strokeWidth="1.2"
            />
            <circle
              cx="65"
              cy={item.y + 29}
              r="3.2"
              fill={item.active ? '#c9503f' : '#16140f'}
            />
            <text
              x="76"
              y={item.y + 19}
              fill={item.active ? '#fbfaf5' : '#16140f'}
              fontSize="11.5"
              fontFamily="Libre Franklin, sans-serif"
              fontWeight="700"
            >
              {item.name}
            </text>
            <text
              x="76"
              y={item.y + 34}
              fill={item.active ? '#e7e0cf' : '#45413a'}
              fontSize="9.5"
              fontFamily="JetBrains Mono, monospace"
            >
              {item.meta}
            </text>
          </g>
        ))}

        {/* Main chat pane */}
        <rect x="234" y="58" width="538" height="44" fill="#fbfaf5" stroke="#16140f" strokeWidth="1.2" />
        <text x="254" y="84" fill="#16140f" fontSize="15" fontFamily="Libre Caslon Display, Georgia, serif">
          Aarav Sharma — Direct Socket Stream
        </text>
        <text x="752" y="84" textAnchor="end" fill="#45413a" fontSize="10" fontFamily="JetBrains Mono, monospace">
          PRESENCE: ONLINE · TLS
        </text>

        {/* Incoming message bubble */}
        <rect x="254" y="120" width="286" height="50" fill="#efeadd" stroke="#16140f" strokeWidth="1.4" />
        <text x="268" y="140" fill="#16140f" fontSize="11.5" fontFamily="Libre Caslon Text, Georgia, serif">
          Uploaded the site capture to Cloudinary.
        </text>
        <text x="268" y="158" fill="#45413a" fontSize="9.5" fontFamily="JetBrains Mono, monospace">
          10:42 AM · MongoDB idx #4912
        </text>

        {/* Image detection message card */}
        <rect x="254" y="184" width="332" height="154" fill="#fbfaf5" stroke="#16140f" strokeWidth="1.8" />
        <rect x="264" y="194" width="312" height="106" fill="url(#soc-dots)" stroke="#16140f" strokeWidth="1.2" />
        {/* Stylized cityscape / object photo inside chat */}
        <rect x="284" y="216" width="62" height="84" fill="#16140f" opacity="0.82" />
        <rect x="352" y="206" width="48" height="94" fill="#45413a" opacity="0.72" />
        <rect x="412" y="226" width="124" height="74" fill="#16140f" opacity="0.18" stroke="#16140f" strokeWidth="1.4" />
        {/* Image detection bounding box */}
        <rect
          x="426"
          y="210"
          width="118"
          height="78"
          fill="none"
          stroke="#a6382c"
          strokeWidth="2.2"
          strokeDasharray="6 3"
        />
        <rect x="426" y="196" width="118" height="16" fill="#a6382c" />
        <text x="432" y="208" fill="#fbfaf5" fontSize="9" fontFamily="JetBrains Mono, monospace" fontWeight="700">
          DETECTED: OBJECT
        </text>
        <text x="266" y="322" fill="#45413a" fontSize="10" fontFamily="JetBrains Mono, monospace">
          CLOUDINARY OPTIMIZED · IMAGE DETECTION PASS
        </text>

        {/* Outgoing reply bubble */}
        <rect x="478" y="346" width="274" height="32" fill="#16140f" />
        <text x="492" y="366" fill="#fbfaf5" fontSize="11" fontFamily="Libre Caslon Text, Georgia, serif">
          Received instantly over Socket.IO.
        </text>

        {/* Composer bar */}
        <rect x="254" y="386" width="498" height="22" fill="#efeadd" stroke="#16140f" strokeWidth="1.2" />
        <text x="266" y="401" fill="#45413a" fontSize="9.5" fontFamily="JetBrains Mono, monospace">
          Type a message or attach image for detection...
        </text>
      </svg>
    );
  }

  if (artworkKey === 'civicpulse') {
    return (
      <svg
        viewBox="0 0 800 440"
        role="img"
        aria-label="CivicPulse — Crowd-sourced geospatial civic issue map and reporting console"
        className={`h-full w-full select-none object-cover ${className}`}
        preserveAspectRatio="xMidYMid slice"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern id="cp-grid" width="32" height="32" patternUnits="userSpaceOnUse">
            <path d="M 32 0 L 0 0 0 32" fill="none" stroke="#16140f" strokeWidth="0.7" strokeOpacity="0.16" />
          </pattern>
          <pattern id="cp-hatch" width="7" height="7" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
            <line x1="0" y1="0" x2="0" y2="7" stroke="#16140f" strokeWidth="1" strokeOpacity="0.18" />
          </pattern>
        </defs>
        <rect width="800" height="440" fill="#f4f1e9" />
        <rect x="24" y="22" width="752" height="396" fill="#fbfaf5" stroke="#16140f" strokeWidth="2.4" />

        {/* Header bar */}
        <rect x="24" y="22" width="752" height="38" fill="#16140f" />
        <text x="44" y="46" fill="#fbfaf5" fontSize="13" fontFamily="Libre Caslon Display, Georgia, serif">
          CivicPulse — GeoSpatial Dispatch Map
        </text>
        <text x="756" y="45" textAnchor="end" fill="#e7e0cf" fontSize="10" fontFamily="JetBrains Mono, monospace">
          MAPBOX · 2DSPHERE INDEX · RBAC
        </text>

        {/* Map viewport */}
        <rect x="24" y="60" width="510" height="358" fill="#f4f1e9" />
        <rect x="24" y="60" width="510" height="358" fill="url(#cp-grid)" />

        {/* Stylized urban road network & park blocks */}
        <polygon points="82,110 218,110 202,196 68,184" fill="url(#cp-hatch)" stroke="#16140f" strokeWidth="1.2" />
        <polygon points="274,230 438,214 452,326 286,342" fill="#e7e0cf" stroke="#16140f" strokeWidth="1.2" />
        <path d="M24 148 Q210 132 346 210 T534 268" fill="none" stroke="#16140f" strokeWidth="6" strokeOpacity="0.22" />
        <path d="M24 148 Q210 132 346 210 T534 268" fill="none" stroke="#16140f" strokeWidth="2" />
        <path d="M168 60 L216 418" fill="none" stroke="#16140f" strokeWidth="4" strokeOpacity="0.25" />
        <path d="M168 60 L216 418" fill="none" stroke="#16140f" strokeWidth="1.5" />
        <path d="M388 60 L330 418" fill="none" stroke="#16140f" strokeWidth="3" strokeOpacity="0.25" />
        <path d="M24 316 Q240 286 534 338" fill="none" stroke="#16140f" strokeWidth="2" strokeDasharray="8 4" />

        {/* Geospatial radius circle */}
        <circle cx="294" cy="212" r="96" fill="#a6382c" fillOpacity="0.08" stroke="#a6382c" strokeWidth="1.8" strokeDasharray="6 4" />

        {/* Civic incident pins */}
        {[
          { x: 294, y: 212, label: '#104 ROAD', urgent: true },
          { x: 186, y: 158, label: '#098 LIGHT', urgent: false },
          { x: 382, y: 162, label: '#112 WATER', urgent: false },
          { x: 356, y: 288, label: '#119 DRAIN', urgent: true },
        ].map((pin) => (
          <g key={pin.label} transform={`translate(${pin.x}, ${pin.y})`}>
            <circle cx="0" cy="0" r="10" fill={pin.urgent ? '#a6382c' : '#16140f'} />
            <circle cx="0" cy="0" r="4" fill="#fbfaf5" />
            <rect x="14" y="-12" width="84" height="22" fill="#fbfaf5" stroke="#16140f" strokeWidth="1.4" />
            <text x="20" y="3" fill="#16140f" fontSize="9.5" fontFamily="JetBrains Mono, monospace" fontWeight="700">
              {pin.label}
            </text>
          </g>
        ))}

        {/* Coordinate readout strip */}
        <rect x="40" y="376" width="248" height="26" fill="#fbfaf5" stroke="#16140f" strokeWidth="1.4" />
        <text x="52" y="393" fill="#16140f" fontSize="10" fontFamily="JetBrains Mono, monospace">
          $geoNear · 28.4595° N, 77.0266° E
        </text>

        {/* Right incident ledger sidebar */}
        <rect x="534" y="60" width="242" height="358" fill="#efeadd" stroke="#16140f" strokeWidth="1.5" />
        <text x="552" y="88" fill="#16140f" fontSize="14" fontFamily="Libre Caslon Display, Georgia, serif">
          Incident Queue
        </text>
        <text x="552" y="104" fill="#45413a" fontSize="9.5" fontFamily="JetBrains Mono, monospace">
          AGGREGATION PIPELINE · PAGE 1
        </text>
        <line x1="550" y1="114" x2="760" y2="114" stroke="#16140f" strokeWidth="1.2" />

        {[
          { id: 'REP-104', title: 'Road Surface Repair', status: 'IN REVIEW', y: 128 },
          { id: 'REP-119', title: 'Storm Drain Blockage', status: 'ASSIGNED', y: 196 },
          { id: 'REP-098', title: 'Streetlight Outage', status: 'RESOLVED', y: 264 },
        ].map((rep) => (
          <g key={rep.id}>
            <rect x="548" y={rep.y} width="212" height="56" fill="#fbfaf5" stroke="#16140f" strokeWidth="1.4" />
            <text x="560" y={rep.y + 18} fill="#a6382c" fontSize="9.5" fontFamily="JetBrains Mono, monospace" fontWeight="700">
              {rep.id} · {rep.status}
            </text>
            <text x="560" y={rep.y + 36} fill="#16140f" fontSize="12.5" fontFamily="Libre Caslon Display, Georgia, serif">
              {rep.title}
            </text>
            <text x="560" y={rep.y + 49} fill="#45413a" fontSize="9" fontFamily="JetBrains Mono, monospace">
              Cloudinary photo attached · RBAC OK
            </text>
          </g>
        ))}

        {/* Pagination footer */}
        <rect x="548" y="346" width="212" height="54" fill="#16140f" />
        <text x="562" y="368" fill="#fbfaf5" fontSize="10" fontFamily="JetBrains Mono, monospace">
          INDEXED QUERY: 14ms
        </text>
        <text x="562" y="386" fill="#e7e0cf" fontSize="9.5" fontFamily="JetBrains Mono, monospace">
          ROLE: MUNICIPAL_ADMIN · JWT
        </text>
      </svg>
    );
  }

  return (
    <svg
      viewBox="0 0 800 440"
      role="img"
      aria-label="Startup Ed — Modular React logic-driven tools, Express REST APIs, and Amazon RDS architecture"
      className={`h-full w-full select-none object-cover ${className}`}
      preserveAspectRatio="xMidYMid slice"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <pattern id="se-dots" width="6" height="6" patternUnits="userSpaceOnUse">
          <circle cx="2" cy="2" r="0.9" fill="#16140f" fillOpacity="0.18" />
        </pattern>
      </defs>
      <rect width="800" height="440" fill="#f4f1e9" />
      <rect x="24" y="22" width="752" height="396" fill="#fbfaf5" stroke="#16140f" strokeWidth="2.4" />

      {/* Top banner */}
      <rect x="24" y="22" width="752" height="38" fill="#16140f" />
      <text x="44" y="46" fill="#fbfaf5" fontSize="13" fontFamily="Libre Caslon Display, Georgia, serif">
        Startup Ed — Full-Stack Architecture & Logic Tools
      </text>
      <text x="756" y="45" textAnchor="end" fill="#e7e0cf" fontSize="10" fontFamily="JetBrains Mono, monospace">
        GURGAON · 2021–2022
      </text>

      {/* Left Column: DRY React & Zustand UI module */}
      <rect x="44" y="82" width="332" height="314" fill="#efeadd" stroke="#16140f" strokeWidth="1.8" />
      <rect x="44" y="82" width="332" height="30" fill="#16140f" />
      <text x="58" y="101" fill="#fbfaf5" fontSize="10.5" fontFamily="JetBrains Mono, monospace" fontWeight="700">
        CLIENT · REACT + ZUSTAND + GSAP
      </text>

      {/* Form & validation preview */}
      <rect x="60" y="128" width="300" height="122" fill="#fbfaf5" stroke="#16140f" strokeWidth="1.4" />
      <text x="74" y="150" fill="#16140f" fontSize="13" fontFamily="Libre Caslon Display, Georgia, serif">
        Logic-Driven Form & State Tool
      </text>
      <rect x="74" y="164" width="272" height="22" fill="#f4f1e9" stroke="#16140f" strokeWidth="1.2" />
      <text x="82" y="179" fill="#45413a" fontSize="9.5" fontFamily="JetBrains Mono, monospace">
        Dynamic Prop Schema · Validated
      </text>
      <rect x="74" y="196" width="174" height="22" fill="#f4f1e9" stroke="#16140f" strokeWidth="1.2" />
      <text x="82" y="211" fill="#45413a" fontSize="9.5" fontFamily="JetBrains Mono, monospace">
        Zustand Store Sync
      </text>
      <rect x="258" y="196" width="88" height="22" fill="#16140f" />
      <text x="302" y="211" textAnchor="middle" fill="#fbfaf5" fontSize="9.5" fontFamily="JetBrains Mono, monospace" fontWeight="700">
        SUBMIT
      </text>
      <text x="74" y="238" fill="#a6382c" fontSize="9.5" fontFamily="JetBrains Mono, monospace" fontWeight="700">
        TAILWIND · MATERIAL UI · FRAMER MOTION
      </text>

      {/* Component blueprint cards */}
      <rect x="60" y="266" width="142" height="112" fill="url(#se-dots)" stroke="#16140f" strokeWidth="1.4" />
      <text x="72" y="288" fill="#16140f" fontSize="10" fontFamily="JetBrains Mono, monospace" fontWeight="700">
        DRY COMPONENTS
      </text>
      <rect x="72" y="300" width="118" height="14" fill="#fbfaf5" stroke="#16140f" strokeWidth="1" />
      <rect x="72" y="322" width="118" height="14" fill="#fbfaf5" stroke="#16140f" strokeWidth="1" />
      <rect x="72" y="344" width="84" height="14" fill="#16140f" />

      <rect x="218" y="266" width="142" height="112" fill="#fbfaf5" stroke="#16140f" strokeWidth="1.4" />
      <text x="230" y="288" fill="#16140f" fontSize="10" fontFamily="JetBrains Mono, monospace" fontWeight="700">
        MOTION CURVES
      </text>
      <path d="M232 356 C258 356, 266 306, 344 304" fill="none" stroke="#a6382c" strokeWidth="2.5" />
      <circle cx="232" cy="356" r="3.5" fill="#16140f" />
      <circle cx="344" cy="304" r="3.5" fill="#a6382c" />
      <text x="230" y="370" fill="#45413a" fontSize="8.5" fontFamily="JetBrains Mono, monospace">
        GSAP / FRAMER
      </text>

      {/* Connector arrows */}
      <line x1="376" y1="186" x2="424" y2="186" stroke="#16140f" strokeWidth="2.2" />
      <polygon points="424,186 414,180 414,192" fill="#16140f" />
      <line x1="376" y1="306" x2="424" y2="306" stroke="#16140f" strokeWidth="2.2" strokeDasharray="4 3" />

      {/* Right Column: Node/Express + JWT + Amazon RDS */}
      <rect x="424" y="82" width="332" height="314" fill="#fbfaf5" stroke="#16140f" strokeWidth="1.8" />
      <rect x="424" y="82" width="332" height="30" fill="#16140f" />
      <text x="438" y="101" fill="#fbfaf5" fontSize="10.5" fontFamily="JetBrains Mono, monospace" fontWeight="700">
        SERVER · NODE + EXPRESS + AWS RDS
      </text>

      {/* Pipeline stages */}
      {[
        { title: '01. JWT Security Middleware', sub: 'Token verify · Role & route guard', y: 128, accent: true },
        { title: '02. Express Controllers & CRUD', sub: 'REST endpoints · Payload validation', y: 204, accent: false },
        { title: '03. Amazon RDS (AWS SDK JS)', sub: 'Relational records · Managed SQL', y: 280, accent: false },
      ].map((step) => (
        <g key={step.title}>
          <rect
            x="444"
            y={step.y}
            width="292"
            height="58"
            fill={step.accent ? '#efeadd' : '#f4f1e9'}
            stroke={step.accent ? '#a6382c' : '#16140f'}
            strokeWidth="1.8"
          />
          <text x="458" y={step.y + 24} fill="#16140f" fontSize="12" fontFamily="JetBrains Mono, monospace" fontWeight="700">
            {step.title}
          </text>
          <text x="458" y={step.y + 44} fill="#45413a" fontSize="10.5" fontFamily="Libre Caslon Text, Georgia, serif">
            {step.sub}
          </text>
        </g>
      ))}

      <line x1="590" y1="186" x2="590" y2="204" stroke="#16140f" strokeWidth="1.8" />
      <line x1="590" y1="262" x2="590" y2="280" stroke="#16140f" strokeWidth="1.8" />

      <text x="444" y="374" fill="#45413a" fontSize="9.5" fontFamily="JetBrains Mono, monospace">
        ENV: NODEJS · EXPRESS · REST · JSON · JIRA · GIT
      </text>
    </svg>
  );
};
