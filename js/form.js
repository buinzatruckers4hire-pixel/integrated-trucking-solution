(function () {
  var form = document.getElementById("its-apply-form");
  var errorEl = document.getElementById("its-form-error");
  var submitBtn = document.getElementById("its-submit");
  if (!form) return;

  var sending = false;

  function field(name) {
    return form.elements[name] || form.querySelector("[name='" + name + "']");
  }

  function value(name) {
    var el = field(name);
    return el ? String(el.value || "").trim() : "";
  }

  function showError(msg) {
    if (!errorEl) return;
    errorEl.textContent = msg;
    errorEl.classList.add("show");
  }

  function clearErrors() {
    if (errorEl) errorEl.classList.remove("show");
    form.querySelectorAll(".has-error").forEach(function (el) {
      el.classList.remove("has-error");
    });
  }

  function param(name) {
    return new URLSearchParams(window.location.search).get(name) || "";
  }

  function ensureHidden(name, val) {
    var el = field(name);
    if (!el) {
      el = document.createElement("input");
      el.type = "hidden";
      el.name = name;
      form.appendChild(el);
    }
    el.value = val;
  }

  // Make thank-you redirect absolute so FormSubmit can send drivers back here.
  try {
    var next = field("_next");
    if (next) {
      next.value = new URL("thank-you.html", window.location.href).href;
    }
  } catch (e) { /* ignore */ }

  ensureHidden("cdlStatus", "Class A");
  ensureHidden("jobTitle", "CDL-A Pre-Approval");
  ensureHidden("companyName", "Integrated Trucking Solution");
  ensureHidden("utmSource", param("utm_source") || "funnel");
  ensureHidden("utmMedium", param("utm_medium"));
  ensureHidden("utmCampaign", param("utm_campaign"));
  ensureHidden("utmContent", param("utm_content"));
  ensureHidden("utmTerm", param("utm_term"));

  form.addEventListener("submit", function (e) {
    if (sending) {
      e.preventDefault();
      return;
    }

    clearErrors();

    var missing = [];
    form.querySelectorAll("[required]").forEach(function (el) {
      if (!String(el.value || "").trim()) {
        var wrap = el.closest(".its-field");
        if (wrap) wrap.classList.add("has-error");
        missing.push(el);
      }
    });

    var honeypot = value("its_hp") || value("company_website");
    if (missing.length) {
      e.preventDefault();
      if (honeypot) return;
      showError("Please fill in every field.");
      missing[0].focus();
      return;
    }

    var email = value("email");
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      e.preventDefault();
      var emailField = field("email");
      if (emailField && emailField.closest(".its-field")) {
        emailField.closest(".its-field").classList.add("has-error");
      }
      showError("Enter a valid email address.");
      if (emailField) emailField.focus();
      return;
    }

    var zip = value("zipCode") || value("postal_code");
    if (!/^\d{5}(-\d{4})?$/.test(zip)) {
      e.preventDefault();
      var zipField = field("zipCode") || field("postal_code");
      if (zipField && zipField.closest(".its-field")) {
        zipField.closest(".its-field").classList.add("has-error");
      }
      showError("Enter a 5-digit ZIP code.");
      if (zipField) zipField.focus();
      return;
    }

    // Password managers often autofill "website". Never block a completed form.
    var hp = field("its_hp") || field("company_website");
    if (hp) hp.value = "";

    sending = true;
    if (submitBtn) submitBtn.textContent = "Submitting...";
  });
})();
