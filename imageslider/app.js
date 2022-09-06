document.addEventListener("DOMContentLoaded", () => {
    const photos = ["Abyss", "Yours"];
    const $gallery = document.querySelector(".gallery");
    const $buttons = document.querySelectorAll(".btn");
    const names=["abyss","yours"];
    const dates=["04.12.2020","07.11.2021"];
    const descr=["Produced by BUMZU Written by BUMZU, Jin, RM, Pdogg"," "];

    const links=
   [ `<a href="https://www.youtube.com/watch?v=aqtSOksH-NE"><img src="https://services.linkfire.com/logo_youtubemusic_onlight.svg" width="125px;"height="40px;" ></a>
    <br><a href="https://soundcloud.com/bangtan/2020jinbirthday?ref=clipboard&p=a&c=0"><img src="https://services.linkfire.com/logo_soundcloud_onlight.svg" width="125px;"height="40px;" ></a>
    `,
`<a href="https:\\spotify.com"><img src="https://services.linkfire.com/logo_applemusic_onlight.svg" width="125px;"height="40px;" ></a><br>
<a href="https:\\spotify.com"><img src="https://services.linkfire.com/logo_spotify_onlight.svg" width="125px;"height="40px;" ></a><br>
`,
``, ``,``];
    


    let photoIndex = 0;
  
    $gallery.style.backgroundImage = `url('./${photos[photoIndex]}.jpg')`;
    document.getElementById("h3").innerHTML=names[0];
    document.getElementById("h4").innerHTML=dates[0];
    document.getElementById("links").innerHTML=links[0];
    document.getElementById("songd").innerHTML=descr[0];

  
    $buttons.forEach(($btn) => {
      $btn.addEventListener("click", (e) => {
        if ($btn.id === "prev") {
          photoIndex--;
          if (photoIndex < 0) {
            photoIndex = photos.length - 1;
          }
          $gallery.style.backgroundImage = `url('./${photos[photoIndex]}.jpg')`;
          document.getElementById("h3").innerHTML=names[photoIndex];
          document.getElementById("h4").innerHTML=dates[photoIndex];
          
          document.getElementById("links").innerHTML=links[photoIndex];
          document.getElementById("songd").innerHTML=descr[photoIndex];


  
        }
  
        if ($btn.id === "next") {
          photoIndex++;
          if (photoIndex > photos.length - 1) {
            photoIndex = 0;
          }
          $gallery.style.backgroundImage = `url('./${photos[photoIndex]}.jpg')`;
          document.getElementById("h3").innerHTML=names[photoIndex];
          document.getElementById("h4").innerHTML=dates[photoIndex];
          document.getElementById("links").innerHTML=links[photoIndex];
          document.getElementById("songd").innerHTML=descr[photoIndex];



        }
      });
    });
  });

