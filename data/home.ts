import type { ComponentProps } from 'react';
import { Ionicons } from '@expo/vector-icons';

export type SecurityCategory = {
  id: string;
  title: string;
  subtitle: string;
  icon: ComponentProps<typeof Ionicons>['name'];
  color: string;
  items: {
    title: string;
    url: string;
  }[];
};

export const securityCategories: SecurityCategory[] = [
  {
    id: 'contas',
    title: 'Contas',
    subtitle: 'Senhas, recuperação e acesso.',
    icon: 'key-outline',
    color: '#2D6398',
    items: [
      {
        title: 'Google',
        url: 'https://myaccount.google.com/security',
      },
      {
        title: 'Apple',
        url: 'https://account.apple.com/',
      },
      {
        title: 'WhatsApp',
        url: 'https://faq.whatsapp.com/',
      },
      {
        title: 'Microsoft',
        url: 'https://account.microsoft.com/security',
      },
    ],
  },

  {
    id: 'dispositivos',
    title: 'Dispositivos',
    subtitle: 'Celular, computador e família.',
    icon: 'phone-portrait-outline',
    color: '#477D70',
    items: [
      {
        title: 'Android',
        url: 'https://support.google.com/android/',
      },
      {
        title: 'iPhone',
        url: 'https://support.apple.com/iphone',
      },
      {
        title: 'Google Family Link',
        url: 'https://families.google/familylink/',
      },
      {
        title: 'Apple — Família',
        url: 'https://support.apple.com/pt-br/108380',
      },
    ],
  },

  {
    id: 'redes',
    title: 'Redes sociais',
    subtitle: 'Instagram, TikTok, YouTube e WhatsApp.',
    icon: 'people-outline',
    color: '#B96D5A',
    items: [
      {
        title: 'Instagram',
        url: 'https://help.instagram.com/',
      },
      {
        title: 'TikTok',
        url: 'https://support.tiktok.com/',
      },
      {
        title: 'YouTube',
        url: 'https://support.google.com/youtube/',
      },
      {
        title: 'WhatsApp',
        url: 'https://faq.whatsapp.com/',
      },
    ],
  },

  {
    id: 'privacidade',
    title: 'Privacidade',
    subtitle: 'Dados, localização e permissões.',
    icon: 'shield-checkmark-outline',
    color: '#547B8C',
    items: [
      {
        title: 'Google — Privacidade',
        url: 'https://myaccount.google.com/privacy',
      },
      {
        title: 'Apple — Privacidade',
        url: 'https://www.apple.com/privacy/',
      },
      {
        title: 'Android — Permissões',
        url: 'https://support.google.com/android/answer/9431959',
      },
      {
        title: 'SaferNet Brasil',
        url: 'https://new.safernet.org.br/',
      },
    ],
  },

  {
    id: 'jogos',
    title: 'Jogos e comunidades',
    subtitle: 'Roblox, Minecraft, Fortnite e Discord.',
    icon: 'game-controller-outline',
    color: '#9B7457',
    items: [
      {
        title: 'Roblox',
        url: 'https://en.help.roblox.com/',
      },
      {
        title: 'Minecraft',
        url: 'https://help.minecraft.net/',
      },
      {
        title: 'Fortnite',
        url: 'https://www.epicgames.com/help/',
      },
      {
        title: 'Discord',
        url: 'https://support.discord.com/',
      },
    ],
  },

  {
    id: 'navegacao',
    title: 'Navegação',
    subtitle: 'Navegadores, Wi-Fi e conexões.',
    icon: 'globe-outline',
    color: '#53769B',
    items: [
      {
        title: 'Google Chrome',
        url: 'https://support.google.com/chrome/',
      },
      {
        title: 'Firefox',
        url: 'https://support.mozilla.org/',
      },
      {
        title: 'Microsoft Edge',
        url: 'https://support.microsoft.com/microsoft-edge',
      },
      {
        title: 'NIC.br — Internet Segura',
        url: 'https://internetsegura.br/',
      },
    ],
  },
];

export type Situation = {
  id: string;
  label: string;
  description: string;
  image: string;
  color: string;
  icon: ComponentProps<typeof Ionicons>['name'];
  title: string;
  summary: string;
  actions: string[];
  guideSlug?: string;
};

export const situations: Situation[] = [
  {
    id: 'conta',
    label: 'Conta invadida',
    description: 'Alguém entrou ou mudou algo.',
    image:
      'https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&w=900&q=82',
    color: '#356B9E',
    icon: 'lock-open-outline',
    title: 'Recupere o controle da conta.',
    summary:
      'Comece por uma senha nova e encerre os acessos que você não reconhece.',
    actions: [
      'Trocar a senha',
      'Encerrar sessões desconhecidas',
      'Revisar recuperação da conta',
    ],
    guideSlug: 'proteger-conta',
  },

  {
    id: 'golpe',
    label: 'Golpe ou fraude',
    description: 'Alguém tentou enganar você.',
    image:
      'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=900&q=82',
    color: '#B86D50',
    icon: 'warning-outline',
    title: 'Pare antes de continuar.',
    summary:
      'Não envie novos dados nem faça novos pagamentos. Se algo foi informado, proteja o que foi afetado.',
    actions: [
      'Interromper o contato',
      'Proteger contas e pagamentos',
      'Guardar os registros',
    ],
    guideSlug: 'golpe',
  },

  {
    id: 'imagem',
    label: 'Imagem exposta',
    description: 'Uma imagem foi compartilhada.',
    image:
      'https://images.unsplash.com/photo-1516321165247-4aa89a48be28?auto=format&fit=crop&w=900&q=82',
    color: '#6C718C',
    icon: 'image-outline',
    title: 'Não ajude o conteúdo a circular.',
    summary:
      'Evite encaminhar ou publicar novamente. Preserve informações importantes e procure apoio.',
    actions: [
      'Não compartilhar novamente',
      'Preservar links e mensagens',
      'Procurar alguém de confiança',
    ],
    guideSlug: 'imagem',
  },

  {
    id: 'ameaca',
    label: 'Ameaça ou chantagem',
    description: 'Existe pressão, ameaça ou medo.',
    image:
      'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=900&q=82',
    color: '#4B7B70',
    icon: 'shield-outline',
    title: 'Priorize a sua segurança.',
    summary:
      'Evite confronto quando houver risco, preserve os registros e não enfrente a situação sozinho.',
    actions: [
      'Evitar novas negociações',
      'Preservar evidências',
      'Contar a alguém de confiança',
    ],
  },
];

export const guideImages = [
  'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1000&q=82',
  'https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1000&q=82',
  'https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1000&q=82',
  'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=1000&q=82',
  'https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&w=1000&q=82',
  'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=1000&q=82',
];

export const guideColors = [
  '#356B9E',
  '#477D70',
  '#B86D50',
  '#6C718C',
  '#53769B',
  '#92745D',
];

export const guideIcons: ComponentProps<
  typeof Ionicons
>['name'][] = [
  'key-outline',
  'warning-outline',
  'shield-checkmark-outline',
  'chatbubble-ellipses-outline',
  'image-outline',
  'people-outline',
];