function debounce(func, wait) {
  let timeout;
  return function() {
    const context = this;
    const args = arguments;
    if (!timeout) {
      timeout = setTimeout(function() {
        timeout = null;
        func.apply(context, args);
      }, wait);
    }
  }
}

(function () {
  Revolvapp.add("plugin", "templates", {
    start: function () {
      this.app.toolbar.add("templates", {
        title: "Templates",
        icon: '<img src="https://peoplevine.blob.core.windows.net/media/1087/templates.png" alt="">',
        command: "templates.popup",
        position: "first",
      });
    },
    translations: {
      en: {
        style: {
          style: "Style",
          "remove-style": "Remove Style",
        },
      },
    },
    defaults: {
      icon: '<svg height="16" viewBox="0 0 16 16" width="16" xmlns="http://www.w3.org/2000/svg"><path d="m15 1c-3.5955345 2.88454776-5.25146525 9.6241453-7.87485347 9.6241453h-2.6253419l-2.62495116 4.3758547h-.87485347c1.75009768-5.25102559 6.33028189-14 14-14z"/></svg>',
      styles: false,
    },
    popups: {
      base: {
        left: 0,
        width: "500px",
        title: "Templates",
        builder: "templates.buildItems",
      },
    },
    init: function () {
      this.activeItem = null;
      this.activeType = null;
      this.activeName = null;
      this._createModal(this);
    },
    popup: function (params, button) {
      this.app.popup.create("templates", this.popups.base);
      this.app.popup.open({ button: button });
    },
    set: function (params, button, name) {
      this.app.popup.close();

      this.app.toolbar.build();
    },
    buildItems: function (stack) {
      const templateData = [
        {
          name: "General",
          url: "./templates/Simple Theme/general.html",
          description: "A general template.",
          image: "/img/general.png",
          type: "templates",
          tags: ["Marketing", "Responsive", "Newsletter", "Promotion", "Responsive", "Newsletter", "Promotion"],
          saved: false,
        },
        {
          name: "General",
          url: "./templates/Soft Theme/general.html",
          description: "A general template.",
          image: "/img/general-soft.png",
          type: "templates",
          tags: ["Marketing", "Responsive", "Newsletter", "Promotion", "Responsive", "Newsletter", "Promotion"],
          saved: false,
        },
        {
          name: "General",
          url: "./templates/Grah Theme/general.html",
          description: "A general template.",
          image: "/img/general-grah.png",
          type: "templates",
          tags: ["Marketing", "Responsive", "Newsletter", "Promotion", "Responsive", "Newsletter", "Promotion"],
          saved: false,
        },
        {
          name: "Pending Invoice",
          url: "./templates/Simple Theme/pending-invoice.html",
          description: "A simple invoice template.",
          image: "/img/pending-invoice.png",
          type: "templates",
          tags: ["Billing", "Professional", "Invoice", "Payment"],
          saved: false,
        },
        {
          name: "Pending Invoice",
          url: "./templates/Soft Theme/pending-invoice.html",
          description: "A soft invoice template.",
          image: "/img/pending-invoice-soft.png",
          type: "templates",
          tags: ["Billing", "Professional", "Invoice", "Payment"],
          saved: false,
        },
        {
          name: "Pending Invoice",
          url: "./templates/Grah Theme/pending-invoice.html",
          description: "A grah invoice template.",
          image: "/img/pending-invoice-grah.png",
          type: "templates",
          tags: ["Billing", "Professional", "Invoice", "Payment"],
          saved: false,
        },
        {
          name: "Welcome",
          url: "./templates/Simple Theme/welcome.html",
          description: "Welcome members to their new membership.",
          image: "/img/welcome.png",
          type: "templates",
          tags: ["Membership", "Warm", "Onboarding", "Greeting"],
          saved: false,
        },
        {
          name: "Welcome",
          url: "./templates/Soft Theme/welcome.html",
          description: "Welcome members to their new membership.",
          image: "/img/welcome-soft.png",
          type: "templates",
          tags: ["Membership", "Warm", "Onboarding", "Greeting"],
          saved: false,
        },
        {
          name: "Welcome",
          url: "./templates/Grah Theme/welcome.html",
          description: "Welcome members to their new membership.",
          image: "/img/welcome-grah.png",
          type: "templates",
          tags: ["Membership", "Warm", "Onboarding", "Greeting"],
          saved: false,
        },
        {
          name: "Upcoming Events",
          url: "./templates/Simple Theme/upcoming-events.html",
          description: "A simple upcoming events template.",
          image: "/img/upcoming-events.png",
          type: "templates",
          tags: ["Warm", "Responsive", "Newsletter", "Greeting"],
          saved: false,
        },
        {
          name: "Upcoming Events",
          url: "./templates/Soft Theme/upcoming-events.html",
          description: "A soft upcoming events template.",
          image: "/img/upcoming-events-soft.png",
          type: "templates",
          tags: ["Warm", "Responsive", "Newsletter", "Greeting"],
          saved: false,
        },
        {
          name: "Upcoming Events",
          url: "./templates/Grah Theme/upcoming-events.html",
          description: "A grah upcoming events template.",
          image: "/img/upcoming-events-grah.png",
          type: "templates",
          tags: ["Warm", "Responsive", "Newsletter", "Greeting"],
          saved: false,
        },
        {
          name: "Event Confirmation",
          url: "./templates/Simple Theme/event-confirmation.html",
          description: "A simple event confirmation template.",
          image: "/img/event-confirmation.png",
          type: "templates",
          tags: ["Billing", "Payment", "Newsletter", "Professional"],
          saved: false,
        },
        {
          name: "Event Confirmation",
          url: "./templates/Soft Theme/event-confirmation.html",
          description: "A soft event confirmation template.",
          image: "/img/event-confirmation-soft.png",
          type: "templates",
          tags: ["Billing", "Payment", "Newsletter", "Professional"],
          saved: false,
        },
        {
          name: "Event Confirmation",
          url: "./templates/Grah Theme/event-confirmation.html",
          description: "A grah event confirmation template.",
          image: "/img/event-confirmation-grah.png",
          type: "templates",
          tags: ["Billing", "Payment", "Newsletter", "Professional"],
          saved: false,
        },
        {
          name: "Download Membership",
          url: "./templates/Simple Theme/download-membership.html",
          description: "A simple download membership template.",
          image: "/img/download-membership.png",
          type: "templates",
          tags: ["Membership", "Invoice", "Newsletter", "Professional"],
          saved: false,
        },
        {
          name: "Download Membership",
          url: "./templates/Soft Theme/download-membership.html",
          description: "A soft download membership template.",
          image: "/img/download-membership-soft.png",
          type: "templates",
          tags: ["Membership", "Invoice", "Newsletter", "Professional"],
          saved: false,
        },
        {
          name: "Download Membership",
          url: "./templates/Grah Theme/download-membership.html",
          description: "A grah download membership template.",
          image: "/img/download-membership-grah.png",
          type: "templates",
          tags: ["Membership", "Invoice", "Newsletter", "Professional"],
          saved: false,
        },
        {
          name: "Invoice Paid",
          url: "./templates/Simple Theme/invoice-paid.html",
          description: "A simple invoice paid template.",
          image: "/img/invoice-paid.png",
          type: "templates",
          tags: ["Billing", "Payment", "Newsletter", "Professional"],
          saved: false,
        },
        {
          name: "Invoice Paid",
          url: "./templates/Soft Theme/invoice-paid.html",
          description: "A soft invoice paid template.",
          image: "/img/invoice-paid-soft.png",
          type: "templates",
          tags: ["Billing", "Payment", "Newsletter", "Professional"],
          saved: false,
        },
        {
          name: "Invoice Paid",
          url: "./templates/Grah Theme/invoice-paid.html",
          description: "A grah invoice paid template.",
          image: "/img/invoice-paid-grah.png",
          type: "templates",
          tags: ["Billing", "Payment", "Newsletter", "Professional"],
          saved: false,
        },
        {
          name: "Dining Promo",
          url: "./templates/Simple Theme/dining-promo.html",
          description: "Whet appetites and boost sales with our Dining Promo template. Tempting offers and savory deals await your customers. Perfect for restaurants and food businesses looking to entice diners.",
          image: "/img/dining-promo.png",
          type: "templates",
          tags: ["DiningPromotion", "RestaurantPromo", "FoodDeals", "CulinaryOffer"],
          saved: false,
        },
        {
          name: "Dining Promo",
          url: "./templates/Soft Theme/dining-promo.html",
          description: "Whet appetites and boost sales with our Dining Promo template. Tempting offers and savory deals await your customers. Perfect for restaurants and food businesses looking to entice diners.",
          image: "/img/dining-promo-soft.png",
          type: "templates",
          tags: ["DiningPromotion", "RestaurantPromo", "FoodDeals", "CulinaryOffer"],
          saved: false,
        },
        {
          name: "Dining Promo",
          url: "./templates/Grah Theme/dining-promo.html",
          description: "Whet appetites and boost sales with our Dining Promo template. Tempting offers and savory deals await your customers. Perfect for restaurants and food businesses looking to entice diners.",
          image: "/img/dining-promo-grah.png",
          type: "templates",
          tags: ["DiningPromotion", "RestaurantPromo", "FoodDeals", "CulinaryOffer"],
          saved: false,
        },
        {
          name: "Refer a Friend",
          url: "./templates/Simple Theme/refer-friend.html",
          description: "Encourage referrals from your customers.",
          image: "/img/refer-friend.png",
          type: "templates",
          tags: ["Referral", "Friend", "Promotion", "Campaign"],
          saved: false,
        },
        {
          name: "Refer a Friend",
          url: "./templates/Soft Theme/refer-friend.html",
          description: "Encourage referrals from your customers.",
          image: "/img/refer-friend-soft.png",
          type: "templates",
          tags: ["Referral", "Friend", "Promotion", "Campaign"],
          saved: false,
        },
        {
          name: "Refer a Friend",
          url: "./templates/Grah Theme/refer-friend.html",
          description: "Encourage referrals from your customers.",
          image: "/img/refer-friend-grah.png",
          type: "templates",
          tags: ["Referral", "Friend", "Promotion", "Campaign"],
          saved: false,
        },
        {
          name: "Spa Service Promo",
          url: "./templates/Simple Theme/spa-service-promo.html",
          description: "Relax, rejuvenate, and save with our Spa Service Promo template. Highlight your spa's luxurious offerings and entice clients to pamper themselves. Ideal for promoting spa packages, massages, and self-care experiences.",
          image: "/img/spa-service-promo.png",
          type: "templates",
          tags: ["Spa", "Wellness", "Promotion", "Self-Care"],
          saved: false,
        },
        {
          name: "Spa Service Promo",
          url: "./templates/Soft Theme/spa-service-promo.html",
          description: "Relax, rejuvenate, and save with our Spa Service Promo template. Highlight your spa's luxurious offerings and entice clients to pamper themselves. Ideal for promoting spa packages, massages, and self-care experiences.",
          image: "/img/spa-service-promo-soft.png",
          type: "templates",
          tags: ["Spa", "Wellness", "Promotion", "Self-Care"],
          saved: false,
        },
        {
          name: "Spa Service Promo",
          url: "./templates/Grah Theme/spa-service-promo.html",
          description: "Relax, rejuvenate, and save with our Spa Service Promo template. Highlight your spa's luxurious offerings and entice clients to pamper themselves. Ideal for promoting spa packages, massages, and self-care experiences.",
          image: "/img/spa-service-promo-grah.png",
          type: "templates",
          tags: ["Spa", "Wellness", "Promotion", "Self-Care"],
          saved: false,
        },
        {
          name: "Guest Pass Received",
          url: "./templates/Simple Theme/guest-pass-received.html",
          description: "Notify guests that their pass has been received for an upcoming event.",
          image: "/img/guest-pass-received.png",
          type: "templates",
          tags: ["Event", "Guest Pass", "Notification"],
          saved: false
        },
        {
          name: "Guest Pass Received",
          url: "./templates/Soft Theme/guest-pass-received.html",
          description: "Notify guests that their pass has been received for an upcoming event.",
          image: "/img/guest-pass-received-soft.png",
          type: "templates",
          tags: ["Event", "Guest Pass", "Notification"],
          saved: false
        },
        {
          name: "Guest Pass Received",
          url: "./templates/Grah Theme/guest-pass-received.html",
          description: "Notify guests that their pass has been received for an upcoming event.",
          image: "/img/guest-pass-received-grah.png",
          type: "templates",
          tags: ["Event", "Guest Pass", "Notification"],
          saved: false
        },
        {
          name: "Order Confirmation",
          url: "./templates/Simple Theme/order-confirmation.html",
          description: "Confirm the details of an order placed by a customer.",
          image: "/img/order-confirmation.png",
          type: "templates",
          tags: ["Order", "Confirmation", "Shopping", "Receipt"],
          saved: false
        },
        {
          name: "Order Confirmation",
          url: "./templates/Soft Theme/order-confirmation.html",
          description: "Confirm the details of an order placed by a customer.",
          image: "/img/order-confirmation-soft.png",
          type: "templates",
          tags: ["Order", "Confirmation", "Shopping", "Receipt"],
          saved: false
        },
        {
          name: "Order Confirmation",
          url: "./templates/Grah Theme/order-confirmation.html",
          description: "Confirm the details of an order placed by a customer.",
          image: "/img/order-confirmation-grah.png",
          type: "templates",
          tags: ["Order", "Confirmation", "Shopping", "Receipt"],
          saved: false
        },
        {
          name: "Pre-Arrival Confirmation",
          url: "./templates/Simple Theme/pre-arrival-confirmation.html",
          description: "Confirm a guest's upcoming arrival and provide essential information.",
          image: "/img/pre-arrival-confirmation.png",
          type: "templates",
          tags: ["Pre-Arrival", "Confirmation", "Guest Information", "Travel"],
          saved: false
        },
        {
          name: "Pre-Arrival Confirmation",
          url: "./templates/Soft Theme/pre-arrival-confirmation.html",
          description: "Confirm a guest's upcoming arrival and provide essential information.",
          image: "/img/pre-arrival-confirmation-soft.png",
          type: "templates",
          tags: ["Pre-Arrival", "Confirmation", "Guest Information", "Travel"],
          saved: false
        },
        {
          name: "Pre-Arrival Confirmation",
          url: "./templates/Grah Theme/pre-arrival-confirmation.html",
          description: "Confirm a guest's upcoming arrival and provide essential information.",
          image: "/img/pre-arrival-confirmation-grah.png",
          type: "templates",
          tags: ["Pre-Arrival", "Confirmation", "Guest Information", "Travel"],
          saved: false
        },
        {
          name: "Update Payment on File",
          url: "./templates/Simple Theme/update-payment.html",
          description: "Notify customers to update their payment information on file for future transactions.",
          image: "/img/update-payment.png",
          type: "templates",
          tags: ["Payment", "Update", "Billing", "Transaction"],
          saved: false
        },
        {
          name: "Update Payment on File",
          url: "./templates/Soft Theme/update-payment.html",
          description: "Notify customers to update their payment information on file for future transactions.",
          image: "/img/update-payment-soft.png",
          type: "templates",
          tags: ["Payment", "Update", "Billing", "Transaction"],
          saved: false
        },
        {
          name: "Update Payment on File",
          url: "./templates/Grah Theme/update-payment.html",
          description: "Notify customers to update their payment information on file for future transactions.",
          image: "/img/update-payment-grah.png",
          type: "templates",
          tags: ["Payment", "Update", "Billing", "Transaction"],
          saved: false
        },
        {
          name: "Reservation Confirmation",
          url: "./templates/Simple Theme/reservation-confirmation.html",
          description: "Confirm a reservation and provide details to the guest.",
          image: "/img/reservation-confirmation.png",
          type: "templates",
          tags: ["Reservation", "Confirmation", "Travel", "Booking"],
          saved: false
        },
        {
          name: "Reservation Confirmation",
          url: "./templates/Soft Theme/reservation-confirmation.html",
          description: "Confirm a reservation and provide details to the guest.",
          image: "/img/reservation-confirmation-soft.png",
          type: "templates",
          tags: ["Reservation", "Confirmation", "Travel", "Booking"],
          saved: false
        },
        {
          name: "Reservation Confirmation",
          url: "./templates/Grah Theme/reservation-confirmation.html",
          description: "Confirm a reservation and provide details to the guest.",
          image: "/img/reservation-confirmation-grah.png",
          type: "templates",
          tags: ["Reservation", "Confirmation", "Travel", "Booking"],
          saved: false
        },
        {
          name: "Reservation Cancelled",
          url: "./templates/Simple Theme/reservation-cancelled.html",
          description: "Notify guests that their reservation has been cancelled.",
          image: "/img/reservation-cancelled.png",
          type: "templates",
          tags: ["Reservation", "Cancelled", "Travel", "Booking"],
          saved: false
        },
        {
          name: "Reservation Cancelled",
          url: "./templates/Soft Theme/reservation-cancelled.html",
          description: "Notify guests that their reservation has been cancelled.",
          image: "/img/reservation-cancelled-soft.png",
          type: "templates",
          tags: ["Reservation", "Cancelled", "Travel", "Booking"],
          saved: false
        },
        {
          name: "Reservation Cancelled",
          url: "./templates/Grah Theme/reservation-cancelled.html",
          description: "Notify guests that their reservation has been cancelled.",
          image: "/img/reservation-cancelled-grah.png",
          type: "templates",
          tags: ["Reservation", "Cancelled", "Travel", "Booking"],
          saved: false
        },
        {
          name: "Reservation Reminder",
          url: "./templates/Simple Theme/reservation-reminder.html",
          description: "Send a reminder to guests about their upcoming reservation.",
          image: "/img/reservation-reminder.png",
          type: "templates",
          tags: ["Reservation", "Reminder", "Travel", "Booking"],
          saved: false
        },
        {
          name: "Reservation Reminder",
          url: "./templates/Soft Theme/reservation-reminder.html",
          description: "Send a reminder to guests about their upcoming reservation.",
          image: "/img/reservation-reminder-soft.png",
          type: "templates",
          tags: ["Reservation", "Reminder", "Travel", "Booking"],
          saved: false
        },
        {
          name: "Reservation Reminder",
          url: "./templates/Grah Theme/reservation-reminder.html",
          description: "Send a reminder to guests about their upcoming reservation.",
          image: "/img/reservation-reminder-grah.png",
          type: "templates",
          tags: ["Reservation", "Reminder", "Travel", "Booking"],
          saved: false
        },
        {
          name: "Forgot Password",
          url: "./templates/Simple Theme/forgot-password.html",
          description: "Send instructions for resetting the user's password.",
          image: "/img/forgot-password.png",
          type: "templates",
          tags: ["Password", "Reset", "Security", "Authentication"],
          saved: false
        },
        {
          name: "Forgot Password",
          url: "./templates/Soft Theme/forgot-password.html",
          description: "Send instructions for resetting the user's password.",
          image: "/img/forgot-password-soft.png",
          type: "templates",
          tags: ["Password", "Reset", "Security", "Authentication"],
          saved: false
        },
        {
          name: "Forgot Password",
          url: "./templates/Grah Theme/forgot-password.html",
          description: "Send instructions for resetting the user's password.",
          image: "/img/forgot-password-grah.png",
          type: "templates",
          tags: ["Password", "Reset", "Security", "Authentication"],
          saved: false
        },
        {
          name: "Password Changed",
          url: "./templates/Simple Theme/password-changed.html",
          description: "Notify users that their password has been successfully changed.",
          image: "/img/password-changed.png",
          type: "templates",
          tags: ["Password", "Changed", "Security", "Authentication"],
          saved: false
        },
        {
          name: "Password Changed",
          url: "./templates/Soft Theme/password-changed.html",
          description: "Notify users that their password has been successfully changed.",
          image: "/img/password-changed-soft.png",
          type: "templates",
          tags: ["Password", "Changed", "Security", "Authentication"],
          saved: false
        },
        {
          name: "Password Changed",
          url: "./templates/Grah Theme/password-changed.html",
          description: "Notify users that their password has been successfully changed.",
          image: "/img/password-changed-grah.png",
          type: "templates",
          tags: ["Password", "Changed", "Security", "Authentication"],
          saved: false
        },
        {
          name: "Gift Card Received",
          url: "./templates/Simple Theme/gift-card-received.html",
          description: "Notify recipients that they have received a gift card.",
          image: "/img/gift-card-received.png",
          type: "templates",
          tags: ["Gift Card", "Received", "Notification", "Gift"],
          saved: false
        },
        {
          name: "Gift Card Received",
          url: "./templates/Soft Theme/gift-card-received.html",
          description: "Notify recipients that they have received a gift card.",
          image: "/img/gift-card-received-soft.png",
          type: "templates",
          tags: ["Gift Card", "Received", "Notification", "Gift"],
          saved: false
        },
        {
          name: "Gift Card Received",
          url: "./templates/Grah Theme/gift-card-received.html",
          description: "Notify recipients that they have received a gift card.",
          image: "/img/gift-card-received-grah.png",
          type: "templates",
          tags: ["Gift Card", "Received", "Notification", "Gift"],
          saved: false
        },
        {
          name: "Membership Renewal",
          url: "./templates/Simple Theme/membership-renewal.html",
          description: "Notify members about the renewal of their membership and provide renewal details.",
          image: "/img/membership-renewal.png",
          type: "templates",
          tags: ["Membership", "Renewal", "Subscription", "Notification"],
          saved: false
        },
        {
          name: "Transaction Receipt",
          url: "./templates/Simple Theme/transaction-receipt.html",
          description: "Send a receipt to customers for their recent transaction.",
          image: "/img/transaction-receipt.png",
          type: "templates",
          tags: ["Receipt", "Transaction", "Billing", "Payment"],
          saved: false
        },
        {
          name: "Shared Voucher",
          url: "./templates/Simple Theme/shared-voucher.html",
          description: "Share a voucher or coupon with customers.",
          image: "/img/shared-voucher.png",
          type: "templates",
          tags: ["Voucher", "Coupon", "Promotion", "Discount"],
          saved: false
        },
        {
          name: "Booking Confirmation",
          url: "./templates/Simple Theme/booking-confirmation.html",
          description: "Confirm a booking made through Book4Time and provide booking details.",
          image: "/img/booking-confirmation.png",
          type: "templates",
          tags: ["Booking", "Confirmation", "Reservation", "Booking System"],
          saved: false
        },
        {
          name: "Booking Reminder",
          url: "./templates/Simple Theme/booking-reminder.html",
          description: "Send a reminder to customers about their upcoming booking through Book4Time.",
          image: "/img/booking-reminder.png",
          type: "templates",
          tags: ["Booking", "Reminder", "Reservation", "Booking System"],
          saved: false
        },
        {
          name: "Post-Appointment Follow-up",
          url: "./templates/Simple Theme/post-apt-follow-up.html",
          description: "Follow up with customers after their appointment through Book4Time.",
          image: "/img/post-apt-follow-up.png",
          type: "templates",
          tags: ["Booking", "Follow-up", "Appointment", "Booking System"],
          saved: false
        },
        {
          name: "Marketing Newsletter",
          url: "./templates/Simple Theme/marketing-newsletter.html",
          description: "Send a marketing newsletter to your subscribers with updates and promotions.",
          image: "/img/marketing-newsletter.png",
          type: "templates",
          tags: ["Marketing", "Newsletter", "Promotions", "Updates"],
          saved: false
        },
        {
          name: "Sign-Up Email",
          url: "./templates/Simple Theme/sign-up-email.html",
          description: "Welcome new users and provide information about their sign-up process.",
          image: "/img/sign-up-email.png",
          type: "templates",
          tags: ["Sign-Up", "Welcome", "Registration", "User Onboarding"],
          saved: false
        }
      ];
      
      // Create a navigation menu and append it to the stack
      var $navigationMenu = this._buildNavigationMenu(this.app, templateData, stack);
      
      var self = this
  
      // Create a search input
      var $searchInput = this.dom("<input>")
      .addClass(this.prefix + "-search-input")
      .attr("type", "text")
      .attr("placeholder", "Search templates")
      .on("input", debounce(function () {
        var searchTerm = this.value.trim().toLowerCase();
        var templateByType = self._filterTemplatesByType(self.activeType, templateData)
        var templateByName = self.activeName ? self._filterTemplatesByName(self.activeName, templateByType) : templateByType
        var filteredTemplates = self._filterTemplatesBySearch(searchTerm, templateByName);
        self._renderTemplates(filteredTemplates, stack);
      }, 200)); // Adjust the debounce time as needed
  
      // Create a container for all controls
      var $controlsContainer = this.dom("<div>").addClass(this.prefix + "-controls");
  
      // Create a container for other input elements (if needed) and append it to the controls container
      var $inputsContainer = this.dom("<div>").addClass(this.prefix + "-inputs-container");
      // Add other input elements to $inputsContainer here if needed
  
      // Append the inputs container to the controls container
      $controlsContainer.append($inputsContainer);
  
      // Append the controls container to the header
      var $headerContainer = this.dom("<div>").addClass(this.prefix + "-header-container");
      $headerContainer.append($navigationMenu); // Append the navigation menu to the header
      $headerContainer.append($controlsContainer);
  
      // Create a container for the search input and append it to the inputs container
      var $searchContainer = this.dom("<div>").addClass(this.prefix + "-search-container");
  
      // Create a container for the search icon
      var $searchIconContainer = this.dom("<div>").addClass(this.prefix + "-search-icon-container");
  
      // Append the search icon container and the search input to the search container
      $searchContainer.append($searchIconContainer);
      $searchContainer.append($searchInput);
      $inputsContainer.append($searchContainer);
  
      // Create a custom select element
      var $customSelect = this.dom("<div>").addClass(this.prefix + "-custom-select");
  
      // Create a container for the select icon
      var $selectIconContainer = this.dom("<div>").addClass(this.prefix + "-select-icon-container");
  
      // Append the select icon container and the search input to the custom select
      $customSelect.append($selectIconContainer);
      var isDropdownOpen = false; // Variable to track the dropdown state

      // Create a select button to display the selected option
      var $selectButton = this.dom("<div>")
      .addClass(this.prefix + "-select-button")
      .text("Select Type");

      // Create a custom dropdown for the select element
      var $dropdown = this.dom("<div>").addClass(this.prefix + "-dropdown");
      var $dropdownOptions = this.dom("<div>").addClass(this.prefix + "-dropdown-options");
      $dropdownOptions.hide();

      // Define an array of option values
      var optionValues = ["All", "General", "Pending Invoice", "Welcome"];

      // Create options for the custom dropdown based on optionValues
      optionValues.forEach((optionValue) => {
        var $option = this.dom("<div>")
        .addClass(this.prefix + "-dropdown-option")
        .text(optionValue)
        .on("click", function () {
          self.activeName = optionValue
          // Handle option selection logic here
          var selectedOption = optionValue;
          // Update the select button text with the selected option
          $selectButton.text(selectedOption);
          // Close the dropdown
          $dropdownOptions.hide();
          const filteredTemplate = optionValue === "All"
            ? self._filterTemplatesByType(self.activeType, templateData)
            : self._filterTemplatesByName(optionValue, self._filterTemplatesByType(self.activeType, templateData));
          self._renderTemplates(filteredTemplate, stack)
        });
        $dropdownOptions.append($option);
      });
  
      // Attach a hover event listener to the custom select element
      $dropdown.on("mouseleave", function () {
        // Mouse left the custom select
        if (isDropdownOpen) {
          $selectButton.removeClass("focused")
          // If the dropdown is open, close it
          $dropdownOptions.hide();
          isDropdownOpen = false;
        }
      });

      // Append the dropdown options to the dropdown
      $dropdown.append($dropdownOptions);

      // Append the select button and dropdown to the custom select element
      $customSelect.append($selectButton);
      $customSelect.append($dropdown);

      // Append the custom select element to the inputs container
      $inputsContainer.append($customSelect);
  
      // Handle the display and hiding of the dropdown when clicking the select button
      $selectButton.on("click", function () {
        if (!isDropdownOpen) {
          $selectButton.addClass("focused")
          // If the dropdown is closed, open it
          $dropdownOptions.show();
          isDropdownOpen = true;
        } else {
          $selectButton.removeClass("focused")
          // If the dropdown is open, close it
          $dropdownOptions.hide();
          isDropdownOpen = false;
        }
      });

      // Close the dropdown when clicking outside of it (optional)
      this.app.dom(document).on("click", function (e) {
        if (!$customSelect.nodes[0].contains(e.target)) {
          $dropdownOptions.hide();
        }
      });
  
      var $showSavedButton = this.dom("<button>")
      .addClass(this.prefix + "-btn-saved-templates")
      .on("click", function () {
        // Handle the logic to show saved templates here
        var savedTemplates = templateData.filter((template) => template.saved);
        self._renderTemplates(savedTemplates, stack);
        self.activeItem.removeClass("active");
        self.activeItem = null;
      });
      
      $showSavedButton.append(this.dom("<img>").attr("src", "https://peoplevine.blob.core.windows.net/media/1087/star.png").attr("alt", ""));
  
      $controlsContainer.append($showSavedButton)
      
      // Append the header container to the stack
      stack.$stack.prepend($headerContainer);
    },
  
    _filterTemplatesBySearch: function (searchTerm, templateData) {
      // Filter templates based on the search query
      return templateData.filter((template) => {
        return (
          template.name.toLowerCase().includes(searchTerm) ||
          template.description.toLowerCase().includes(searchTerm)
        );
      });
    },
  
    _filterTemplatesByName: function (name, templateData) {
      // Filter templates based on the option value
      return templateData.filter((template) => {
        return (
          template.name.toLowerCase().includes(name.toLowerCase())
        );
      });
    },
  
    _filterTemplatesByType: function (type, templateData) {
      // Filter templates based on the selected type
      return templateData.filter((template) => template.type === type);
    },

    // private
    _objectToCss: function (obj) {
      var keys = Object.keys(obj);
      var str = "";

      for (var i = 0; i < keys.length; i++) {
        var key = keys[i];
        str += key + ":" + obj[key] + ";";
      }

      return str;
    },
  
    // Function to handle navigation item click
    _handleNavigationClick: function (action, templateData, stack) {
      // Get the templates based on the selected type
      var filteredTemplates = this._filterTemplatesByType(action, templateData);
    
      // Render the filtered templates
      this._renderTemplates(filteredTemplates, stack);
    },
  
    _buildNavigationMenu: function (app, templateData, stack) {
      var $navigationMenu = app.dom("<ul>").addClass(this.prefix + "-template-menu");
    
      var items = [
        { label: "Templates", action: "templates" },
        { label: "Applications", action: "applications" },
        { label: "Blog Posts", action: "blog-posts" },
        { label: "Widgets", action: "widgets" },
        { label: "SMS", action: "sms" },
        { label: "FAQs", action: "faqs" },
      ];
    
      items.forEach((item, idx) => {
        var $menuItem = app.dom("<li>")
        .addClass(this.prefix + "-template-menu-item")
        .text(item.label)
        .on("click", function () {
          // Remove "active" class from the previously active item
          if (this.activeItem) {
            this.activeItem.removeClass("active");
          }
        
          // Add "active" class to the clicked menu item
          $menuItem.addClass("active");
        
          this.activeItem = $menuItem; // Update the active item
        
          // Update the active type
          this.activeType = item.action;
        
          this._handleNavigationClick(item.action, templateData, stack);
        }.bind(this));
      
        if (idx === 0) {
          $menuItem.click()
        }
      
        $navigationMenu.append($menuItem);
      });
    
      return $navigationMenu;
    },
  
    _renderTemplates: function (templates, stack) {
      // Clear the existing templates
      this._clearTemplates(stack);
    
      // Render the filtered templates
      templates.forEach((template) => {
        var self = this;
  
        var $section = this.dom("<div>").addClass(
          this.prefix + "-template-card"
        );
  
        var $sectionImageContainer = this.dom("<div>")
        .addClass(this.prefix + "-template-image-container")
        .on("mouseenter", () => {
          if (template.saved) {
            $savedBtnImage.attr("src", "https://peoplevine.blob.core.windows.net/media/1087/minus.png");
          } else {
            $savedBtn.css("opacity", "1")
          }
        })
        .on("mouseleave", () => {
          if (template.saved) {
            $savedBtnImage.attr("src", "https://peoplevine.blob.core.windows.net/media/1087/saved-star.png");
          } else {
            $savedBtn.css("opacity", "0")
          }
        });
  
        var $sectionImage = this.dom("<img>")
        .addClass(this.prefix + "-template-image")
        .attr("src", template.image);
        
        var $savedBtn = this.dom("<button>")
        .addClass(this.prefix + "-saved-btn")
        .on("click", () => {
          if (template.saved) {
            template.saved = false;
            $savedBtnImage.attr("src", "https://peoplevine.blob.core.windows.net/media/1087/plus.png");
          } else {
            template.saved = true;
            $savedBtnImage.attr("src", "https://peoplevine.blob.core.windows.net/media/1087/saved-star.png");
          }
        })
        
        var $savedBtnImage = this.dom("<img>")
        .addClass(this.prefix + "-saved-btn-image")
        
        if (template.saved) {
          $savedBtnImage.attr("src", "https://peoplevine.blob.core.windows.net/media/1087/saved-star.png")
        } else {
          $savedBtnImage.attr("src", "https://peoplevine.blob.core.windows.net/media/1087/plus.png")
          $savedBtn.css("opacity", "0")
        }
        
        $savedBtn.append($savedBtnImage)
        $sectionImageContainer.append($savedBtn)
  
        var $sectionContent = this.dom("<div>").addClass(
          this.prefix + "-template-content"
        );
  
        var $textContainer = this.dom("<div>").addClass(
          this.prefix + "-template-text-container"
        );
  
        var $sectionTitle = this.dom("<div>")
        .addClass(this.prefix + "-template-title")
        .text(template.name);
  
        var $sectionDescription = this.dom("<div>")
        .addClass(this.prefix + "-template-description")
        .text(template.description);
  
        var $sectionTags = this.dom("<div>")
        .addClass(this.prefix + "-template-tags");
  
        template.tags.forEach((tag) => {
          var $tagLabel = self.dom("<span>")
          .addClass(this.prefix + "-template-tag")
          .text(tag);
          $sectionTags.append($tagLabel);
        });
  
        var $sectionButton = this.dom("<button>")
        .addClass(this.prefix + "-template-button");
  
        $sectionButton.on("click", () => {
          const modal = document.querySelector(".rex-template-modal");
          const continueBtn = modal.querySelector(".rex-modal-continue");
          const blur = document.querySelector(".blur-layout");
          
          modal.classList.remove("closed")
          blur.classList.remove("closed")
          continueBtn.addEventListener("click", () => {
            self.ajax.get({
              url: template.url,
              success: function (data) {
                self.app.editor.setTemplate(data);
                self.app.popup.close()
                self.app.toolbar.imitateClickButton()
              },
            });
          })
        });
  
        $sectionImageContainer.append($sectionImage);
        $textContainer.append($sectionTitle);
        $textContainer.append($sectionDescription);
  
        $sectionContent.append($textContainer);
        $sectionContent.append($sectionTags);
        $sectionContent.append($sectionButton);
  
        $section.append($sectionImageContainer);
        $section.append($sectionContent);
  
        stack.$body.append($section);
      });
    },
  
    // Function to create the modal dynamically
    _createModal: function (self) {
      const $blur = document.querySelector(".blur-layout");
      const $modal = this.dom("<div>").addClass("rex-template-modal closed");
    
      const $imgContainer = this.dom("<div>").addClass("rex-img-container");
      $imgContainer.append(this.dom("<img>").attr("src", "https://peoplevine.blob.core.windows.net/media/1087/modal-img.png").attr("alt", ""));
      $modal.append($imgContainer);
    
      const $h5 = this.dom("<h5>").text("Are you sure?");
      $modal.append($h5)
      const $spacer = this.dom("<span>").addClass("rex-spacer");
      $modal.append($spacer)
      const $p = this.dom("<p>").text("This action will overwrite your email and all your progress will be lost.");
      $modal.append($p)
    
      const $btnsContainer = this.dom("<div>").addClass("rex-btns-container");
      $modal.append($btnsContainer)
      const $cancelBtn = this.dom("<button>").addClass("secondary rex-modal-cancel").text("No, cancel");
      const $continueBtn = this.dom("<button>").addClass("primary rex-modal-continue").text("Yes, continue");
      $btnsContainer.append($cancelBtn);
      $btnsContainer.append($continueBtn);
    
      const $closeContainer = this.dom("<div>").addClass("rex-close-container");
      const $closeBtn = this.dom("<button>").addClass("rex-close-btn");
      $closeBtn.append(this.dom("<img>").attr("src", "https://peoplevine.blob.core.windows.net/media/1087/close.png").attr("alt", ""));
      $closeContainer.append($closeBtn);
      $modal.append($closeContainer)
    
      // Event listeners for modal buttons
      $cancelBtn.on("click", () => {
        $modal.addClass("closed");
        $blur.classList.add("closed")
      });
    
      $continueBtn.on("click", () => {
        $modal.addClass("closed");
        $blur.classList.add("closed")
      });
    
      $closeBtn.on("click", () => {
        $modal.addClass("closed");
        $blur.classList.add("closed")
      });
    
      self.app.$body.append($modal)
    },
  
    _clearTemplates: function (stack) {
      // Clear the existing templates from the UI
      stack.$body.empty();
    }
  });
})(Revolvapp);
