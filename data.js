/* ============================================================
   Dati della programmazione — Cinema Multisala Lumière
   Questo file viene letto sia da index.html (per mostrare la
   programmazione) sia da admin.html (per modificarla).
   Per aggiornare i film: usa admin.html, genera il nuovo codice
   e sostituisci il contenuto di questo file su GitHub.
   ============================================================ */

const FILM_PROGRAMMAZIONE = [
  { titolo: "Oceania", sala: "Sala De Curtis", orari: ["16:30","18:30","20:30","22:30"], intero: "9,5", ridotto: "8,5", abbonamento: false },
  { titolo: "SpiderMan Brand New Day", sala: "Sala Sordi", orari: ["18:30","21:30"], intero: "10,5", ridotto: "9,5", abbonamento: true },
  { titolo: "Odissea", sala: "Sala Bergman", orari: ["18:00","21:15"], intero: "10,5", ridotto: "9,6", abbonamento: true },
  { titolo: "Insidious - Fuori dall’Altrove", sala: "Sala Virna Lisi", orari: ["18:45","20:40","22:40"], intero: "9,6", ridotto: "", abbonamento: false },
  { titolo: "Minions & Monsters", sala: "Sala De Sica", orari: ["18:30"], intero: "8,5", ridotto: "7,5", abbonamento: true },
  { titolo: "The Death of Robin Hood", sala: "Sala De Sica", orari: ["20:15"], intero: "9", ridotto: "", abbonamento: true },
  { titolo: "Camp Miasma - Adolescenza, sesso e morte", sala: "Sala De Sica", orari: ["22:15"], intero: "9,5", ridotto: "", abbonamento: true },
  { titolo: "La Fine di Oak Street", sala: "Sala Mastroianni", orari: ["18:35","20:15"], intero: "9", ridotto: "", abbonamento: true },
  { titolo: "Hokum", sala: "Sala Mastroianni", orari: ["22:15"], intero: "3,5", ridotto: "", abbonamento: false }
];

const FILM_PROSSIMAMENTE = [
  { titolo: "Anno del Vento", info: "DRAMMATICO · dal 5 settembre" },
  { titolo: "Il Mare in Tasca", info: "FAMILY · dal 12 settembre" },
  { titolo: "Doppio Fondo", info: "THRILLER · dal 19 settembre" },
  { titolo: "Avengers: Doomsday", info: "" }
];
