import { CommonModel } from "../../../configurations/commons/common-model";

export interface CalculatorResult extends CommonModel {
    baseline: number;
    baseline_per_area: number;
    baseline_per_bag: number;
    gee_scenery_1: number;
    gee_scenery_2: number;
    gee_scenery_3: number;
    gee_scenery_4: number;
    gee_scenery_1_per_area: number;
    gee_scenery_2_per_area: number;
    gee_scenery_3_per_area: number;
    gee_scenery_4_per_area: number;
    gee_scenery_1_per_bag: number;
    gee_scenery_2_per_bag: number;
    gee_scenery_3_per_bag: number;
    gee_scenery_4_per_bag: number;
    gee_emission: number;
    gee_emission_per_area: number;
    gee_emission_per_bag: number;
    baseline_removal: number;
    scenery_1_removal: number;
    scenery_2_removal: number;
    scenery_3_removal: number;
    scenery_4_removal: number;
    baseline_c_stock: number;
    emission_n_synthetic_fertilizer: number;
    emission_urea: number;
    emission_n_organic_fertilizer: number;
    emission_leaching: number;
    emission_volatilization: number;
    emission_liming_and_plastering: number;
    emission_waste_decomposition: number;
    emission_organic_soils_handling: number;
    fuel_consumption: number;
    electricity_purchase: number;
    production_transport: number;
    mechanized_and_stationary_operation: number;
    non_mechanized_operation: number;
    result: any;
}
