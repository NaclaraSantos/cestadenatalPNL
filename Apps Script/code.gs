function onOpen() {
    var ui = SpreadsheetApp.getUi();
    ui.createMenu('QR Code')
        .addItem('Validação QR Code', 'showDialog') 
        .addItem('Validação de Terceiros', 'showDialogTerceiros') 
        .addToUi();
}

function showDialog() {
    var html = HtmlService.createHtmlOutputFromFile('Page')
        .setWidth(700)
        .setHeight(600);
    SpreadsheetApp.getUi().showModalDialog(html, 'Validação de QR Code');
}

function showDialogTerceiros() {
    var html = HtmlService.createHtmlOutputFromFile('PageTerceiros') 
        .setWidth(700)
        .setHeight(600);
    SpreadsheetApp.getUi().showModalDialog(html, 'Validação de Terceiros');
}

  function verificarCPF(cpf) {
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Cadastro");
    var data = sheet.getDataRange().getValues();
  
    for (var i = 1; i < data.length; i++) {
      if (data[i][0].toString() === cpf.toString()) {
        var nome = data[i][1]; 
        var horario = data[i][3]; 
        if (data[i][2] === "Cesta Retirada") {
          return { 
            status: "Cesta já retirada", 
            nome: nome || "Usuário", 
            horario: horario ? horario.toString() : "Horário não registrado", 
            linha: i + 1 
          };
        } else {
          return { 
            status: "Pode retirar a cesta", 
            nome: nome || "Usuário", 
            linha: i + 1 
          };
        }
      }
    }
    return { status: "CPF não encontrado", nome: null, linha: null };
  }
  
  function retirarCesta(linha) {
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Cadastro");
    if (linha) {
      var horarioAtual = new Date(); 
      sheet.getRange(linha, 3).setValue("Cesta Retirada"); 
      sheet.getRange(linha, 4).setValue(horarioAtual); 
      return "Cesta retirada com sucesso às " + horarioAtual.toLocaleString();
    }
    return "Erro ao retirar a cesta.";
  }

function validarTerceiro(cpfColaborador, nomeTerceiro, cpfTerceiro) {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Cadastro");
  var data = sheet.getDataRange().getValues();
  var count = 0; // Variável para contar o número de retiradas do terceiro

  for (var i = 1; i < data.length; i++) {
    // Verifica se o CPF do colaborador é válido
    if (data[i][0].toString() === cpfColaborador.toString()) {
      // Se a cesta já foi retirada para o colaborador
      if (data[i][2] === "Cesta Retirada") {
        return "Cesta já retirada para este colaborador.";
      }

      // Agora verifica o número de retiradas do terceiro
      for (var j = 1; j < data.length; j++) {
        if (data[j][5].toString() === cpfTerceiro.toString()) {
          count++; // Conta cada retirada do terceiro
        }
      }

      // Verifica se o terceiro já retirou 1 cestas
      if (count >= 1) {
        return "Este terceiro já retirou 1 cestas e não pode retirar mais.";
      }

      // Registrar dados do terceiro
      sheet.getRange(i + 1, 5).setValue(nomeTerceiro); // Nome do Terceiro
      sheet.getRange(i + 1, 6).setValue(cpfTerceiro); // CPF do Terceiro
      sheet.getRange(i + 1, 3).setValue("Cesta Retirada"); // Atualiza o status
      sheet.getRange(i + 1, 4).setValue(new Date()); // Registra horário

      return "Retirada registrada com sucesso para o terceiro.";
    }
  }

  return "CPF do colaborador não encontrado.";
}


  
