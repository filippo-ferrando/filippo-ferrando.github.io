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
    ...(await getRepositoryDetails('filippo-ferrando/nimbus')),
    name: 'Nimbus: multiplexed parallel file transfer',
    demoLink: 'https://github.com/filippo-ferrando/nimbus',
    tags: ['bash', 'transfer', 'cli'],
    description: 'A CLI tool for multiplexed parallel file transfer over multiple tcp connections'
  },
  {
    ...(await getRepositoryDetails('filippo-ferrando/telegram-homelab-remote')),
    name: 'Telegram integration for my HomeLab',
    demoLink: 'https://github.com/filippo-ferrando/telegram-homelab-remote',
    tags: ['Python', 'Telegram'],
    description: 'Control your HomeLab via a Telegram bot'
  },
  {
    ...(await getRepositoryDetails('filippo-ferrando/smart_blockchain')),
    name: 'BPSC Smart Blockchain',
    demoLink: 'https://github.com/filippo-ferrando/smart_blockchain',
    tags: ['Blockchain'],
    description: 'A simple BPSC blockchain implementation in Python'
  },
  {
    ...(await getRepositoryDetails('filippo-ferrando/garbage-collector')),
    name: 'PoC: C Garbage Collector',
    demoLink: 'https://github.com/filippo-ferrando/garbage-collector',
    tags: ['C'],
    description: 'A garbage collector implemented in C'
  },
  {
    ...(await getRepositoryDetails('filippo-ferrando/image-steganography')),
    name: 'Image Steganography',
    demoLink: 'https://github.com/filippo-ferrando/image-steganography',
    demoLinkRel: 'nofollow noopener noreferrer',
    tags: ['Python', 'Cryptography'],
    description: 'Image steganography implementation in Python'
  },
  {
    ...(await getRepositoryDetails('filippo-ferrando/RFID-raspberrypi-reader')),
    name: 'RFID Totem with Raspberry Pi',
    demoLink: 'https://github.com/filippo-ferrando/RFID-raspberrypi-reader',
    tags: ['Raspberry Pi', 'Python'],
    description: 'Raspberry Pi RFID reader with Netsons database integration'
  },
  {
    ...(await getRepositoryDetails('chassis-squad/Chassis_Squad')),
    name: 'Indoor WiFi Positioning',
    demoLink: 'https://github.com/chassis-squad/Chassis_Squad',
    demoLinkRel: 'nofollow noopener noreferrer',
    tags: ['Python', 'Arduino', 'OpenCV'],
    description: 'Indoor WiFi Positioning System using Arduino and OpenCV'
  },
  {
    ...(await getRepositoryDetails('filippo-ferrando/quelli-silenziosi')),
    name: 'Turin House Guestbook',
    demoLink: 'https://github.com/filippo-ferrando/quelli-silenziosi',
    tags: ['Python', '1-nighter'],
    description: 'A guestbook for my former house in Turin'
  },
  {
    ...(await getRepositoryDetails('filippo-ferrando/elixir')),
    name: 'Elixir: Autohealing Script',
    demoLink: 'https://github.com/filippo-ferrando/elixir',
    tags: ['Python']
  },
  {
    ...(await getRepositoryDetails('PCTO-OneTwoCode/src')),
    name: 'Math Bullet',
    demoLink: 'https://github.com/PCTO-OneTwoCode/src/wiki',
    tags: ['OpenCV', 'Python'],
    description: 'A rehabilitation game to help people with multiple sclerosis improve math skills using OpenCV and Python'
  }
]
