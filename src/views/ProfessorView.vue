<template>
  <div class="professor-view">
    <PageBanner title="Principal Investigator" :subtitle="$t('header.nav.professor')" bgImage="Principal_banner.png" bgPosition="center center" />
    
    <div class="container py-5">
      
      <div class="hero-card mb-5 animate-fade-up">
        <div class="row g-0 align-items-center">
          <div class="col-md-4 col-lg-3">
            <div class="hero-img-container">
              <img src="@/assets/gemini_hsu_wen_chin.jpg" class="hero-img" alt="Prof. Wen-Chin Hsu">
            </div>
          </div>
          
          <div class="col-md-8 col-lg-9">
            <div class="hero-content p-4 p-lg-5">
              <div class="d-flex flex-column flex-md-row justify-content-between align-items-start">
                
                <div class="mb-4 mb-md-0">
                  <h1 class="chinese-name mb-1">許文錦 教授</h1>
                  <h3 class="english-name text-muted serif-font">Prof. Wen-Chin Hsu</h3>
                  <div class="title-badge mt-3">
                    <span class="badge rounded-pill bg-brown text-white px-3 py-2">
                      Ph.D. in Information Management, University of Sheffield
                    </span>
                  </div>
                </div>

                <div class="d-none d-lg-block decoration-icon opacity-50">
                  <i class="fas fa-seedling fa-3x text-brown"></i>
                </div>
              </div>

              <hr class="my-4 border-brown opacity-25">

              <div class="row contact-info-grid">
                <div class="col-lg-6 mb-2">
                  <i class="fas fa-university me-2 text-brown"></i>
                  <span>國立中央大學 資訊管理學系</span>
                </div>
                <div class="col-lg-6 mb-2">
                  <i class="fas fa-map-marker-alt me-2 text-brown"></i>
                  <span>管理二館 613 室</span>
                </div>
                <div class="col-lg-6 mb-2">
                  <i class="fas fa-phone me-2 text-brown"></i>
                  <span>(03) 422-7151 ext. 66500</span>
                </div>
                <div class="col-lg-6 mb-2">
                  <i class="fas fa-envelope me-2 text-brown"></i>
                  <a href="mailto:wchsu@mgt.ncu.edu.tw" class="text-dark text-decoration-none">wchsu@mgt.ncu.edu.tw</a>
                </div>
              </div>

              <div class="mt-4 text-end">
                <a href="https://im.mgt.ncu.edu.tw/teacher" target="_blank" class="btn btn-outline-brown rounded-pill px-4">
                  Department Profile <i class="fas fa-arrow-right ms-2"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="styled-container">
        <div class="details-section animate-fade-up">
        
          <div class="section-divider mb-5">
            <h2 class="serif-font text-center bg-white px-4 d-inline-block position-relative" style="z-index: 1;">
              Education and Experience
            </h2>
            <div class="divider-line"></div>
          </div>

          <div class="row justify-content-center">
            <div class="col-lg-10">
              
              <div class="mb-5">
                <h3 class="fw-bold mb-4 text-brown"><i class="fas fa-graduation-cap me-2"></i>學經歷 (Education & Experience)</h3>
                <div class="card border-0 shadow-sm p-4 education-card">
                  <ul class="list-unstyled mb-0 custom-list">
                    <li class="mb-3">
                      <i class="fas fa-chevron-right text-brown me-2"></i>
                      <strong>學歷：</strong> 英國雪菲爾大學 資訊管理博士
                    </li>
                    <li class="mb-3">
                      <i class="fas fa-chevron-right text-brown me-2"></i>
                      <strong>現職：</strong> 國立中央大學 管理學院資訊管理學系 教授
                    </li>
                    <li>
                      <i class="fas fa-chevron-right text-brown me-2"></i>
                      <strong>現職：</strong> 國立中央大學 國際經營管理碩士學位學程 主任
                    </li>
                  </ul>
                </div>
              </div>

              <div class="mb-5">
                <h3 class="fw-bold mb-4 text-brown"><i class="fas fa-medal me-2"></i>榮譽與獎項 (Awards & Honors)</h3>
                <div class="card border-0 shadow-sm p-4">
                  <p class="text-muted mb-0">待新增.....</p>
                </div>
              </div>

              <div class="mb-5">
                <h3 class="fw-bold mb-4 text-brown"><i class="fas fa-project-diagram me-2"></i>研究計畫 (Research Projects)</h3>
                <div class="table-responsive">
                  <table class="table table-hover align-middle project-table shadow-sm">
                    <thead class="bg-brown text-white">
                      <tr>
                        <th style="width: 80px;">年度</th>
                        <th>研究計畫名稱</th>
                        <th style="width: 120px;">經費</th>
                        <th style="width: 150px;">補助單位</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td class="fw-bold">2012</td>
                        <td>Using Data Mining techniques to identify associations and patterns of health care use among older people in Taiwan</td>
                        <td class="text-end">100,000</td>
                        <td>中央大學</td>
                      </tr>
                      <tr>
                        <td class="fw-bold">2015</td>
                        <td>以病患觀點探討看診輔助系統建置之研究</td>
                        <td class="text-end">331,000</td>
                        <td>科技部</td>
                      </tr>
                      <tr>
                        <td class="fw-bold">2016</td>
                        <td>醫療大數據研究趨勢分析</td>
                        <td class="text-end">423,000</td>
                        <td>科技部</td>
                      </tr>
                      <tr>
                        <td class="fw-bold">2019</td>
                        <td>智慧衛教專家系統之研究</td>
                        <td class="text-end">494,000</td>
                        <td>科技部</td>
                      </tr>
                      <tr>
                        <td class="fw-bold">2021</td>
                        <td>智慧衛教謠言檢測之研究</td>
                        <td class="text-end">573,000</td>
                        <td>科技部</td>
                      </tr>
                      <tr>
                        <td class="fw-bold">2023</td>
                        <td>智慧型服務信任與知覺價值模型建置與驗證:以復健醫療為例</td>
                        <td class="text-end">500,000</td>
                        <td>科技部</td>
                      </tr>
                      <tr>
                        <td class="fw-bold">2024</td>
                        <td>以雙因子觀點探討病患對創新醫療技術的接受與抗拒</td>
                        <td class="text-end">500,000</td>
                        <td>科技部</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
import PageBanner from '@/components/PageBanner.vue'

export default {
  name: 'ProfessorView',
  components: { PageBanner }
}
</script>

<style scoped>
/* Color Variables (Simulation) */
.text-brown { color: #5D4037; }
.bg-brown { background-color: #5D4037; }
.border-brown { border-color: #5D4037; }
.serif-font { font-family: 'Georgia', 'Times New Roman', serif; }

/* 1. Hero Card Styling (The Top Horizontal Box) */
.hero-card {
  background-color: #FAF9F6; /* 暖米色背景 */
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 15px 35px rgba(0,0,0,0.05);
  border: 1px solid rgba(0,0,0,0.02);
}

.hero-img-container {
  height: 100%;
  min-height: 350px;
  overflow: hidden;
  position: relative;
}

.hero-img {
  width: 100%;
  height: 100%;
  object-fit: cover; /* 讓圖片填滿區域 */
  object-position: top center;
  transition: transform 0.5s ease;
}

.hero-card:hover .hero-img {
  transform: scale(1.02);
}

.chinese-name {
  font-weight: 800;
  color: #333;
  letter-spacing: 2px;
}

.english-name {
  color: #6d4c41;
}

/* Button Customization */
.btn-outline-brown {
  color: #5D4037;
  border-color: #5D4037;
}
.btn-outline-brown:hover {
  background-color: #5D4037;
  color: #fff;
}

/* 2. Section Divider (Education and Experience Title) */
.section-divider {
  position: relative;
  text-align: center;
  margin-top: 2rem;
}

.styled-container {
  background-color: #fff; /* White background for the card */
  border-radius: 12px;
  padding: 2rem 3rem;
  box-shadow: 0 8px 25px rgba(0,0,0,0.05);
  border: 1px solid rgba(0,0,0,0.03);
}
.divider-line {
  position: absolute;
  top: 50%;
  left: 0;
  width: 100%;
  height: 1px; /* Make the line thinner */
  background-color: rgba(93, 64, 55, 0.2); /* Lighter, semi-transparent brown */
  z-index: 0;
}

.section-divider h2 {
  border: 2px solid #5D4037;
  padding: 10px 30px;
  border-radius: 4px;
  color: #5D4037;
  font-weight: bold;
}

.education-card {
  border-left: 5px solid #5D4037 !important;
}

.custom-list li {
  font-size: 1.1rem;
  color: #444;
}

/* Project Table */
.project-table {
  background: white;
  border-radius: 8px;
  overflow: hidden;
  border-collapse: separate;
  border-spacing: 0;
}

.project-table thead th {
  padding: 15px;
  font-weight: 600;
  border: none;
}

.project-table tbody td {
  padding: 15px;
  border-bottom: 1px solid #f0f0f0;
}

.project-table tbody tr:last-child td {
  border-bottom: none;
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .hero-img-container {
    min-height: 250px;
  }
  .contact-info-grid {
    font-size: 0.9rem;
  }
}
</style>