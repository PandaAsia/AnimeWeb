var dataLIST01 = [
  {
    Title: "Go-Tobun no Hanayome",
    Imagen: "assets/5-toubunnoHanayome.jpg",
  },
  {
    Title: "86 Part 2",
    Imagen: "assets/86Part2.jpg",
  },
  {
    Title: "Bleach Sennen Kessen-hen",
    Imagen: "assets/BleachSennenKessen-hen.jpg",
  },
  {
    Title: "Blue Lock",
    Imagen: "assets/BlueLock.jpg",
  },
  {
    Title: "Bocchi the Rock",
    Imagen: "assets/BocchitheRock.jpg",
  },
  {
    Title: "Boku no Hero Academia",
    Imagen: "assets/BokunoHeroAcademia.jpg",
  },
];

var dataLIST02 = [
  {
    Title: "Bungou Stray Dogs",
    Imagen: "assets/BungouStrayDogs.jpg",
  },
  {
    Title: "Edens Zero",
    Imagen: "assets/EdensZero.jpg",
  },
  {
    Title: "Fruits Basket",
    Imagen: "assets/FruitsBasket.jpg",
  },
  {
    Title: "Fuufu Ijou, Koibito Miman",
    Imagen: "assets/FuufuIjouKoibitoMiman.jpg",
  },
  {
    Title: "Hataraku Maou-sama!",
    Imagen: "assets/HatarakuMaou-sama.jpg",
  },
  {
    Title: "Hibike! Euphonium",
    Imagen: "assets/HibikeEuphonium.jpg",
  },
];

var dataTOP10List01 = [
  {
    Title: "Hige wo Soru.",
    Imagen: "assets/HigewoSoru.jpg",
  },
  {
    Title: "Ijiranaide, Nagatoro-san",
    Imagen: "assets/IjiranaideNagatoro-san.jpg",
  },
  {
    Title: "Jujutsu Kaisen",
    Imagen: "assets/JujutsuKaisen.jpg",
  },
  {
    Title: "Kaguya-sama wa Kokurasetai",
    Imagen: "assets/Kaguya-samawaKokurasetai.jpg",
  },
  {
    Title: "Kanojo, Okarishimasu",
    Imagen: "assets/KanojoOkarishimasu.jpg",
  },
  {
    Title: "Komi-san wa, Comyushou desu.",
    Imagen: "assets/Komi-sanwa.jpg",
  },
  {
    Title: "Kubo-san wa Mob wo Yurusanai",
    Imagen: "assets/Kubo-sanwaMobwoYurusanai.jpg",
  },
  {
    Title: "Lycoris Recoil",
    Imagen: "assets/LycorisRecoil.jpg",
  },
  {
    Title: "Masamune-kun no Reveng",
    Imagen: "assets/Masamune-kunnoReveng.jpg",
  },
  {
    Title: "Mieruko-chan",
    Imagen: "assets/Mieruko-chan.jpg",
  },
];

var dataTOP10List02 = [
  {
    Title: "Mushoku Tensei",
    Imagen: "assets/MushokuTensei.jpg",
  },
  {
    Title: "Shuumatsu no Harem",
    Imagen: "assets/ShuumatsunoHarem.jpg",
  },
  {
    Title: "Sono Bisque Doll wa Koi wo Suru",
    Imagen: "assets/SonoBisqueDollwaKoiwoSuru.jpg",
  },
  {
    Title: "Spy x Family",
    Imagen: "assets/SpyxFamily.jpg",
  },
  {
    Title: "Summertime Render",
    Imagen: "assets/SummertimeRender.jpg",
  },
  {
    Title: "Tate no Yuusha",
    Imagen: "assets/TatenoYuusha.jpg",
  },
  {
    Title: "Tomo-chan wa Onnanoko",
    Imagen: "assets/Tomo-chanwaOnnanoko.jpg",
  },
  {
    Title: "Vanitas no Karte",
    Imagen: "assets/VanitasnoKarte.jpg",
  },
  {
    Title: "Deca-Dence",
    Imagen: "assets/Deca-Dence.jpg",
  },
  {
    Title: "Yofukashi no Uta",
    Imagen: "assets/YofukashinoUta.jpg",
  },
];

var dataLISTStudio = [
  {
    Title: "STUDIO DEEN",
    Imagen: "assets/studio_deen.png",
  },
  {
    Title: "A-1 PICTURES",
    Imagen: "assets/a-1Prictures.png",
  },
  {
    Title: "SHAFT",
    Imagen: "assets/shadt.png",
  },
  {
    Title: "WIT STUDIO",
    Imagen: "assets/wit_studio.png",
  },
  {
    Title: "MAPPA",
    Imagen: "assets/mappa.png",
  },
  {
    Title: "AIC",
    Imagen: "assets/aic.png",
  },
];

var dataListSlider = [
  {
    img: "assets/Bastard.jpg",
    type: "series",
    Title: "Bastard!! Ankoku no Hakaishin Season 2",
    Gender: "Action, Adventure, Comedy, Fantasy",
  },
  {
    img: "assets/Bleach.jpg",
    type: "series",
    Title: "Bleach: Sennen Kessen-hen - Ketsubetsu-tan",
    Gender: "Action, Adventure, Fantasy",
  },
  {
    img: "assets/Hibike_Euphonium.jpg",
    type: "Movie",
    Title: "Hibike! Euphonium: Ensemble Contest-hen",
    Gender: "Drama",
  },
  {
    img: "assets/Jujutsu_Kaisen.jpg",
    type: "series",
    Title: "Jujutsu Kaisen 2nd Season",
    Gender: "Action, Fantasy",
  },
  {
    img: "assets/Kanojo_Okarishimasu.jpg",
    type: "series",
    Title: "Kanojo, Okarishimasu 3rd Season",
    Gender: "Comedy, Romance",
  },
  {
    img: "assets/Mushoku_Tensei.jpg",
    type: "series",
    Title: "Mushoku Tensei II: Isekai Ittara Honki Dasu",
    Gender: "Acción, Aventura, Shounen, Sobrenatural",
  },
];

// Esto es Para el menu
((d) => {
  const $BTNmenu = d.querySelector(".btn-movil"),
    $PanelMenu = d.querySelector(".menu");

  $BTNmenu.addEventListener("click", (e) => {
    MostrarMenu();
  });

  function MostrarMenu() {
    $PanelMenu.classList.toggle("is-active");
    $BTNmenu.classList.toggle("is-active");
  }

  d.addEventListener("click", (e) => {
    if (e.target.matches(".menu a")) {
      MostrarMenu();
    }
  });
})(document);

//Mostrar la informacion de cada dato
((d) => {
  let $Introducido = d.querySelector(".cont-introduce");
  $Introducido.innerHTML = "";
  for (let i = 0; i < dataListSlider.length; i++) {
    $Introducido.innerHTML += `
    <div class="intro-wrapper">
      <span><h5 class="wra-type" style="--idx: 0">${dataListSlider[i].type}</h5></span>
      <span><h1 class="wra-title" style="--idx: 1">${dataListSlider[i].Title}</h1></span>
      <span><p class="wra-gender" style="--idx: 2">${dataListSlider[i].Gender}</p></span>
      <span><a href="#" class="wra-button" style="--idx: 3">view</a></span>
    </div>`;
  }

  $Introducido.children[0].classList.add("active");

  let $thumbmailListWrapper = d.querySelector(
    ".cont-thunbnail-list .thun-wrapper"
  );
  $thumbmailListWrapper.innerHTML += `
  <div class="wra-thunbnail zoom">
    <img src="${dataListSlider[0].img}" alt=""/>
  </div>`;
  for (let i = 1; i < dataListSlider.length; i++) {
    $thumbmailListWrapper.innerHTML += `
      <div class="wra-thunbnail" style="--idx: ${i - 1}">
        <img src="${dataListSlider[i].img}" alt=""/>
      </div>`;
  }
  var Index = 0;

  setInterval(() => {
    var clone = $thumbmailListWrapper.children[0].cloneNode(true);
    clone.classList.remove("zoom");
    $thumbmailListWrapper.appendChild(clone);
    $thumbmailListWrapper.children[1].classList.add("zoom");
    setTimeout(() => {
      $thumbmailListWrapper.children[0].remove();
    }, 1000);

    for (let i = 2; i < $thumbmailListWrapper.childElementCount; i++) {
      $thumbmailListWrapper.children[i].style = `--idx: ${i - 2}`;
    }

    if (Index < dataListSlider.length - 1) {
      Index++;
    } else {
      Index = 0;
    }

    for (let i = 0; i < dataListSlider.length; i++) {
      $Introducido.children[i].classList.remove("active");
    }

    $Introducido.children[Index].classList.add("active");
  }, 5000);
})(document);

// Esto es Para la lista de anime temporal

((d) => {
  const $PanelAnime = d.querySelector(".Panel-anime");
  $PanelAnime.innerHTML = "";
  for (let i = 0; i < dataLIST01.length; i++) {
    $PanelAnime.innerHTML += `
    <div class="list-anime">
      <a href="#">
        <div class="anime-img">
          <img src="${dataLIST01[i].Imagen}" alt="Img del anime" />
        </div>
        <div class="anime-title">
          <span>${dataLIST01[i].Title}</span>
        </div>
      </a>
    </div>`;
  }
})(document);

((d) => {
  const $PanelAnime = d.querySelector(".Panel-anime2");
  $PanelAnime.innerHTML = "";
  for (let i = 0; i < dataLIST02.length; i++) {
    $PanelAnime.innerHTML += `
    <div class="list-anime">
      <a href="#">
        <div class="anime-img">
          <img src="${dataLIST02[i].Imagen}" alt="Img del anime" />
        </div>
        <div class="anime-title">
          <span>${dataLIST02[i].Title}</span>
        </div>
      </a>
    </div>`;
  }
})(document);

((d) => {
  const $PanelAnime = d.querySelector(".Panel-anime3");
  $PanelAnime.innerHTML = "";
  for (let i = 0; i < dataLISTStudio.length; i++) {
    $PanelAnime.innerHTML += `
    <div class="list-anime">
      <a href="#">
        <div class="studio-img">
          <img src="${dataLISTStudio[i].Imagen}" alt="Img del anime" />
        </div>
        <div class="anime-title">
          <span>${dataLISTStudio[i].Title}</span>
        </div>
      </a>
    </div>`;
  }
})(document);

//esto para la lista de 10

((d) => {
  const $PanelCards = d.querySelector(".card-expanding-panel");
  $PanelCards.innerHTML = "";
  for (let i = 0; i < dataTOP10List01.length; i++) {
    $PanelCards.innerHTML += `
    <div class="card-items">
      <a href="#">
        <div class="card-imgs">
          <img src="${dataTOP10List01[i].Imagen}" alt="" />
        </div>
        <span class="card-title">${dataTOP10List01[i].Title}</span>
      </a>
    </div>
    `;
  }
})(document);

((d) => {
  const $PanelCards = d.querySelector(".card-expanding-panel2");
  $PanelCards.innerHTML = "";
  for (let i = 0; i < dataTOP10List02.length; i++) {
    $PanelCards.innerHTML += `
    <div class="card-items">
      <a href="#">
        <div class="card-imgs">
          <img src="${dataTOP10List02[i].Imagen}" alt="" />
        </div>
        <span class="card-title">${dataTOP10List02[i].Title}</span>
      </a>
    </div>
    `;
  }
})(document);

((d) => {
  let $expanbtn = d.querySelectorAll(".card-items a");
  let $mostrarTitulo = d.querySelectorAll(".card-title");
  function Expander(index) {
    for (let i = 0; i < $expanbtn.length; i++) {
      if (index == i) {
        $expanbtn[i].parentElement.classList.toggle("expand");
        $mostrarTitulo[i].classList.toggle("change-visibily");
      } else {
        $expanbtn[i].parentElement.classList.remove("expand");
        $mostrarTitulo[i].classList.remove("change-visibily");
      }
    }
  }

  $expanbtn.forEach((btn, index) => {
    btn.addEventListener("mouseenter", () => {
      Expander(index);
    });
    btn.addEventListener("mouseleave", () => {
      Expander(index);
    });
  });
})(document);
