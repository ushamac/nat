import Link from 'next/link'
import React from 'react'

function Footer() {
   return (
      <>
      <div className="copyright_section">
         <div className="container">
            <p className="copyright_text">Copyright © 2023 natrajpen.com</p>
      </div>
  </div >

<script async src='https://d2mpatx37cqexb.cloudfront.net/delightchat-whatsapp-widget/embeds/embed.min.js'></script>


<script
                    dangerouslySetInnerHTML={{
                        __html: `
                        var wa_btnSetting = {"btnColor":"#16BE45","ctaText":"WhatsApp Us","cornerRadius":40,"marginBottom":20,"marginLeft":20,"marginRight":20,"btnPosition":"right","whatsAppNumber":"9337920467","welcomeMessage":"Hello","zIndex":999999,"btnColorScheme":"light"};
  window.onload = () => {
    _waEmbed(wa_btnSetting);
  };
          `,
                    }}
                />
</>
    )
}

export default Footer