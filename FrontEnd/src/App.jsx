import { useState,useRef } from 'react'
import capaAlbum from "./assets/capaAlbum.jpg"
import spotifyLogo from "./assets/bxl-spotify.svg"
import appleLogo from "./assets/bxl-apple.svg"
import youtubeLogo from "./assets/bxl-youtube.svg"
import pause from  "./assets/bx-pause.svg"
import play from  "./assets/bx-play.svg"
import share from "./assets/bx-share-alt.svg"
import time from "./assets/bx-time-five.svg"
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import {songsData} from "./components/audios.js"

import "./app.css"

function App() {
 
    // Função para compartilhar usando a API Web Share
    const handleShare = () => {
      const pageUrl = window.location.href; // Obtém a URL atual da página
      const title = "GNX"; // Título que você quer compartilhar
      const text = "Confira o novo álbum do Goat!"; // Texto que você quer compartilhar
  
      // Verifica se a API Web Share é suportada pelo navegador
      if (navigator.share) {
        navigator.share({
          title: title,
          text: text,
          url: pageUrl, // URL da página para compartilhar
        })
          .then(() => console.log('Compartilhado com sucesso!'))
          .catch((error) => console.log('Erro ao compartilhar: ', error));
      } else {
        // Caso o navegador não suporte, você pode exibir uma mensagem ou implementar outra forma de compartilhamento
        alert('Seu navegador não suporta o compartilhamento!');
      }
    };
  const [currentSong, setCurrentSong] = useState(null); // ID da música atual
  const audioRefs = useRef([]); // Referências para os elementos de áudio

  // Função para tocar/pausar músicas
  const handlePlayPause = (index) => {
    if (currentSong === index) {
      // Se a música atual estiver tocando, pause
      audioRefs.current[index].pause();
      setCurrentSong(null);
    } else {
      // Pause qualquer outra música que estiver tocando
      if (currentSong !== null) {
        audioRefs.current[currentSong].pause();
      }
      // Tocar a nova música
      audioRefs.current[index].play();
      setCurrentSong(index);
    }
  };
  return (
    <>
  <div className="container d-flex flex-column flex-md-row my-5">
  <div className="left-section1 d-flex flex-row align-items-center ">
    <div style={{position:"relative", marginRight: '0px', whiteSpace: 'nowrap' }}>
      <h6 className='lancamento'
          style={{
            transform: "rotate(-90deg)",        // Rotaciona o texto em -90 graus
            transformOrigin: 'left center',     // Ajusta a origem da rotação
            whiteSpace: 'nowrap',               // Impede quebra de linha no texto
            marginTop: '150px',                  // Ajusta a posição do texto
            marginBottom: '0',                  // Remove a margem inferior
            position: 'absolute',               // Posição absoluta para controlar a distância
            top: '50%',                         // Ajusta verticalmente para centralizar
            left: '-10px',                      // Ajuste para aproximar o texto da imagem
          }}
      >
        Release 22 de novembro de 2024

      </h6>
    </div>
    <img
      src={capaAlbum}
      className="img-fluid capa-album"
      alt="Capa do álbum"
      style={{ maxWidth: "100%" }}
    />
  </div>

  <div className="right-section1 mx-md-5 text-center text-md-start">
    <h1 className="text-danger fs-1 mt-2">GNX</h1>
    <h2 className="text-white fs-3">Kendrick Lamar</h2>
    <div className="d-flex flex-column flex-md-row justify-content-center justify-content-md-start mt-3">
      <button onClick={()=>{handlePlayPause(0)}} type="button" className="btn btn-danger btn-lg mb-2 mb-md-0 me-md-3 w-100 w-md-auto">
        Ouça agora
      </button>
      <button onClick={handleShare} type="button" className="btn d-flex justify-content-center btn-outline-dark btn-lg text-white w-100 w-md-auto">
        <img src={share} style={{filter:"invert(1)"}} className='pt-1' alt="" />
        Compartilhar
      </button>
    </div>
  </div>
</div>


      <div className='container my-5 '> 
        <div>
          <h1 style={{color:"white"}}>OUÇA DO SEU JEITO</h1>
                <div className='wrap-btn'>
                  <a href="https://music.apple.com/us/album/gnx/1781270319" target='blank'><button type='button' className='btn btn-plataformas'><img src={appleLogo}style={{filter:"invert(1)"}} height={"38px"} alt="" /></button></a>
                <a href="https://open.spotify.com/intl-pt/album/0hvT3yIEysuuvkK73vgdcW?si=a9b6d0cc97064cf6" target='blank'><button type='button' className='btn btn-plataformas '><img src={spotifyLogo}style={{filter:"invert(1)"}} height={"38px"} alt="" /></button></a>
                <a href="https://www.youtube.com/watch?v=YwUQ_5iV9pY&list=OLAK5uy_nr2Gbry1tH6kks2gabRq1k3sjR0ByDnKg" target='blank'><button type='button' className='btn btn-plataformas  youtube' ><img src={youtubeLogo} style={{filter:"invert(1)"}} height={"38px"} alt=""  /> </button></a>
                </div>
        </div>
       
      </div>
      <div className="container ">
      <div className='d-flex justify-content-between'>
        <h1 className='mb-5'  style={{ color: "white" }}>TRACK LIST</h1>
        <img className='mb-5' style={{filter:"invert(1)"}} src={time} alt="" />
      </div>
      <table className='w-100'>
       
        <tbody>
          {songsData.map((song, index) => (
            <tr key={index}>
              <div className="d-flex mb-5">
              <div className='d-flex  align-items-center justify-content-start'>
                <div>
                  <td style={{textAlign:"center",width:"20px"}}><h5 style={{color:"white"}}>{song.id}</h5></td>
                </div>
                
                  <div>
                    <button
                        className={`btn btn-play`}
                        onClick={() => handlePlayPause(index)}
                      >
                        {currentSong === index ? <img src={pause} alt="" style={{filter:"invert(1)"}} height={"32px"} /> :<img src={play} alt="" style={{filter:"invert(1)"}} height={"32px"}/> }
                      </button>
                  </div>
                  <div className='d-flex  flex-column'>
                    <td><h3 style={{color:"white"}}><b>{song.title}</b></h3></td>
                    <td><h5 style={{color:"white"}}>{song.description}</h5></td>
                  </div>
                  
                </div>
                <div className='d-flex align-items-center justify-content-end w-100'>
                  <b>
                    <p style={{color:"red",fontSize:"15px"}}>{song.duration}</p>
                  </b></div>
                <td>
                
                  <audio
                    ref={(el) => (audioRefs.current[index] = el)}
                    src={song.src}
                    onEnded={() => setCurrentSong(null)} // Para limpar o estado quando a música terminar
                  />
                </td>
              </div>
            </tr>
          ))}
        </tbody>
      </table>
      <div className='container mb-5'><h1 style={{color:"white"}}>DESCUBRA GNX</h1>
      <iframe className='w-100' height={"600px"} src="https://www.youtube.com/embed/D7liwdjvhWc" title="GNX" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe></div>
      
    </div>
    </>
  )
}

export default App
