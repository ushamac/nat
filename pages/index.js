import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Slider from "react-slick";

export default function Home() {

  var settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <>
      <section className='slsec'>

        <Slider {...settings}>
          <div className='banersl'>
            <img src="/assets/images/ba1.jpg" />
          </div>

          <div className='banersl'>
            <img src="/assets/images/ba2.jpg" />
          </div>

          <div className='banersl'>
            <img src="/assets/images/ba3.jpg" />
          </div>

          <div className='banersl'>
            <img src="/assets/images/ba4.jpg" />
          </div>
        </Slider>

      </section>

      <div className="ship_section layout_padding">
    <div className="container">
      <h1 className="ship_text">जॉब में क्या करना पड़ता है ?</h1>
      <p className="ship_taital">
      अगर आप घर बैठे जॉब करना चाहते हैं तो आपके लिए वेस्ट जॉब है, यह जॉब महिला/पुरुष, मैरिड / अनमैरिड कोई भी कर सकता है। इस जॉब में आपको पेंसिल पैकिंग का काम करना होता है,कंपनी से आपको खाली बॉक्स और पेंसिल आपके घर तक डिलीवरी कर दी जाएगी और आपको पेंसिल पैकिंग घर बैठे करना होता है। एक खाली डिब्बे में आपको 10 पीस पेंसिल भरना होता है, एक डिब्बे भरने का ₹6 कंपनी से मिलता है। इसी तरीके का कंपनी से आपको रबर, कटर, पेन और अन्य तरह का प्रोडक्ट आपको पैक करने के लिए कंपनी से दिया जाता है।यह जॉब करके आप आसानी से महीने का 25000 से ₹30000 इनकम कर सकते हैं।
      </p>
      <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
        <ol className="carousel-indicators">
          <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="3"></li>
        </ol>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <div className="image_1"><img src="/assets/images/sl1.png"/></div>
          </div>
          <div className="carousel-item">
            <div className="image_1"><img src="/assets/images/sl2.png"/></div>
          </div>
          <div className="carousel-item">
            <div className="image_1"><img src="/assets/images/sl3.png"/></div>
          </div>
          <div className="carousel-item">
            <div className="image_1"><img src="/assets/images/sl4.jpg"/></div>
          </div>
        </div>
      </div>
      <div className="seemore_main">
        <div className="seemore_bt"><a href="tel:9337920467">Call: 9337920467</a></div>
      </div>     
    </div>
  </div>
  
      <div className="rrrt">
        <div className="container">
          <div className="row">
          <div className="col-sm-12 text-center">
              <div><img src="/assets/images/pee.jpg" /></div>
            </div>
            <div className="col-sm-12 about_main">
              <h4 className="">Pencil Packing Job</h4>
              <p>10 Pencil = 1 Box<br></br>Packing Profit 1 Box = 6 ₹</p>
            </div>
            
          </div>
        </div>
      </div>


      <div className="contact_section layout_padding">
        <div className="container">
            <h1 className="requst_text">Requst A call for You</h1>
            <div className="contact_section_2">
                <div className="row">                   
                    <div className="col-md-6 padding_0">
                        <div className="address_main">
                            <div className="border_dotted">
                                <div className="map_text"><img src="/assets/images/map-icon.png"/><span className="map_icon">Address :
                                702 Western Express Highway, Sir Mathuradas Vasanji Rd, Junction, Mumbai, Maharashtra 400069</span></div>
                                <div className="map_text_2"><img src="/assets/images/call-icon.png"/><span className="map_icon">Phone : 9337920467</span></div>
                                <div className="map_text_2"><img src="/assets/images/email-icon.png"/><span className="map_icon">Email :
                                        natrajpen@gmail.com</span></div>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>


    </>
  )
}
