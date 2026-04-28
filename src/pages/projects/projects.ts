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
    ...(await getRepositoryDetails('filippo-ferrando/stasis')),
    name: 'stasis: a file operations logging system',
    demoLink: 'https://github.com/filippo-ferrando/stasis',
    tags: ['python', 'distributed-systems', 'networking', 'blockchain'],
    description: 'A distributed file operations logging system built on top of a custom blockchain implementation, designed to provide an immutable and tamper-proof record of file operations across a network of nodes.'
  },
  {
    ...(await getRepositoryDetails('filippo-ferrando/go-net-trace')),
    name: 'go-net-trace: a Go + eBPF network traffic stats getter',
    demoLink: 'https://github.com/filippo-ferrando/go-net-trace',
    tags: ['Go', 'eBPF', 'networking'],
    description: 'A Go script that uses eBPF to get network traffic stats for active processes on Linux'
  },
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
]
