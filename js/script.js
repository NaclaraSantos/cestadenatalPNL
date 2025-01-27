function isValidCPF(cpf) {
    if (cpf.length !== 11 || /^(\\d)\1+$/.test(cpf)) return false;
    let sum = 0, remainder;
    for (let i = 1; i <= 9; i++) {
        sum += parseInt(cpf.substring(i - 1, i)) * (11 - i);
    }
    remainder = (sum * 10) % 11;
    if (remainder === 10 || remainder === 11) remainder = 0;
    if (remainder !== parseInt(cpf.substring(9, 10))) return false;
    sum = 0;
    for (let i = 1; i <= 10; i++) {
        sum += parseInt(cpf.substring(i - 1, i)) * (12 - i);
    }
    remainder = (sum * 10) % 11;
    if (remainder === 10 || remainder === 11) remainder = 0;
    return remainder === parseInt(cpf.substring(10, 11));
}

document.getElementById('generateQRCode').addEventListener('click', function () {
    const cpf = document.getElementById('cpf').value.trim();
    const matricula = document.getElementById('matricula').value.trim();
    const secretariaSelect = document.getElementById('secretaria');
    const secretaria = secretariaSelect.value;

    if (!cpf || !matricula || !secretaria || !isValidCPF(cpf)) {
        alert("Preencha todos os campos corretamente.");
        return;
    }

    fetch('php/check_cpf.php', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: `cpf=${encodeURIComponent(cpf)}`
    })
        .then(response => response.json())
        .then(data => {
            if (!data.success) {
                alert("CPF não autorizado ou não encontrado. Favor entrar em contato com SUGESP (RH) pelo email Kitnatalinoservidores2024@pnl.mg.gov.br.");
                return;
            }

            document.getElementById('qrcode').innerHTML = "";
            new QRCode(document.getElementById('qrcode'), { text: cpf, width: 200, height: 200 });

            document.getElementById('instructions').style.display = 'block';
            document.getElementById('downloadQRCode').style.display = 'block';
            document.querySelector('.footer').style.display = 'block';

            const downloadButton = document.getElementById('downloadQRCode');
            downloadButton.removeEventListener('click', handleDownload);
            downloadButton.addEventListener('click', handleDownload);

            function handleDownload() {
                const qrCodeCanvas = document.querySelector('#qrcode canvas');
                if (!qrCodeCanvas) {
                    alert("Erro ao gerar o QR Code. Tente novamente.");
                    return;
                }

                const qrCodeDataUrl = qrCodeCanvas.toDataURL('image/png');
                const { jsPDF } = window.jspdf;
                if (!jsPDF) {
                    alert("Erro ao carregar a biblioteca jsPDF. Certifique-se de que ela está incluída corretamente.");
                    return;
                }

                const doc = new jsPDF();
                const backgroundImage = 'img/fundo.png';

                const img = new Image();
                img.onload = function () {
                    const pageWidth = doc.internal.pageSize.getWidth();
                    const pageHeight = doc.internal.pageSize.getHeight();

                    doc.addImage(img, 'JPEG', 0, 0, pageWidth, pageHeight);

                    const qrCodeWidth = 70;
                    const qrX = 12.5;
                    const qrY = 11;

                    doc.addImage(qrCodeDataUrl, 'PNG', qrX, qrY, qrCodeWidth, qrCodeWidth);

                    doc.setFont('helvetica', 'normal');
                    doc.setFontSize(11);
                    doc.setTextColor(255, 255, 255);
                    doc.text(`Nome: ${data.data.nome}`, 5, qrY + qrCodeWidth + 10);
                    doc.text(`CPF: ${cpf}`, 5, qrY + qrCodeWidth + 20);
                    doc.text(`Matrícula: ${data.data.matricula}`, 5, qrY + qrCodeWidth + 30);
                    doc.text(`Sec: ${secretaria}`, 40, qrY + qrCodeWidth + 20);

                    doc.save('QRCode_ValidaçãoPMNL.pdf');
                };

                img.onerror = function () {
                    alert('Erro ao carregar a imagem de fundo. Continuando sem a imagem...');

                    doc.setFont('helvetica', 'normal');
                    doc.setFontSize(11);
                    doc.text(`Nome: ${data.data.nome}`, 10, 20);
                    doc.text(`CPF: ${cpf}`, 10, 30);
                    doc.text(`Matrícula: ${data.data.matricula}`, 10, 40);
                    doc.text(`Secretaria: ${secretaria}`, 10, 50);

                    doc.save('QRCode_ValidaçãoPMNL.pdf');
                };
                img.src = backgroundImage;
            }
        })
        .catch(error => {
            console.error("Erro:", error);
            alert("Erro ao verificar o CPF. Tente novamente.");
        });
});
