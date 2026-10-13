export type Resource = {
  title: string;
  description: string;
  url: string;
};

export type ResourceGroup = {
  number: string;
  title: string;
  description: string;
  items: Resource[];
};

export const resourceGroups: ResourceGroup[] = [
  {
    number: '01',
    title: 'Contas',
    description: 'Comece pelas contas que concentram mais informações.',
    items: [
      { title: 'Google Security Checkup', description: 'Revisar segurança da conta', url: 'https://myaccount.google.com/security-checkup/2' },
      { title: 'Verificação em duas etapas', description: 'Ativar no Google', url: 'https://myaccount.google.com/signinoptions/two-step-verification' },
      { title: 'WhatsApp Security', description: 'Recursos de segurança', url: 'https://www.whatsapp.com/security' },
    ],
  },
  {
    number: '02',
    title: 'Dispositivos e família',
    description: 'Ferramentas para acompanhar o uso e revisar configurações.',
    items: [
      { title: 'Google Family Link', description: 'Supervisão e controles', url: 'https://families.google/familylink/' },
      { title: 'Apple — Tempo de Uso', description: 'Configurações oficiais', url: 'https://support.apple.com/pt-br/108806' },
      { title: 'YouTube — contas supervisionadas', description: 'Informações oficiais', url: 'https://support.google.com/youtubekids/answer/10314074?hl=pt-BR' },
    ],
  },
  {
    number: '03',
    title: 'Redes sociais',
    description: 'Ferramentas de supervisão, privacidade e segurança.',
    items: [
      { title: 'Instagram — Central da Família', description: 'Supervisão e recursos', url: 'https://about.instagram.com/pt-br/blog/announcements/introducing-family-center-and-supervision-tools' },
      { title: 'TikTok — Guia para responsáveis', description: 'Orientações oficiais', url: 'https://www.tiktok.com/safety/pt-BR/tools-and-guides/guardians-guide' },
      { title: 'Apple Account', description: 'Segurança da conta', url: 'https://support.apple.com/pt-br/apple-account' },
    ],
  },
  {
    number: '04',
    title: 'Privacidade e direitos',
    description: 'Fontes oficiais para entender dados pessoais e direitos.',
    items: [
      { title: 'ANPD — Titular de dados', description: 'Direitos e orientações', url: 'https://www.gov.br/anpd/pt-br/assuntos/titular-de-dados' },
      { title: 'LGPD', description: 'Texto da lei', url: 'https://www.planalto.gov.br/ccivil_03/_ato2015-2018/2018/lei/l13709.htm' },
      { title: 'ECA Digital', description: 'Texto da lei', url: 'https://www.planalto.gov.br/ccivil_03/_ato2023-2026/2025/lei/l15211.htm' },
    ],
  },
];

export const helpChannels = [
  { title: 'Disque 100', description: 'Denúncias e violações de direitos humanos', url: 'https://www.gov.br/mdh/pt-br/acesso-a-informacao/disque-100/disque-100' },
  { title: 'SaferNet Brasil', description: 'Denúncias de crimes e violações na internet', url: 'https://new.safernet.org.br/denuncie' },
  { title: 'Delegacia Virtual do Pará', description: 'Serviços policiais digitais', url: 'https://www.delegaciavirtual.pa.gov.br/#/' },
  { title: 'Polícia Federal', description: 'Informações sobre crimes cibernéticos', url: 'https://www.gov.br/pf/pt-br/assuntos/combate-a-crimes-ciberneticos' },
];
