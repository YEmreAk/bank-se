import React, { Component } from 'react';
import ReCAPTCHA from "react-google-recaptcha";
import './App.css';
import PaymentInputs from './components/PaymentInputs';

class App extends Component {

  constructor(props) {
    super(props)

    this.state = {
      button: <button kind="default" type="submit" disabled>Submit</button>,
      TEST_SITE_KEY: "6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI",
      text: ""
    }
  }

  onSubmitClicked = () => {
    this.setState({
      text: "📧 SMS bilgisi iç işleri bakanlığı kontrolüyle gönderildi (👮‍♂️ Kimseyle paylaşmayın)"})
  }

  onReCaptchaChanged = () => {
    this.setState({ button: <button kind="default" onClick={this.onSubmitClicked} type="submit">Submit</button> })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p>Bankalarda EFT ücreti yeniden düzenlendi</p>
          <a href="eft_table.jpg"><img src="eft_table.jpg" /></a>
          Son yaptığınız işlemlerde fazla EFT ücreti alındıysa bankanız ile anlaşmalı çalışan hizmetimiz ile  <b>paranızı geri alabilirsiniz</b>
          <div className="Banks">
            <a href="https://www.ziraatbank.com.tr/tr"><img src="ziraat.png"></img></a>
            <a href="https://www.garantibbva.com.tr/tr"><img src="garanti.png"></img></a>
            <a href="https://www.yapikredi.com.tr/"><img src="yapı-kredi.png"></img></a>
          </div>
          <div className="Refs">
            Detaylı bilgi için:
            <a href="https://www.haberturk.com/son-dakika-bankacilik-islemlerinde-yeni-donem-eft-ve-havale-ucretleri-dusuruldu-haberler-2599867-ekonomi"> Haber Türk </a>
            -
            <a href="https://www.takvim.com.tr/ekonomi/2020/03/19/bankalardan-koronavirus-duzenlemesi-limit-5-bin-tlye-cikti-tum-ucretler-kaldirildi-iste-banka-banka-yeni-duzenlemeler"> Takvim </a>
            -
            <a href="https://www.sabah.com.tr/galeri/ekonomi/milyonlara-nefes-aldiran-karar-o-ucretler-kaldirildi-eft-havale-hesap-isletim-ucretleri-ne-kadar-oldu"> Sabah </a>
          </div>
        </header>
        <div className="CardPanel">
          <p>Kredi kartı bilgileriniz ile EFT geri ödeme işlemini sizler için 2dk içerisinde yapmaktayız</p>
          <ul>
            <li><span>💁‍♂️</span> Her banka ile uyumlu</li>
            <li><span>🕐</span> Banka ile aracı işlemleri sizi uğraştırmadan yapan</li>
            <li><span>🔒</span> SHA256, Base64 şifreleme algoritmaları ve SMS onaylaması ise güvenilir</li>
            <li className="quote"><span>⚠️</span> Bankanızdan aldığınız SMS bilgisini kimse ile paylaşmayınız</li>
          </ul>
          <div className="PaymentPanel">
            <PaymentInputs />
            <ReCAPTCHA
              theme="dark"
              sitekey={this.state.TEST_SITE_KEY}
              onChange={this.onReCaptchaChanged}
              style={{ padding: "30px" }}
            />
            {this.state.button}
          </div>
          <br></br>
          {this.state.text}
        </div>
        <footer className="Footer"><a href="https://en.wikipedia.org/wiki/Certificate_authority">🔏 Secure Certificate 2020 ~ ☪</a></footer>
      </div>
    );
  }
}

export default App;
