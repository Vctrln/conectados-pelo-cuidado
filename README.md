# Conectados pelo Cuidado — versão refinada

Site educativo sobre segurança digital, com identidade visual Conectados pelo Cuidado.

## Ajustes desta versão

- menu hambúrguer no mobile, com abertura e fechamento das seções;
- área segura no cabeçalho para evitar sobreposição com o recorte/Ilha Dinâmica do iPhone;
- capa mobile com carrossel fotográfico ao fundo, texto sobre a imagem e seta para continuar a navegação;
- texto indicativo garantido para o cartão “Ameaça ou chantagem” e fallback visual caso as imagens externas falhem;
- textos e linhas das páginas secundárias com largura flexível para evitar cortes laterais;
- correção do layout mobile da proposta e dos passos 01, 02 e 03 da oficina;
- acesso direto a “Recursos de segurança” na seção Segurança da página inicial;
- remoção do bloco de Ajuda redundante do final da página inicial; Ajuda continua disponível no menu superior;
- remoção do botão repetido “Ver caminhos de ajuda” no final dos artigos de guia;
- cores suaves e tipografia consistentes, sem adicionar cartões decorativos ou elementos flutuantes.

## Executar

```bash
npm install
npm run typecheck
npm run web
```

As fotografias são carregadas de URLs externas e dependem de conexão com a internet. Se uma imagem de situação falhar, a página mostra uma alternativa visual discreta.
