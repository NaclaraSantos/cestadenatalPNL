# Entrega de Cestas Natalinas - PMNL

<img src="https://github.com/user-attachments/assets/dac69ffb-2323-4d8c-9667-ab7a87cbe463">

## Sobre o Projeto
Este sistema foi desenvolvido para a **Prefeitura Municipal de Nova Lima (PMNL)** com o objetivo de gerenciar e organizar a distribuição de cestas natalinas aos servidores e beneficiários, utilizando QR Codes e validação em tempo real.

Agradecimento especial: Este projeto foi um sucesso, rodando para mais de 5 mil pessoas e trazendo praticidade para todos os envolvidos. Obrigado a todos os colaboradores e participantes que tornaram isso possível!

<img src="https://github.com/user-attachments/assets/0b5a3d94-11b5-421e-83fa-2e210ae4db0d" style="width: 100%; height: 500px" alt="Imagem do Dia do Projeto">

---

## Funcionalidades Principais
- **Gerador de QR Code**: Cria QR Codes únicos para cada beneficiário.
- **Validador de QR Code**: Validação rápida através de integração com o Google Sheets.
- **Relatórios Dinâmicos**: Controle de status das cestas retiradas e pendentes.
- **Interface para Terceiros**: Registro de retiradas realizadas por terceiros com segurança e controle.

---

## Visualizações do Sistema
<table>
  <tr>
    <td align="center" style="width: 300px; height: 300px;">
      <h3>Gerador de QR Code</h3>
      <img src="https://github.com/user-attachments/assets/6f4babf5-8386-41d3-8d9d-509015550208" style="width: 100%; height: auto;" alt="Gerador de QR Code">
    </td>
    <td align="center" style="width: 300px; height: 300px;">
      <h3>Instruções de Retirada e Geração do QR Code</h3>
      <img src="https://github.com/user-attachments/assets/5791424c-e381-4301-a774-d9c028cb43d3" style="width: 100%; height: auto;" alt="Instruções de Retirada">
    </td>
  </tr>
  <tr>
    <td align="center" style="width: 300px; height: 300px;"colspan="2">
      <h3>QR Code Baixado</h3>
      <img src="https://github.com/user-attachments/assets/78ec29ae-f178-4219-8ac1-cb09431919ec" style="width: 70%; height: 800px;" alt="QR Code Baixado">
    </td>
  </tr>
      <tr>
    <td align="center" style="width: 300px; height: 300px;"colspan="2">
      <h3>Validação QR Code</h3>
      <img src="https://github.com/user-attachments/assets/54104c15-1074-4c1d-9745-5800bcee3d3e" style="width: 100%; height: auto;" alt="Validação QR Code">
    </td>
  </tr>
  <tr>
    <td align="center" style="width: 300px; height: 300px;"colspan="2">
      <h3>Validação QR Code (Pode Retirar a Cesta)</h3>
      <img src="https://github.com/user-attachments/assets/080c546e-09ab-4f1b-b852-e20450c0c5dd" style="width: 100%; height: auto;" alt="Pode Retirar a Cesta"><br>
      <img src="https://github.com/user-attachments/assets/7c3ae978-20d2-4475-b9e8-9fb2a27b410d" style="width: 100%; height: auto;" alt="Pode Retirar a Cesta">
    </td>
     </tr>
    <tr>
    <td align="center" style="width: 300px; height: 300px;"colspan="2">
      <h3>Validação QR Code (Cesta Já Retirada)</h3>
      <img src="https://github.com/user-attachments/assets/057304f4-6bdf-4b1d-aa24-887d7161ebbe" style="width: 100%; height: auto;" alt="Cesta Já Retirada">
    </td>
  </tr>
  <tr>
    <td align="center" style="width: 300px; height: 300px;" colspan="2">
      <h3>Validação QR Code (Por Terceiros)</h3>
      <img src="https://github.com/user-attachments/assets/fcbed89a-a852-46f0-944a-8452e1b1e7d8" style="width: 100%; height: auto;" alt="Por Terceiros">
    </td>
  </tr>
   <tr>
    <td align="center" style="width: 300px; height: 300px;" colspan="2">
      <h3>Relatorio em TEMPO REAL</h3>
    <img src="https://github.com/user-attachments/assets/2bb0712a-c547-43ad-b58a-fce6bce81e69">
   </td>
  </tr>
</table>

## Como Funciona

### 1. Gerador de QR Code
1. Acesse o gerador de QR Code.
2. Insira os dados do beneficiário (CPF, matrícula, secretaria).
3. Clique em **Gerar QR Code**.
4. Se o CPF não estiver registrado na base de dados, não será possível gerar o QR Code.
   
### 2. Validação de QR Code
1. Escaneie o QR Code ou insira o CPF do beneficiário.
2. O sistema exibirá uma mensagem informando o status:
   - **Pode Retirar**: Retirada liberada.
   - **Já Retirada**: Exibe a data e horário da retirada.
   - **CPF Inválido**: Beneficiário não encontrado.

### 3. Relatório de Status
- Monitore a quantidade de cestas **retiradas** e **pendentes** em tempo real.

### 4. Retiradas por Terceiros
- Preencha as informações necessárias para validar retiradas realizadas por terceiros com segurança.

---

## Tecnologias Utilizadas
- **Frontend**: <img src="https://img.shields.io/badge/-HTML5-E34F26?style=flat-square&logo=html5&logoColor=white" alt="HTML5" /> <img src="https://img.shields.io/badge/-CSS3-1572B6?style=flat-square&logo=css3&logoColor=white" alt="CSS3" /> <img src="https://img.shields.io/badge/-JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black" alt="JavaScript" />  
- **Backend**: <img src="https://img.shields.io/badge/-PHP-777BB4?style=flat-square&logo=php&logoColor=white" alt="PHP" />
- **Repositórios**: QRCode.js, jsPDF.
- **Integração**: Automação com Google Sheets utilizando Apps Script para programar em JavaScript.

---
<img src= "https://github.com/user-attachments/assets/cc40b53e-ead1-462e-9bb7-34e639b53f77" style="width: 100%; height: 400px">
Desenvolvido e Implementado por Lucas, Sanderson e Ana Clara  
