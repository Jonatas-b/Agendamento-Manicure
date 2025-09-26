const form = document.getElementById("formAgendamento");

  form.addEventListener("submit", function(e) {
    e.preventDefault();

    const service = document.getElementById("service").options[document.getElementById("service").selectedIndex].text;
    const date = document.getElementById("date").value;
    const time = document.getElementById("time").value;

    // Corrige o problema do fuso horário
    const [ano, mes, dia] = date.split("-");
    const dataFormatada = `${dia}/${mes}/${ano}`;

    const mensagem = `Olá! Gostaria de agendar um horário para ${service} no dia ${dataFormatada} às ${time}.`;

    const phone = "5531996432131"; // <-- número
    const url = `https://wa.me/${phone}?text=${encodeURIComponent(mensagem)}`;

    window.location.href = url;
  });