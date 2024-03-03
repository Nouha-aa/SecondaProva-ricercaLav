// NON MODIFICARE QUESTO ARRAY!
const jobs = [
    { title: "Marketing Intern", location: "US, NY, New York" },
    {
      title: "Customer Service - Cloud Video Production",
      location: "NZ, Auckland",
    },
    {
      title: "Commissioning Machinery Assistant (CMA)",
      location: "US, IA, Wever",
    },
    {
      title: "Account Executive - Washington DC",
      location: "US, DC, Washington",
    },
    { title: "Bill Review Manager", location: "US, FL, Fort Worth" },
    { title: "Accounting Clerk", location: "US, MD," },
    { title: "Head of Content (m/f)", location: "DE, BE, Berlin" },
    {
      title: "Lead Guest Service Specialist",
      location: "US, CA, San Francisco",
    },
    { title: "HP BSM SME", location: "US, FL, Pensacola" },
    {
      title: "Customer Service Associate - Part Time",
      location: "US, AZ, Phoenix",
    },
    {
      title: "ASP.net Developer Job opportunity at United States,New Jersey",
      location: "US, NJ, Jersey City",
    },
    {
      title: "Talent Sourcer (6 months fixed-term contract)",
      location: "GB, LND, London",
    },
    {
      title: "Applications Developer, Digital",
      location: "US, CT, Stamford",
    },
    { title: "Installers", location: "US, FL, Orlando" },
    { title: "Account Executive - Sydney", location: "AU, NSW, Sydney" },
    {
      title: "VP of Sales - Vault Dragon",
      location: "SG, 01, Singapore",
    },
    { title: "Hands-On QA Leader", location: "IL, Tel Aviv, Israel" },
    {
      title: "Southend-on-Sea Traineeships Under NAS 16-18 Year Olds Only",
      location: "GB, SOS, Southend-on-Sea",
    },
    { title: "Visual Designer", location: "US, NY, New York" },
    {
      title: "Process Controls Engineer - DCS PLC MS Office - PA",
      location: "US, PA, USA Northeast",
    },
    { title: "Marketing Assistant", location: "US, TX, Austin" },
    { title: "Front End Developer", location: "NZ, N, Auckland" },
    { title: "Engagement Manager", location: "AE," },
    {
      title: "Vice President, Sales and Sponsorship (Businessfriend.com)",
      location: "US, CA, Carlsbad",
    },
    { title: "Customer Service", location: "GB, LND, London" },
    { title: "H1B SPONSOR FOR L1/L2/OPT", location: "US, NY, New York" },
    { title: "Marketing Exec", location: "SG," },
    {
      title: "HAAD/DHA Licensed Doctors Opening in UAE",
      location: "AE, AZ, Abudhabi",
    },
    {
      title: "Talent Management Process Manager",
      location: "US, MO, St. Louis",
    },
    { title: "Customer Service Associate", location: "CA, ON, Toronto" },
    {
      title: "Customer Service Technical Specialist",
      location: "US, MA, Waltham",
    },
    { title: "Software Applications Specialist", location: "US, KS," },
    { title: "Craftsman Associate", location: "US, WA, Everett" },
    { title: "Completion Engineer", location: "US, CA, San Ramon" },
    { title: "I Want To Work At Karmarama", location: "GB, LND," },
    {
      title: "English Teacher Abroad",
      location: "US, NY, Saint Bonaventure",
    },
  ]

  

  //creo una funzione che mi restituisca un oggetto con i lavori disponibili in base alla ricerca e il numero di lavori disponibili.
function ricercaLav (title, location) {
    let risultato = [];
    
    title = title.toLowerCase();
    location = location.toLowerCase();

    for (const lavoro of jobs) {
        const jobTitolo = lavoro.title.toLowerCase();
        const jobPosizione = lavoro.location.toLowerCase();
    

        if (jobTitolo.includes(title) && jobPosizione.includes(location)) {
            risultato.push(lavoro)
        };
    };

    return {
        risultato: risultato,
        count: risultato.length
    }
};

console.log(ricercaLav('dev', 'us'));  //funziona!!

// creo una funzione che colleghi la funzione creata in precedenza con il bottone di ricerca
function ricerca() {
    let posizioneLavorativa = document.getElementById('posizioneLav').value;
    let luogo = document.getElementById('luogo').value;

    console.log('posizione lavorativa: ' + posizioneLavorativa);
    console.log('Luogo:' + luogo);

    let ricercaLavoro = ricercaLav(posizioneLavorativa, luogo);
    console.log('Risultato:', ricercaLavoro); //funziona GG per me

    let risultatoCont = document.getElementById('risultato');
    risultatoCont.innerHTML = ' ';

    let titoloRisultato = document.createElement('h4') //creo un h4 come titolo per i lavori disponibili e il numero di offerte trovate
    titoloRisultato.textContent = 'Sono state trovate ' + ricercaLavoro.count + ' offerte di lavoro adatte a te!';
    titoloRisultato.id = 'titoloRisultato';
    risultatoCont.appendChild(titoloRisultato);

    let indietro = document.createElement('button');// creo un bottone che una volta rovati i risultati mi permetta di tornare al form di ricerca.
    indietro.textContent = 'INDIETRO';
    indietro.id = 'indietro';

    //creo una funzione che una volta cliccata torni al form di ricerca e faccia sparire i risultati e il tasto indietro
    indietro.addEventListener('click', function () {
      mostraElemento();
      indietro.style.display = 'none';
    });
    document.body.appendChild(indietro)
    
    //creo una funzione for.each che crea una lista ordinata e ci inserisca la lista di risultati e la aggiunga al div 'risultatp'
    let lista = document.createElement('ol')
    ricercaLavoro.risultato.forEach(lavoro => {
      let listaOfferte = document.createElement('li');
      listaOfferte.textContent = `POSIZIONE LAVORATIVA: ${lavoro.title}; LUOGO: ${lavoro.location}`;

      let contenitoreIcona = document.createElement('div'); // Creo il contenitore per l'iconcina del cuore
      contenitoreIcona.id = 'contenitoreIcona';

      let icona = document.createElement('i'); //ovviamente creo anche l'icona del cuoricino
      icona.classList.add('far', 'fa-heart');
      icona.id = 'cuore';

      //creo una funzione che mi permetta di cambiare colore al click del cuoricino
      icona.addEventListener('click', function () {
        if (icona.classList.contains('far')) {
          icona.classList.remove('far');
          icona.classList.add('fas');
          icona.style.color = 'red';
        } else {
          icona.classList.remove('fas');
          icona.classList.add('far');
        }
      });

      contenitoreIcona.appendChild(icona); // aggiungo l'icona al contenitore
      listaOfferte.appendChild(contenitoreIcona); // aggiungo il contenitore alla lista 'li' in modo che il cuore appaia solo in base ai risultati

      lista.appendChild(listaOfferte); // aggiungo i risultati della lista alla 'ol' che ho creato
    });

    risultatoCont.appendChild(lista);
    lista.id = 'lista'; //mi servirà per dare lo style alla lista

    risultatoCont.style.display = 'block';
    let algoritmo = document.getElementById('algoritmo');
    algoritmo.style.display = 'none'; //in modo tale che il form sparisca ma riappaia solo se clicco il bottone indietro

    //nel caso vengano invertiti i campi di ricerca
    if (ricercaLavoro.count === 0) { 
      titoloRisultato.textContent = 'Le offerte di lavoro disponibili sono: ' + ricercaLavoro.count + '. Controlla di aver inserito correttamente i dati di ricerca!';
      titoloRisultato.style.color = 'red';
    };
  };

//creo una funzione che faccia diventare display none i risultati della ricerca e mi permetta 
//tramite il bottone indietro di tornare al form di ricerca
function mostraElemento () {
  let algoritmo = document.getElementById('algoritmo');
  let intro = document.getElementById('intro');
  let body = document.querySelector('body');
  let risultatoCont = document.getElementById('risultato');

  body.style.backgroundImage = 'url(./immagini/bicycle-3830664_1280.jpg)'; //cambio immagine di sfondo
  algoritmo.style.display = 'block';
  intro.style.display = 'none';
  risultatoCont.style = 'none';
};

//mi permette di cambiare sfondo per l'ultima volta hehehe
function cambiaSfondo() {
  let body = document.querySelector('body');
  body.style.backgroundImage= 'url(./immagini/Lego-seriuos-play.jpg)';
};

//creo una funzione che mi faccia una verifica sui valori di input e nel caso fossero numeri o stringhe che contengono numeri, 
//mi evidenzia il bordo di rosso 
function verificaInput() {
  let luogo = document.getElementById('luogo').value;
  let posizioneLavorativa = document.getElementById('posizioneLav').value;
  
  // Verifica se uno dei due input contiene un numero
  if (contieneNumero(luogo) || contieneNumero(posizioneLavorativa)) {
      console.log('uno dei campi contiene un numero');
      document.getElementById('luogo').classList.add('bordo-rosso');
      document.getElementById('posizioneLav').classList.add('bordo-rosso');
      return false;
  } else {
      console.log('nessun numero');
      // Altrimenti, avvia la ricerca e rimuove i bordi rossi :)
      document.getElementById('luogo').classList.remove('bordo-rosso');
      document.getElementById('posizioneLav').classList.remove('bordo-rosso');
      return true;
  }
};

//creo una funzione per verificare se i caratteri inseriti sono numeri
function contieneNumero(inputValue) {
  for (let i = 0; i < inputValue.length; i++) {
    // Verifica se il carattere inserito è un numero
    if (!Number.isNaN(parseInt(inputValue[i]))) {
      return true; // Se è un numero = true
    }
  }
  return false; // Se nessun carattere è un numero = false
};

console.log(contieneNumero("hello")); // false
console.log(contieneNumero("12345")); // true
console.log(contieneNumero("abc123")); // true
console.log(contieneNumero("1a2b3c")); // true

