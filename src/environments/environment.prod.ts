// generar api
const apiEvamed = 'http://10.2.102.118:8000/api-projects';
// apis
const projects = '/projects/';
const transports = '/transports/';
const uses = '/uses/';
const countries = '/countries/';
const typeProject = '/type-project/';
const usefulLife = '/useful-life/';
const housingScheme = '/housing-scheme/';
const materials = '/materials/';
const sourceInformation = '/source-information/';
const bulkUnits = '/bulk-units/';
const energyUnits = '/energy-units/';
const volumeUnits = '/volume-units/';
const schemeProject = '/material-scheme-project/';
const schemeProjectOriginal = '/material-scheme-project-original/';
const constructionStage = '/constructive-system-element/';
const annualConsumptionRequired = '/annual-consumption-required/';
const typeEnergy = '/type-energy/';
const electricityConsumptionData = '/electricity-consumption-data/';
const treatmentOfGenerateWasted = '/treatment-of-generate-wasted/';
const electricityConsumptionDeconstructiveProcess =
  '/electricity-consumption-deconstructive-process/';
const materialSchemeData = '/material-scheme-data/';
const potentialTypes = '/potential-types/';
const standards = '/standards/';
const sourceInformationData = '/source-information-data/';
const typeEnergyData = '/type-energy-data/';
const users = '/users-platform/';
const states = '/states/';
const cities = '/cities/';
const localDistances = '/local-distances/';
const externalDistance = '/external-distance/';
const sections = '/sections/';
const units = '/units/';
const potentialTranposrt = '/potential-transport/';
const conversion = '/conversions/';
const dbMaterial = '/database-material/';

export const environment = {
  production: true,
  api_projects: `${apiEvamed}${projects}`,
  api_transports: `${apiEvamed}${transports}`,
  api_uses: `${apiEvamed}${uses}`,
  api_countries: `${apiEvamed}${countries}`,
  api_type_project: `${apiEvamed}${typeProject}`,
  api_useful_life: `${apiEvamed}${usefulLife}`,
  api_housing_scheme: `${apiEvamed}${housingScheme}`,
  api_materials: `${apiEvamed}${materials}`,
  api_source_information: `${apiEvamed}${sourceInformation}`,
  api_bulk_units: `${apiEvamed}${bulkUnits}`,
  api_energy_units: `${apiEvamed}${energyUnits}`,
  api_volume_units: `${apiEvamed}${volumeUnits}`,
  api_scheme_project: `${apiEvamed}${schemeProject}`,
  api_scheme_project_original: `${apiEvamed}${schemeProjectOriginal}`,
  api_construction_stage: `${apiEvamed}${constructionStage}`,
  api_annual_consumption_required: `${apiEvamed}${annualConsumptionRequired}`,
  api_type_energy: `${apiEvamed}${typeEnergy}`,
  api_electricity_consumption_data: `${apiEvamed}${electricityConsumptionData}`,
  api_treatment_of_generate_wasted: `${apiEvamed}${treatmentOfGenerateWasted}`,
  api_electricity_consumption_deconstructive_process: `${apiEvamed}${electricityConsumptionDeconstructiveProcess}`,
  api_material_scheme_data: `${apiEvamed}${materialSchemeData}`,
  api_potetnial_types: `${apiEvamed}${potentialTypes}`,
  api_standards: `${apiEvamed}${standards}`,
  api_source_information_data: `${apiEvamed}${sourceInformationData}`,
  api_type_energy_data: `${apiEvamed}${typeEnergyData}`,
  api_users: `${apiEvamed}${users}`,
  api_states: `${apiEvamed}${states}`,
  api_cities: `${apiEvamed}${cities}`,
  api_local_distances: `${apiEvamed}${localDistances}`,
  api_exterternal_distances: `${apiEvamed}${externalDistance}`,
  api_sections: `${apiEvamed}${sections}`,
  api_units: `${apiEvamed}${units}`,
  api_potential_transport: `${apiEvamed}${potentialTranposrt}`,
  api_conversions: `${apiEvamed}${conversion}`,
  api_db_material: `${apiEvamed}${dbMaterial}`,
  firebaseConfig: {
    apiKey: "AIzaSyC3t_NpPrGwj7i26j5cfIQCt1aaq3f9k-I",
    authDomain: "evamed-ac3f8.firebaseapp.com",
    projectId: "evamed-ac3f8",
    storageBucket: "evamed-ac3f8.firebasestorage.app",
    messagingSenderId: "511289930174",
    appId: "1:511289930174:web:25abc474c59e76ae3e89ef",
    measurementId: "G-DXRYB3RM3H",
  },
};
