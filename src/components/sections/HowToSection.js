import React from "react";
import DropdownSection from "../DropdownSection";

const HowToSection = () => (
  <DropdownSection title="Como funciona o gerador">
    <div
      dangerouslySetInnerHTML={{
        __html: text,
      }}
      style={{
        margin: "auto",
        maxWidth: 600,
        paddingLeft: 12,
        paddingRight: 12,
      }}
    />
  </DropdownSection>
);

export default HowToSection;

const text = `
As desculpas geradas são uma composição de 3 trechos que formam uma frase:
<br><br><br>
<ul>
<li><span class='TextBold'>saudação</span>: ou como a pessoa se apresenta ao alvo da desculpa esfarrapada;</li><br>
<li><span class='TextBold'>desculpa</span>: o motivo - fútil ou não - da ausência da pessoa;</li><br>
<li><span class='TextBold'>despedida</span>: a forma como é encerrada a desculpa, sem dar espaço para que seja questionado qualquer coisa;</li><br>
</ul>
<br><br>

Os trechos são sugestões dos usuários do site enviadas através do <span class='Uppercase FS2x TextBold Montserrat ColorLime'>ADICIONE SUAS RESPOSTAS</span> que passaram pela votação e foram muito bem recebidas pela própria comunidade.<br><br> Para votar nas sugestões que ainda não entraram como possíveis respostas do gerador vá em <span class='Uppercase FS2x TextBold Montserrat ColorLime'>VOTE NAS SUGESTÕES</span> encontrada abaixo.<br><br> Se uma sugestão acaba sendo rejeitada com vários votos negativos ela acaba sendo descartada.
`;
