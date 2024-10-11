<template>
  <footer class="footer_area section_padding_130_0">
    <div class="container">
      <div class="row">
        <!-- Single Widget-->
        <div class="col-12 col-sm-6 col-lg-4">
          <div class="single-footer-widget section_padding_0_130">
            <!-- Footer Logo-->
            <div class="mb-3 footer-logo"></div>
            <p><strong>기관별 연락처</strong></p>
            <!-- Copywrite Text-->
            <div class="mb-5 copywrite-text">
              <p class="mb-0">
                개인정보처리방침 홈페이지 이용약관 품질오류신고 및 확인
                <!-- Made with <i class="mr-1 lni-heart"></i> by -->
                <!-- <a
                  class="ml-1"
                  href="https://wrapbootstrap.com/user/DesigningWorld"
                  >Designing World</a
                > -->
              </p>
            </div>
            <!-- Footer Social Area-->
            <div class="footer_social_area">
              <a
                href="#"
                data-toggle="tooltip"
                data-placement="top"
                title="Facebook"
              >
                <i class="fa fa-facebook"></i>
              </a>
              <a
                href="#"
                data-toggle="tooltip"
                data-placement="top"
                title="Pinterest"
              >
                <i class="fa fa-pinterest"></i>
              </a>
              <a
                href="#"
                data-toggle="tooltip"
                data-placement="top"
                title="Skype"
              >
                <i class="fa fa-skype"></i>
              </a>
              <a
                href="#"
                data-toggle="tooltip"
                data-placement="top"
                title="Twitter"
              >
                <i class="fa fa-twitter"></i>
              </a>
            </div>
          </div>
        </div>
        <!-- Single Widget-->
        <div class="col-12 col-sm-6 col-lg">
          <div class="single-footer-widget section_padding_0_130">
            <!-- Widget Title-->
            <h5 class="widget-title">About</h5>
            <!-- Footer Menu-->
            <div class="footer_menu">
              <ul>
                <li><a href="#">About Us</a></li>
                <li><a href="#">Corporate Sale</a></li>
                <li><a href="#">Terms &amp; Policy</a></li>
                <li><a href="#">Community</a></li>
              </ul>
            </div>
          </div>
        </div>
        <!-- Single Widget-->
        <div class="col-12 col-sm-6 col-lg">
          <div class="single-footer-widget section_padding_0_130">
            <!-- Widget Title-->
            <h5 class="widget-title">Support</h5>
            <!-- Footer Menu-->
            <div class="footer_menu">
              <ul>
                <li><a href="#">Help</a></li>
                <li><a href="#">Support</a></li>
                <li><a href="#">Privacy Policy</a></li>
                <li><a href="#">Term &amp; Conditions</a></li>
                <li><a href="#">Help &amp; Support</a></li>
              </ul>
            </div>
          </div>
        </div>
        <!-- Single Widget-->
        <div class="col-12 col-sm-6 col-lg">
          <div class="single-footer-widget section_padding_0_130">
            <!-- Widget Title-->
            <h5 class="widget-title">Contact</h5>
            <!-- Footer Menu-->
            <div class="footer_menu">
              <ul>
                <li><a href="#">Call Centre</a></li>
                <li><a href="#">Email Us</a></li>
                <li><a href="#">Term &amp; Conditions</a></li>
                <li><a href="#">Help Center</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "FooterComponent"
}
</script>

<style scoped>
.footer_area {
  background-color: #dfdee0;
  padding: 20px 0;
}

.container {
  max-width: 1080px;
  margin: 0 auto;
}

.text-center {
  text-align: center;
}

.footer_social_area a {
  display: inline-block;
  margin: 0 10px;
  color: #000; /* Social icons color */
}

.footer_menu ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.footer_menu ul li {
  margin-bottom: 10px;
}

.footer_menu ul li a {
  color: #000; /* Link color */
  text-decoration: none;
}

.footer_menu ul li a:hover {
  text-decoration: underline;
}

.widget-title {
  margin-bottom: 20px;
}

strong {
  font-weight: 800;
}

.footer_menu,
h5.widget-title {
  display: none;
}
</style>
