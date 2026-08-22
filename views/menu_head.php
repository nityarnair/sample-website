<?php 
  // Determine current active route safely
  $current_uri = isset($this->uri) ? $this->uri->segment(1) : ''; 
?>
<!-- Modern Sticky Navigation Bar -->
<nav class="dyuti-navbar" role="navigation" aria-label="Main Conference Navigation">
    <div class="dyuti-container dyuti-nav-container">
        <!-- Mobile Brand Label & Toggle -->
        <div style="display: flex; align-items: center; justify-content: space-between; width: 100%;" class="visible-mobile-header">
            <a href="<?php echo base_url(); ?>" class="dyuti-mobile-brand" style="color: #ffffff; font-weight: 700; font-family: var(--dyuti-font-display); font-size: 1.1rem; text-decoration: none;">
                DYUTI 2027
            </a>
            <button type="button" class="dyuti-nav-toggle" aria-controls="dyuti-main-menu" aria-expanded="false">
                <i class="fa fa-bars" aria-hidden="true"></i>
            </button>
        </div>

        <!-- Navigation Links -->
        <ul id="dyuti-main-menu" class="dyuti-nav-links">
            <li>
                <a href="<?php echo base_url(); ?>" class="dyuti-nav-link <?php echo ($current_uri == '' || $current_uri == 'home') ? 'active' : ''; ?>">HOME</a>
            </li>
            <li>
                <a href="<?php echo base_url('rajagiri'); ?>" class="dyuti-nav-link <?php echo ($current_uri == 'rajagiri') ? 'active' : ''; ?>">RAJAGIRI</a>
            </li>
            <li>
                <a href="<?php echo base_url('call_for_papers'); ?>" class="dyuti-nav-link <?php echo ($current_uri == 'call_for_papers') ? 'active' : ''; ?>">CALL FOR PAPERS</a>
            </li>
            <li>
                <a href="<?php echo base_url('accomodation'); ?>" class="dyuti-nav-link <?php echo ($current_uri == 'accomodation') ? 'active' : ''; ?>">ACCOMMODATION</a>
            </li>
            <li>
                <a href="<?php echo base_url('attractions'); ?>" class="dyuti-nav-link <?php echo ($current_uri == 'attractions') ? 'active' : ''; ?>">ATTRACTIONS</a>
            </li>
            <li>
                <a href="<?php echo base_url('travel'); ?>" class="dyuti-nav-link <?php echo ($current_uri == 'travel') ? 'active' : ''; ?>">TRAVEL</a>
            </li>
            <li>
                <a href="<?php echo base_url('gallery'); ?>" class="dyuti-nav-link <?php echo ($current_uri == 'gallery') ? 'active' : ''; ?>">GALLERY</a>
            </li>
            <li>
                <a href="<?php echo base_url('contactus'); ?>" class="dyuti-nav-link <?php echo ($current_uri == 'contactus') ? 'active' : ''; ?>">CONTACT</a>
            </li>
            <li>
                <a href="https://forms.gle/XTZZmXS1tjkvfm9u6" target="_blank" rel="noopener noreferrer" class="dyuti-nav-link dyuti-nav-cta">
                    <i class="fa fa-pencil-square-o" aria-hidden="true"></i> REGISTRATION
                </a>
            </li>
        </ul>
    </div>
</nav>

<!-- Clean Accessible Announcement Ticker Bar -->
<div class="dyuti-announcement-bar" role="region" aria-label="Conference Announcements">
    <div class="dyuti-container dyuti-announcement-content">
        <span class="dyuti-announcement-badge">Update</span>
        <span>Registration begins from 10th August 2026 at Rajagiri College of Social Sciences (Autonomous), Kalamassery.</span>
    </div>
</div>
