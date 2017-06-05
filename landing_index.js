function main() {
   // Initialize the navbar links:
   initNavLinks();
   initScreenSizeHandlers();
}

/**
 * Scrolls to the given section. The section must be one of:
 * - home
 * - pricing
 * - contact
 */
function scrollToSection(section) {
   var target = null;
   switch (section) {
      case 'home': {
         target = 0;
         break;
      }
      case 'pricing': {
         target = $('#pricing_section');
         break;
      }
      case 'contact': {
         target = 'max';
         break;
      }
      default: {
         target = 0;
      }
   }

   $(window).scrollTo(target, {duration:500, offset:-90});
}

function initNavLinks() {
   var navCollapse = $('#main_navbar_collapse');
   var allNavLinks = $('.nav_link_li');
   var clearActiveLink = function() {
      allNavLinks.removeClass('active');
   };

   $('.nav_link_li>a').click(function() {
      clearActiveLink();
      navCollapse.collapse('hide');
   });

   $('#nav_home a').click(function() {
      $('#nav_home').addClass('active');
      scrollToSection('home');
   });

   $('#nav_pricing a').click(function() {
      $('#nav_pricing').addClass('active');
      scrollToSection('pricing');
   });

   $('#nav_contact a').click(function() {
      $('#nav_contact').addClass('active');
      scrollToSection('contact');
   });

   $('#nav_dropdown a').click(function() {
      $('#nav_dropdown').addClass('active');
      scrollToSection('contact');
   });
}

function initScreenSizeHandlers() {
   var checkPhoneScreen = function() {
      var width = $(window).width();
      if (width <= 767) {
         onPhoneScreen();
      } else {
         onNotPhoneScreen();
      }
   };
   $(window).on('resize', checkPhoneScreen);
   checkPhoneScreen();
}

function onPhoneScreen() {
}

function onNotPhoneScreen() {
}
