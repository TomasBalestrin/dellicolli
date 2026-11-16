# Sobre os prints de WhatsApp — parecer e instruções

## Resumo

Os 5 prints de conversa enviados no briefing **não foram publicados no site**. Eles estão
preservados em `assets/depoimentos/`. Abaixo está o motivo e, ao final, o código pronto
caso a decisão seja publicá-los mesmo assim.

> **Importante:** este é um parecer técnico de quem construiu o site, não um parecer
> jurídico. A decisão final cabe à advogada, que conhece a prática da OAB/PR melhor
> do que qualquer análise externa.

---

## Por que a recomendação é não publicar

### 1. Vedação expressa a depoimentos de clientes
O **Provimento nº 205/2021 do Conselho Federal da OAB**, que disciplina a publicidade
na advocacia, veda o uso de depoimentos de clientes como instrumento de divulgação.
Os prints são, na forma e na função, exatamente isso.

### 2. Apelo emocional e captação de clientela
O Provimento exige publicidade **informativa, discreta e sóbria**, vedando a mercantilização
e a captação por apelo emocional. O conteúdo das mensagens é integralmente emocional:

- "vc está sendo uma Anjo" / "Deus abençoe"
- "não tenho nem palavras pra lhe agradecer"
- "vc é uma pessoa muito especial para mim"

Nenhuma delas informa sobre a atuação — todas apelam ao sentimento.

### 3. Sigilo profissional
O **Código de Ética e Disciplina da OAB (art. 35 e seguintes)** trata o sigilo como dever
que abrange a própria existência da relação cliente-advogado. Publicar a conversa, mesmo
sem nome, expõe essa relação. Um dos prints mostra inclusive a resposta da advogada
("Magina, é meu trabalho!"), o que identifica os dois lados do diálogo.

### 4. Risco específico do print da pizza
A mensagem "Vou mandar as Pizzas e refrigerante" pode ser lida como brinde ou forma de
pagamento informal. É o print de maior risco do conjunto — recomendo descartá-lo
independentemente da decisão sobre os demais.

### 5. Resultado implícito
Mensagens de agradecimento intenso sugerem resultado obtido. O Provimento veda
divulgação que induza à expectativa de êxito.

---

## O que foi colocado no lugar

Prova social em conformidade, que cumpre a mesma função de conversão sem o risco:

| Seção no site | Função |
|---|---|
| **Painel de direitos** (hero) | Demonstra domínio técnico concreto da matéria — mais persuasivo que elogio genérico |
| **Números do escritório** | 6 anos e 200+ clientes, na seção "A advogada" — dado objetivo e verificável |
| **Compromissos do escritório** | Atendimento direto, honorários por escrito, retorno, sigilo |
| **Como funciona** | Transparência de processo, que é o que reduz o receio real de quem contrata |
| **Dúvidas frequentes** | Autoridade demonstrada ao responder, não afirmada |

---

## Se a decisão for publicar mesmo assim

Caso a advogada, assumindo o risco com conhecimento de causa, queira exibir os prints,
siga estes passos de mitigação **antes** de publicar:

1. **Obtenha autorização escrita** de cada cliente, por escrito e arquivada.
2. **Descarte o print da pizza** (`briefing-1794266407076-73s31p.jpeg`).
3. **Descarte o print com a resposta da advogada** (`briefing-1794266410679-wjvl1t.jpeg`).
4. **Recorte os horários** das mensagens, que ajudam a identificar conversas.
5. **Rotule a seção** como "Mensagens recebidas, publicadas com autorização" — nunca
   como "Depoimentos" ou "O que dizem nossos clientes".

### Código pronto

Cole este bloco no `index.html`, logo **antes** da seção `<!-- ===== FAQ ===== -->`,
e acrescente o CSS indicado ao final da folha de estilo.

```html
<!-- ===================== MENSAGENS RECEBIDAS ===================== -->
<section class="section section--bone section--tight" id="mensagens">
  <div class="wrap">
    <div class="section__head reveal">
      <p class="eyebrow eyebrow--dark">Mensagens recebidas</p>
      <h2>Publicadas mediante autorização.</h2>
      <p>
        Mensagens enviadas por clientes ao longo do atendimento, reproduzidas com
        autorização expressa e sem qualquer dado que permita identificação.
      </p>
    </div>

    <div class="prints">
      <figure class="print reveal">
        <img src="assets/depoimentos/briefing-1794266408105-pdwqcf.jpeg"
             alt="Mensagem de cliente agradecendo o atendimento recebido" loading="lazy">
      </figure>
      <figure class="print reveal">
        <img src="assets/depoimentos/briefing-1794266408917-8285dq.jpeg"
             alt="Mensagem de cliente agradecendo a compreensão e o auxílio recebido" loading="lazy">
      </figure>
      <figure class="print reveal">
        <img src="assets/depoimentos/briefing-1794266409799-pjvwv9.jpeg"
             alt="Mensagem de cliente elogiando o trabalho realizado" loading="lazy">
      </figure>
    </div>

    <p class="prints__note">
      Reproduções autorizadas pelos respectivos remetentes. Resultados anteriores não
      representam garantia de resultado futuro — cada caso depende de análise individual.
    </p>
  </div>
</section>
```

```css
/* ---- Mensagens recebidas ---- */
.prints{
  display:grid; grid-template-columns:repeat(auto-fit,minmax(280px,1fr));
  gap:clamp(1rem,2.5vw,1.75rem);
}
.print{ margin:0; border:1px solid var(--rule); background:#fff; padding:.75rem; }
.print img{ width:100%; height:auto; }
.prints__note{
  margin-top:1.75rem; font-size:.8125rem; color:var(--slate);
  max-width:70ch; line-height:1.6;
}
```

Também remova, ao publicar, a nota de conformidade que está comentada acima da seção
"Compromissos do escritório" no `index.html`, já que ela deixaria de descrever o site.
