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
        icon: '<i class="fa-solid fa-book"></i>',
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
          type: "email-templates",
          tags: ["Marketing", "Responsive", "Newsletter", "Promotion"],
          saved: false,
        },
        {
          name: "Pending Invoice",
          url: "./templates/Simple Theme/pending-invoice.html",
          description: "A simple invoice template.",
          image: "/img/invoice.png",
          type: "email-templates",
          tags: ["Billing", "Professional", "Invoice", "Payment"],
          saved: false,
        },
        {
          name: "Welcome",
          url: "./templates/Simple Theme/welcome.html",
          description: "Welcome members to their new membership.",
          image: "/img/welcome.png",
          type: "sms",
          tags: ["Membership", "Warm", "Onboarding", "Greeting"],
          saved: false,
        },
        // Add more template objects here with additional tags
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
        var templateByType = self.filterTemplatesByType(self.activeType, templateData)
        var filteredTemplates = self._filterTemplatesBySearch(searchTerm, templateByType);
        self.renderTemplates(filteredTemplates, stack);
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
      var optionValues = ["Email Templates", "Applications", "Blog Posts", "Widgets", "SMS", "FAQs"];

      // Create options for the custom dropdown based on optionValues
      optionValues.forEach((optionValue) => {
        var $option = this.dom("<div>")
        .addClass(this.prefix + "-dropdown-option")
        .text(optionValue)
        .on("click", function () {
          // Handle option selection logic here
          var selectedOption = optionValue;
          // Update the select button text with the selected option
          $selectButton.text(selectedOption);
          // Close the dropdown
          $dropdownOptions.hide();
        });
        $dropdownOptions.append($option);
      });
  
      // Attach a hover event listener to the custom select element
      $dropdown.on("mouseleave", function () {
        // Mouse left the custom select
        if (isDropdownOpen) {
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
          // If the dropdown is closed, open it
          $dropdownOptions.show();
          isDropdownOpen = true;
        } else {
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
  
    _buildNavigationMenu: function (app, templateData, stack) {
      var $navigationMenu = app.dom("<ul>").addClass(this.prefix + "-template-menu");
  
      var items = [
        { label: "Email Templates", action: "email-templates" },
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
  
    // Function to handle navigation item click
    _handleNavigationClick: function (action, templateData, stack) {
      // Get the templates based on the selected type
      var filteredTemplates = this.filterTemplatesByType(action, templateData);
    
      // Render the filtered templates
      this.renderTemplates(filteredTemplates, stack);
    },
  
    filterTemplatesByType: function (type, templateData) {
      // Filter templates based on the selected type
      return templateData.filter((template) => template.type === type);
    },
  
    renderTemplates: function (templates, stack) {
      // Clear the existing templates
      this.clearTemplates(stack);
    
      // Render the filtered templates
      templates.forEach((template) => {
        var self = this;
  
        var $section = this.dom("<div>").addClass(
          this.prefix + "-template-card"
        );
  
        var $sectionImageContainer = this.dom("<div>").addClass(
          this.prefix + "-template-image-container"
        );
  
        var $sectionImage = this.dom("<img>")
        .addClass(this.prefix + "-template-image")
        .attr("src", template.image);
  
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
        .addClass(this.prefix + "-template-button")
  
        $sectionButton.on("click", () => {
          // Create and display the modal dynamically
          const $modal = this._createModal(template, self);
          self.app.$body.append($modal);
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
    _createModal: function (template, self) {
      const $modal = this.dom("<div>").addClass("rex-template-modal");
    
      const $imgContainer = this.dom("<div>").addClass("rex-img-container");
      $imgContainer.append(this.dom("<img>").attr("src", "img/modal-img.png").attr("alt", ""));
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
      $closeBtn.append(this.dom("<img>").attr("src", "img/close-btn-img.svg").attr("alt", ""));
      $closeContainer.append($closeBtn);
      $modal.append($closeContainer)
    
      // Event listeners for modal buttons
      $cancelBtn.on("click", () => {
        $modal.remove(); // Remove the modal from the DOM
      });
    
      $continueBtn.on("click", () => {
        // Perform the same action as the section button
        self.ajax.get({
          url: template.url,
          success: function (data) {
            self.app.editor.setTemplate(data);
            self.app.popup.close();
          },
        });
      
        $modal.remove(); // Remove the modal from the DOM
      });
    
      $closeBtn.on("click", () => {
        $modal.remove(); // Remove the modal from the DOM
      });
    
      return $modal;
    },
  
    clearTemplates: function (stack) {
      // Clear the existing templates from the UI
      stack.$body.empty();
    }
  });
})(Revolvapp);
