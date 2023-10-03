import React,{useEffect,useState} from 'react'
import axios from '../../axios'
import Youtube from 'react-youtube'
import './RowPost.css'
import {imagesUrl,API_KEY} from '../../constants/constants'
function RowPost(props) {
    const [movie, setmovies] = useState([])
    console.log(movie)
    const [urlId,setUrlId] = useState('')
    useEffect(() =>{
        axios.get(props.url).then(response =>{
            console.log(response.data)
            setmovies(response.data.results)
        })
        .catch(err=>{
            console.log(err.message)
        })
    },[])
    const opts = {
        height: '390',
        width: '100%',
        playerVars: {
          // https://developers.google.com/youtube/player_parameters
          autoplay: 1,
        },
      };
      const handleMovie = (id)=>{
        console.log(id)
        axios.get(`movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then((response) => {
            if (response.data.results.length !== 0) {
              setUrlId(response.data.results[0]);
            } else {
              console.log('array is empty')
            }
          })
        }

    
    return (
        <div className='row'>
            <h2>{props.title}</h2>
            <div className='posters'>
                
               {movie.map((Ob) =>
                <img onClick={() => handleMovie(Ob.id)} className={props.isSmall ? 'smallposter':'poster'} alt='poster' src={`${imagesUrl + Ob.backdrop_path}`} />

               )}
               
            </div>
            { urlId && <Youtube opts={opts} videoId={urlId.key}/>}
        </div>
    )
}


export default RowPost