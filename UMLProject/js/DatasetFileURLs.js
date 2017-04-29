"use strict";
let instance = null;
class DatasetFileURLs {
    constructor() {
        if (!instance) {
              instance = this;
              this.keyValueArray = [
                  ['senior_service_meal' , 'datasets/senior_service_meal.csv'],
                  ['education_progress' , 'datasets/education_progress.csv'],
                  ['senior_centers' , 'datasets/senior_centers.csv'],
                  ['public_health' , 'datasets/public_health.csv'],
                  ['business_funds' , 'datasets/business_funds.csv']
              ];
              this.datasetMap = new Map(this.keyValueArray);
        }
    }

    getFileURL(dataset_key)
    {
        var dataset_URL = this.datasetMap.get(dataset_key)
        return (dataset_URL);
    }
}
