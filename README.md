# Delli Colli Advocacia — site institucional

Site estático do escritório Delli Colli Advocacia (Maringá/PR), com atuação em
direito do consumidor e direito bancário.

## Estrutura

```
index.html               Home — apresentação, áreas, a advogada, processo, FAQ
atraso-de-voo.html       Landing de casos aéreos (carro-chefe)
dividas-bancarias.html   Landing de casos bancários
assets/
  style.css              Folha de estilo compartilhada pelas três páginas
  site.js                Menu mobile e revelação ao rolar
  favicon.svg            Ícone da aba
  merillyn-retrato.jpg        Foto do hero da home
  merillyn-corpo-inteiro.jpg  Foto da seção "A advogada"
```

Sem build e sem dependências: HTML, CSS e JavaScript puros. As únicas requisições
externas são as fontes (Fraunces e Inter) do Google Fonts.

## Rodar localmente

```bash
python3 -m http.server 8080
```

Depois abra <http://localhost:8080>.

## Decisões de implementação

**Paleta** derivada das próprias fotografias da advogada — o oxblood do veludo e a
luz âmbar do ambiente viraram as cores da marca. Tokens em `:root`, no topo de
`assets/style.css`.

**Tipografia:** Fraunces (display) e Inter (texto).

**SEO:** cada página tem `title`, `meta description` e `canonical` próprios, além de
dados estruturados schema.org — `LegalService` na home, `Service` + `FAQPage` nas
landings, o que permite ao Google exibir as perguntas direto no resultado de busca.

**Acessibilidade:** um `<h1>` por página, skip link, foco visível por teclado,
`prefers-reduced-motion` respeitado e textos alternativos nas imagens.

## Conformidade com a OAB

O conteúdo segue o Provimento nº 205/2021 e o Código de Ética e Disciplina da OAB:
caráter informativo, sem promessa de resultado e sem captação de clientela.

Os prints de conversa com clientes enviados no briefing **não são versionados nem
publicados** — ver [DEPOIMENTOS-LEIA-ME.md](DEPOIMENTOS-LEIA-ME.md) para o parecer
completo e o código pronto, caso a decisão seja outra.

## Pendências

- [ ] Inserir o número de inscrição na OAB no rodapé das três páginas
- [ ] Substituir o domínio provisório nas tags `canonical` e `og:image`
