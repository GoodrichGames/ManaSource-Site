import ExportedImage from "next-image-export-optimizer";
import bggIcon from '../../../public/icons/BGG.svg';
import fbIcon from '../../../public/icons/Facebook.svg';
import xIcon from '../../../public/icons/X.svg';
import discordIcon from '../../../public/icons/Discord.svg';

const links = [
  { href: "https://boardgamegeek.com/boardgame/391828/mana-source", title: "BoardGameGeek", icon: bggIcon, alt: "Follow on BoardGameGeek", width: 80 },
  { href: "https://discord.com/invite/drQDa7MQ3e", title: "Discord", icon: discordIcon, alt: "Chat on Discord", width: 40 },
  { href: "https://www.facebook.com/Mana-Source-102398542746103", title: "Facebook", icon: fbIcon, alt: "Follow on Facebook", width: 40 },
  { href: "https://x.com/ManaSourceGame", title: "X", icon: xIcon, alt: "Follow on X", width: 40 },
];

const SocialLinks = () => (
  <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', marginTop: '1.5rem', marginBottom: '1.5rem' }}>
    {links.map((link) => (
      <a
        key={link.title}
        href={link.href}
        target="_blank"
        rel="noopener noreferrer"
        title={link.title}
        style={{ display: 'inline-block', color: '#1ac7fc', transition: 'opacity 0.3s' }}>
        <ExportedImage
          src={link.icon}
          alt={link.alt}
          width={link.width}
          height={40}
          unoptimized={true}
          style={{
            width: `${link.width}px`,
            height: '40px',
            objectFit: 'contain'
          }}
        />
      </a>
    ))}
  </div>
);

export default SocialLinks;
