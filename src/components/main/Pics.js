import axios from 'axios';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { setFlickr } from '../../redux/actions';

function Pics() {
    const flickr = useSelector(state => state);
    const dispatch = useDispatch();
    const picData = flickr.flickrReducer.flickr;

    const api_key = "e7ed3b39fe112d7e93d03c19325305e0";
    const url = `https://www.flickr.com/services/rest/?method=flickr.interestingness.getList&api_key=${api_key}&per_page=100&format=json&nojsoncallback=1`;

    const fetchFlickr = async () => {
        const response = await axios
            .get(url)
            .catch(err => console.error(err))

        dispatch(setFlickr(response.data.photos.photo));
    }

    useEffect(() => {
        fetchFlickr();
    }, []);

    return (
        <section id="pics" className='myScroll'>
            <div className="inner">
                <h2>Recent Gallery</h2>
                <div className="picBox">
                    {
                        picData.map((pic, index) => {
                            const imgSrc = `https://live.staticflickr.com/${pic.server}/${pic.id}_${pic.secret}_m.jpg`;

                            if (index < 5) {
                                return (
                                    <img key={index} src={imgSrc} />
                                )
                            }
                        })
                    }
                </div>
            </div>
        </section>
    )
}

export default Pics;