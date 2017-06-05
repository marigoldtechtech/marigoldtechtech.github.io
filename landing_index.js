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

   $(window).scrollTo(target, {duration:500, offset:-50});
}

function initNavLinks() {
   var allNavLinks = $('.nav_link_li');
   var clearActiveLink = function() {
      allNavLinks.removeClass('active');
   };

   $('#nav_home a').click(function() {
      clearActiveLink();
      $('#nav_home').addClass('active');
      scrollToSection('home');
   });

   $('#nav_pricing a').click(function() {
      clearActiveLink();
      $('#nav_pricing').addClass('active');
      scrollToSection('pricing');
   });

   $('#nav_contact a').click(function() {
      clearActiveLink();
      $('#nav_contact').addClass('active');
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
   $('#phones_logo').css('visibility', 'visible');
   $('#phones_logo').width(240);
}

function onNotPhoneScreen() {
   $('#phones_logo').css('visibility', 'hidden');
   $('#phones_logo').width(0);
}
