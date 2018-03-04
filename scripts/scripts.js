// Line chart

new Chart(document.getElementById("line-chart"), {
  type: 'line',
  data: {
    labels: [40,45,50,55,60,65,70,75,80,85,90,95,100],
    datasets: [{ 
        data: [1000,400,1000,1600,1000,400,1000,1600,1000,400,1000,1600,1000],
        label: "G-force",
        borderColor: "#EDC3FF",
        fill: false
      }
    ]
  },
  options: {
    title: {
      display: true,
      text: 'G-force in seconden'
    }
  }
});


// Bar chart

new Chart(document.getElementById("bar-chart"), {
    type: 'bar',
    data: {
      labels: ["Water", "Natuursappen", "Frisdrank", "Koffie", "Houdbare zuivel"],
      datasets: [
        {
          label: "Drinken",
          backgroundColor: ["#EDC3FF", "#878787","#D0FFF4","#FFB200","#72348D"],
          data: [312,186,50,118,20]
        }
      ]
    },
    options: {
      legend: { display: false },
      title: {
        display: true,
        text: 'Voorraad drinken in liters'
      }
    }
});


// Polar area chart

new Chart(document.getElementById("polar-chart"), {
    type: 'polarArea',
    data: {
      labels: ["Vlees", "Pap", "Groente", "Fruit", "Snoep"],
      datasets: [
        {
          label: "Voedselvoorraad",
          backgroundColor: ["#EDC3FF", "#878787","#D0FFF4","#FFB200","#72348D"],
          data: [243,278,322,284,80]
        }
      ]
    },
    options: {
      title: {
        display: true,
        text: 'Voedselvoorraad in kg'
      }
    }
});