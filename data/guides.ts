export type GuideSection =
  | { title: string; bullets: string[] }
  | { title: string; text: string };

export type Guide = {
  slug: string;
  tag: string;
  title: string;
  intro: string;
  sections: GuideSection[];
};

export const guides: Guide[] = [
  {
    slug: 'proteger-conta',
    tag: 'Contas',
    title: 'Como proteger uma conta?',
    intro: 'Uma conta protegida começa por uma senha adequada, uma segunda camada de autenticação e formas confiáveis de recuperação.',
    sections: [
      { title: 'Comece pelo básico', bullets: ['Use uma senha forte e exclusiva para a conta.', 'Ative a autenticação em duas etapas quando estiver disponível.', 'Revise telefone e e-mail de recuperação.', 'Não compartilhe códigos de login ou recuperação.'] },
      { title: 'Revise sessões e dispositivos', text: 'Se aparecer um dispositivo ou sessão que você não reconhece, encerre o acesso e altere a senha. Depois, verifique se os métodos de recuperação continuam corretos.' },
      { title: 'Uma regra simples', text: 'Código recebido por SMS, aplicativo autenticador ou e-mail é para você. Mesmo que alguém diga ser suporte, banco, amigo ou plataforma, não entregue esse código.' },
    ],
  },
  {
    slug: 'golpe',
    tag: 'Incidentes',
    title: 'Caí em um golpe. E agora?',
    intro: 'A prioridade é interromper a situação, proteger as contas envolvidas e registrar o que aconteceu.',
    sections: [
      { title: 'Primeiros passos', bullets: ['Pare de responder ao contato suspeito.', 'Se informou uma senha, troque-a imediatamente em um dispositivo confiável.', 'Se informou dados bancários, entre em contato com a instituição financeira pelos canais oficiais.', 'Preserve mensagens, links, comprovantes e outros registros relevantes.'] },
      { title: 'Evite o segundo golpe', text: 'Desconfie de quem promete recuperar seu dinheiro ou apagar registros mediante novo pagamento. Procure sempre o canal oficial da instituição.' },
      { title: 'Depois', text: 'Se houver prejuízo, ameaça ou outro crime, procure orientação nos canais adequados e registre a ocorrência quando cabível.' },
    ],
  },
  {
    slug: 'privacidade-instagram',
    tag: 'Privacidade',
    title: 'Como revisar a privacidade do Instagram?',
    intro: 'Uma revisão rápida pode reduzir exposição desnecessária e ajudar a deixar a conta mais alinhada ao que a pessoa realmente quer compartilhar.',
    sections: [
      { title: 'O que revisar', bullets: ['Quem pode ver o perfil e as publicações.', 'Quem pode enviar mensagens e solicitações.', 'Menções, marcações e comentários.', 'Localização e permissões do aplicativo.', 'Contas conectadas e sessões abertas.'] },
      { title: 'Supervisão familiar', text: 'Para adolescentes, converse sobre as configurações e explique por que estão sendo usadas. Ferramentas de supervisão funcionam melhor quando fazem parte de um acordo claro, e não de uma vigilância silenciosa.' },
      { title: 'Fonte oficial', text: 'Consulte os recursos atuais da Central da Família e as configurações disponibilizadas pelo próprio Instagram.' },
    ],
  },
  {
    slug: 'conversa-adolescente',
    tag: 'Família',
    title: 'Como conversar com um adolescente sobre segurança digital?',
    intro: 'A conversa não precisa começar quando alguma coisa dá errado. Segurança também se constrói antes do problema.',
    sections: [
      { title: 'Comece pela vida real', bullets: ['Pergunte quais aplicativos, jogos e comunidades fazem parte da rotina.', 'Peça para a pessoa mostrar como usa, sem transformar isso em interrogatório.', 'Conversem sobre situações que já apareceram com amigos ou na internet.'] },
      { title: 'Combine caminhos', text: 'Deixe claro o que fazer quando surgir uma ameaça, pedido estranho, imagem íntima, golpe ou contato insistente. O adolescente precisa saber que pedir ajuda não significa automaticamente perder toda a autonomia.' },
      { title: 'Quando intervir', text: 'Quanto maior o risco imediato, mais importante é agir. Em situações de ameaça, exploração, coerção ou possível crime, a proteção deve vir antes da discussão sobre privacidade.' },
    ],
  },
  {
    slug: 'imagem',
    tag: 'Imagem',
    title: 'O que fazer quando uma imagem íntima é exposta?',
    intro: 'Não compartilhe novamente a imagem. Preserve informações relevantes quando possível e procure ajuda.',
    sections: [
      { title: 'Primeiros cuidados', bullets: ['Não encaminhe a imagem para outras pessoas.', 'Preserve mensagens, perfis, links e horários quando isso puder ser feito com segurança.', 'Bloqueie ou restrinja o contato quando apropriado.', 'Procure um adulto de confiança quando envolver criança ou adolescente.'] },
      { title: 'Procure orientação', text: 'Use os canais de denúncia e apoio adequados. Dependendo da situação, também pode ser necessário procurar autoridades ou serviços especializados.' },
      { title: 'Importante', text: 'A pessoa vítima não deve ser culpabilizada pela exposição. O foco deve ser interromper a circulação, preservar evidências e buscar proteção.' },
    ],
  },
  {
    slug: 'grooming',
    tag: 'Proteção',
    title: 'Meu filho está conversando com alguém que não conheço.',
    intro: 'Um contato desconhecido não significa, sozinho, que exista um crime. Mas alguns padrões de aproximação merecem atenção.',
    sections: [
      { title: 'Sinais que merecem conversa', bullets: ['Pedido para esconder a conversa de responsáveis ou amigos.', 'Tentativa de levar a conversa para um canal mais privado.', 'Presentes, promessas ou recompensas para ganhar confiança.', 'Pressão por imagens, informações pessoais ou encontros.', 'Ameaças ou chantagens quando a pessoa tenta se afastar.'] },
      { title: 'Como abordar', text: 'Evite começar culpando ou ameaçando retirar imediatamente todos os dispositivos. Primeiro, procure entender o que aconteceu e preserve a possibilidade de a pessoa pedir ajuda novamente.' },
      { title: 'Se houver risco', text: 'Em situações de aliciamento, ameaça, chantagem ou exploração, preserve as evidências e procure ajuda o quanto antes.' },
    ],
  },
];

export const getGuide = (slug?: string) => guides.find((guide) => guide.slug === slug);
