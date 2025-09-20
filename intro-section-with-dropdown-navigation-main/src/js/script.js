const btnFeatures = document.querySelector(".btn-arrow:nth-of-type(1)");
const btnCompany = document.querySelector(".btn-arrow:nth-of-type(2)");
const featureOptions = document.querySelector(".feature-options");
const companyOptions = document.querySelector(".company-options");

btnFeatures.addEventListener("click", () => {
  featureOptions.classList.toggle("show");
});

btnCompany.addEventListener("click", () => {
  companyOptions.classList.toggle("show");
});

featureOptions.addEventListener("mouseleave", () => {
  featureOptions.classList.remove("show");
});

companyOptions.addEventListener("mouseleave", () => {
  companyOptions.classList.remove("show");
});
