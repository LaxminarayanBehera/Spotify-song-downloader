import React from "react";
import { FaSpotify } from "react-icons/fa6";
import axios from "axios";
import { useState } from "react";

function App(){

  const [URL, setURL] = useState("")

  const handleURL = (e) =>{
    e.preventDefault()
    setURL(e.target.value)
  }

    const downloadSong = async () =>{
      setURL("")
      const options = {
        method: 'GET',
        url: 'https://spotify-downloader9.p.rapidapi.com/downloadSong',
        params: {
          songId: `${URL}`
        },
        headers: {
          'x-rapidapi-key': import.meta.env.VITE_API_KEY,
          'x-rapidapi-host': 'spotify-downloader9.p.rapidapi.com'
        }
      };

      try {
      
        const rspn = await axios.request(options)
        // console.log(rspn.data.data.downloadLink);
        window.location.href = rspn.data.data.downloadLink 
        
      } catch (error) {
        console.log(error)
      }
    }


  return (
    <div className="h-500 w-1000 bg-green-700">
      <div className="flex items-center justify-center gap-x-2 text-xl font-bold pt-10 ">
      <FaSpotify size={50}/>
        <p>Song Downloader</p>
      </div>

      <div className="flex items-center justify-center gap-x-2 m-3" >
        <input
          type="url"
          placeholder="Paste URL from Youtube"
          className="h-10 w-[450px] rounded-3xl px-3 outline-none ring-0 hover:ring-2 hover:ring-black" onChange={handleURL} value={URL}
         
        />
        <button
          className="bg-black text-white h-10 px-3 rounded-3xl font-semibold hover:bg-white hover:text-black hover:font-bold" onClick={downloadSong}
       
        >
          Download
        </button>
      </div>

      {/* <div className=" flex items-center justify-center "> */}
      <h1 className="flex items-center justify-center mt-10 text-3xl font-bold">
        Online & Free Song  Downloader
      </h1>
      <p className="flex items-center justify-center mt-5 text-base font-medium  mx-48 ">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
        labore adipisci non fuga facilis minima, magni impedit rerum repudiandae
        laborum, error quo sint omnis cum maiores iusto nostrum! Facere
        praesentium facilis deserunt officia laboriosam, cum porro fugit fugiat
        maxime repudiandae nobis quos incidunt quo nam. Odit mollitia, facilis
        amet minima doloribus ipsam delectus assumenda veniam, ullam dicta minus
        asperiores iusto, eveniet maxime. Aliquam, numquam suscipit voluptas
        veniam cupiditate quidem dolore dolorum magni. Facere odit praesentium
        aut nisi, ut consequatur perspiciatis vitae modi, in provident neque
        repellendus! Dolorem molestiae odio, consequatur quaerat quisquam minima
        laborum ad sunt doloremque reiciendis aperiam id?
      </p>
      <div>
        <h1 className="flex items-center justify-center mt-10 text-3xl font-bold ">
          How to Download Song using our downloader
        </h1>

        <p className="flex items-center justify-center mt-5 text-xl font-bold">
          Following the below steps👇🏻
        </p>
        <div className="flex items-center justify-center flex-col ">
          <p className="m-5 text-lg font-semibold bg-black text-white px-3 rounded-3xl p-1">
            1. Open Spotify and choose any music.
          </p>
          <img src="src/1st.PNG" className="h-60" />

          <p className="m-5 text-lg font-semibold  bg-black text-white px-3 rounded-3xl p-1">
            2. Right Click on the music and go to share option and click on copy link.
          </p>
          <img src="src/2nd.PNG" className="h-60" />

          <p className="m-5 text-lg font-semibold  bg-black text-white px-3 rounded-3xl p-1">
            3. Paste your link in Search Box.
          </p>
          <img src="src/3rd.PNG" />

          <p className="m-5 text-lg font-semibold  bg-black text-white px-3 rounded-3xl p-1">
            4. Click on Download button.
          </p>
          <img src="src/4th.PNG" />

          <p className="m-5 text-lg font-semibold  bg-black text-white px-3 rounded-3xl p-1">
            5. Now you see the download started.
          </p>
        </div>
      </div>
      <div className="flex items-center justify-center bg-black text-white h-20">
        <p>Copyright ©2024 CodeXintern. </p>
      </div>
    </div>
  );
}

export default App