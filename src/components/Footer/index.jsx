import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./index.scss";

import {
  AiFillFacebook,
  AiFillInstagram,
  AiFillLinkedin,
  AiFillTwitterSquare,
  AiFillYoutube,
} from "react-icons/ai";

import { BsTelegram, BsTwitch } from "react-icons/bs";

const index = () => {
  return (
    <>
      <footer className="mt-5">
        <Container fluid="xxl">
          <Row xs={2} sm={3} lg={5}>
            <Col className="footer-col">
              <img
                src="https://cdn.bynogame.com/UX-new/bynogame-footer-logo/png/bynogame-footer-logo.png"
                alt="Logo"
              />
              <p className="footer-info-text">ByNoGame Bilişim LTD.</p>
              <p className="footer-info-text">Bilgi: info@bynogame.com</p>
              <p className="footer-info-text">Yardım: destek2@bynogame.com</p>
              <p className="footer-info-text">
                Tel: 09.00-18.00 / +90850 600 00 30
              </p>
              <div className="icons-container">
                <AiFillFacebook className="second-footer-icon" />
                <AiFillInstagram className="second-footer-icon" />
                <AiFillTwitterSquare className="second-footer-icon" />
                <BsTelegram className="second-footer-icon" />
                <BsTwitch className="second-footer-icon" />
                <AiFillYoutube className="second-footer-icon" />
                <AiFillLinkedin className="second-footer-icon" />
              </div>
            </Col>
            <Col className="footer-col">
              <h5 className="footer-title">BYNOGAME</h5>
              <div>
                <p className="footer-link">Hakkımızda</p>
                <p className="footer-link">Aktiviteler</p>
                <p className="footer-link">Kariyer</p>
                <p className="footer-link">Sponsorlar</p>
                <p className="footer-link">Logolar</p>
              </div>
            </Col>
            <Col className="footer-col">
              <h5 className="footer-title">ALIŞVERİŞ</h5>
              <div>
                <p className="footer-link">Ödeme Seçenekleri</p>
                <p className="footer-link">Destekle</p>
                <p className="footer-link">Hollyhood</p>
              </div>
            </Col>
            <Col className="footer-col">
              <h5 className="footer-title">ÜYELİK</h5>

              <div>
                <p className="footer-link">Kullanıcı Adı/Şifre Unuttum</p>
                <p className="footer-link">Bilgilerim</p>
                <p className="footer-link">Destek Taleplerim</p>
                <p className="footer-link">Siparişlerim</p>
                <p className="footer-link">Hesap Silme</p>
              </div>
            </Col>
            <Col className="footer-col">
              <h5 className="footer-title">YARDIM</h5>

              <div>
                <p className="footer-link">Yardım Merkezi</p>
                <p className="footer-link">İletişim</p>
              </div>
            </Col>
          </Row>
        </Container>
      </footer>
      <div className="second-footer">
        <p className="second-footer-link">Gizlilik Sözleşmesi</p>
        <p className="second-footer-link">Üyelik ve Hizmet Alım Sözleşmesi</p>
        <p className="second-footer-link">Hizmet Alım-Satım Sözleşmesi</p>
        <p className="second-footer-link">Aydınlatma Metni</p>
        <p className="second-footer-link">Gizlilik Sözleşmesi</p>
      </div>
    </>
  );
};

export default index;
