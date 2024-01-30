let countries = [
  { code: "pak", name: "Pakistan" },
  { code: "ind", name: "India" },
  { code: "chi", name: "China" },
];

let states = {
  pak: [
    { code: "kpk", name: "Khyber Pakhtunakhwa" },
    { code: "pun", name: "Punjab" },
    { code: "sin", name: "Sindh" },
  ],
  ind: [
    { code: "asm", name: "Assam" },
    { code: "go", name: "Goa" },
    { code: "hp", name: "Himachal Pradesh" },
  ],
  chi: [
    { code: "si", name: "Sichuan" },
    { code: "gn", name: "Gansu" },
    { code: "hu", name: "Hunan" },
  ],
};

let cities = {
  kpk: [
    { code: "pes", name: "Peshawar" },
    { code: "abt", name: "Abbottabad" },
    { code: "ma", name: "Mardan" },
  ],
  pun: [
    { code: "la", name: "Lahore" },
    { code: "gw", name: "Gujranwala" },
    { code: "bw", name: "Bahawalpur" },
  ],
  sin: [
    { code: "ka", name: "Karachi" },
    { code: "lk", name: "Larkana" },
    { code: "gt", name: "Gotki" },
  ],
  asm: [
    { code: "te", name: "Tezpur" },
    { code: "jo", name: "Jorhat" },
    { code: "ti", name: "Tinsukia" },
  ],
  go: [
    { code: "pa", name: "Panaji" },
    { code: "ma", name: "Mapusa" },
    { code: "po", name: "Ponda" },
  ],
  hp: [
    { code: "ds", name: "Dharamshala" },
    { code: "ch", name: "Chamba" },
    { code: "ms", name: "Manali" },
  ],
  si: [
    { code: "le", name: "Leshan" },
    { code: "zi", name: "Zigong" },
    { code: "me", name: "Meishan" },
  ],
  gn: [
    { code: "ln", name: "Lanzhou" },
    { code: "lg", name: "Longnan" },
    { code: "hz", name: "Hezuo" },
  ],
  hu: [
    { code: "cg", name: "Changsha" },
    { code: "cn", name: "Changde" },
    { code: "yz", name: "Yongzhou" },
  ],
};

// Function to populate states based on the selected country
function updateStates() {
  let countrySelect = document.getElementById("country");
  let stateSelect = document.getElementById("state");
  let citySelect = document.getElementById("city");

  // Clear existing options
  stateSelect.innerHTML = "";
  citySelect.innerHTML = "";

  // Get selected country
  let selectedCountry = countrySelect.value;

  // If no country is selected, do nothing
  if (!selectedCountry) {
    return;
  }

  // Add states based on the selected country
  states[selectedCountry].forEach(function (state) {
    let option = document.createElement("option");
    option.value = state.code;
    option.text = state.name;
    stateSelect.add(option);
  });

  // Trigger the update for cities based on the selected state
  updateCities();
}

// Function to populate cities based on the selected state
function updateCities() {
  let stateSelect = document.getElementById("state");
  let citySelect = document.getElementById("city");

  // Clear existing options
  citySelect.innerHTML = "";

  // Get selected state
  let selectedState = stateSelect.value;

  // Add cities based on the selected state
  cities[selectedState].forEach(function (city) {
    let option = document.createElement("option");
    option.value = city.code;
    option.text = city.name;
    citySelect.add(option);
  });
}

// Initial setup
updateStates();
