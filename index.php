<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>SAFAL KISWAHILI PRIZE</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>

        <div class="language-switch">
            <button >English</button>
            <a href="swahili"><button id="sw-button" class="language-button" onclick="showSwahili()">Kiswahili</button></a>
        </div>


    <!-- Header Section -->
    <header>
        <div class="logo">
            <!-- Adjusted logo with position -->
            <img src="img/LOGO.png" alt="Logo"  >
        </div>
        <!-- Search bar added -->
         
       
    </header>
    <div class="search-bar">
        <input type="text" id="search-input" placeholder="Search...">
        <button type="button" id="search-button">Search</button>
    </div>
    

    <!-- Main Content Container -->
    <div class="main-container">


        <div class="content-area">
            <!-- Content will be dynamically loaded here based on sidebar links -->
        </div>
        
        <!-- Sidebar (1/4 Width) -->
        <aside class="sidebar">
            <nav>
                <ul>
                    <li><a href="#" id="home-link" class="sidebar-link" data-content="content1">Home</a></li>

                    <li><a href="#" class="sidebar-link" data-content="content2">Update and Media</a></li>
                    <li><a href="#" class="sidebar-link" data-content="content3">Call for Submissions</a></li>
                    <li><a href="#" class="sidebar-link" data-content="content4">About the Prize</a></li>
                    <li><a href="#" class="sidebar-link" data-content="content5">Rules of Submission</a></li>
                    <li><a href="#" class="sidebar-link" data-content="content6">Awards Criteria</a></li>
                    <li><a href="#" class="sidebar-link" data-content="content7">Judges</a></li>
                    <li class="dropdown">
                        <a href="#" class="dropdown-toggle">Winners</a>
                        <ul class="dropdown-menu">
                          
                            <li><a href="#" class="sidebar-link" data-content="content18-2024">2024 Winners</a></li>
                            <li><a href="#" class="sidebar-link" data-content="content8-2023">2023 Winners</a></li>
                            <li><a href="#" class="sidebar-link" data-content="content9-2022">2022 Winners</a></li>
                            <li><a href="#" class="sidebar-link" data-content="content10-2021">2021 Winners</a></li>
                            <!--
                            <li><a href="#" class="sidebar-link" data-content="content11-2020">2020 Winners</a></li>
                            -->
                            <li><a href="#" class="sidebar-link" data-content="content12-2019">2019 Winners</a></li>
                            <li><a href="#" class="sidebar-link" data-content="content13-2018">2018 Winners</a></li>
                            <li><a href="#" class="sidebar-link" data-content="content15-2017">2017 Winners</a></li>
                            <li><a href="#" class="sidebar-link" data-content="content14-2016">2016 Winners</a></li>
                            <li><a href="#" class="sidebar-link" data-content="content16-2015">2015 Winners</a></li>
                        </ul>
                    </li>
                    
                    <li><a href="#" class="sidebar-link" data-content="content17">Trustees</a></li>
                    
                    <p>&nbsp;</p>
                    <p>&nbsp;</p>
                    <p>&nbsp;</p>
                    <p>&nbsp;</p>
                    <p>&nbsp;</p>
                    <p>&nbsp;</p>
                    <p>&nbsp;</p>
                    <p>&nbsp;</p>
                    <p>&nbsp;</p>
                    <!-- Add more links as needed -->
                </ul>
            </nav>
        </aside>

        <!-- Content Area (3/4 Width) -->
       
    </div>

    <footer>
  <div class="content">
    <div class="top">
      <div class="logo-details">
        <i class="fab fa-map-marker"></i>
      </div>
      <div class="media-icons">
        <a href="#"><i class="fab fa-facebook-f"></i></a>
        <a href="#"><i class="fab fa-twitter"></i></a>
        <a href="#"><i class="fab fa-instagram"></i></a>
        <a href="#"><i class="fab fa-linkedin-in"></i></a>
        <a href="#"><i class="fab fa-youtube"></i></a>
      </div>
    </div>
    <div class="link-boxes">
      <ul class="box">
        <li class="link_name">MEMBERS</li>
        <li><a href="https://www.safalgroup.com" target="_blank">Safal Group</a></li>
        <li><a href="https://www.alaf.co.tz" target="_blank">ALAF Limited</a></li>
        <li><a href="#">Safal ALAF Foundation</a></li>
        <li><a href="https://www.mabati.com" target="_blank">MRM Limited</a></li>
        <li><a href="https://www.safalmrmfoundation.org" target="_blank">Safal MRM Foundation</a></li>

      </ul>
      
      <ul class="box">
        <li class="link_name">SAFAL KISWAHILI PRIZE</li>
        <li><a href="#">Home</a></li>
        <li><a href="#">Submission</a></li>
        <li><a href="#">About Us</a></li>
        <li><a href="#">Contact Us</a></li>
      </ul>
      <ul class="box input-box">
        <li class="link_name">Join Our Team</li>
        <li><input type="text" placeholder="Enter your email"></li>
        <li><input type="button" value="Join"></li>
      </ul>
    </div>
  </div>
  <div class="bottom-details">
    <div class="bottom_text">
      <span class="copyright_text">Copyright &#169; 2026. All rights reserved</span>
      <span class="policy_terms">
        <a href="#">Privacy policy</a>
        <a href="#">Terms & condition</a>
      </span>
    </div>
  </div>
</footer>


    <script src="script.js"></script>
</body>
</html>
