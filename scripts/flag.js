async function getCountryCode() {
   try {
      const response = await fetch("https://ipapi.co/json/");

      const data = await response.json();
      const countryCode = data.country_code; // Corregido aquí
      const countryCallingCode = data.country_calling_code;
      document.getElementById(
         "tel"
      ).placeholder = `(${countryCallingCode}) Télefono`;

      const flagUrl = `https://flagcdn.com/16x12/${countryCode.toLowerCase()}.png`;
      document.getElementById("country-flag").src = flagUrl;
      document.getElementById("country-flag2").src = flagUrl;
      const telInput = document.getElementById("tel");
      const telInput2 = document.getElementById("tel2");
      telInput.value = countryCallingCode;
      telInput2.value = countryCallingCode;
   } catch (error) {
      console.error("Error obteniendo la información de IP:", error);
   }
}

document.addEventListener("DOMContentLoaded", () => {
   getCountryCode();
});
