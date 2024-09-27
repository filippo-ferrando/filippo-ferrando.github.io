import { getRepositoryDetails } from "../../utils";

export interface Project {
  name: string;
  demoLink: string;
  tags?: string[],
  description?: string;
  postLink?: string;
  demoLinkRel?: string;
  [key: string]: any;
}

export const projects: Project[] = [
  {
    ...(await getRepositoryDetails('filippo-ferrando/telegram-homelab-remote')),
    name: 'Telegram integration for my HomeLab',
    demoLink: 'https://github.com/filippo-ferrando/telegram-homelab-remote',
    tags: ['Python', 'Telegram']
  },
  {
    ...(await getRepositoryDetails('filippo-ferrando/smart_blockchain')),
    name: 'BPSC Smart Blockchain',
    demoLink: 'https://github.com/filippo-ferrando/smart_blockchain',
    tags: ['Blockchain']
  },
  {
    ...(await getRepositoryDetails('filippo-ferrando/garbage-collector')),
    name: 'PoC: C Garbage Collector',
    demoLink: 'https://github.com/filippo-ferrando/garbage-collector',
    tags: ['C']
  },
  {
    ...(await getRepositoryDetails('filippo-ferrando/image-steganography')),
    name: 'Image steganography',
    demoLink: 'https://github.com/filippo-ferrando/image-steganography',
    demoLinkRel: 'nofollow noopener noreferrer',
    tags: ['Python', 'Cryptography']
  },
  {
    ...(await getRepositoryDetails('filippo-ferrando/RFID-raspberrypi-reader')),
    name: 'RFID totem with Raspberry Pi',
    demoLink: 'https://github.com/filippo-ferrando/RFID-raspberrypi-reader',
    tags: ['Blog']
  },
  {
    ...(await getRepositoryDetails('chassis-squad/Chassis_Squad')),
    name: 'Indoor WiFi Positioning',
    demoLink: 'https://github.com/chassis-squad/Chassis_Squad',
    demoLinkRel: 'nofollow noopener noreferrer',
    tags: ['Python', 'Arduino', 'Computer Vision']
  },
  {
    ...(await getRepositoryDetails('filippo-ferrando/quelli-silenziosi')),
    name: 'Turin House guestbook',
    demoLink: 'https://github.com/filippo-ferrando/quelli-silenziosi',
    tags: ['Python', '1-nighter']
  },
  {
    ...(await getRepositoryDetails('filippo-ferrando/elixir')),
    name: 'Elixir: autohealig script',
    demoLink: 'https://github.com/filippo-ferrando/elixir',
    tags: ['Python']
  },
  {
    ...(await getRepositoryDetails('PCTO-OneTwoCode/src')),
    name: 'Math Bullet',
    demoLink: 'https://github.com/PCTO-OneTwoCode/src/wiki',
    tags: ['Computer Vision']
  }  
]
