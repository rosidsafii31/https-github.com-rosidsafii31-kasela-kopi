import jQuery from 'jquery';
global.jQuery = jQuery;
global.$ = jQuery;
import { useEffect, } from "react";
import Link from 'next/link';

export async function getServerSideProps({ params: {id} }) {
  const res = await fetch(process.env.NEXT_PUBLIC_APIURL + `/products/${id}` );
  const produk = await res.json();
  
  return {
      props: {
         produk
      },
  }
}
export default function Pesananan({produk}) {
  useEffect(() =>{
    $('#noAdmin').val('0858-8662-4531');// Nomor Tujuan
    $('.whatsapp-btn').on("click",function () {
    $('#whatsapp').toggleClass('toggle');});
    // Fungsi Tombol Whatsapp Kirim!
        $('#whatsapp .submit').on("click",WhatsApp);
        $("#whatsapp input, #whatsapp textarea").keypress(function () {
          if (event.which == 13) WhatsApp();
        });
        var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    // Fungsi Data Tulisan yang dikirim
    function WhatsApp() {
          var ph = '';
          if ($('#whatsapp .nama').val() == '') { // Cek Nama
            ph = $('#whatsapp .nama').attr('placeholder');
            alert('Silahkan tulis ' + ph);
            $('#whatsapp .nama').triggerHandler("focus");
            return false;
          } else if ($('#whatsapp .namaproduk').val() == '') { // Cek namaproduk
            ph = $('#whatsapp .namaproduk').attr('placeholder');
            alert('Silahkan tulis ' + ph);
            $('#whatsapp .website').triggerHandler("focus");
            return false;
          } else if ($('#whatsapp .beratproduk').val() == '') { // Cek beratproduk
            ph = $('#whatsapp .beratproduk').attr('placeholder');
            alert('Silahkan tulis ' + ph);
            $('#whatsapp .website').triggerHandler("focus");
            return false;
          } else if ($('#whatsapp .hargaproduk').val() == '') { // Cek hargaproduk
            ph = $('#whatsapp .hargaproduk').attr('placeholder');
            alert('Silahkan tulis ' + ph);
            $('#whatsapp .website').triggerHandler("focus");
            return false;
          } else if ($('#whatsapp .jumlah').val() == '') { // Cek jumlah produk
            ph = $('#whatsapp .jumlah').attr('placeholder');
            alert('Silahkan tulis ' + ph);
            $('#whatsapp .website').triggerHandler("focus");
            return false;
          } else if ($('#whatsapp .email').val() == '') { // Cek email
            ph = $('#whatsapp .email').attr('placeholder');
            alert('Silahkan tulis ' + ph);
            $('#whatsapp .website').triggerHandler("focus");
            return false;
          } else if ($('#whatsapp .nomor').val() == '') { // Cek nomor
            ph = $('#whatsapp .nomor').attr('placeholder');
            alert('Silahkan tulis ' + ph);
            $('#whatsapp .nomor').triggerHandler("focus");
            return false;
          } else if 
           ($('#whatsapp .kota').val() == '') { // Cek kota
            ph = $('#whatsapp .kota').attr('placeholder');
            alert('Silahkan tulis ' + ph);
            $('#whatsapp .email').triggerHandler("focus");
            return false;
          } else if 
            ($('#whatsapp .licensi').val() == '') { // Cek licensi
            ph = $('#whatsapp .licensi').attr('placeholder');
            alert('Silahkan pilih ' + ph);
            $('#whatsapp .licensi').triggerHandler("focus");
            return false;
          } else if ($('#whatsapp .pembayaran').val() == '') { // Cek bayar
            ph = $('#whatsapp .pembayaran').attr('placeholder');
            alert('Silahkan pilih ' + ph);
            $('#whatsapp .pembayaran').triggerHandler("focus");
            return false;
          } else if ($('#whatsapp .informasi').val() == '') { // Cek dari
            ph = $('#whatsapp .informasi').attr('placeholder');
            alert('Silahkan pilih ' + ph);
            $('#whatsapp .informasi').triggerHandler("focus");
            return false;
          } else {
            // Check Device (Mobile/Desktop)
            var url_wa = 'https://web.whatsapp.com/send';
            if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
              url_wa = 'whatsapp://send/';
            }
            // Get Value
            var tujuan = $('#whatsapp .tujuan').val(),
              via_url = location.href,
              licensi =$('#whatsapp .licensi').val(),
              nama = $('#whatsapp .nama').val(),
              namaproduk = $('#whatsapp .namaproduk').val(),
              beratproduk = $('#whatsapp .beratproduk').val(),
              hargaproduk = $('#whatsapp .hargaproduk').val(),
              jumlah = $('#whatsapp .jumlah').val(),
              email = $('#whatsapp .email').val(),
              nomor = $('#whatsapp .nomor').val(),
              kota = $('#whatsapp .kota').val(),
              pembayaran = $('#whatsapp .pembayaran').val()
            $(this).attr('href', url_wa + '?phone=62 ' + tujuan + '&text=' +
                   ' Nama Produk : ' + namaproduk + '%0A' +
                   ' Berat Produk : ' + beratproduk + '%0A' +
                   ' Harga Produk : ' + hargaproduk + '%0A' +
                   ' Jumlah Pesanan : ' + jumlah + '%0A'+ 
                   '_ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _%0A' + 
                   ' Total Bayar : ' + 'Rp.'+ hargaproduk*jumlah + '%0A'+
                   ' Licensi: ' + licensi + '%0A' +
                   '_ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _%0A' +
                   ' Nama : ' + nama + '%0A'+ 
                   ' Email : ' + email + '%0A'+
                   ' Nomor WhatsApp : ' + nomor + '%0A'+
                   ' Kota : ' + kota + '%0A' +
                   '_ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _%0A' +
                   ' Metode Pembayaran : ' + pembayaran + '%0A' + 
                   ' Dari ' + via_url);
            var w = 960,
              h = 540,
              left = Number((screen.width / 2) - (w / 2)),
              tops = Number((screen.height / 2) - (h / 2)),
              popupWindow = window.open(this.href, '', 'toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=yes, resizable=1, copyhistory=no, width=' + w + ', height=' + h + ', top=' + tops + ', left=' + left);
                    popupWindow.focus();
            return false;
          }
        }//]]>
  }, []);

  return (
    <div className="popup-wrapper bg-halaman-pesanan" id="buyWhatsApp">
      <div className="popup-container">
        <div className="container-contact100">
          <div className="wrap-contact100">
            <div className="title-beli mb-2 ">
              <span className="data-form-title ">
                <i className="fab fa-whatsapp" /> Pesan via <b>WhatsApp</b>
              </span>
              <div className="flex mr-2">
                <Link href={`/produk/${produk.slug}`}>
                <a>
                  <button className="px-3 mt-1  bg-gray-dark hover:bg-gray  text-gray-lightest hover:text-gray-hitam  tracking-wider  rounded">
                    Close
                  </button>
                </a>
                </Link>
              </div>
            </div>

            {/*=== HTML Form WhatsApp | @rian_seo ===*/}
            <div className="data-form validate-form" id="whatsapp">
              
              {/*=== HTML Pilihan Pembayaran ===*/}
              <input className="tujuan " id="noAdmin" type="hidden" />
              <ul className="orderBank">
                {/*=== HTML Pilihan Produk ===*/}
                <section className=" tabs">
                  {/*=== HTML Pilihan (1) ===*/}
                  <input
                    selected="selected"
                    className=" tab-selector-1"
                    value="default"
                    id="tab-1"
                    name="radio-set"
                    type="radio"
                  />
                  <label className="  tab-label-1" htmlFor="tab-1">
                    Detail Produk
                  </label>
                  {/*=== HTML Data Produk ===*/}
                  <div className="content">
                    {/*=== HTML Produk (1) ===*/}
                    <div className=" content-1">
                      <span>
                        <b className=' '>Nama Produk :</b>
                      </span>
                      <select
                        className="namaproduk wajib  "
                        placeholder="Nama Produk"
                      >
                        <option
                          hidden="hidden"
                          selected="selected"
                          value="default"
                        >
                          Produk
                        </option>
                        {/*=== HTML Data Pembayaran ===*/}
                        <optgroup label="Pilih Produk">
                          <option value={produk.judulproduk}>
                            {produk.judulproduk}
                          </option>
                        </optgroup>
                      </select>
                      <span>
                        <b className=''>Berat Produk :</b>
                      </span>
                      <select
                        className="beratproduk wajib  "
                        placeholder="Nama Produk"
                      >
                        <option
                          hidden="hidden"
                          selected="selected"
                          value="default"
                        >
                          Berat
                        </option>
                        {/*=== HTML Data Pembayaran ===*/}
                        <optgroup label="Berat Produk">
                          <option value= {produk.berat}>
                            {produk.berat}
                          </option>
                        </optgroup>
                      </select>
                      <span>
                        <b className=''>Harga Produk :</b>
                      </span>
                      <select
                        className="hargaproduk wajib  "
                        placeholder="Nama Produk"
                      >
                        <option
                          hidden="hidden"
                          selected="selected"
                          value="default"
                        >
                          Harga
                        </option>
                        {/*=== HTML Data Pembayaran ===*/}
                        <optgroup label="Harga Produk">
                          <option value={produk.harga}>
                            {produk.harga}
                          </option>
                        </optgroup>
                      </select>
                      <span>
                        <b className=''>Jumlah Produk :</b>
                      </span>
                      <input
                    className="jumlah wajib  "
                    placeholder="Jumlah"
                    type="text"
                  />
                    </div>
                  </div>
                </section>
              </ul>
              <label className="formWhatsApp">
                <i className="fa fa-angle-down" />
                <select className="licensi wajib  " placeholder="Pembayaran">
                  <option hidden="hidden" selected="selected" value="default">
                    Pilih Pembayaran
                  </option>
                  {/*=== HTML Data Pembayaran ===*/}
                  <optgroup label="Pilih Pembayaran">
                    <option value="Nama Bank 1 | 1234567">
                      Nama Bank 1 | 123456789
                    </option>
                  </optgroup>
                </select>
              </label>
              {/*=== HTML Table Form Pesanan ===*/}
              <div className="gridWhatsApp">
                <label className="item">
                  {/*=== From Nama ===*/}
                  <i className="fa fa-user-circle" />
                  <input
                    className="nama wajib"
                    placeholder="Nama.."
                    type="text"
                  />
                </label>
                <label className="item">
                  {/*=== From Email ===*/}
                  <i className="fa fa-envelope" />
                  <input
                    className="email wajib"
                    placeholder="Email.."
                    type="text"
                  />
                </label>
              </div>
              <br />
              {/*=== HTML Table Form (2) ===*/}
              <div className="gridWhatsApp">
                <label className="item">
                  {/*=== From Nomor WhatsApp ===*/}
                  <i className="fab fa-whatsapp" />
                  <input
                    className="nomor wajib"
                    placeholder="WhatsApp.."
                    type="tel"
                  />
                </label>
                <label className="item">
                  {/*=== From Nama Kota ===*/}
                  <i className="fa fa-university" />
                  <input
                    className="kota wajib"
                    placeholder="Kota.."
                    type="url"
                  />
                </label>
              </div>
              {/*=== HTML Opsi Form Produk ===*/}
              <label className="formWhatsApp">
                <i className="fa fa-angle-down" />
                <select className="pembayaran wajib" placeholder="Pembayaran">
                  <option hidden="hidden" selected="selected" value="default">
                    Metode Pembayaran
                  </option>
                  <optgroup label="Pilihan Produk">
                    <option value="Transfer">Transfer</option>
                  </optgroup>
                </select>
              </label>
              <label className="formWhatsApp">
                <i className="fa fa-angle-down" />
              </label>
              <div className="sendWhatsApp">
                <div className="sendWAcolor">
                  <div className="sendWAbuttom">
                    <a
                      className="sendWAclik submit"
                      onClick="redirect(`/p/terimakasih.html`)"
                    >
                      Kirim
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}